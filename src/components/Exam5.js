

import React, { useState } from 'react';

// JSX 예제
const Exam5 = () => {
  //return <Exam5_1 />
  //return <Exam5_2 />
  //return <Exam5_3 isLogin={true} />
  //return <Exam5_4 isLogin={true} />
  return <Exam5_5 />
};

// JSX 예제 1 : 자바스크립트 변수로 사용하기
const Exam5_1 = () => {
  const name = "React";
  const element = <h1>Hello, {name} !</h1>;

  return element;
}

// JSX 예제 2 : img 태그 이미지 사용
const Exam5_2 = () => {
  const [userImg, setUserImg] = useState("https://i.ibb.co/b7CSJ51/image.jpg");
  const element = <img src={userImg} />

  return element;
}


// JSX 예제 3 : 로그인 여부에 따라 화면 다르게 보이기(if-else문)
const Exam5_3 = (props) => {
  if(props.isLogin) {
    return <h1>환영합니다!</h1>;
  } else {
    return <h1>로그인 해주세요</h1>;
  }
}

// JSX 예제 4 : 로그인 여부에 따라 화면 다르게 보이기 (삼항 연산자)
const Exam5_4 = (props) => {
  return <h1>{props.isLogin ? '환영합니다!!!' : '로그인 바람'}</h1>;
}

// JSX 예제 5 : 배열을 이용한 화면 랜더링 (자주 사용!!!)
// - 서버에서 응답받은 데이터 대부분 배열(list) 형태
const Exam5_5 = () => {
  const members = ["짱구", "유리", "철수", "훈이", "맹구"];

  const listItems = members.map((mem, index) => <li key={index}>{mem}</li>);
  // 
  // -> React에서 동적인 리스트를 렌더링 할 때 
  //    각 자식 컴포넌트가 고유한 key 속성을 가져야 한다는 규칙 위배시 발생하는 경고
  // 고유한 key값 작성하면 경고 해결
  // 보통 key값은 index값으로 사용함

  return <ul>{listItems}</ul>
}

export default Exam5;