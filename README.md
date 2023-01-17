# 원티드 프리온보딩 챌린지 프론트엔드 코스 사전과제
<hr/>

## 실행
### Node 버전 16 이상

1. git clone https://github.com/jgy4419/wanted-pre-onboarding-challenge-fe-1.git
2. npm install
3. npm start (실행 전 node 버전 확인)

# 로그인 하기 전 메인화면
<img width="1433" alt="image" src="https://user-images.githubusercontent.com/76980526/210545361-90233bf4-eade-4554-b5e8-c119293ca635.png">

# Assignment 1 - Login / SignUp
## /auth 경로에 로그인 / 회원가입 기능을 개발
- 이메일 조건 : 최소 `@`, `.` 포함
- 비밀번호 조건 : 8자 이상 입력
- 이메일과 비밀번호 모두 입력되어 있고, 조건을 만족해야 제출 버튼이 활성화 되도록 해주기.
<img width="1440" alt="image" src="https://user-images.githubusercontent.com/76980526/210497174-af443aa5-8d9f-4337-b545-aeb53f59ae10.png">


## 로그인 API를 호출하고, 올바른 응답을 받았을 때 루트 경로로 이동.
- 응답으로 받은 토큰은 로컬스토리지에 저장.
<img width="552" alt="image" src="https://user-images.githubusercontent.com/76980526/210497229-052aaf64-8cb4-4188-a2fc-3ca97db2f620.png">
- 다음 번에 로그인 시 토큰이 존재한다면 루트 경로로 리다이렉트 시키기.
- 어떤 경우든 토큰이 유효하지 않다면 사용자에게 알리고 로그인 페이지로 리다이렉트 시키기.

# Assignment 2 - Todo List
## Todo List API를 호출하여 Todo List CRUD 기능을 구현하기.
- 목록 / 상세 영역으로 구현
<img width="1207" alt="image" src="https://user-images.githubusercontent.com/76980526/210497407-9ef4d3ce-85b7-4e92-9309-0b60cd0e1fc4.png">

<img width="1440" alt="image" src="https://user-images.githubusercontent.com/76980526/210497436-ff2d7b1a-be92-4d47-9ef4-2c3e0e94b7a5.png">

- Todo 목록을 볼 수 있게하기
<img width="1440" alt="image" src="https://user-images.githubusercontent.com/76980526/210497647-ec31a194-485f-443b-a562-9dc2075cf5cb.png">

- Todo 추가 버튼을 클릭하면 할 일이 추가되도록 하기.
<img width="1440" alt="image" src="https://user-images.githubusercontent.com/76980526/210497823-7c37596f-1aa8-4008-8c57-262d3ccf738f.png">

<img width="1440" alt="image" src="https://user-images.githubusercontent.com/76980526/210497912-455a0910-c5de-43e2-8dd7-e1d717974098.png">

### Todo 수정 버튼을 클릭하면 수정 모드를 활성화하고, 수정 내용을 제출하거나 취소할 수 있도록 하기.
- Todo 상세는 페이지 내에 모달창을 만든 뒤 모달창 컴포넌트에 모달 상태랄 담고있는 변수와, 클릭한 게시글 id를 같이 props로 보낸 뒤 `axios.put` 요청을 했습니다.
<img width="1438" alt="image" src="https://user-images.githubusercontent.com/76980526/210544399-2c1e3645-5c70-4de4-8a13-1cee4bcbbf3a.png">


- 수정 버튼 누르고 -> 수정 할 내용 입력하기.
<img width="1226" alt="image" src="https://user-images.githubusercontent.com/76980526/210544612-1efea71c-3e35-4b9a-9307-897af3e0c1ad.png">


- 수정 완료된 모습
<img width="1434" alt="image" src="https://user-images.githubusercontent.com/76980526/210544788-1c3494be-db0b-4b99-9fe7-0abd3b865c42.png">

- 모달창을 지우면 재로딩 없이 게시글이 바뀌어져 있는 것을 볼 수 있습니다.
<img width="1224" alt="image" src="https://user-images.githubusercontent.com/76980526/210544954-da2f8f10-aec8-48c9-a7d5-fa4f3953ba09.png">

## Todo 삭제 버튼을 클릭하면 해당 Todo 삭제하기.
- 삭제할 게시글
<img width="1435" alt="image" src="https://user-images.githubusercontent.com/76980526/210545019-293ec99e-1287-4542-8fe4-80dfd541e908.png">


- 삭제 후 게시글 리스트
<img width="1308" alt="image" src="https://user-images.githubusercontent.com/76980526/210545043-e0406302-5692-44d5-aadb-b5e2e169fe60.png">

