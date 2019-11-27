const proxy = require('http-proxy-middleware');
module.exports = (app)=>{
    app.use('/cm',proxy({
        target:'http://localhost:3000',
        changeOrigin:true,
        pathRewrite:{
            '^/cm':''
        }
    }))
}