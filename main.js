var doc = window.document,
  context = doc.querySelector('.js-loop'),
  count = 0,
  n = 0,
  myTimeout;

function eightSections(){
    context.scrollTop = count;
    count += 500;
    n++;
    if(n<8){
        myTimeout = setTimeout(eightSections, 1500, n);
    }
    else{
        n=0;
        context.scrollTop = 0;
        count = 0;
        eightSections();
    }
    console.log('eightSections(n) --> n: '+n)
}

function stopTimeout(){
    clearTimeout(myTimeout);
}

function init () {
  eightSections();
}

context.onmouseenter = function() {stopTimeout()};
context.onmouseleave = function() {eightSections()};

if (document.readyState !== 'loading') {
  init()
} else {
  doc.addEventListener('DOMContentLoaded', init, false)
}
