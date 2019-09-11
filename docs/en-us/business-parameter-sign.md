# 业务接口调用签名 #
请求body需要进行签名才能通过接口检验，appid，access_token，sign字段不进行签名。

将请求body拼接appid，appsecret作为盐值进行SHA1加密，得到相应的sign值，放在请求URL中作为参数传递。

## 加密示例 ##

请求内容

```
{
    "mobile": "15888888888",
    "areaCode":"+86",
    "productNo": 200000403,
    "fee":188.00,
    "tradeNo": 123446789,
    "payType": "test"
}
```

开发者账号

```
appid:fd0cac7cd6726d211f
appsecret:ca70d1f641c7fc2b3b9fd1fbaa87e646b83014a0
```

得到的加密字符串sign

```
0d18f45ae06ca4185ea4320a22bfa5353b4c8c91
```