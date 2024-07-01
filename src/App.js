/**
 * [ 코드 작성 전 기본적으로 수행해야 할 작업들 ]
 * 
 * 1. 라이브러리 설치 (cmd 창에서)
 * (1) ls 명령어로 위치 확인
 * - ls
 * 
 * (2) 현재 프로젝트 경로로 이동 (cd 현재 프로젝트 경로)
 * - cd ./Downloads/job_fair_project_react_frontend/job_fair_source_v0.1
 * 
 * (3) 시각화 라이브러리 (Ant Design) 설치
 * - npm install antd
 * 
 * (4) 라우팅(routing; 페이지 전환; 링크 이동)을 구현하기위한 라이브러리 설치
 * - npm install react-router-dom@6
 * - 2024.02 ~ 03월 기준 최신 version이 6임.
 * - 추후에 version은 최신에 맞게 설치
 * 
 * (5) 백엔드와의 통신을 위해 axios 설치
 * npm install axios
 * 
 * ===========================================================
 * 2. package.json 설정
 * 1) proxy 설정해주기 (그래야 서버와 연결 잘 수행됨. 백엔드 구현 아직 안 했으면 생략)
 * (1) {} 안에 아래 항목 추가
 * - "proxy": "http://서버ip:서버port"
 * 
 * -----------------------------------------------
 * - 예를 들어, 서버의 api url이 아래와 같으면
 * - const API_URL = 'http://15.164.143.17:8080/api/v1/events/saved';
 * -----------------------------------------------
 * - 아래 내용을 추가해주면 됨
 * - "proxy": "http://15.164.143.17:8080",
 * -----------------------------------------------
 * 
 * 
 * ===========================================================
 * 3. App.js 설정  (요 js 파일이 처음에 뜨는 Home 화면임)
 * 1) 설치한 라이브러리에서 필요한 컴포넌트 불러오기
 * 2) 메인 화면 구현
 * - Footer.js, Header.js 만들고 불러오기
 * - 첫 화면 만들기
 * 3) 라우팅 구현 (Link 컴포넌트 이용)
 * 4) 서버에서 API 불러오고 하위 컴포넌트에게 전달 (백엔드와 아직 연동 안 했으면 생략 가능)
 * 
 * 
 * ===========================================================
 * 4. index.js 설정
 * 1) 라우팅 구현
 * (1) 라우팅 모듈 불러오기
 * import {BrowserRouter} from 'react-router-dom'
 * 
 * (2) 라우팅 구조로 태그 수정
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
      <React.StrictMode>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </React.StrictMode>
    );
 * 
 * 
 * ===========================================================
 * 5. ./my_components에 있는 Components(.js 파일들) 설정
 * - 화면 구현
 * 
 * 
 * ===========================================================
 * 6. 시작 (익스플로러로 구현한 웹 페이지 확인)
 * 1) cmd에서 1.처럼 현재 프로젝트 경로로 이동 후 아래 명령어 입력하면 프론트엔드 화면 뜸
 * - npm start
 * 
 * 2) 오류: sh: react-scripts: command not found
 * - 해결법: npm install
 * 
 */
import React from "react";

// 라우팅을 위한 Components 가져오기
import {Routes, Route, Link} from "react-router-dom";

// 내가 만든 화면 (Components) 불러오기
import MyHeader from "./my_components/common_components/MyHeader";
import MyFooter from "./my_components/common_components/MyFooter";

// 잠만 이거 여기서 라우팅할게 아니라 Header에서 해야하는데 . . .
// 라우팅 공부 후 수정 일단 선언함
import LoginPage from "./my_components/LoginPage";
import FirstPage from "./my_components/FirstPage";
import SignUpPage from "./my_components/SignUpPage";
import ChatPage from "./my_components/ChatPage";

function App() {
  return (
    // [1] Link tag: 이동 경로 (browser path) 설정
    // 불러온 Link tag를 nav tag 안에 넣어서 라우팅 구현
    // <Link to="/">Home</Link> 문법은
    // html tag에서 <a href="/">Home</a>와 동일한 성질

    // [2] Routes tag: browser path가 바뀔때마다 띄울 Components(화면) 설정
    // Link tag를 통해 작성한 browser path와 Components(js file)을 mapping
    // Routes는 Route 들의 묶음 (집합)
    // 띄울 Components는 tag 형태로하여 element={} 속성 안에 넣기


    /* [ 메인 화면 기본 구조 ]
     * Header - Content - Footer
     */

    <div>
      {/* 1) Header(Menu) 추가 */}
      <MyHeader/>

      {/* 2) Page 링크 추가 */}
      <Routes>
        <Route exact path="/" element={<FirstPage />} />
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/chat" element={<ChatPage />} />
        <Route exact path="/join" element={<SignUpPage />} />
      </Routes>

      {/* 3) Footer 추가 */}
      <MyFooter/>
    </div>
  );
}

export default App;


//////////////////////////////////////////////////////////////////
/* 3. 기본 첫 페이지 구조 */
/*
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/