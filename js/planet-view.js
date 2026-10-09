// apply(): puts the current planet (textures, text, side planets) onto the page.
function apply(){const p=P[cur],t=make(cur),Lf=P[(cur+2)%3],Rt=P[(cur+1)%3];
pm.map=t.map;pm.specularMap=t.spec;pm.emissiveMap=t.lights;pm.emissive.set(0xffffff);pm.needsUpdate=true;cm.map=t.cloud;cm.needsUpdate=true;clouds.visible=cur!==0;am.uniforms.c.value.setRGB(...AC[cur]);
$('hn').textContent=$('dn1').textContent=p.n;$('hp').textContent=p.h;$('dp').textContent=p.d;$('de').textContent=p.e;$('zf').textContent=p.z;
$('pl').textContent=Lf.n;$('pr').textContent=Rt.n;$('mv').style.background=Lf.g;$('mm').style.background=Rt.g}
make(0);make(2);apply();
