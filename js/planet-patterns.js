// Colour rules for each planet surface (PT) + atmosphere colours (AC) + texture cache.
const PT=[
(x,y,z)=>{const n=fbm(x*1.3+fbm(x*3,y*3,z*3)*.8,y*5,z*1.3),c=mx([238,206,142],[184,126,60],n*1.5-.25);return[...c,0,0]},
(x,y,z,la)=>{const h=cl01((fbm(x*2.2,y*2.2,z*2.2)-.5)*1.8+.5),n=fbm(x*7+5,y*7,z*7);let c,sp=0;
if(h<.55){const t=h/.55;c=mx([3,24,70],[16,100,190],t*t*t);sp=255;if(t>.93)c=mx(c,[70,170,205],.6)}
else{const t=(h-.55)/.45;c=t<.06?[205,182,126]:t<.4?mx([70,128,52],[34,84,38],n*1.4-.2):t<.72?mx([124,102,72],[88,74,58],n):[240,244,250]}
if(Math.abs(la)>1.18+(n-.5)*.35){c=[240,246,255];sp=0}
return[...c,sp,cl01((fbm(x*3.4+9,y*5,z*3.4)-.46)*3.4)*215]},
(x,y,z,la)=>{const h=fbm(x*2.6,y*2.6,z*2.6),n=fbm(x*9,y*9,z*9);let c=mx([96,40,22],[222,146,96],(h-.3)*2.2);c=mx(c,[70,30,18],(n-.5)*.9);
if(Math.abs(la)>1.4+(n-.5)*.2)c=[240,238,240];return[...c,10,cl01((fbm(x*4,y*7,z*4)-.55)*3)*60]}];
const AC=[[1,.78,.45],[.3,.6,1],[1,.5,.3]],cache={};
