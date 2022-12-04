import React from "react";
import { getAllEvents } from "../../dummy-data";
import EventList from "../../components/events/EventList";

const AllEvnetsPage = () => {
  const events = getAllEvents();

  return (
    <div>
      <EventList items={events} />
    </div>
  );
};

export default AllEvnetsPage;
