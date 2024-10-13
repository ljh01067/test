import React, { useState } from 'react';
import 'font-awesome/css/font-awesome.min.css';

function Head() {
    const [profileBarVisible, setProfileBarVisible] = useState(false);

    const handleProfileClick = (event) => {
        event.stopPropagation();
        setProfileBarVisible(!profileBarVisible);
    };

    const handleDocumentClick = () => {
        setProfileBarVisible(false);
    };

    React.useEffect(() => {
        document.addEventListener('click', handleDocumentClick);
        return () => {
            document.removeEventListener('click', handleDocumentClick);
        };
    }, []);

    return (
        <div style={{ position: 'fixed', height: '60px', width: '100%', zIndex: 20, backgroundColor: '#4D3E3E' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <a href="../home/main" style={{ color: 'white', fontSize: '24px', paddingLeft: '20px' }}>TailsRoute</a>
                <div style={{ width: '700px', height: '60px' }}>
                    <ul style={{ display: 'flex', height: '60px', alignItems: 'center' }}>
                        <li style={{ flex: 1, height: '100%' }}>
                            <a href="../hospital/main" style={{ color: 'white', padding: '10px', display: 'block', width: '100%', height: '100%', textAlign: 'center', border: '1px solid transparent' }}>병원</a>
                        </li>
                        <li style={{ flex: 1, height: '100%' }}>
                            <a href="../article/community" style={{ color: 'white', padding: '10px', display: 'block', width: '100%', height: '100%', textAlign: 'center', border: '1px solid transparent' }}>커뮤니티</a>
                        </li>
                        <li style={{ flex: 1, height: '100%' }}>
                            <a href="../Records/page" style={{ color: 'white', padding: '10px', display: 'block', width: '100%', height: '100%', textAlign: 'center', border: '1px solid transparent' }}>일상기록</a>
                        </li>
                        <li style={{ flex: 1, height: '100%' }}>
                            <a href="../shopping/page" style={{ color: 'white', padding: '10px', display: 'block', width: '100%', height: '100%', textAlign: 'center', border: '1px solid transparent' }}>쇼핑</a>
                        </li>
                        <li style={{ flex: 1, height: '100%' }}>
                            <a href="../health/page" style={{ color: 'white', padding: '10px', display: 'block', width: '100%', height: '100%', textAlign: 'center', border: '1px solid transparent' }}>건강관리</a>
                        </li>
                        <li style={{ flex: 1, height: '100%' }}>
                            <a href="../missing/list" style={{ color: 'white', padding: '10px', display: 'block', width: '100%', height: '100%', textAlign: 'center', border: '1px solid transparent' }}>실종</a>
                        </li>
                    </ul>
                </div>
                <div className="head_profile" onClick={handleProfileClick} style={{ cursor: 'pointer', color: 'white', fontSize: '18px', position: 'relative' }}>
                    <div style={{ marginRight: '30px' }}>프로필</div>
                    {profileBarVisible && (
                        <div style={{ position: 'absolute', top: '60px', right: '0', width: '200px', backgroundColor: '#FFF3CD', border: '1px solid #4D3E3E', borderRadius: '10px', padding: '10px' }}>
                            <div style={{ color: '#4D3E3E' }}>user01</div>
                            <a href="../member/myPage" style={{ textDecoration: 'none', color: '#4D3E3E', display: 'block', marginTop: '10px' }}>내 정보</a>
                            <a href="../member/doLogout" style={{ textDecoration: 'none', color: '#4D3E3E', display: 'block', marginTop: '10px' }}>로그아웃</a>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Head;