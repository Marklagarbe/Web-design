// Per-frame loop: spring physics, rotation, lighting, draws the scene.
let last=performance.now();
(function tick(t){const dt=Math.min((t-last)/1000,.05);last=t;
if(tw){const p=Math.min((t-tw.t0)/tw.d,1);if(p>=0){const e=p<.5?4*p*p*p:1-Math.pow(-2*p+2,3)/2;for(const q of['x','y','r']){const n=tw.f[q]+(tw.t[q]-tw.f[q])*e;vel[q]=(n-cu[q])/Math.max(dt,.001);cu[q]=n}if(p>=1){for(const q of['x','y','r'])vel[q]=0;tw=null}}else for(const q of['x','y','r'])vel[q]=0}
else for(const q of['x','y','r']){vel[q]+=((tg[q]-cu[q])*20-vel[q]*8.9)*dt;cu[q]+=vel[q]*dt}
const s3=state==='s3';lk+=((s3&&!tw?1:0)-lk)*Math.min(1,dt*2.2);dk+=((s3&&!tw?1:0)-dk)*Math.min(1,dt*1.5);
dl.intensity=1.35-lk*P[cur].zd;pm.emissiveIntensity=lk*P[cur].ze;
const sp=.07+(Math.abs(vel.x)+Math.abs(vel.y)+Math.abs(vel.r))/W*1.3;
planet.rotation.y+=sp*dt;clouds.rotation.y+=(sp*1.25+.012)*dt;
mx0+=(tx-mx0)*.05;my0+=(ty-my0)*.05;rig.rotation.y=mx0*.18;rig.rotation.x=my0*.12;
rig.position.set(cu.x+Math.sin(t/2600)*W*.025*dk,cu.y+Math.cos(t/3300)*Hh*.02*dk,0);rig.scale.setScalar(Math.max(cu.r,1));rn.render(sc,cam);requestAnimationFrame(tick)})(last);
