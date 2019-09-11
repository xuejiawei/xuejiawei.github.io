# 订单详情 #

## 功能 #

通过合作方订单号获取对应订单详情

## 接口请求调用 ##

```
HTTP请求方式：POST
https://open-platform-test.dushu.io/vip/order/detail?appid=fd0cac7cd6726d1111&sign=82536892cee554f566a4c45e61b573sad43fc996&access_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzY29wZSI6WyJBTEwiXSwiZXhwIjoxNTY2fDc2OTQ0LCJqdGkiOiI4NzYxNmMwNC1mMWI3LTRhNWEtYjY1OS05NGIwNWUyZTMwNzQiLCJjbGllbnRfaWQiOiJmZDBjYWM3Y2Q2NzI2ZDIxMWYifQ.K3zwm1NLbYe8KK4JyvueFrCcPnGTrXX1S9PelnOWLCk
```

## 参数说明 ##

| 参数    | 类型   | 是否必须 | 说明         |
| ------- | ------ | -------- | ------------ |
| tradeNo | String | 是       | 合作方订单号 |

## 调用示例 ##

```
{
	"tradeNo":"222234522289"
}
```

## 示例返回 ##

```
{
    "data": {
        "createTime": 1566386808000,
        "orderNumber": 1717280009200691422,
        "orderStatus": "COMPLETE",
        "payType": "test",
        "productId": 200000148,
        "productName": "会期商品-1年",
        "totalFee": 365,
        "tradeNo": "222234522289",
        "updateTime": 1566386808000,
        "userId": 200691422
    },
    "msg": "操作成功！",
    "status": "0000",
    "systemMsg": "服务调用成功！",
    "systemTime": 1566387246054
}
```

## 返回参数说明 ##

| 参数             | 类型       | 说明                                  |
| ---------------- | ---------- | ------------------------------------- |
| data             | JSONObject |                                       |
| data.tradeNo     | String     | 合作方订单号                          |
| data.orderNumber | Long       | 樊登读书订单号                        |
| data.createTime  | Long       | 创建时间(时间戳)                      |
| data.updateTime  | Long       | 更新时间                              |
| data.orderStatus | String     | 订单状态(NEW:新订单；COMPLETE:已完成) |
| data.userId      | Integer    | 会员编号                              |
| data.totalFee    | decimal    | 订单总价(元)                          |
| data.productId   | Integer    | 商品编号                              |
| data.productName | String     | 商品名称                              |
| data.payType     | String     | 支付方式                              |

