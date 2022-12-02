import React from "react";
import Link from "next/link";

import classes from "./EventItem.module.css";

const EventItem = (props) => {
  const { title, image, date, location, id } = props;

  // 한국 날짜로 변경
  const humanReadableDate = new Date(date).toLocaleDateString("kr-KR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  // Link 경로 설정
  const exploreLink = `/events/${id}`;

  // ', '가 들어가는 부분을 줄바꿈 처리함.
  const formattedAddress = location.replace(", ", "\n");

  return (
    <li className={classes.item}>
      {/* '/'만 붙여도 public 폴더로 인식 */}
      <img src={`/${image}`} alt={title} />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <div className={classes.date}>
            <time>{humanReadableDate}</time>
          </div>
          <div className={classes.address}>
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <Link href={exploreLink}>Explore Event</Link>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
