import { buildFeedbackPath, extractFeedback } from ".";

// 현재 작성된 동적 API Route는 get 요청을 처리할 수 없다.
// if 문을 통해 get, put, post, delete 기능을 할 수 있다.
function handler(req, res) {
  if(req.method === 'DELETE'){
    // 
  }
  const feedbackId = req.query.feedbackId;
  const filePath = buildFeedbackPath();
  const feedbackData = extractFeedback(filePath);
  const selectedFeedback = feedbackData.find((feedback) => feedback.id === feedbackId);

  res.status(200).json({ feedback: selectedFeedback });
}

export default handler;
