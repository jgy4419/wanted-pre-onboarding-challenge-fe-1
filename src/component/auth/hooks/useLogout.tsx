export const logout = () => {
    alert('로그아웃 되었습니다!');
    localStorage.removeItem('token');
    window.location.href = "/";
}