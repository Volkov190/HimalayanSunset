

const start = new Date();
setInterval(() => {
    const now = new Date();

    let time = Math.floor((now - start) / 1000);
    const hours = addZeroIfLessThenTen(Math.floor(time / 60 / 60));
    time -= +hours * 60 * 60;
    const minutes = addZeroIfLessThenTen(Math.floor(time / 60));
    time -= +minutes * 60;
    const seconds = addZeroIfLessThenTen(Math.floor(time));

     const timeStr = `${hours}:${minutes}:${seconds}`;

    // if (!document.querySelector('.timer__main-box').parentNode.classList.contains('content_inactive')) {
        document.querySelector('.timer__main-box').innerHTML = timeStr;
    // }
}, 1000);

function addZeroIfLessThenTen(val) {
    return val < 10 ? '0' + val : '' + val;
}