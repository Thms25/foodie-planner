'use client'

import React, { useState } from 'react';
import styles from '../styles/calendar.module.scss';
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css';


const localizer = momentLocalizer(moment)

const HomeCalendar = () => {

  return (
    <div className={styles['rbc-calendar']}>
      <Calendar
        localizer={localizer}
        // events={myEventsList}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </div>
  );
}

export default HomeCalendar;
