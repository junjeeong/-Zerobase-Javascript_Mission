const dateInput = document.getElementById('date-input');
const calendar = document.querySelector('.calendar');
const datePickerContainer = document.querySelector('.date-picker-container');

// 1. date picker 영역과 calendar 영역 이외의 영역을 클릭했을 때 calendar가 사라지는 기능
document.addEventListener('click', (event) => {
  if (!calendar.contains(event.target) && event.target !== dateInput) {
    calendar.style.display = 'none';
  }
});

dateInput.addEventListener('click', () => {
  calendar.style.display = 'block';
  renderCalendar();
});

const currentDay = document.querySelector('.current-date');
const days = document.querySelector('.days');
const prevNextIcon = document.querySelectorAll('button');

let date = new Date();
let currYear = date.getFullYear();
let currMonth = date.getMonth();
let currDay = date.getDate();
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const renderCalendar = () => {
  const firstDateofMonth = new Date(currYear, currMonth, 1).getDay();
  const lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate();
  let liTag = '';

  for (let i = 0; i < firstDateofMonth; i++) {
    liTag += `<li class="inactive">${new Date(currYear, currMonth, -i).getDate()}</li>`;
  }

  for (let i = 1; i <= lastDateofMonth; i++) {
    let isToday = i === currDay && currMonth === date.getMonth() && currYear === date.getFullYear() ? "active" : "";
    console.log(currYear);
    console.log(currMonth);
    console.log(currDay);
    let isCurrentMonth = currMonth === date.getMonth() && currYear === date.getFullYear() ? "current-month" : "";

    if (new Date(currYear, currMonth, i).getDay() === 0) {
      liTag += `<li class="sunday ${isToday} ${isCurrentMonth}" data-year="${currYear}" data-month="${currMonth}" data-day="${i}">${i}</li>`;
    } else {
      liTag += `<li class="${isToday} ${isCurrentMonth}" data-year="${currYear}" data-month="${currMonth}" data-day="${i}">${i}</li>`;
    }
  }

  const nextMonthStartDay = (firstDateofMonth + lastDateofMonth) % 7;
  if (nextMonthStartDay !== 0) {
    for (let i = 1; i <= 7 - nextMonthStartDay; i++) {
      liTag += `<li class="inactive">${i}</li>`;
    }
  }

  currentDay.innerHTML = `${months[currMonth]} ${currYear}`;
  days.innerHTML = liTag;

  // 클릭 이벤트 리스너 추가
  const dayElements = days.querySelectorAll('li');
  dayElements.forEach((dayElement) => {
    dayElement.addEventListener('click', () => {
      const year = dayElement.getAttribute('data-year');
      const month = dayElement.getAttribute('data-month');
      const day = dayElement.getAttribute('data-day');
      showDate(year, month, day);
    });
  });
}

function showDate(year, month, day) {
  month = Number(month) + 1;
  const selectedDate = `${year}-${month}-${day}`;
  dateInput.value = selectedDate;
  currYear = year;
  currMonth = month - 1;
  currDay = day;
  calendar.style.display = 'none'; // 날짜를 선택한 후 캘린더를 숨깁니다.
}

// 2. Date picker의 값이 존재할 때 DatePicker를 다시 클릭(포커스)하면 DatePicker의 값을 기준으로 캘린더를 렌더링하는 기능
dateInput.addEventListener('focus', () => {
  if (dateInput.value) {
    const selectedDate = new Date(dateInput.value);
    currYear = selectedDate.getFullYear();
    currMonth = selectedDate.getMonth();
    currDay = selectedDate.getDate(); // 현재 날짜를 선택된 날짜로 업데이트합니다.
    renderCalendar();
  }
});

prevNextIcon.forEach((icon) => {
  icon.addEventListener('click', () => {
    if (icon.id === 'prev') {
      currMonth--;
      if (currMonth < 0) {
        currYear--;
        currMonth = 11;
      }
    } else {
      currMonth++;
      if (currMonth > 11) {
        currYear++;
        currMonth = 0;
      }
    }

    date = new Date(currYear, currMonth, currDay);
    renderCalendar();
  });
});
