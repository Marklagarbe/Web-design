// set(): hero <-> detail <-> zoom.   go(d): slide to previous/next planet.
// ---- transitions
const set=c=>{if(sw)return;const prev=state;state=c;b.className=c;aim();
if(c==='s3'||prev==='s3'){const zin=c==='s3';tw={t0:performance.now()+(zin?450:0),d:zin?1700:1300,f:{...cu},t:{...tg}}}else tw=null};
function go(d){if(state||sw)return;sw=1;b.classList.add('sw');
b.style.setProperty('--dx',d>0?'-50px':'50px');b.style.setProperty('--mx',d>0?'-70px':'70px');
const off=W/2+cu.r*1.5;tg.x=d>0?-off:off;tg.r=cu.r*.8;
setTimeout(()=>{cur=(cur+d+3)%3;apply();cu.x=d>0?off:-off;vel.x=0;
/* put text + side planets on the opposite side instantly, then let them glide in */
b.classList.add('nt');b.style.setProperty('--dx',d>0?'50px':'-50px');b.style.setProperty('--mx',d>0?'70px':'-70px');aim();
void b.offsetWidth;b.classList.remove('nt','sw');sw=0},850)}
