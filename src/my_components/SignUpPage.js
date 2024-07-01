import React, { useState, useEffect } from 'react';
import axios from 'axios';      // 백엔드와 통신을 위해 가져오기
import { useNavigate } from 'react-router-dom';  // 페이지 전환 기능을 위해 가져오기
import { Button, Modal, Form, Input  } from 'antd';


function SignUpPage() {

    //변수(1) AWS EC2 서버 URL
    const API_URL = 'http://15.164.143.17:8080/api/v1/users/projects/image';
    //변수(2) AWS EC2 서버 토큰
    const TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZXN0QHRlc3QuY29tIiwiaWF0IjoxNzA2ODYzMDIzLCJleHAiOjE3MDcwNzkwMjN9.0BncnMQkJPkzL37zzN3CEcclMh76kLkFXt3bMWdo05E';

    //변수(3) 회원가입 버튼 클릭 여부
    const [clickedBtn, setClickedBtn] = useState(null);

    //변수(4) 페이지 전환을 위한 변수
    const nevigate = useNavigate();

    //Event(1) DB에 사용자 정보 저장
    const handleSave = async(e) => {
        try {
          const response = await axios.post(API_URL, {
            id: e.id,
            name: e.name,
            birth: e.birthday,
            sex: e.sex,
            age: e.age,
          }, {
            headers: { Authorization: `Bearer ${TOKEN}` }
          });
          console.log(response.data);
    
          // 성공 팝업창
          Modal.success({
            content: '회원가입에 성공했습니다.',
          });
        } catch (error) {
          console.error('회원 가입에 실패했습니다: ', error);
    
          // 실패 팝업창
          Modal.error({
            content: '회원 가입에 실패했습니다. ' + error,
          });
        }
      };

    /*
    //Event(1) M2
    const handleSave = async (userInfo) => {
        try {
            // FormData 객체 생성
            const formData = new FormData();
            // form의 값 추가
            formData.append('id', userInfo.id);
            formData.append('name', userInfo.name);
            formData.append('birth', userInfo.birth);
            formData.append('sex', userInfo.sex);
            formData.append('age', userInfo.age);
    
            const response = await axios.post(API_URL, formData, {
                headers: { 
                    Authorization: `Bearer ${TOKEN}`,
                    'Content-Type': 'multipart/form-data'  // 요청 헤더에 content-type을 multipart/form-data로 설정
                }
            });
          if (response.data.status === 201) {
            console.log(response.data.message);
            return response.data.data;
          }
          
        // 성공 팝업창
        Modal.success({
            content: '회원 등록을 성공하였습니다.',
            onOk() {
                navigate('/login');
            }
        });
        setIsAddingPortfolio (false);
        } catch (error) {
          console.error(error);
          // 실패 팝업창
          Modal.error({
            content: '회원 등록에 실패하였습니다.' + error,
            });
        }
      }
    */

    //Event(2) 뒤로가기 (로그인 페이지로 전환)
    const handleBack = () => {
        nevigate('/login');
    };

  return (
    <div>
        <Form
            name="register"
            initialValues={{ remember: true }}
            onFinish={handleSave}
            >
            
            {/**====================================== */}
            {/** [M1] */}
            <h1>회원 정보를 입력해주세요.</h1>
            {/** 나중에 형식에 맞는지 확인하는 js, 나이는 생일 이용해서 구하도록 코드 수정 */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', textAlign: 'left', padding: '15px' }}>
                <div>
                    <label>아이디</label><br/>
                    <input type="text" id="id" /*value={clickedBtn.id}*/></input>
                </div>
                <div>
                    <label>이름</label><br/>
                    <input type="text" id="name" /*value={clickedBtn.name}*/></input>
                </div>
                <div>
                    <label>생년월일</label><br/>
                    <input type="text" id="birthday" /*value={clickedBtn.birthday}*/></input>
                </div>
                <div>
                    <label>성별</label><br/>
                    <input type="text" id="sex" /*value={clickedBtn.sex}*/></input>
                </div>
                <div>
                    <label>나이</label><br/>
                    <input type="text" id="age" /*value={clickedBtn.age}*/></input>
                </div>

                <span>
                    <Button onClick={handleBack}>뒤로 가기</Button>
                    <Button onClick={() => handleSave(clickedBtn)}>회원가입</Button>
                </span>
            </div>
            
            {/**====================================== */}
            {/** [M2] */}
            <p>아이디</p>
            <Form.Item
                name="id"
                rules={[{ required: true, message: '아이디' }]}
            >
                <Input placeholder="id123" />
            </Form.Item>

            <p>이름</p>
            <Form.Item
                name="name"
                rules={[{ required: true, message: '이름' }]}
            >
                <Input placeholder="홍길동'" />
            </Form.Item>

            <p>생년월일</p>
            <Form.Item
                name="date"
                rules={[{ required: true, message: '생년월일' }]}
            >
                <Input
                type="date"
                placeholder="2000.05.12"
                />
            </Form.Item>

            <p>성별</p>
            <Form.Item
                name="sex"
                rules={[{ required: true, message: '성별' }]}
            >
                <Input
                type="sex"
                placeholder="F"
                />
            </Form.Item>

            <Form.Item>
                <Button onClick={handleBack}>뒤로 가기</Button>
                <Button type="primary" htmlType="submit" onClick={handleSave}>
                저장
                </Button>
            </Form.Item>
        </Form>
      
    </div>
  );
};

export default SignUpPage;