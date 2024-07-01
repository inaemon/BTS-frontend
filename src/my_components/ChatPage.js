import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';

//ChatPage.js 위치를 기준으로 파일 경로 지정
import BotInfo from "./chat_components/BotInfo";
import Chatting from "./chat_components/Chatting";
import InputField from "./chat_components/InputField";

function ChatbotPage() {
    //변수(1)
    const location = useLocation();
    //변수(2)
    const { userData } = location.state || {}; // 전달된 데이터를 받음
    //변수(3)
    const user = userData?.users?.[0]; // userData에서 첫 번째 사용자 정보를 가져옴

    //변수(4)
    const [responseText, setResponseText] = useState('');

    //변수(5) CSS
    const chattingStyle = {
        width: '70%',
        height: '55vh',             // 적당한 높이 설정
        overflowY: 'auto',          // 세로 스크롤만 활성화
        padding: '10px',
        border: '5px solid #ccc',   // 경계선
        borderRadius: '10px',       // 모서리 둥글게
        borderColor: '#E8E8DF',     // 테두리색
        backgroundColor: '#F0F7FB'  // 배경색
    };
    //변수(6) CSS
    const botInfoStyle = {
        width: '30%'
    };
    //변수(7) CSS
    const userStyle = {
        fontFamily: 'BMDoHyeon',
        marginTop: '10px', 
        marginBottom: '10px', 
        padding: '15px', 
        color: '#4A4A47',
        backgroundColor: '#f0f0f0', 
        borderRadius: '10px' 
    };
    //변수(8) CSS
    const popupStyle = {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', /* 반투명 배경 */
        zIndex: 1000 /* 다른 요소들보다 위에 표시되도록 높은 z-index 설정 */
    };
    
    
    // 챗봇 채팅 페이지 한정 로딩 소요시 로딩 이미지 띄우기 위한 변수, 함수
    //변수(1) 로딩 여부
    const [loading, setLoading] = useState(true);

    //함수(1) 로딩 여부 업데이트
    useEffect(() => {
        // 데이터 가져오기 시뮬레이션 (예: API 호출)
        setTimeout(() => {
            setLoading(false);
        }, 2000); // 2초 후에 로딩 상태를 false로 변경
    }, []);
    
    
    /////////////////////////////////////////////////////////////////
    // 정상 페이지
    /////////////////////////////////////////////////////////////////
    // Visualization: 화면에 보여줄 내용, Component
    return (
        <div>
            {/** 로딩 여부: 로딩시 로딩 이미지를 페이지 위에 팝업처럼 띄우기 */}
            {
                /*
                if(loading) {
                    <img src="./inae_images/loading.gif" alt="로딩중"/>
                }
                */
                loading ? (
                    <div style={popupStyle}>
                        <img src="./inae_images/loading.gif" alt="로딩중" style={{width:'130px', height:'150px'}}/>
                    </div>
                ) : null
            }

            {
            /** 
             * [ 채팅창    | 챗봇정보]
             * -------------------
             * [ 메시지 입력창 ]
             */
            }

            {/** 컴포넌트(1) 화면 상단에 사용자 정보 표시 */}
            {user && (
                <div style={{ backgroundColor: '#ffffff' }}>
                    <h4 style={userStyle}>
                        사용자 정보 : {user.name}[{user.id}]   {user.age}세   {user.birth}  {user.sex === 'F' ? '여성' : '남성'}
                    </h4>
                   
                </div>
            )}

            {/** 컴포넌트(2) 챗 */}
            <div style={{
                        display: 'flex',
                        width: '100%',
                        justifyContent: 'space-between',
                        marginBottom: '20px'
            }}>
                {/** 화면의 70%는 채팅창 */}
                <div style={chattingStyle}>
                    <Chatting responseText={responseText}/> {/** responseText 인자 전달 */}
                </div>
                {/** 화면의 30%는 챗봇소개 */}
                <div style={botInfoStyle}>
                    <BotInfo/>
                </div>
            </div>
            
            {/** 컴포넌트(3) 입력창 */}
            <InputField setResponseText={setResponseText} userAge={user?.age} userSex={user?.sex === 'F' ? '여자' : '남자'}/> {/** setResponseText 인자 전달 */}
        </div>
    );
};

export default ChatbotPage;
