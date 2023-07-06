import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

document.addEventListener('DOMContentLoaded', () => {
  let flatpickrInstance;

  flatpickr('#datetime-picker', {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      const selectedDate = selectedDates[0];
      const currentDate = new Date();

      if (selectedDate <= currentDate) {
        window.alert('Пожалуйста, выберите дату в будущем');
      } else {
        const startButton = document.querySelector('button[data-start]');
        startButton.disabled = false;

        startButton.addEventListener('click', () => {
          const selectedDate = flatpickrInstance.selectedDates[0];
          startTimer(selectedDate);
        });
      }
    },
    onReady(selectedDates, dateStr, instance) {
      flatpickrInstance = instance;
    },
  });
});

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function updateTimerFields({ days, hours, minutes, seconds }) {
  const timerFields = document.querySelectorAll('.timer .value');

  timerFields.forEach((field, index) => {
    const value = [days, hours, minutes, seconds][index];
    field.textContent = addLeadingZero(value);
  });
}

function startTimer(targetDate) {
  const updateTimer = setInterval(() => {
    const currentDate = new Date();
    const timeDifference = targetDate - currentDate;

    if (timeDifference <= 0) {
      clearInterval(updateTimer);
      return;
    }

    const timeComponents = convertMs(timeDifference);
    updateTimerFields(timeComponents);
  }, 1000);
}
