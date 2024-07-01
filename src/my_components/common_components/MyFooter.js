import React, {useState} from "react";

function MyFooter() {
  // 실제 화면에 보일 페이지 구현
  return (
    <div className="footer" 
          style={{ 
              display: 'flex',
              justifyContent: 'center', // 가로에서 가운데 정렬
              backgroundColor: 'white'  // footer bar 배경색
          }}
    >
                {/**padding: top right bottom left */}
        <p style={{color: '#94C6E2', display: 'inline-block', verticalAlign: 'middle'}}>copyright BTS-AI</p>
    </div>
  );
};

// 함수형 컴포넌트 내보내기 (다른 컴포넌트에서 접근 가능하도록)
export default MyFooter;