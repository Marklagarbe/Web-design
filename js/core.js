// Shared state + helpers. cur = planet shown (0 Venus, 1 Earth, 2 Mars); state = "" hero | s2 detail | s3 zoom; sw = 1 while switching.
let cur=1,state='',sw=0;const $=id=>document.getElementById(id),b=document.body;
