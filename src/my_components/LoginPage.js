// 뒤에서 const 명령어를 이용해 함수 생성시 필요한 {useState}도 불러와준다.
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

/**
 * React로 사용자가 ID를 입력하고, 그 ID를 백엔드로 GET 요청하여 확인한 후, ID가 있다면 다음 페이지로 이동
 */
function LoginPage() {
    //변수(1) 회원 정보
    const [id, setId] = useState('');

    //변수(2) 에러메시지
    const [error, setError] = useState('');

    //변수(3) 페이지 전환을 위한 변수
    const navigate = useNavigate();

    //변수(4) 마우스가 아이템에 접근했는 지 여부를 확인
    const [hoveredItem, setHoveredItem] = useState(null);

    //이벤트(1) 로그인
    const handleLogin = async (event) => {
        event.preventDefault(); // 폼 제출의 기본 동작을 막음
        try {
            //로그인 ID가 DB에 있는 지 백엔드에 요청
            const response = await axios.post('/api/bts-ai-user/bts-cdb/select?blocking=true&result=true', {
                id: id,
                name: "string",
                birth: "string",
                sex: "string",
                age: 0
            }, {
                headers: {
                    'accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            });

            if (response.data && response.data.users && response.data.users.length > 0) {
                navigate('/chat', { state: { userData: response.data } });  // 로그인 후 넘어갈 페이지 링크
            } else {
                setError('Invalid ID');
            }
        } catch (error) {
            setError('Error occurred during login');
            console.log(error);
        }
    };

    //이벤트(2) 회원가입 페이지로 전환
    const handleSignUp = async () => {
        navigate('/join');
    };
    
    //이벤트(2) 사용자 목록 페이지로 전환
    const handleUserList = () => {
        navigate('/user-list');
    };

    //이벤트(3) 마우스 커서가 아이템 내로 접근 체크
    const handleMouseEnter = (index) => {
        setHoveredItem(index);
    };

    //이벤트(4) 마우스 커서가 아이템 밖으로 떠났을 때 체크
    const handleMouseLeave = () => {
        setHoveredItem(null);
    };

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',    // 해당 div 내 모든 item들이 stack 형태로 쌓임
            alignItems: 'center',       // 가로에서 가운데 정렬
            justifyContent: 'center',   // 세로에서 가운데 정렬
            marginBottom: '300px'       // div 아래 띄우기
        }}>
            {/** 컴포넌트(1)제목 */}
            <h1 style={{ marginTop: '15vh' }}>Login Page</h1>

            {/** 컴포넌트(2)입력창: 텍스트필드와 버튼을 한 줄로 묶고 싶어서 div로 묶음  */}
            <div style={{ marginTop: '10vh' }}>
                <input
                    type="text"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                    style={{ width: '200px', height: '30px' }}
                    placeholder="Enter your ID"
                />
                
                <button onClick={handleLogin} // 클릭시 로그인 이벤트 부여
                        onMouseEnter={() => handleMouseEnter(0)} // 마우스 접근시 아이템의 index를 0으로 넣기
                        onMouseLeave={handleMouseLeave}          // 마우스 떠났다고 알리기
                        style={{
                            padding: '10px 20px',
                            backgroundColor: hoveredItem === 0 ? '#7CDBFF' : '#25C2FF', // 마우스가 접근한 아이템의 index 0일 경우, 아닐 경우 배경색 다르게
                            color: 'white',
                            border: 'none', borderRadius: '5px', cursor: 'pointer'
                        }}
                >
                    로그인
                </button>
                {error && <p style={{ color: 'red' }}>{error}</p>}
            </div>

            {/** 컴포넌트(3) 회원가입 및 사용자 목록 페이지로 전환 */}
            <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
                <p onClick={handleSignUp} // 클릭시 회원가입 페이지 전환 이벤트 부여
                    onMouseEnter={() => handleMouseEnter(1)}    // 마우스 접근시 아이템의 index를 1로 넣기
                    onMouseLeave={handleMouseLeave}             // 마우스 떠났다고 알리기
                    style={{
                        cursor: 'pointer',
                        color: hoveredItem === 1 ? 'gray' : 'black'  // 마우스가 접근한 아이템의 index 1일 경우, 아닐 경우 글자색 다르게
                    }}
                >
                    회원가입
                </p>
                <p onClick={handleUserList} // 클릭시 사용자 목록 페이지 전환 이벤트 부여
                    onMouseEnter={() => handleMouseEnter(2)}    // 마우스 접근시 아이템의 index를 2로 넣기
                    onMouseLeave={handleMouseLeave}             // 마우스 떠났다고 알리기
                    style={{
                        cursor: 'pointer',
                        color: hoveredItem === 2 ? 'gray' : 'black'  // 마우스가 접근한 아이템의 index 2일 경우, 아닐 경우 글자색 다르게
                    }}
                >
                    사용자 목록
                </p>
            </div>
        </div>
    );
}

export default LoginPage;

