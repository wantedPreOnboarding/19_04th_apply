# Messenger

1. 💁 프로젝트 소개
2. 👋🏻 팀원 소개
3. 🔗 배포 링크
4. 📄 협업 문서
5. 🌈 디자인 링크
6. 👩‍💻구현 기능
7. 💿 설치 및 실행 방법
8. 🛠️ 기술 스택
9. 🌪 프로젝트 회고 링크

---

## 1. 💁 프로젝트 소개

- 주제 : 프로젝트
- 기간 : 22.02.10 ~ 22.02.12

---

## 2. 👋🏻 팀원 소개

<table>

  <tr align="center">
    <td><a href='https://github.com/yeongjong310'>김영종</a></td>
    <td><a href="https://github.com/b41-41">정다빈</a></td>
    <td><a href="https://github.com/leechoiswim1">최수임</a></td>
    <td><a href="https://github.com/vi2920va">이송현</a></td>
  </tr>

  <tr align="center">
    <td><img src="https://avatars.githubusercontent.com/u/39623897?v=4" width="150px"/></td>
    <td><img src="https://avatars.githubusercontent.com/u/90027202?v=4"  width="150px"/></td>
    <td><img src="https://avatars.githubusercontent.com/u/85476908?v=4" width="150px"/></td>
    <td><img src="https://avatars.githubusercontent.com/u/76679130?v=4" width="150px"/></td>

  </tr>

  <tr align="center">
  <td>팀장</td>
  <td>팀원</td>
  <td>팀원</td>
  <td>팀원</td>
  </tr>

</table>

---

## 3. 🔗 배포 링크

[배포 링크 바로가기](https://switchat.netlify.app/)

## 4. 🌈 디자인 링크

[피그마 디자인 바로가기](https://www.figma.com/file/LYhssxBbJTYhLQCtvdNITP/swift-massenger?node-id=64%3A110)

---

## 5. 📄 기능 목록 명세

### 1. 기능 분배

#### 1. 1. 라우터 (영종)

- 로그인 인증을 고려한 라우터 설계
- page: 로그인, 채팅방

#### 1. 2. 헤더 (스타일링) (영종)

- 방제목, 뒤로가기 아이콘, 더보기 아이콘

#### 1. 3. 로그인 페이지 (수임)

- 사용자 이름 및 프로필 사진 등록이 가능한 페이지
- 사용자 이름 , 프로필 사진 미입력시 로그인 불가 ( 안내 토스트 )
- 사용자 이름 , 프로필 사진 수정 가능

#### 1. 4. 메세지 데이터 관련 기능

- 메시지는 이름 옆에 문자 출력 -(송현)
- 메시지 내용박스 ( 프로필 사진, 이름, 날짜 ) - (송현)
- 메시지 답장, 삭제 버튼 - (다빈)
  - 메시지 내용에 마우스를 올리거나 눌렀을 때 오른쪽에 답장, 삭제 버튼 띄우기
  - 메시지 삭제 버튼을 눌렀을 때 모달 창 띄우고 데이터 전달
- 삭제 모달 창 - (다빈)
  - 삭제 메시지 표시 기능
    - 삭제 메시지에서 10글자까지만 표시
    - 글자 뒤에 ‘...’ 추가
    - 글자 수와 메시지를 입력하면 해당 글자 수 만큼 자르는 Util(sliceMessage)
- 메시지 날짜 (yyyy-mm-dd hh:MM:ss) - (영종, 송현)
- 리렌더 시 최신 메세지가 보이도록 설정하기. - (영종)
  - 조건 1: 로그인 유저가 새로운 메세지를 전송한다.
  - 조건 2: 로그인 유저가 채팅 방에 입장한다.

#### 1. 5. 대화 목록

- 대화 목록은 미리 3명이 5건의 메시지를 주고 받는 내용이 출력(송현)
- 과거부터 최신 순으로 정렬(송현)
- 입력 창과 별개로 대화 목록만 스크롤 가능(영종)

#### 1. 6. 푸터(메세지 전송 박스)(수임)

- Enter키 입력 시 메세지 전송, Shift+Enter키 입력 시 줄 바꿈
- 메세지 박스에 값 입력 시 전송 버튼은 즉시 활성화
  - 컨텐츠를 입력하지 않으면 전송 불가. ( 안내 토스트 )
  - 입력란은 멀티 라인으로 입력, 메시지 출력 시 줄 바꿈도 같이 출력
- 답장을 클릭 시 "사용자 이름\n" + "메시지 내용\n" + "(회신)\n" 문자가 입력 창에 자동으로 삽입

#### 1. 7. 전역 상태 정의

- Auth: 로그인 유저의 정보를 담은 상태

<details>
<summary>Auth(펼쳐보기)</summary>
<div markdown="1">

```tsx
interface Auth {
  userId: number | null;
  userName: string | null;
  avatarURL: string;
}
```

</div>
</details>

<details>
<summary>Users(펼쳐보기)</summary>
<div markdown="1">

- Users: 채팅방에 참여한 유저 정보를 담은 상태

```tsx
interface User {
  userId: number;
  userName: string;
  avatarURL: string;
}

type UserS = User[];
```

</div>
</details>

<details>
<summary>Message(펼쳐보기)</summary>
<div markdown="1">

- message: 채팅방에서 대화한 메세지를 담은 상태

```tsx
interface Message {
  id: number;
  createAt: number;
  userId: number;
  message: string;
}

type Messages = Message[];
```

</div>
</details>

#### 1. 8. Data 설계 (영종)

- 중복된 데이터 관리를 최소화한 모델 형식으로 작성
- 장점: 데이터 수정 기능에서 관리가 상당히 편함, 단점: 데이터 사용자가 가공해야하는 수고가 필요

<details>
<summary>유저 데이터(펼쳐보기)</summary>
<div markdown="1">

```tsx
// users
const users = [
  {
    userId: 1,
    userName: '임수',
    avatarURL: `${process.env.REACT_APP_ASSET_PATH}/defaultUserImg.png`,
  },
  {
    userId: 2,
    userName: '송현',
    avatarURL: `${process.env.REACT_APP_ASSET_PATH}/defaultUserImg.png`,
  },
  {
    userId: 3,
    userName: '빈다',
    avatarURL: `${process.env.REACT_APP_ASSET_PATH}/defaultUserImg.png`,
  },
];
```

</div>
</details>

<details>
<summary>메세지 데이터(펼쳐보기)</summary>
<div markdown="1">

```tsx
// messages

const messages = [
  {
    id: 1000,
    createAt: 1644492766000,
    userId: 1,
    message: '안녕~',
  },
  {
    id: 1001,
    createAt: 1644492996000,
    userId: 2,
    message: '응 임수야~',
  },
  {
    id: 1002,
    createAt: 1644494116000,
    userId: 3,
    message: '앗 금지!',
  },
  {
    id: 1003,
    createAt: 1644494000000,
    userId: 1,
    message: '너무해 ㅠㅠ',
  },
  {
    id: 1004,
    createAt: 1644620008989,
    userId: 3,
    message: '😋',
  },
];
```

</div>
</details>

---

## 6. 💿 설치 및 실행 방법

Project Clone

```bash
$ git clone https://github.com/wantedPreOnboarding/19_04th_messenger
```

Project Setup

```bash
$ yarn install
```

Project Start For Development

```bash
$ yarn start
```

---

## 7. 🛠️ 기술 스택

<div>
  <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"/>
</div>

<div>
  <img src="https://img.shields.io/badge/-typescript-blue?style=for-the-badge"/>
</div>

<div>
  <img src="https://img.shields.io/badge/-styled--Components-red?style=for-the-badge"/>
</div>

<div>
  <img src="https://img.shields.io/badge/git-flow-brightgreen?style=for-the-badge&logo"/>
</div>

---

## 8. 🌲 프로젝트 구조

```HTML
src
├── components
│   ├── ChatList
│   ├── DelModal
│   ├── DelReplyBtn
│   ├── Header
│   ├── InputBox
│   ├── NoticeToast
│   └── Portal
├── data
├── hooks
├── pages
│   ├── ChatRoom
│   └── Login
├── router
├── store
│   └── slices
├── styles
├── types
└── utils
```

---

## 9. 🌪 프로젝트 회고 링크

[프로젝트 회고](https://smiling-player-37b.notion.site/2-2-9f5bb26a018744c0900f3ac450c9d935)
