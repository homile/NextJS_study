import { useState } from "react";
import { buildFeedbackPath, extractFeedback } from "../api/feedback";

// CSR 패칭
const FeedbackPage = (props) => {
  const [feedbackData, setFeedbackData] = useState();

  const loadFeedbackHandler = (id) => {
    fetch(`/api/feedback/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setFeedbackData(data.feedback);
      }); // /api/some-feedback-id
  };

  // bind 동작과정 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind
  // 함수를 미리 구성할 수 있게 해줌. 실행은 되지않음.
  return (
    <>
      {feedbackData && <p>{feedbackData.email}</p>}
      <ul>
        {props.feedbackItems.map((item) => (
          <li key={item.id}>
            {item.text}
            <button onClick={loadFeedbackHandler.bind(null, item.id)}>Show Details</button>
          </li>
        ))}
      </ul>
    </>
  );
};

// 함수 내부에서 APU 호출하고 화면에 렌더링
export async function getStaticProps() {
  // 자체 API를 사용할 땐 fetch를 사용하면 안된다.
  const filePath = buildFeedbackPath();
  const data = extractFeedback(filePath);
  return {
    props: {
      feedbackItems: data,
    },
  };
}

export default FeedbackPage;
