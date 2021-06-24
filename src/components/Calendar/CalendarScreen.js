import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { momentLocalizer, Calendar } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

import Navbar from ".././ui/Navbar";
import CalendarEvent from "./CalendarEvent";
import CalendarModal from "./CalendarModal";
import { uiOpenModal } from "../actions/ui";

const localizer = momentLocalizer(moment); // or globalizeLocalizer

const CalendarScreen = () => {
  const { modalOpen } = useSelector((state) => state.ui);
  const dispatch = useDispatch();
  const eventList = [
    {
      title: "me quiero morir",
      start: moment().toDate(),
      end: moment().add(1, "hours").toDate(),
      bgcolor: "red",
      notes: "pero quiero seguir comiendo ",
      name: "arky",
      user: {
        name: "arky",
      },
    },
  ];
  const eventStyleGetter = (event, start, end, isSelected) => {
    const style = {
      backgroundColor: "#6217bc",
      borderRadius: "10px",
      opacity: 1,
      display: "block",
      color: "white",
    };
    return {
      style,
    };
  };

  const onDoubleClickEvent = (e) => {
    dispatch(uiOpenModal());
    console.log("ae");
    console.log(modalOpen);
  };

  const onView = (e) => {
    setView(e);
    localStorage.setItem("last view", e);
  };
  const [view, setView] = useState(
    localStorage.getItem("last view") || "month"
  );

  return (
    <div className="calendar-name">
      <Navbar />
      <div className="calendar-prueba">
        <Calendar
          localizer={localizer}
          events={eventList}
          startAccessor="start"
          endAccessor="end"
          view={view}
          onDoubleClickEvent={onDoubleClickEvent}
          onView={onView}
          eventPropGetter={eventStyleGetter}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          components={{ event: CalendarEvent }}
        />
        <CalendarModal />
      </div>
    </div>
  );
};

export default CalendarScreen;
