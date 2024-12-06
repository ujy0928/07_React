// 함수형 컴포넌트

import { useState } from "react";

const Exam2 = () => {

  //상태
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  }

  // 렌더링
  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={handleClick}>증가버튼</button>
    </div>
  );
}

export default Exam2;