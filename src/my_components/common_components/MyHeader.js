import React from "react";
import { useNavigate } from 'react-router-dom'; // 네비게이션을 위해 import

// 시각화 라이브러리에서 필요한 컴포넌트 가져오기
import { Layout } from 'antd';

// 필요한 전역변수 생성
const mainLogo = './inae_images/logo.png';  // 경로: job_fair_project_react_frontend/job_fair_source_v0.1/public/inae_images

// 함수형 컴포넌트 생성: 메뉴 구현할 거임
function MyHeader(/*{ portfolios = [], personalInfos = {} }*/) {
  //변수(1) 페이지 이동을 위한 네비게이션 훅
  const navigate = useNavigate();

  //이벤트(1) 로고 클릭 이벤트
  const handleLogoClick = () => {
    navigate('/'); 
  };

  // 실제 화면에 보일 페이지 구현 (html 언어와 유사한 xml 언어로 작성)
  return (
    // 3) <Layout /> 이든 <div /> 든 하나의 tag에 내용물을 담아서 return 해야 함.
    <Layout className="layout" style={{ margin: 0, padding: 0 }}>
      <div className="menu"
            style={{
                // menu bar 배경색
                backgroundColor: '#29B2FF',
                margin: 0,
                padding: 0}}>

        <div className="left-menu"
            style={{
                // menu item 글자색
                color: 'white',
                // menu item을 좌측 정렬
                float: 'left',
                // 안에 요소들 배치를 horizontal로 정렬 (그니깐 menu items를 수평으로 추가함)
                display: 'flex',
                flexDirection: 'row',
                // 메뉴 아이템 (안에 요소)들을 메뉴의 세로(vertical) 기준 가운데 정렬
                alignItems: 'center',
                height: 60,
                margin: 0,
                paddingLeft: 15 }}>

            {/* 4-1) 메뉴 안에 세부 메뉴 아이템 추가 */}
            {/* 가운데 맞춤 등 css 속성을 tag 안에 직접 추가함. 첫 번째 메뉴 아이템은 로고 이미지로 메인 페이지 띄움*/}
            <h3 key="1" onClick={handleLogoClick} style={{ cursor: 'pointer' }}>
                <img src={mainLogo} height={50} style={{ paddingRight: 30 }} alt={'main page'} />
            </h3>
            {/*<h3 key="2" style={{ width: 100, textAlign: 'center', fontWeight: 'bold', fontFamily: 'Arial' }} >행사소개</h3>*/}
            {/* Add more menu items if needed... */}
        </div>
      </div>
    </Layout>
  );
};

// 함수형 컴포넌트 내보내기 (다른 컴포넌트에서 접근 가능하도록)
export default MyHeader;
