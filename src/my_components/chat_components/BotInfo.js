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
             {/** 경로: source_v0.1/public/inae_images */}
             <img src="./inae_images/bot.png" style={{width: '150px'}}/>
             <h4>집사봇</h4>

             <div className='botDetail'
                  style={{
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
                <p><strong>캐릭터 정보: </strong>옷 스타일을 추천해주는 비서봇</p>
                <p><strong>말투: </strong>친절하고 예의바름</p>
                <p><strong>성격: </strong>딱딱해보일 수 있지만 가끔 유머를 섞어 분위기 전환을 잘함</p>
                <p><strong>MBTI: </strong>ENFJ, 외향적인 성격을 갖고 있지만 비서 역할을 충실히 해냄</p>
             </div>
        </div>
    );
};

export default BotInfoComponent