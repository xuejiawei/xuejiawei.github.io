# 会期直充 #

## 功能 ##

会期直充

## 限制 ##

需要保证购买人手机号的有效性，避免出现空号等情况。

## 接口请求调用 ##

```
HTTP请求方式：POST
https://open-platform-test.dushu.io/vip/order/create?appid=fd0cac7cd6726d1111&sign=82536892cee554f566a4c45e61b521bdb43fc996&access_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzY29wZSI6WyJBTEwiXSwiZXhwIjoxNTSFWDc2OTQ0LCJqdGkiOiI4NzYxNmMwNC1mMWI3LTRhNWEtYjY1OS05NGIwNWUyZTMwNzQiLCJjbGllbnRfaWQiOiJmZDBjYWM3Y2Q2NzI2ZDIxMWYifQ.K3zwm1NLbYe8KK4JyvueFrCcPnGTrXX1S9PelnOWLCk
```

## 参数说明 ##

| 参数      | 类型    | 是否必须 | 说明                                                         | 值示例                                    |
| --------- | ------- | -------- | ------------------------------------------------------------ | ----------------------------------------- |
| mobile    | String  | 是       | 购买人手机号，注意：1.如果该手机号已经注册樊登读书账号，则会直充到该账户上；2.如果该手机号未注册樊登读书账号，则我方系统后台会默认给该手机号注册一个新的樊登读书账号，并发送注册成功短信通知； |                                           |
| areaCode  | String  | 否       | 手机区号                                                     | 默认+86                                   |
| productNo | Integer | 是       | 商品编号，通过调用获取会期商品列表获取                       |                                           |
| buyCount  | Integer | 否       | 购买数量，默认为1                                            |                                           |
| payType   | String  | 是       | 合作方支付方式                                               | 1-IAP、2-支付宝、3-微信、其他需要单独开通 |
| fee       | decimal | 是       | 协议价格（需与协议结算价格保持一致，否则下单会失败）         | 单位:元                                   |
| tradeNo   | String  | 是       | 合作方订单号                                                 |                                           |

## 调用示例 ##

```
{
    "mobile": "15888888888",
    "areaCode":"+86",
    "productNo": 200000403,
    "fee":188.00,
    "tradeNo": 1234522289,
    "payType": "test"
}
```

## 示例成功返回 ##

```
{
    "data": {
        "orderNumber": 17172796992589230,
        "tradeNo": "1234522289"
    },
    "msg": "操作成功！",
    "status": "0000",
    "systemMsg": "服务调用成功！",
    "systemTime": 1566386498626
}
```

## 返回成功参数说明 ##

| 参数        | 类型   | 说明           |
| ----------- | ------ | -------------- |
| orderNumber | Long   | 订单编号       |
| tradeNo     | String | 合作方交易单号 |

## 状态码 ##

| 状态码 | 描述           |
| ------ | -------------- |
| 0000   | 操作成功       |
| 2001   | 会期商品不存在 |
| 2002   | 价格校验失败   |
| 2003   | 该手机号已锁定 |
| 2004   | 订单号重复     |
| 2005   | 直充失败       | 

## 示例失败返回 ##

```
{
    "msg": "重复提交",
    "status": "9999",
    "suceess": false,
    "systemMsg": "服务调用失败！",
    "systemTime": 1566386776919
}
```

## 返回失败参数说明 ##

| 参数   | 类型   | 说明     |
| ------ | ------ | -------- |
| msg    | String | 失败原因 |
| status | String | 9999     |
