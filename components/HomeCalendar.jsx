import React from 'react';
import Calendar from 'react-calendar';
import styles from '../styles/calendar.module.scss';

const HomeCalendar = () => {
  return (
    <div className={styles.homeCalendar}>
      <Calendar />
    </div>
  );
}

export default HomeCalendar;
