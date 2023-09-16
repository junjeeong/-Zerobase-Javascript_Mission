const currentDay = document.getElementsByClassName('current-date')[0],
    days = document.getElementsByClassName('days')[0],
    prevNextIcon = document.querySelectorAll('button');    

let date = new Date();
let currYear = date.getFullYear(),
    currMonth = date.getMonth(),
    months = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December',];

const renderCalendar = () => {
    const firstDateofMonth = new Date(currYear, currMonth, 1).getDate(),
        lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(),
        lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(),
        lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate();
    let liTag = '';

    for (let i = firstDateofMonth; i > 0; i--) {
        liTag += `<li class = "inactive">${lastDateofLastMonth-i + 1 }</li>`;
    }
 
    for (let i = 1; i <= lastDateofMonth; i++) {
        let isToday = i === date.getDate() && currMonth === new Date().getMonth() && currYear === new Date().getFullYear() ? "active" : "";
        liTag += `<li class = "${isToday}">${i}</li>`;
    }
 
    for (let i = lastDayofMonth; i < 6; i++) {
        liTag += `<li class = "inactive">${i - lastDayofMonth + 1}</li>`;
    }

    currentDay.innerHTML = `${months[currMonth]} ${currYear}`;
    days.innerHTML = liTag;
}
renderCalendar();

prevNextIcon.forEach((icon) => {
    icon.addEventListener('click', () => {
    currMonth = icon.id === 'prev' ? currMonth - 1 : currMonth + 1;

        if (currYear < 0 || currYear > 11) {
            date = new Date(currYear, currMonth);
            currYear = date.getFullYear();
            currMonth = date.getMonth();
        } else {
            date = new Date();
        }
    renderCalendar();
    });
});