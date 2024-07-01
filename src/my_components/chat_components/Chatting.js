import React, { useEffect, useState } from 'react';

// InputField에서 LLM->백엔드로부터 받아온 출력데이터를 responseText라는 매개변수로 전달 받음
function ChatOutputDisplay({ responseText }) {
    //변수(1) 화면 내용에 출력할 메시지
    const [messages, setMessages] = useState([]);

    //이벤트(1) responseText가 변경될 때마다 값을 배열에 추가하고, 그 배열을 화면에 출력
    useEffect(() => {
        if (responseText) {
        setMessages(prevMessages => [...prevMessages, responseText]);
        }
    }, [responseText]);


    //Visualization: 화면에 보여줄 내용
    return (
        <div style={{ padding: '10px', backgroundColor: '#F0F7FB', borderRadius: '5px', width: '95%', height: '100%', textAlign: 'center' }}>

            {/**
             * LLM->백엔드로부터 전달받은 텍스트 출력하기
             * 
             * 일단 p tag로 텍스트가 잘 뜨는 지 확인 후
             * 디자인은 나중에 넣기: 챗봇 얼굴, 챗봇명, 내용, ...
             */}
            {messages.map((message, index) => (
                <p key={index}>{message}</p>
            ))}
        </div>
    );
};

export default ChatOutputDisplay


/**
 * 
 * 새로 전달받은 데이터만 띄우는 version

import React from "react";

// InputField에서 LLM->백엔드로부터 받아온 출력데이터를 responseText라는 매개변수로 전달 받음
function ChatOutputDisplay({ responseText }) {
    // Visualization: 화면에 보여줄 내용, Component
    return (
        <div style={{ marginTop: '20px', padding: '10px', backgroundColor: '#e9ecef', borderRadius: '5px', width: '300px', textAlign: 'center' }}>
            <p>{responseText}</p>
        </div>
    );
};

export default ChatOutputDisplay
 */