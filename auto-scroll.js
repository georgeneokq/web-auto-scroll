/*
 * Problem with instant scrolling using window.scrollTo: scroll speed too slow.
 * Try using jquery-auto-scroll.js if you require smooth scrolling.
 */
let interval;
let clearCounterTimeout;
let counter = 0;
let instantScroll = true;  // In case some sites like instagram don't process instant scrolls well
let previousScrollHeight = 0;
let m_startInterval = function() {
  if(interval) return;
  interval = window.setInterval(function() {
    const currentScrollHeight = document.documentElement.scrollHeight;
    if(currentScrollHeight == previousScrollHeight)
        return
    previousScrollHeight = currentScrollHeight
      
    window.scrollTo({
      top: currentScrollHeight,
      left: 0,
      behavior: instantScroll ? 'instant' : 'smooth'
    });
  }, 100);
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
