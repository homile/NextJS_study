// button을 클릭하면 DB로 데이터가 전달되고 저장된다.
// FE에서 데이터베이스로 전달해선 안 된다.
// 아래의 코드에 DB로 전달하는 JS 코드를 추가하는 것은 매우 불안전하다.
// DB 크리덴셜을 노출시켜야하는데 그렇게 하면 보안에 매우 취약해진다.

// API 라우트에 적합한 방식
// FE에 사용자 입력란을 패칭하고 사용자가 버튼을 클릭하면 API 라우트에 요청을 전송한다.
// 그다음 API 라우트에서 DB로 연결하면 위의 취약점을 보완할 수 있다.
import { useRef } from "react";

function HomePage() {
  const emailInputRef = useRef();
  const feedbackInputRef = useRef();

  const submitFormHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredFeedback = feedbackInputRef.current.value;

    fetch(); // { email: 'test@test.com, text: 'Some feedback text' }
  };

  return (
    <div>
      <h1>The Home Page</h1>
      <from onSubmit={submitFormHandler}>
        <div>
          <label htmlFor="email">Your Email Address</label>
          <input type="email" id="email" ref={emailInputRef} />
        </div>
        <div>
          <label htmlFor="feedback">Your Feedback</label>
          <textarea id="feedback" rows="5" ref={feedbackInputRef}></textarea>
        </div>
        <button>Send Feedback</button>
      </from>
    </div>
  );
}

export default HomePage;
