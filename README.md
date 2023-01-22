The auto-scroll.js file contains the original source code for the auto scrolling. Can do smooth scroll instead of instant scroll by changing instantScroll variable to false, but the problem is that the script uses javascript's in-built window.scrollTo() function and the scroll speed is extremely slow. Using jquery-auto-scroll.js would be better, but requires jquery to be loaded on the page.

The jquery-auto-scroll.js file helps to scroll smoothly at an appropriate pace. Better implementation than auto-scroll.js but requires jquery to be loaded on the page first. If jquery isn't loaded, you can copy the [minified jquery library code](https://code.jquery.com/jquery-3.6.3.min.js) and paste it into the console to load it.

The auto-scroll-inline-js.txt file contains the URL version of the script that can be used by copying and pasting it onto the browser search bar. Only supports instant scrolling.

This has been tested to work on chrome. However, when pasted onto the bar, the 'javascript:' prefix is automatically deleted by chrome, so it is necessary to manually type it in after pasting.

To stop the auto scroll using a keyboard, press 'd'.

To resume the auto scroll using a keyboard, press 's'.

Alternatively, to stop the auto scroll, click the screen 3 times.
