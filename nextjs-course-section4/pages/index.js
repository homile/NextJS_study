import React from "react";
import EventList from "../components/events/EventList";

import { getFeaturedEvents } from "../dummy-data";

// / 루트페이지
// /events 페이지
// /events/<some-id>
// /events/...slug
// pages 폴더에는 페이지에 필요한 컴포넌트만 있어야한다.
// pages에 있는 파일은 next에서 다 라우팅 처리를 해버리기 때문이다.

const HomePage = () => {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <EventList items={featuredEvents} />
    </div>
  );
};

export default HomePage;
