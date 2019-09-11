# 获取Access Token #
access_token是樊登读书开放平台全局唯一调用接口凭证，开发者调用开放平台接口时都需使用access_token。access_token的有效期为2小时，过期需要重新获取，access_token的存储保存至少需要预留512字符的空间，该接口1天内调用次数有限，请开发者自行保存。

开放平台的API调用所需的access_token的使用及生成方式说明：

* 建议开发者使用中控服务器进行access_token的刷新，其他业务所使用的access_token均来自此中控服务器，不要各自刷新，造成冲突，从而影响业务。
* 目前access_token的有效期通过返回的expiresIn来体现，该值目前在7200秒之内。中控服务器可以通过该值进行access_token的刷新，在刷新过程中，中控服务器可以继续对外输出老的access_token，樊登读书开放平台将保证，在5分钟之内，刷新的新老access_token都是可用的，从而保证业务的平滑过渡。
* access_token的有效时间等返回值在未来可能会有所调整

第三方合作商可以通过appId和appSecret调用接口来获取access_token。appId和appSecret目前可以线下合作渠道获取，且保证该开发者账号无异常情况。此外，在调用接口前，请将服务器IP加入白名单，否则将无法调用成功，目前该流程走线下方式。

## 接口请求调用

```
HTTP请求方式：POST
https://open-platform-test.dushu.io/oauth/token?grant_type=client_credentials&client_id=fd01111cd6726d2222&client_secret=ca70d1f641c7fc2b3b9fd1fb3287e646b83014a0
```

## 参数说明

| 参数          | 是否必须 | 说明                                 |
| ------------- | -------- | ------------------------------------ |
| grant_type    | 是       | 获取access_token填client_credentials |
| client_id     | 是       | 第三方用户唯一凭证，即appId          |
| client_secret | 是       | 第三方用户唯一凭证秘钥，即appSecret  |

## 返回说明

正常返回结果为

```
{
    "additionalInformation": {
        "jti": "a2d1809e-d165-45db-a340-38b89246fec0"
    },
    "expiration": 1566788088019,
    "expired": false,
    "expiresIn": 7199,
    "scope": [
        "ALL"
    ],
    "tokenType": "bearer",
    "value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzY29wZSI6WyJBTEwiXSwiZXhwIjoxNTY2Nzg4MDg4LCJqdGkiOiJhMmQxODA5ZS1kMTY1LTQ1ZGItYTM0MC0zOGI4OTI0NmZlYzAiLCJjbGllbnRfaWQiOiJmZDBjYWM3Y2Q2NzI2ZDIxMWYifQ.TXFGICA_8QUqaoKqVTlhLzO0EXSBIBnjHJ53dkShn4A"
}
```

## 参数说明

| 参数      | 说明                     |
| --------- | ------------------------ |
| value     | 获取到的凭证             |
| expiresIn | 凭证有效时间（单位：秒） |

错误时，返回JSON结果

```
{
    "error": "invalid_client",
    "error_description": "Bad client credentials"
}
```

该错误表明错误为无效的凭证，请检查请求的appId或appSecret的值是否正确。

## 返回说明

| 参数              | 说明     |
| ----------------- | -------- |
| error             | 错误类型 |
| error_description | 错误描述 |