import React, { useState } from 'react';

// Context API 사용 안했을 때
// 부모 컴포넌트에서 자식 컴포넌트 4
// 상태나 데이터를 전달하려면 상태 내리꽃기를 진행해야함
// -> 이 방식은 모든 중간 컴포넌트에 props를 전달해야 하기 떄문에
// 비효율적이고 코드가 복잡해질 수 있음
// 유지보수성, 코드 복잡도가 올라감

// 부모 컴포넌트
const Exam6_1 = () => {

  const [user, setUser] = useState("홍길동");
  
  return (
    <div>
        <h1>부모에서부터 전달되는 {user}</h1>
        <Child1 user={user} />
    </div>
  );
};

const Child1 = ({user}) => {
  return (
    <>
      <h1>Child 1 전달중 : {user}</h1>
      <Child2 user={user} />
    </>
  )
}

const Child2 = ({user}) => {
  return (
    <>
      <h1>Child 2 전달중 : {user}</h1>
      <Child3 user={user} />
    </>
  )
}

const Child3 = ({user}) => {
  return (
    <>
      <h1>Child 3 전달중 : {user}</h1>
      <Child4 user={user} />
    </>
  )
}
const Child4 = ({user}) => {
  return (
    <h1>Child 4 배달완료 : {user}</h1>
  )
}

export default Exam6_1;