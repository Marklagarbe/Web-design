// Buttons, arrow keys and swipe -> call set() / go().
$('start').onclick=$('dn').onclick=()=>set('s2');
$('more').onclick=$('play').onclick=()=>set('s3');
$('back').onclick=$('bk').onclick=()=>set('');
$('pl').onclick=$('mv').onclick=()=>go(-1);
$('pr').onclick=$('mm').onclick=()=>go(1);
addEventListener('keydown',e=>{if(e.key==='ArrowLeft')go(-1);else if(e.key==='ArrowRight')go(1)});
let sx=null;addEventListener('pointerdown',e=>{sx=e.clientX});
addEventListener('pointerup',e=>{if(sx===null)return;const dx=e.clientX-sx;sx=null;if(Math.abs(dx)>80)go(dx<0?1:-1)});
