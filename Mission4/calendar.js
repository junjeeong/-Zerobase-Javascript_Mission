const currentDay = document.getElementsByClassName('current-date')[0],
    days = document.getElementsByClassName('days')[0],
    prevNextIcon = document.querySelectorAll('button');

let date = new Date();
let currYear = date.getFullYear(),
    currMonth = date.getMonth(),
    currDay = date.getDate(),
    months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const renderCalendar = () => {
    const firstDateofMonth = new Date(currYear, currMonth, 1).getDay(),
        lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate();
    let liTag = '';

    for (let i = 0; i < firstDateofMonth; i++) {
        liTag += `<li class="inactive">${new Date(currYear, currMonth, -i).getDate()}</li>`;
    }

    for (let i = 1; i <= lastDateofMonth; i++) {
        let isToday = i === date.getDate() && currMonth === new Date().getMonth() && currYear === new Date().getFullYear() ? "active" : "";

        if (new Date(currYear, currMonth, i).getDay() === 0) {
            liTag += `<li class="sunday ${isToday}" data-year="${currYear}" data-month="${currMonth}" data-day="${i}">${i}</li>`;
        } else {
            liTag += `<li class="${isToday}" data-year="${currYear}" data-month="${currMonth}" data-day="${i}">${i}</li>`;
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
    console.log(`${year}-${month}-${day}`);
}

renderCalendar();

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
