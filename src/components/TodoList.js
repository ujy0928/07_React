import React, { useState } from 'react';

// react만을 이용한 TodoList
const TodoList = () => {

  // 작성한 todo를 기억할 배열 상태값
  const [todoList, setTodoList] = useState([]);
  // [{title : inputValue, isDone : false}]
  const [inputValue, setInputValue] = useState(""); // input에 작성한 값 기록 상태값

  // Add Todo 버튼 클릭 시 todoList 상태에 업데이트 이벤트 핸들러
  const handleAddTodo = () => {
    // javascript spread 연산자 (...) : 기존 배열이나, 객체의 전체 또는 일부를 다른 배열이나 객체로 복사함
    // 참조 타입(배열이나 객체)인 상태(state)는 불변성을 유지해야하므로, 기존 배열을 직접 수정하지 않고 새로운 배열을 생성해야함
    // 불변성을 유지해야 하는 이유 : react가 상태가 변경을 감지해야 하기 때문
    // 상태가 이전과 다르다고 React에게 알려주기 위해서는 상태의 참조값(메모리 주소)이 기존과 다르게 변경되어야 함.
    // -> 변경되기 이전 원본의 상태값은 불변해야하고, 새로운 참조 객체를 만들어 이가 변경되었음을 React 알려줌.
    setTodoList([...todoList, {title : inputValue, isDone : false}]);
    setInputValue(""); // input창 값 비우기
  }

  // 완료/미완료 상태 업데이트 이벤트 핸들러
  const handleToggleTodo = (index) => {
    const newTodoList = [...todoList];
    newTodoList[index].isDone = !newTodoList[index].isDone;
    setTodoList(newTodoList);
  }

  // todoList에 있는 현재 상태값 삭제 이벤트 핸들러
  const handleDeleteTodo = (index) => {
    // splice 함수 : mutates 마수라서 원본이 변경되는 함수이므로 state인 todoList에 직접적 사용 불가(불변성의 법칙)
    // todoList와 똑같은 밸열 newTodoList를 만들어 splice 이용 후, setState 함수 이용해서 상태 업데이트
    const newTodoList = [...todoList]; // todoList와 똑같은 배열 만들기 (복사)
    newTodoList.splice(index, 1); // index번호부터 1개 짤라내기
    setTodoList(newTodoList);
  }

  return (
    <div>
      <h1>나의 TodoList</h1>
      <input type='text' value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
      <button onClick={handleAddTodo}>Add Todo</button>

      <ul>
        {
          todoList.map((todo, index) => (
            <li key={index}>
              <span style={{textDecoration : todo.isDone ? 'line-through' : 'none'}}>{todo.title}</span>
              <button onClick={() => handleToggleTodo(index)}>{todo.isDone ? '미완료' : '완료'}</button>
              <button onClick={() => handleDeleteTodo(index)}>삭제</button>
            </li>
          ))
        }
      </ul>    
    </div>
  );
};

export default TodoList;