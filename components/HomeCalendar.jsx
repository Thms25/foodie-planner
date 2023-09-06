'use client'

import React, { useState } from 'react';
import styles from '../styles/calendar.module.scss';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
// import format from 'date-fns/format'
// import parse from 'date-fns/parse'
// import startOfWeek from 'date-fns/startOfWeek'
// import getDay from 'date-fns/getDay'
// import enUS from 'date-fns/locale/en-US'

// const locales = {
//   'en-US': enUS,
// }


const HomeCalendar = () => {
  // const localizer = dateFnsLocalizer({
  //   format,
  //   parse,
  //   startOfWeek,
  //   getDay,
  //   // locales,
  // })

  // const [date, setDate] = useState(new Date());
  // const onChange = (date) => {
  //   setDate(date)
  // }

  return (
    <div className={styles.homeCalendar}>
      <Calendar
        // localizer={localizer}
        // events={myEventsList}
        // startAccessor="start"
        // endAccessor="end"
        // style={{ height: 500 }}
      />
    </div>
  );
}

export default HomeCalendar;
