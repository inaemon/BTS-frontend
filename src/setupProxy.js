const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api', // 여기서 '/api'는 프록시 경로로 사용할 경로입니다.
    createProxyMiddleware({
      target: 'https://jgf89ryt5z.apigw.ntruss.com', // 여기에 실제 API 서버 주소를 입력합니다.
      changeOrigin: true,
      pathRewrite: {
        '^/api': '', // 경로를 재작성하여 프록시 서버가 올바른 경로로 요청을 보냅니다.
      },
    })
  );
};
