import { Component } from "react";

// 클래스형 컴포넌트 Exan1 정의
class Exam1 extends Component {

  // 생성자 정의. props는 부모 컴포넌트로부터 전달받은 데이터
  constructor(props) {
    super(props); // 부모 클래스(컴포넌트)의 생성자를 호출. React 컴포넌트의 기본 초기화를 실행.
    this.state = { count : 0 }; // state 객체 초기화. count 상태 값을 0으로 설정
    // this.state : 클래스형 컴포넌트에서 컴포넌트의 상태(state) 객체를 의미함.
  }

  // 클래스형 컴포넌트 문법으로 정의된 메서드. 버튼 클릭 시 호출되는 이벤트 핸들러
  handleClick = () => {
    // 상태 업데이트. count 값을 기존 값 + 1 로 업데이트
    this.setState({count : this.state.count + 1});
  }

  // 렌더링 메서드, JSX를 반환하여 화면에 UI 렌더링(그린다)
  render() {
    return (
      <div>
        <h1>Count : {this.state.count}</h1>
        {/* count값을 출력. state에 저장된 값을 동적으로 표시 */}
        <button onClick={this.handleClick}>증가버튼</button>
      </div>
    )
  }


}

// 다른 파일에서 해당 컴포넌트를 사용할 수 있도록 내보냄.
export default Exam1;