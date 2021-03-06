const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports=function(app){
    app.use(
   createProxyMiddleware("/api/auth/login",
    {
        target:"http://3c824c19b94f.ngrok.io/",
        changeOrigin:true
        })
    );
  
};