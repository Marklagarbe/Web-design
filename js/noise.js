// Noise maths (value noise + fbm) used to generate planet surfaces.
// ---- procedural planets
let SEED=0;
const H3=(x,y,z)=>{const n=Math.sin(x*127.1+y*311.7+z*74.7+SEED)*43758.5453;return n-Math.floor(n)},LP=(a,c,t)=>a+(c-a)*t,cl01=v=>v<0?0:v>1?1:v,
mx=(a,c,t)=>{t=cl01(t);return[LP(a[0],c[0],t),LP(a[1],c[1],t),LP(a[2],c[2],t)]};
function vn(x,y,z){const X=Math.floor(x),Y=Math.floor(y),Z=Math.floor(z),f=v=>{v-=Math.floor(v);return v*v*(3-2*v)},u=f(x),v=f(y),w=f(z),h=H3;
return LP(LP(LP(h(X,Y,Z),h(X+1,Y,Z),u),LP(h(X,Y+1,Z),h(X+1,Y+1,Z),u),v),LP(LP(h(X,Y,Z+1),h(X+1,Y,Z+1),u),LP(h(X,Y+1,Z+1),h(X+1,Y+1,Z+1),u),v),w)}
function fbm(x,y,z){let s=0,a=.5;for(let i=0;i<5;i++){s+=a*vn(x,y,z);x*=2;y*=2;z*=2;a/=2}return s/.97}
