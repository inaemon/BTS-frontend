// 뒤에서 const 명령어를 이용해 함수 생성시 필요한 {useState}도 불러와준다.
import React, {useState} from "react";
import { Layout, Row, Col, Button  } from 'antd';

//ChatPage.js 위치를 기준으로 파일 경로 지정
import BotInfo from "./chat_components/BotInfo";
import Chatting from "./chat_components/Chatting";
import InputField from "./chat_components/InputField";

function ChatbotPage() {
    //변수(2)
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

            {/** 컴포넌트(1) 챗 */}
            <div style={{
                        display: 'flex',
                        width: '100%',
                        justifyContent: 'space-between',
                        marginBottom: '20px'
            }}>
                {/** 화면의 70%는 채팅창 */}
                <div style={{width: '70%'}}>
                    <Chatting responseText={responseText}/> {/** responseText 인자 전닿 */}
                </div>
                {/** 화면의 30%는 챗봇소개 */}
                <div style={{width: '30%'}}>
                    <BotInfo/>
                </div>
            </div>
            
            {/** 컴포넌트(2) 입력창 */}
            <InputField setResponseText={setResponseText}/> {/** setResponseText 인자 전닿 */}
            
        </div>
    );
};

export default ChatbotPage