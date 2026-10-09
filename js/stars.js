// Creates the twinkling background stars.
// stars
const st=document.getElementById('stars');
for(let i=0;i<70;i++){const s=document.createElement('span');s.style.cssText=`left:${Math.random()*100}%;top:${Math.random()*100}%;animation-delay:${Math.random()*4}s;opacity:${.2+Math.random()*.5}`;st.appendChild(s)}
