var doc = window.document,
  context = doc.querySelector('.js-loop');

function eightSections(n){
    context.scrollTop = count;
    count += 500;
    n++
    if(n<8) setTimeout(eightSections, 3000, n);
    else{
        n=0;
        context.scrollTop = 0;
        count = 0;
        eightSections(0);
    }
    console.log('eightSections(n) --> n: '+n)
}

function init () {
  eightSections(0);
}

if (document.readyState !== 'loading') {
  init()
} else {
  doc.addEventListener('DOMContentLoaded', init, false)
}
