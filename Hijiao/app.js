/**
 * 生成图片二维码
 **/
var app = require('express')();
var qrcode = require('qr-image');

(function init()
{
    app.get('/', function (req, res)
    {
        var text = 'hello world';
        try
        {
            var img = qrcode.image(text, {size: 10});
            res.writeHead(200, {'Content-Type': 'image/png'});
            img.pipe(res);
        } catch (e)
        {
            res.writeHead(414, {'Content-Type': 'text/html'});
            res.end('<h1>414 Request-URI Too Large</h1>');
        }
    });

    app.listen(9000,function ()
    {
        console.log("----服务器启动成功---->");

    })
})();