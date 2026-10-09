// Position/size of the planet per state (aim), resize + mouse-parallax listeners.
// ---- motion (spring physics)
let W,Hh,tx=0,ty=0,mx0=0,my0=0,lk=0,dk=0,tw=null;const cu={x:0,y:0,r:1},tg={x:0,y:0,r:1},vel={x:0,y:0,r:0};
function aim(){const m=W<720;let r,x=0,y;
if(state==='s2'){r=m?W*.4:Math.min(W*.18,260);x=m?0:W*.22;y=m?Hh*.68:Hh*.5}
else if(state==='s3'){r=Math.max(W*.95,Hh*.8);y=Hh*.62}else{r=m?W*.65:W*.33;y=Hh*.79+r}
tg.r=r;tg.x=x;tg.y=Hh/2-y}
function size(){W=innerWidth;Hh=innerHeight;rn.setSize(W,Hh);cam.left=-W/2;cam.right=W/2;cam.top=Hh/2;cam.bottom=-Hh/2;cam.updateProjectionMatrix()}
size();aim();Object.assign(cu,tg,{y:-Hh*1.2});
addEventListener('resize',()=>{size();aim();if(tw)tw.t={...tg}});
addEventListener('pointermove',e=>{tx=e.clientX/W-.5;ty=e.clientY/Hh-.5});
