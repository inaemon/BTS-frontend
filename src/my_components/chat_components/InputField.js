// 뒤에서 const 명령어를 이용해 함수 생성시 필요한 {useState}도 불러와준다.
import React, { useEffect, useState } from 'react';
import { Layout, Row, Button } from 'antd';
import axios from 'axios'; // 백엔드와 통신

// 부모로부터 setResponseText 변수를 전달받음
function InputFieldComponent({ setResponseText }) {
    //변수(1)
    const [inputText, setInputText] = useState('');
    
    //이벤트(1)
    const handleInputChange = (e) => {
      setInputText(e.target.value);
    };

    //이벤트(2)
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post('http://localhost:5000/chat', { message: inputText });
        setResponseText(response.data.reply);   // 전송 후 화면에 response data 출력
        setInputText(''); // 전송 후 입력 필드를 초기화합니다.
      } catch (error) {
        console.error('Error sending message:', error);
      }
    };

    // Visualization: 화면에 보여줄 내용, Component
    return (
        <div>
            {/**
             * 1. 1xn형태로 쌓기
             * 2. 입력창 (text field)
             * 3. 전송 버튼
             */}
            <form onSubmit={handleSubmit} 
                  style={{ 
                    backgroundColor: 'white', 
                    display: 'flex', 
                    flexDirection: 'column',  // items를 stack 형태로 쌓기
                    alignItems: 'center',     // 기본적으로 가로에서 가운데 정렬
                    width: '99vw',            // 모든 item은 전체 화면의 99%만 채우기 (우측 패딩 1%주기)
                    }}>

              <input type="text"
                      id="contents" 
                      placeholder="챗봇에게 전송할 내용을 입력하세요"
                      style={{ 
                          fontSize: '15px',
                          width: '100%',  // 넓이는 화면 꽉 채우기
                          height: '100px',
                          border: 'solid 1px',
                          borderColor: '#E9E9E3',
                          borderRadius: '5px'
                      }}
              />
              <button type="submit" 
                      style={{ 
                          fontSize: '15px', fontWeight: 'bold',
                          alignSelf: 'flex-end', /* flex tag 내 아이템들은 기본적으로 가운데 정렬, 버튼 아이템만 우측 정렬 */
                          padding: '10px 20px', 
                          backgroundColor: '#25C2FF', 
                          color: 'white', 
                          border: 'none', 
                          borderRadius: '5px', 
                          cursor: 'pointer' }}>
                  전송</button>
            </form>
        </div>
    );
};


export default InputFieldComponent
