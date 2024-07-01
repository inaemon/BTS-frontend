// 뒤에서 const 명령어를 이용해 함수 생성시 필요한 {useState}도 불러와준다.
import React, { useEffect, useState } from 'react';
import axios from 'axios'; // 백엔드와 통신

// 부모로부터 setResponseText, userAge, userSex 변수를 전달받음
function InputFieldComponent({ setResponseText, userAge, userSex }) {
    //변수(1)
    const [inputText, setInputText] = useState('');
    
    //이벤트(1)
    const handleInputChange = (e) => {
      setInputText(e.target.value);
    };

    //이벤트(2)
    const handleSubmit = async (e) => {
      e.preventDefault();
      console.log(inputText+userAge+userSex)
      try {
        const response = await axios.post('/ai/bts_llm', {
          query:inputText,
          sex: userAge,
          age: userSex
        });
        console.log(response.data);
        setResponseText(response.data);   // 전송 후 화면에 response data 출력
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
                      value={inputText}
                      onChange={handleInputChange}
                      placeholder="챗봇에게 전송할 내용을 입력하세요"
                      id="contents" 
                      style={{ 
                          fontSize: '15px',
                          width: '100%',  // 넓이는 화면 꽉 채우기
                          height: '100px',
                          border: 'solid 1px',
                          borderColor: '#E9E9E3',
                          borderRadius: '5px'
                      }}
              />
              <button className="right-blue-button" 
                      style={{ marginTop: '10px' }} 
                      type="submit">
                  전송</button>
            </form>
        </div>
    );
};


export default InputFieldComponent
