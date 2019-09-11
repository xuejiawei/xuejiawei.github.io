# 获取会期商品列表 #

## 功能 ##

获取可购买的会期商品列表（所需购买的会期，需线下与商务人员确认）

## 接口请求调用 ##

```
HTTP请求方式：POST
https://open-platform-test.dushu.io/vip/product/list?appid=fd0cac7cd6726d1111&sign=82536892cee554f566a4c45e61b573bdb43dw496&access_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzY29wZSI6WyJBTEwiXSwiZXhwIjoxNTY2NDc2OTQ0LCJqdGkiOiI4NzYxNmMwNC1mMWI3LTRhNWEtYjY1OS05NGIwNWUyZTMwNzQiLCJjbGllbnRfaWfiOiJmZDBjYWM3Y2Q2NzI2ZDIxMWYifQ.K3zwm1NLbYe8KK4JyvueFrCcPnGTrXX1S9PelnOWLCk
```

## 参数说明 ##

| 参数 | 类型 | 是否必须 | 说明 |
| ---- | ---- | -------- | ---- |
| 无   | 无   | 无       | 无   |

## 调用示例 ##

```
无
```

## 示例返回 ##

```
{
    "data": [
        {
            "price": 188,
            "productName": "会期商品-6个月",
            "productNo": 200000147,
            "remark": "会期直充-6个月",
            "vipUnit": 2,
            "vipValue": 6
        },
        {
            "price": 99,
            "productName": "会期商品-3个月",
            "productNo": 200000146,
            "remark": "会期直充-3个月",
            "vipUnit": 2,
            "vipValue": 3
        },
        {
            "price": 365,
            "productName": "会期商品-1年",
            "productNo": 200000148,
            "remark": "会期直充-1年",
            "vipUnit": 1,
            "vipValue": 1
        }
    ],
    "msg": "操作成功！",
    "status": "0000",
    "systemMsg": "服务调用成功！",
    "systemTime": 1566386261807
}
```

## 返回参数说明 ##

| 参数             | 类型      | 说明                         |
| ---------------- | --------- | ---------------------------- |
| data             | JSONArray |                              |
| data.productNo   | Integer   | 会期商品编号                 |
| data.productName | String    | 商品名称                     |
| data.price       | decimal   | 价格(单位:元)                |
| data.vipValue    | Integer   | 会期值                       |
| data.vipUnit     | Integer   | 会期单位(1:年；2：月；3：日) |
| data.remark      | String    | 商品描述                     |
