import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';  // 페이지 전환을 위한
import './UserList.css'; // CSS 파일을 가져옵니다.

function UserList() {
    //변수(1) 사용자 리스트 정보 담는 변수
    const [users, setUsers] = useState([]);
    
    //변수(2) 페이지 이동을 위한 변수
    const navigate = useNavigate();


    //이벤트(1) 사용자 리스트 데이터를 서버로부터 가져오는 함수
    useEffect(() => {
        // 사용자 목록을 가져오는 함수
        const fetchUsers = async () => {
            try {
                const response = await axios.get('/api/bts-ai-user/bts-cdb/select-list?blocking=true&result=true');
                if (response.data && response.data.users) {
                    setUsers(response.data.users);
                }
            } catch (error) {
                console.error('사용자 목록을 가져오는 데 실패했습니다: ', error);
            }
        };

        fetchUsers();
    }, []);

    //이벤트(2) 뒤로가기 (로그인 페이지로 이동)
    const handleBack = () => {
        navigate('/login'); // 버튼을 누르면 넘어갈 다음 페이지 주소
    };



    return (
        <div style={{ display: 'flex', justifyContent: 'flex-start',  paddingTop: '10px', height: '100vh' }}>
            <div className="user-table-container">
                {/** 컴포넌트(1) 제목 */}
                <h1>사용자 목록</h1>

                {/** 컴포넌트(2) 사용자 리스트 */}
                {users.length > 0 ? (
                    <table className="user-table">
                        <thead>
                            <tr>
                                <th>이름</th>
                                <th>아이디</th>
                                <th>나이</th>
                                <th>생일</th>
                                <th>성별</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map(user => (
                                <tr key={user.id}>
                                    <td>{user.name}</td>
                                    <td>{user.id}</td>
                                    <td>{user.age}</td>
                                    <td>{user.birth}</td>
                                    <td>{user.sex === 'F' ? '여성' : '남성'}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p>사용자 목록이 없습니다.</p>
                )}

                {/** 컴포넌트(3) 뒤로가기 버튼 */}
                <button className='blue-button' onClick={handleBack}>뒤로 가기</button>
            </div>
        </div>
    );
}

export default UserList;
