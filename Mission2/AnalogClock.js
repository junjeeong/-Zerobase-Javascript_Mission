const AnalogClock = $container => {

const $hourHand = document.createElement('div');
const $minuteHand = document.createElement("div");
const $secondHand = document.createElement("div");

$hourHand.classList.add("hand", "hour");
$minuteHand.classList.add("hand", "minute");
$secondHand.classList.add("hand", "second");

$container.append($hourHand, $minuteHand, $secondHand);

for (let i = 1; i <= 12; i++) {
    const $timeMark = document.createElement('div');
    $timeMark.classList.add("time", `time${i}`);
    $timeMark.textContent = "|";
    $container.append($timeMark);
}

const runClock = () => {
    const now = new Date();
    const hours = now.getHours() % 12;
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
  
    const hourDeg = (hours * 30) + (minutes * 0.5);
    const minuteDeg = (minutes * 6) + (seconds * 0.1);
    const secondDeg = seconds * 6;
  
    $hourHand.style.setProperty("--deg", hourDeg);
    $minuteHand.style.setProperty("--deg", minuteDeg);
    $secondHand.style.setProperty("--deg", secondDeg);
  };
  
  setInterval(runClock, 1000);
};

export default AnalogClock;
