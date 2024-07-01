// 뒤에서 const 명령어를 이용해 함수 생성시 필요한 {useState}도 불러와준다.
import React, {useState} from "react";
import { Layout, Button  } from 'antd';
import { useNavigate } from 'react-router-dom';
import './Button.css'; // CSS 파일을 가져옵니다.

function Page1() {
    //변수(1) 페이지 전환을 위한 변수
    const nevigate = useNavigate();

    //이벤트(1): 버튼 클릭시 로그인 페이지로 전환
    const handleButtonClick = () => {
        nevigate('/login'); // 버튼을 누르면 넘어갈 다음 페이지 주소
    };

    //Visualization: 화면에 보여줄 내용, Component
    return (
        <div>
            {/*배경 이미지*/}
            <div className="background"
                 style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100vw',
                    height: '100vh',
                    backgroundImage: "url('./inae_images/main.png')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    opacity: 0.7,
                    zIndex: -1
                 }}
            >
            </div>

            {/*모든 컨텐츠를 포함한 div*/}
            <div className="fist-page" 
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    margin: 0,
                    padding: 0,
                    boxSizing: 'border-box',
                    //backgroundColor: '#ffffff', // 배경색은 원하는 대로 조정하세요
                }}
            >
                <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center'
                        //backgroundColor: '#ffffff' // 배경색은 원하는 대로 조정하기
                    }}
                    >

                    {/** [1]로고 이미지 */}
                    <img src="./inae_images/logo.png"
                            alt="Sample"
                            style={{
                            maxHeight: '30%',
                            maxWidth: '30%',
                            objectFit: 'contain',
                            marginTop: '15vh'     // 천장으루부터 떨어진 거리 (컴포넌트의 시작 위치), 15% 위치
                            }}
                    />

                    {/** [2]버튼 M2 */}
                    <button className="big-blue-button"
                            onClick={handleButtonClick}>
                        시작하기
                    </button>
                </div>
                
                {/******************************************************/}
                {/** [2]버튼 M2*/}
                {/*
                <Layout className="layout" style={{margin: 0, padding: 0}}> 
                    <Button className="big-blue-button"
                            onClick={handleButtonClick} 
                            >시작 하기</Button>
                </Layout>
                */}
            </div>
        </div>
    );
};

export default Page1