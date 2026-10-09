# spaceedu – Planet Earth

Open `index.html` in a browser (needs internet for Three.js + Google Fonts).

```
spaceedu/
├─ index.html          page structure; links every css + js file below
├─ css/                (loaded top to bottom – order matters)
│  ├─ base.css           colours, fonts, reset, background, stars
│  ├─ animations.css     enter/exit animation of hero + detail text
│  ├─ nav.css            top navigation
│  ├─ hero.css           hero title, buttons, side planets
│  ├─ planet-switch.css  Venus/Earth/Mars slide transition
│  ├─ earth-legacy.css   UNUSED old css earth (safe to delete)
│  ├─ detail.css         detail scene
│  ├─ states.css         s2 (detail) / s3 (zoom) changes
│  ├─ zoom.css           zoom scene text
│  └─ responsive.css     mobile + reduced-motion
└─ js/                 (loaded top to bottom – order matters)
   ├─ core.js            shared state: cur, state, sw, $, b
   ├─ data/planets.js    text + colours of each planet
   ├─ stars.js           background stars
   ├─ noise.js           noise maths
   ├─ planet-patterns.js surface colour rules
   ├─ textures.js        make(i) paints the textures
   ├─ scene.js           Three.js scene
   ├─ planet-view.js     apply() shows current planet
   ├─ motion.js          aim(), resize, mouse parallax
   ├─ render-loop.js     per-frame animation
   ├─ transitions.js     set() and go()
   ├─ events.js          clicks, keys, swipe
   └─ main.js            starts the intro
```

## How the files stay connected
The JS files are plain `<script>` tags (no import/export), so they share the same
variables. A file can use anything defined in a file loaded before it, e.g.
`events.js` calls `go()` from `transitions.js`, and `transitions.js` uses `aim()`
from `motion.js` and `state` from `core.js`. That's why the order in `index.html`
must not change. Plain scripts also work when you just double-click `index.html`.

## Where to edit
- Planet text / colours → `js/data/planets.js`
- Transition between planets → `js/transitions.js` + `css/planet-switch.css`
- Look of buttons / title → `css/hero.css`
