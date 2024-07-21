// src/utils/dateHelper.js
import moment from 'moment';

export function formatDate(date, formatType = 'MMMM Do YYYY, h:mm:ss a') {
  return moment(date).format(formatType);
}
