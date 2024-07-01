import React, { useState } from 'react';
import axios from 'axios';      // 백엔드와 통신을 위해 가져오기
import { useNavigate } from 'react-router-dom';  // 페이지 전환 기능을 위해 가져오기
import { Button, Modal, Form, Input } from 'antd';

function SignUpPage() {
    // 변수(1) AWS EC2 서버 URL
    const API_URL = '/api/bts-ai-user/bts-cdb/insert?blocking=true&result=true';

    // 변수(3) 회원가입 버튼 클릭 여부
    const [clickedBtn, setClickedBtn] = useState(null);

    // 변수(4) 페이지 전환을 위한 변수
    const navigate = useNavigate();

    // Event(1) DB에 사용자 정보 저장
    const handleSave = async (values) => {
        try {
            const response = await axios.post(API_URL, {
                id: values.id,
                name: values.name,
                birth: values.birth,
                sex: values.sex,
                age: values.age,
            }, {
                headers: { 
                    'accept': 'application/json',
                    'Content-Type': 'application/json',
                }
            });

            console.log(response.data);

            // 성공 팝업창
            Modal.success({
                content: '회원가입에 성공했습니다.',
                onOk() {
                    navigate('/login');
                }
            });
        } catch (error) {
            console.error('회원 가입에 실패했습니다: ', error);

            // 실패 팝업창
            Modal.error({
                content: '회원 가입에 실패했습니다. ' + error,
            });
        }
    };

    // Event(2) 뒤로가기 (로그인 페이지로 전환)
    const handleBack = () => {
        navigate('/login');
    };

    return (
        <div>
            <Form
                name="register"
                initialValues={{ remember: true }}
                onFinish={handleSave}
            >
                <h1>회원 정보를 입력해주세요.</h1>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', textAlign: 'left', padding: '15px' }}>
                    <Form.Item
                        name="id"
                        rules={[{ required: true, message: '아이디를 입력해주세요.' }]}
                    >
                        <Input placeholder="아이디" />
                    </Form.Item>

                    <Form.Item
                        name="name"
                        rules={[{ required: true, message: '이름을 입력해주세요.' }]}
                    >
                        <Input placeholder="이름" />
                    </Form.Item>

                    <Form.Item
                        name="birth"
                        rules={[{ required: true, message: '생년월일을 입력해주세요.' }]}
                    >
                        <Input placeholder="생년월일 (예: 1990.10.26)" />
                    </Form.Item>

                    <Form.Item
                        name="sex"
                        rules={[{ required: true, message: '성별을 입력해주세요.' }]}
                    >
                        <Input placeholder="성별 (예: M 또는 F)" />
                    </Form.Item>

                    <Form.Item
                        name="age"
                        rules={[{ required: true, message: '나이를 입력해주세요.' }]}
                    >
                        <Input placeholder="나이" />
                    </Form.Item>

                    <Form.Item>
                        <Button onClick={handleBack}>뒤로 가기</Button>
                        <Button type="primary" htmlType="submit">
                            저장
                        </Button>
                    </Form.Item>
                </div>
            </Form>
        </div>
    );
}

export default SignUpPage;
