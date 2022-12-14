/* eslint-disable consistent-return */
import EventHandler from '../../mdb/dom/event-handler';
import Manipulator from '../../mdb/dom/manipulator';

// eslint-disable-next-line import/prefer-default-export
const formatToAmPm = (date) => {
  if (date === '') return;
  let hours;
  let minutes;
  let amOrPm;
  let originalHours;

  if (isValidDate(date)) {
    hours = date.getHours();
    originalHours = hours;
    minutes = date.getMinutes();
    hours %= 12;

    if (hours === 0) {
      amOrPm = 'AM';
    } else if (hours > 12) {
      amOrPm = 'PM';
    }
    hours = hours || 12;

    if (amOrPm === undefined) {
      amOrPm = hours >= 12 ? 'PM' : 'AM';
    }
    minutes = minutes < 10 ? `0${minutes}` : minutes;
  } else {
    [hours, minutes, amOrPm] = takeValue(date, false);
    originalHours = hours;

    hours %= 12;
    if (hours === 0) {
      amOrPm = 'AM';
    }
    hours = hours || 12;

    if (amOrPm === undefined) {
      amOrPm = originalHours >= 12 ? 'PM' : 'AM';
    }
  }

  return {
    hours,
    minutes,
    amOrPm,
  };
};

const isValidDate = (date) => {
  // eslint-disable-next-line no-restricted-globals
  return date && Object.prototype.toString.call(date) === '[object Date]' && !isNaN(date);
};

const formatNormalHours = (date) => {
  if (date === '') return;
  let hours;
  let minutes;

  if (!isValidDate(date)) {
    [hours, minutes] = takeValue(date, false);
  } else {
    hours = date.getHours();
    minutes = date.getMinutes();
  }

  minutes = Number(minutes) < 10 ? `0${Number(minutes)}` : minutes;

  return {
    hours,
    minutes,
  };
};

const toggleClassHandler = (event, classes) => {
  return EventHandler.on(document, event, classes, ({ target }) => {
    if (!Manipulator.hasClass(target, 'active')) {
      const allElements = document.querySelectorAll(classes);

      allElements.forEach((element) => {
        if (Manipulator.hasClass(element, 'active')) {
          Manipulator.removeClass(element, 'active');
        }
      });

      Manipulator.addClass(target, 'active');
    }
  });
};

const findMousePosition = ({ clientX, clientY, touches }, object, isMobile = false) => {
  const { left, top } = object.getBoundingClientRect();
  let obj = {};
  if (!isMobile || !touches) {
    obj = {
      x: clientX - left,
      y: clientY - top,
    };
  } else if (isMobile && Object.keys(touches).length > 0) {
    obj = {
      x: touches[0].clientX - left,
      y: touches[0].clientY - top,
    };
  }

  return obj;
};

const checkBrowser = () => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
};

const takeValue = (element, isInput = true) => {
  let valueInput;
  if (isInput) {
    valueInput = element.value.replace(/:/gi, ' ');
  } else {
    valueInput = element.replace(/:/gi, ' ');
  }

  return valueInput.split(' ');
};

const compareTimes = (time1, time2) => {
  const [time1Hour, time1Minutes, time1maxTimeFormat] = takeValue(time1, false);
  const [time2Hour, time2Minutes, time2maxTimeFormat] = takeValue(time2, false);
  const bothFormatsEqual = time1maxTimeFormat == time2maxTimeFormat;

  if (time1maxTimeFormat == 'PM' && time2maxTimeFormat == 'AM') {
    return 1;
  } else if (time1maxTimeFormat == 'AM' && time2maxTimeFormat == 'PM') {
    return 2;
  }

  if (bothFormatsEqual && time1Hour > time2Hour) {
    return 1;
  } else if (time1Hour < time2Hour) {
    return 2;
  }
  if (time1Minutes > time2Minutes) {
    return 1;
  } else if (time1Minutes < time2Minutes) {
    return 2;
  }
};
const getCurrentTime = () => {
  const date = new Date();
  const currentHours = date.getHours();
  let currentMinutes = String(date.getMinutes());
  if (currentMinutes.length === 1) {
    currentMinutes = `0${currentMinutes}`;
  }

  const currentTime = `${currentHours}:${currentMinutes}`;
  return currentTime;
};

const setMinTime = (minTime, disabledPast, format12) => {
  if (!disabledPast) {
    return minTime;
  }

  let currentTime = getCurrentTime();
  // this will adjust function to minHour option
  if (minTime.length <= 2 && minTime != '') {
    currentTime = currentTime.split(':')[0];
    if (currentTime < minTime) {
      minTime = currentTime;
    }
    return minTime;
  }

  if (format12) {
    currentTime = `${formatToAmPm(currentTime).hours}:${formatToAmPm(currentTime).minutes} ${
      formatToAmPm(currentTime).amOrPm
    }`;
  }
  if ((minTime != '' && compareTimes(currentTime, minTime) == 1) || minTime === '') {
    minTime = currentTime;
  }
  return minTime;
};

const setMaxTime = (maxTime, disabledFuture, format12) => {
  if (!disabledFuture) {
    return maxTime;
  }
  let currentTime = getCurrentTime();

  // this will adjust function to maxHour option
  if (maxTime.length <= 2 && maxTime != '') {
    currentTime = currentTime.split(':')[0];
    if (currentTime > maxTime) {
      maxTime = currentTime;
    }
    return maxTime;
  }

  if (format12) {
    currentTime = `${formatToAmPm(currentTime).hours}:${formatToAmPm(currentTime).minutes} ${
      formatToAmPm(currentTime).amOrPm
    }`;
  }
  if ((maxTime != '' && compareTimes(currentTime, maxTime) == 2) || maxTime === '') {
    maxTime = currentTime;
  }
  return maxTime;
};

const checkValueBeforeAccept = (
  { format12, maxHour, minHour, maxTime, minTime, disablePast, disableFuture },
  input,
  hourHeader,
  minutesHeader
) => {
  const minute = takeValue(input)[1];

  minTime = setMinTime(minTime, disablePast, format12);
  minHour = setMinTime(minHour, disablePast, format12);
  maxTime = setMaxTime(maxTime, disableFuture, format12);
  maxHour = setMaxTime(maxHour, disableFuture, format12);

  const [maxTimeHour, maxTimeMin, maxTimeFormat] = takeValue(maxTime, false);
  const [minTimeHour, minTimeMin, minTimeFormat] = takeValue(minTime, false);

  if (maxHour !== '' && minHour !== '') {
    if (Number(hourHeader) > Number(maxHour) || Number(hourHeader) < Number(minHour)) {
      return;
    }
  } else if (maxHour === '' && minHour !== '') {
    if (Number(hourHeader) < Number(minHour)) {
      return;
    }
  } else if (maxHour !== '' && minHour === '') {
    if (Number(hourHeader) > Number(maxHour)) {
      return;
    }
  }

  if (maxTimeFormat === undefined && minTimeFormat === undefined) {
    if (maxTimeFormat === undefined) {
      if (maxTimeHour !== '' && minTimeHour === '') {
        if (Number(hourHeader) > Number(maxTimeHour)) {
          return;
        }

        if (maxTimeMin !== '' && minTimeMin === undefined) {
          if (Number(hourHeader) > Number(maxTimeHour)) {
            return;
          }
        }
      } else if (maxTimeHour === '' && minTimeHour !== '') {
        if (maxTimeMin === undefined && minTimeMin !== '') {
          if (
            Number(hourHeader) < Number(minTimeHour) ||
            (Number(hourHeader) < Number(minTimeHour) && minutesHeader < Number(minTimeMin))
          ) {
            return;
          }
        }
      }
    } else if (minTimeFormat === undefined) {
      if (maxTimeHour !== '' && minTimeHour === '') {
        if (Number(hourHeader) > Number(maxTimeHour)) {
          return;
        }

        if (maxTimeMin !== '' && minTimeMin === undefined) {
          if (Number(hourHeader) > Number(maxTimeHour) || minutesHeader > Number(maxTimeMin)) {
            return;
          }
        }
      } else if (maxTimeHour === '' && minTimeHour !== '') {
        if (maxTimeMin === undefined && minTimeMin !== '') {
          if (Number(hourHeader) < Number(minTimeHour) || minutesHeader < Number(minTimeMin)) {
            return;
          }
        }
      }
    }
  }

  return [hourHeader, minute];
};

export {
  checkBrowser,
  findMousePosition,
  formatNormalHours,
  formatToAmPm,
  toggleClassHandler,
  checkValueBeforeAccept,
  takeValue,
  compareTimes,
  setMinTime,
  setMaxTime,
};
