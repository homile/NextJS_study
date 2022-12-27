import { buildFeedbackPath, extractFeedback } from "../api/feedback";

// CSR 패칭
const FeedbackPage = (props) => {
  return (
    <ul>
      {props.feedbackItems.map((item) => (
        <li key={item.id}>{item.text}</li>
      ))}
    </ul>
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
