import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './UserList.css'; // CSS 파일을 가져옵니다.

function UserList() {
    const [users, setUsers] = useState([]);

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

    return (
        <div style={{ display: 'flex', justifyContent: 'flex-start',  paddingTop: '10px', height: '100vh' }}>
            <div className="user-table-container">
                <h1>사용자 목록</h1>
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
            </div>
        </div>
    );
}

export default UserList;
