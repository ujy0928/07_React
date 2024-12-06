import React, { createContext, useContext, useState } from 'react';

// Context API 사용 했을 때

// Context API : React 컴포넌트 트리 전체에서 데이터를 공유할 수 있은 방법을 제공
//              중첩된 구조에서 데이터를 전달하는데 있어서 불필요한 props drilling (상태 내리꽃기)을 방지함.
//              사용하기 위해선 useContext hook이 필요함

// createContext() : Context 객체를 생성 시 사용
// Context : react에서 컴포넌트 계층 구조를 통해 데이터를 효율적으로 전달하기 위한 매커니즘(작동원리/방식).
const UserContext = createContext();
// Provider : 데이터를 제공
// Consumer : 데이터를 소비

// 부모 컴포넌트
const Exam6_2 = () => {

  const [user, setUser] = useState("홍길동");
  
  // Context.Provider : 하위 컴포넌트에게 데이터를 전달할 때 사용
  return (
    <UserContext.Provider value={user}>  
      <h1>부모에서부터 전달되는 {user}</h1>
      <Child1 />
      {/* props로 저달하지 않아도 과연 가능할까? */}
    </UserContext.Provider>
  );
};

const Child1 = () => {
  return (
    <>
      <h1>Child 1</h1>
      <Child2 />
    </>
  )
}

const Child2 = () => {
  const user = useContext(UserContext);

  return (
    <>
      <h1>Child 2 중간에서 한번써보기 : {user}</h1>
      <Child3 />
    </>
  )
}

const Child3 = () => {
  return (
    <>
      <h1>Child 3</h1>
      <Child4 />
    </>
  )
}
const Child4 = () => {

  const user = useContext(UserContext);
  // context로 등록된 객체 중 UserContext를 꺼내어 user라는 변수로 부르겠다

  return (
    <h1>Child 4 : {user}</h1>
  )
}

export default Exam6_2;