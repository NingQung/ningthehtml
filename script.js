const html = document.querySelector('html');

//Now: 10ms*a
function delay(n){return new Promise(function(resolve){setTimeout(resolve,n*10);});};

const mainlanda = document.getElementById('mainlanda');
const textbox = document.getElementById('scr-text');
const dotbartop = document.getElementById('top-twodot')
const dotbarbot = document.getElementById('bot-twodot')
const tbstyle = textbox.style;

mainlanda.addEventListener('mouseover',function(){
  tbstyle.transition = 'left 0.3s cubic-bezier(0,0,1,.2) 0.9s';
})
mainlanda.addEventListener('mouseleave',function(){
  tbstyle.transition =  'left 0.3s cubic-bezier(.3,1,.7,1) 0.4s';
})



