// 뒤에서 const 명령어를 이용해 함수 생성시 필요한 {useState}도 불러와준다.
import React, {useState} from "react";

function BotInfoComponent() {


    // Visualization: 화면에 보여줄 내용, Component
    return (
        <div style={{
            display: 'flex', 
            flexDirection: 'column',    // stack 구조로 쌓기
            alignItems: 'center',       // 가로에서 가운데 정렬
            padding: '0px 10px 0px 0px' // 전체 컴포넌트를 우측에서 10px만큼 띄기
        }}>
            {/**
             * 1. 1xn형태로 쌓기
             * 2. 봇 이미지
             * 3. 봇 명칭
             * 4. 봇 상세 내용
             */}
             {/** 봇 사진, 경로: source_v0.1/public/inae_images */}
             <img src="./inae_images/bot.png" style={{width: '150px'}}/>

             {/** 봇 이름 */}
             <h4 style={{fontFamily: 'BMDoHyeon'}}>유행이</h4>
            
            {/** 봇 상세 정보 */}
             <div className='botDetail'
                  style={{
                    fontFamily: 'BMJua',
                    borderRadius: '5px',
                    backgroundColor: '#F7F8FA', // 배경색
                    color: '#63625D',   // 글자색 
                    padding: '10px',
                    border: 'solid',
                    borderRadius: '10px', //둥글게
                    borderWidth: '1.5px',
                    borderColor: '#E8E8DF' // 테두리색
                  }}
             >
                <p>
                    패션에 대해 궁금한 거 있어?<br/>나, 유행이가 해결해줄게. 질문해봐!
                </p>
             </div>
        </div>
    );
};

export default BotInfoComponent