import React, {useState} from 'react';
import {createRoot} from 'react-dom/client';
import {Button, TextField, Container, Typography, Box, Divider, Link} from '@mui/material';

function LoginForm() {
    const [loginId, setLoginId] = useState('');  // 상태로 loginId 관리
    const [loginPw, setLoginPw] = useState('');  // 상태로 loginPw 관리

    const checkLogin = async (e) => {
        e.preventDefault();  // 기본 폼 제출 동작 방지
        const formData = {
            loginId: loginId,  // 상태에서 loginId 값 가져오기
            loginPw: loginPw   // 상태에서 loginPw 값 가져오기
        };

        console.log('loginId:', loginId);  // loginId 값 확인
        console.log('loginPw:', loginPw);  // loginPw 값 확인

        try {
            const response = await fetch('/usr/member/doLogin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',  // JSON 형식으로 전송
                },
                body: JSON.stringify(formData),  // JSON으로 데이터 전송
            });

            if (response.ok) {
                const data = await response.json();
                alert('로그인 성공: ' + data);  // 성공 메시지 출력

            } else {
                alert('로그인 실패: 아이디 또는 비밀번호가 잘못되었습니다.');

                // 폼 필드 초기화
                const form = document.forms['login'];
                form.reset();
            }
        } catch (error) {
            console.error('로그인 중 오류가 발생했습니다:', error);
            alert('로그인 중 오류가 발생했습니다.');
        }
    };

    return (
        <Box sx={{
            backgroundColor: '#FFFEF0',
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'center',
            pt: 7
        }}>
            <Container maxWidth="sm">
                <Typography variant="h4" component="h1" gutterBottom>
                    Login
                </Typography>
                <form id="login" method="POST" action="/usr/member/doLogin">
                    <TextField label="아이디" name="loginId" variant="outlined" fullWidth margin="normal" color="success" onChange={(e) => setLoginId(e.target.value)}/>
                    <TextField label="비밀번호" name="loginPw" type="password" variant="outlined" fullWidth margin="normal"
                               color="success" onChange={(e) => setLoginPw(e.target.value)}/>
                    <Box display="flex" justifyContent="flex-end" mt={2}>
                        <Button variant="contained" color="success" type="submit">
                            로그인
                        </Button>
                    </Box>
                </form>
                <Box textAlign="center" mt={4}>
                    <Typography variant="body2">
                        Don't have an account?{' '}
                        <Link href="#" underline="hover" color="success">
                            Sign up
                        </Link>
                    </Typography>
                </Box>
                <Box display="flex" alignItems="center" mt={2}>
                    <Divider sx={{flexGrow: 1}}/>
                    <Typography variant="body2" sx={{mx: 2}}>
                        or
                    </Typography>
                    <Divider sx={{flexGrow: 1}}/>
                </Box>
                <Box textAlign="center" mt={2}>
                    <Button variant="outlined" color="success" fullWidth
                            sx={{textTransform: 'none', borderColor: '#d3d3d3', color: "success"}}>
                        Sign in with Google
                    </Button>
                </Box>
            </Container>
        </Box>
    );
}

const rootElement = document.getElementById('login-root');
const root = createRoot(rootElement);
root.render(<LoginForm/>);
