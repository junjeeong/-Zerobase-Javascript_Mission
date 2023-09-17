// HTML 문서에서 필요한 요소들을 DOM으로 가져옵니다.
const dateInput = document.getElementById('date-input'); // 날짜 입력 필드
const calendar = document.querySelector('.calendar'); // 달력 컨테이너
const datePickerContainer = document.querySelector('.date-picker-container'); // 날짜 선택기 컨테이너

// 문서 전체에 클릭 이벤트 리스너를 등록합니다.
document.addEventListener('click', (event) => {
  // 달력 컨테이너 내부를 클릭한 경우나 날짜 입력 필드 자체를 클릭하지 않은 경우에 달력을 숨깁니다.
  if (!calendar.contains(event.target) && event.target !== dateInput) {
    calendar.style.display = 'none';
  }
});

// 날짜 입력 필드를 클릭했을 때의 이벤트 리스너를 등록합니다.
dateInput.addEventListener('click', () => {
  // 달력을 보여주고 렌더링합니다.
  calendar.style.display = 'block';
  renderCalendar();
});

// 현재 날짜와 달력 관련 요소들을 가져옵니다.
const currentDay = document.querySelector('.current-date'); // 현재 날짜 표시 요소
const days = document.querySelector('.days'); // 달력 날짜 요소들
const prevNextIcon = document.querySelectorAll('button'); // 이전 월, 다음 월 아이콘 버튼들

// 현재 날짜 정보를 초기화합니다.
let date = new Date();
let currYear = date.getFullYear();
let currMonth = date.getMonth();
let currDay = date.getDate();

// 월 이름 배열을 정의합니다.
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

// 달력을 렌더링하는 함수를 정의합니다.
const renderCalendar = () => {
  // 현재 월의 첫 번째 날과 마지막 날을 구합니다.
  const firstDateofMonth = new Date(currYear, currMonth, 1).getDay();
  const lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate();
  let liTag = '';

  // 이전 달의 일자를 비활성화된 상태로 추가합니다.
  for (let i = 0; i < firstDateofMonth; i++) {
    liTag += `<li class="inactive">${new Date(currYear, currMonth, -i).getDate()}</li>`;
  }

  // 현재 월의 일자를 추가합니다.
  for (let i = 1; i <= lastDateofMonth; i++) {
    let isToday = i === currDay && currMonth === date.getMonth() && currYear === date.getFullYear() ? "active" : "";
    let isCurrentMonth = currMonth === date.getMonth() && currYear === date.getFullYear() ? "current-month" : "";

    if (new Date(currYear, currMonth, i).getDay() === 0) {
      liTag += `<li class="sunday ${isToday} ${isCurrentMonth}" data-year="${currYear}" data-month="${currMonth}" data-day="${i}">${i}</li>`;
    } else {
      liTag += `<li class="${isToday} ${isCurrentMonth}" data-year="${currYear}" data-month="${currMonth}" data-day="${i}">${i}</li>`;
    }
  }

  // 다음 달의 일자를 비활성화된 상태로 추가합니다.
  const nextMonthStartDay = (firstDateofMonth + lastDateofMonth) % 7;
  if (nextMonthStartDay !== 0) {
    for (let i = 1; i <= 7 - nextMonthStartDay; i++) {
      liTag += `<li class="inactive">${i}</li>`;
    }
  }

  // 현재 월과 년도를 표시합니다.
  currentDay.innerHTML = `${months[currMonth]} ${currYear}`;
  // 날짜 요소들을 업데이트합니다.
  days.innerHTML = liTag;

  // 각 날짜 요소에 클릭 이벤트 리스너를 등록합니다.
  const dayElements = days.querySelectorAll('li');
  dayElements.forEach((dayElement) => {
    dayElement.addEventListener('click', () => {
      const year = dayElement.getAttribute('data-year');
      const month = dayElement.getAttribute('data-month');
      const day = dayElement.getAttribute('data-day');
      // 선택한 날짜를 표시합니다.
      showDate(year, month, day);
    });
  });
}

// 선택한 날짜를 표시하고 입력 필드에 설정하는 함수를 정의합니다.
function showDate(year, month, day) {
  month = Number(month) + 1;
  const selectedDate = `${year}-${month}-${day}`;
  dateInput.value = selectedDate;
  currYear = year;
  currMonth = month - 1;
  currDay = day;
  calendar.style.display = 'none';
}

// 날짜 입력 필드에 포커스가 들어올 때의 이벤트 리스너를 등록합니다.
dateInput.addEventListener('focus', () => {
  if (dateInput.value) {
    const selectedDate = new Date(dateInput.value);
    currYear = selectedDate.getFullYear();
    currMonth = selectedDate.getMonth();
    currDay = selectedDate.getDate();
    // 입력된 날짜에 맞게 달력을 다시 렌더링합니다.
    renderCalendar();
  }
});

// 이전 월, 다음 월 아이콘 버튼에 클릭 이벤트 리스너를 등록합니다.
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

    // 새로운 날짜로 달력을 다시 렌더링합니다.
    date = new Date(currYear, currMonth, currDay);
    renderCalendar();
  });
});
