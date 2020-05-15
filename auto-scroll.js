let interval;
let m_startInterval = function() {
    if(interval) return;
    interval = window.setInterval(function() {
        window.scrollTo(0, document.body.scrollHeight);
    }, 0);
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
let lastScrollTop = 0;
window.addEventListener('scroll', function(e) {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if(scrollTop < lastScrollTop) {
        m_clear();
    }
    lastScrollTop = scrollTop;
});