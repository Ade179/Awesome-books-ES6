/* eslint-disable import/extensions */

import luxon from './luxon.js';

const dates = () => {
  const dateSection = document.querySelector('.date');
  const dateTime = luxon.DateTime.now().toLocaleString(luxon.DateTime.DATETIME_FULL);
  dateSection.innerHTML = dateTime;
};

export default dates();
