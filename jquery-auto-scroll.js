/* Ensure jQuery is loaded before using this script */
let interval;
let clearCounterTimeout;
let counter = 0;
let scrollSpeed = 800  // milliseconds
let m_startInterval = function() {
    if(interval) return;
    interval = window.setInterval(function() {
      $('html, body').animate({
        scrollTop: document.documentElement.scrollHeight
      }, scrollSpeed)
    }, scrollSpeed + 100);
};
m_startInterval();
let m_clear = function() {
    if(!interval) return;
    window.clearInterval(interval);
    interval = null;
};
window.addEventListener('keyup', function(e) {
    let startKey = 's';
    let stopKey = 'd';
    if(e.key == startKey) m_startInterval();
    if(e.key == stopKey) m_clear();
});
window.addEventListener('click', function(e) {
    counter++;
    if(counter === 3) {
        m_clear();
        counter = 0;
    } else {
        clearCounterTimeout = window.setTimeout(function() {
            counter = 0;
        }, 1000);
    }
});
