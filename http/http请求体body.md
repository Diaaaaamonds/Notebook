## http的请求体body的几种数据格式

### http结构

三部分：状态行、请求头、消息主体

post提交的数据必须放在body中，不能拼接在url中

### body常见的四种数据格式

1. application/x-www-form-urlencoded

    浏览器的原生form表单，如果不设置 enctype 属性，则默认以 application/x-www-form-urlencoded 方式传输数据。
    ```
    POST http://www.example.com HTTP/1.1
    Content-Type: application/x-www-form-urlencoded;charset=utf-8


    title=test&sub%5B%5D=1&sub%5B%5D=2&sub%5B%5D=3（url编码）
    ```

2. multipart/form-data

    使用表单上传文件时，必须让 表单的 enctype 等于 multipart/form-data。

    支持传输多种文件格式

    ```
    POST http://www.example.com HTTP/1.1
    Content-Type:multipart/form-data; boundary=----WebKitFormBoundaryrGKCBY7qhFd3TrwA

    title
    ------WebKitFormBoundaryrGKCBY7qhFd3TrwA
    Content-Disposition: form-data; name="file"; filename="chrome.png"
    Content-Type: image/png
    ```

3. application/json
   
    JSON字符串，支持结构化的数据

    ```
    POST http://www.example.com HTTP/1.1 
    Content-Type: application/json;charset=utf-8
    {"title":"test","sub":[1,2,3]}
    ```

4. text/xml

    一般用于传输xml格式的数据，常用来作为配置文件

    ```
    POST http://www.example.com HTTP/1.1 
    Content-Type: text/xml
    <?xml version="1.0"?>
    <methodCall>
        <methodName>examples.getStateName</methodName>
        <params>
            <param>
                <value><i4>41</i4></value>
            </param>
        </params>
    </methodCall>
    ```