import React, { useState } from "react";
import { useLocation } from 'react-router-dom';
import { Layout, Row, Col, Button } from 'antd';

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

    // Event (1): 버튼 클릭시 로그인 페이지로 전환
    const [clickedBtn, setClickedBtn] = useState('1');
    const handleBtnClick = (e) => {
        setClickedBtn(e.key);
    };
    

    // Visualization: 화면에 보여줄 내용, Component
    return (
        <div>
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
                    <h4 style={{ 
                            marginTop: '10px', 
                            marginBottom: '10px', 
                            padding: '15px', 
                            color: '#4A4A47',
                            backgroundColor: '#f0f0f0', 
                            borderRadius: '10px' 
                    }}>
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
                <div style={{width: '70%'}}>
                    <Chatting responseText={responseText}/> {/** responseText 인자 전달 */}
                </div>
                {/** 화면의 30%는 챗봇소개 */}
                <div style={{width: '30%'}}>
                    <BotInfo/>
                </div>
            </div>
            
            {/** 컴포넌트(3) 입력창 */}
            <InputField setResponseText={setResponseText}/> {/** setResponseText 인자 전달 */}
            
        </div>
    );
};

export default ChatbotPage;
