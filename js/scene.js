// Three.js scene: renderer, camera, lights, planet sphere, clouds, atmosphere glow.
// ---- three.js scene
const cv=$('gl'),rn=new THREE.WebGLRenderer({canvas:cv,alpha:true,antialias:true});
rn.setPixelRatio(Math.min(devicePixelRatio,2));rn.outputEncoding=THREE.sRGBEncoding;
const sc=new THREE.Scene(),cam=new THREE.OrthographicCamera(-1,1,1,-1,-4000,4000);cam.position.z=10;
sc.add(new THREE.AmbientLight(0x3a4a7a,.7));const dl=new THREE.DirectionalLight(0xffffff,1.35);dl.position.set(-1.4,.9,1.6);sc.add(dl);
const rig=new THREE.Group(),tilt=new THREE.Group();tilt.rotation.z=.41;rig.add(tilt);sc.add(rig);
const geo=new THREE.SphereGeometry(1,96,64),pm=new THREE.MeshPhongMaterial({shininess:30,specular:0x556688}),planet=new THREE.Mesh(geo,pm),
cm=new THREE.MeshPhongMaterial({transparent:true,depthWrite:false}),clouds=new THREE.Mesh(geo,cm);clouds.scale.setScalar(1.014);tilt.add(planet,clouds);
const am=new THREE.ShaderMaterial({transparent:true,blending:THREE.AdditiveBlending,side:THREE.BackSide,depthWrite:false,uniforms:{c:{value:new THREE.Color(.3,.6,1)}},
vertexShader:'varying vec3 n;void main(){n=normalize(normalMatrix*normal);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',
fragmentShader:'uniform vec3 c;varying vec3 n;void main(){float i=pow(max(0.,.72-dot(n,vec3(0.,0.,1.))),3.);gl_FragColor=vec4(c,1.)*i*.95;}'}),atm=new THREE.Mesh(geo,am);
atm.scale.setScalar(1.16);rig.add(atm);
