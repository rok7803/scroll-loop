var doc = window.document,
  context = doc.querySelector('.js-loop'),
    clones = context.querySelectorAll('.is-clone'),
  count = 0,
  n = 0,
  myTimeout;

function eightSections(){
    context.scrollTop = n>6&&n<8?1000:count;
    count += 500;
    n++;
    if(n<7){
        myTimeout = setTimeout(eightSections, 1000, n);
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

// On touch devices
context.ontouchstart = function()
{stopTimeout()};

context.onmouseleave = function() {eightSections()};

// On touch devices
context.ontouchend = function()
{eightSections()};

if (document.readyState !== 'loading') {
  init()
} else {
  doc.addEventListener('DOMContentLoaded', init, false)
}
