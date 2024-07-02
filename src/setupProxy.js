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

  // 채팅 페이지에서 POST(/ai/bts_llm) 요청을 보냄
  // 아래 라우팅을 추가해줘야 동작함
  // /bts_llm 요청에 대한 처리 추가
  app.use(
    '/ai',
    createProxyMiddleware({
      target: 'http://127.0.0.1:5000',
      changeOrigin: true,
      pathRewrite: {
        '^/ai': '', // 실제 서버에서 이 경로를 제거하여 처리합니다.
      },
    })
  );
};