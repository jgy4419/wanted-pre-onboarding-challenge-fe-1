// 이메일과 비밀번호의 유효성을 확인합니다
//  이메일 조건 : 최소 @, . 포함
//  비밀번호 조건 : 8자 이상 입력
//  이메일과 비밀번호가 모두 입력되어 있고, 조건을 만족해야 제출 버튼이 활성화 되도록 해주세요.

function emailCheck(email: string): boolean {
    if (email.includes('@') && email.includes('.')) {
        return true;
    }
    else {
        alert('이메일이 유효하지 않습니다..')
        return false;
    }
}
function passwordCheck(pw1: string, pw2: string): boolean {
    if (pw1 && pw1.length >= 8 && pw1 === pw2) {
        return true;
    }
    else {
        alert('비밀번호가 다르거나 일치하지 않습니다.');
        return false;
    }
}

export { emailCheck, passwordCheck };