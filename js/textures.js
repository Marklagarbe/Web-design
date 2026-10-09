// make(i): paints the map / specular / cloud / city-lights textures for planet i.
function make(i){if(cache[i])return cache[i];const W=640,Hh=320,cs=[0,0,0,0].map(()=>{const c=document.createElement('canvas');c.width=W;c.height=Hh;return c}),
d=cs.map(c=>c.getContext('2d').createImageData(W,Hh));SEED=P[i].seed;
for(let y=0;y<Hh;y++){const la=(y/Hh-.5)*Math.PI,cl=Math.cos(la),yy=Math.sin(la);
for(let x=0;x<W;x++){const th=x/W*6.2832,v=PT[i](Math.cos(th)*cl,yy,Math.sin(th)*cl,la),o=(y*W+x)*4;
d[0].data.set([v[0],v[1],v[2],255],o);d[1].data.set([v[3],v[3],v[3],255],o);d[2].data.set([255,255,255,v[4]],o);
const px=Math.cos(th)*cl,pz=Math.sin(th)*cl;let L=0,lc=[255,200,110];
if(i===1&&v[3]===0&&v[0]<230){const n=fbm(px*14+3,yy*14,pz*14);if(n>.56)L=cl01((n-.56)*7)*cl01((fbm(px*45,yy*45,pz*45)-.42)*5)}
else if(i===0){L=cl01((fbm(px*5+2,yy*5,pz*5)-.5)*3.2);lc=[255,110,30]}
else if(i===2){L=cl01((fbm(px*6+7,yy*6,pz*6)-.58)*2.2)*.6;lc=[210,80,35]}
d[3].data.set([lc[0]*L,lc[1]*L,lc[2]*L,255],o)}}
const T=(c,k)=>{c.getContext('2d').putImageData(d[k],0,0);const t=new THREE.CanvasTexture(c);t.wrapS=THREE.RepeatWrapping;t.encoding=THREE.sRGBEncoding;return t};
return cache[i]={map:T(cs[0],0),spec:T(cs[1],1),cloud:T(cs[2],2),lights:T(cs[3],3)}}
