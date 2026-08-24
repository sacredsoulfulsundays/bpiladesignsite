(function () {
  "use strict";

  const IMG = "assets/images/";
  const DATA = window.BPILA_IMAGES || null;
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const SLIDES = [
    {
      id: "hero",
      n: "01",
      layout: "hero",
      transition: 1,
      photo: "hero-lobby.jpg",
      brand: "B Pila Design Studio",
      logo: "bpila-signature.svg",
      kicker: "Commercial + Institutional Interiors",
      title: ["Spaces with", "soul.", "Places with", "purpose."],
      sub: "For housing, care, wellness, and community.",
      foot: "Credentials + Selected Work",
    },
    {
      id: "timeline",
      n: "02",
      layout: "timeline",
      transition: 2,
      photos: ["timeline-left.jpg", "timeline-center.jpg", "timeline-right.jpg"],
      kicker: "Timeline + Experience",
      title: "Four decades of listening, creating, and becoming.",
      sub: "Design leadership since 1988. Affordable and community-centered housing delivery since 2018.",
      nodes: [
        { y: "1988", l: "Professional start", p: 0 },
        { y: "1997", l: "Created own firm", p: 0.16, below: true },
        { y: "2018", l: "Princeton Park completes", p: 0.36 },
        { y: "2022", l: "Hudson Village opens", p: 0.52, now: true, below: true },
        { y: "2023", l: "Tucker + Flagler complete", p: 0.68 },
        { y: "2025", l: "University + Mount Hermon · Culmer + Oasis", p: 0.84, below: true },
        { y: "2027", l: "Villa Jordana anticipated", p: 1 },
      ],
    },
    {
      id: "stats",
      n: "03",
      layout: "stats",
      transition: 2,
      photos: ["stats-tl.jpg", "stats-tr.jpg", "stats-bl.jpg", "stats-br.jpg"],
      kicker: "Experience at a glance",
      title: "Measured in years. Proven in communities.",
      stats: [
        { n: "40+", lab: "Years of design leadership" },
        { n: "30+", lab: "Completed named projects" },
        { n: "7", lab: "Featured case studies" },
        { n: "2018→27", lab: "Affordable-housing record" },
      ],
      cats: "Affordable + Workforce  /  Senior  /  Multifamily  /  Mixed-Use + TOD  /  Clubhouse + Amenity",
      roll: "Hudson Village  ·  Tucker Tower  ·  Oasis  ·  Princeton Park  ·  University Station  ·  Father Marquess-Barry  ·  Flagler Station  ·  Village View  ·  Mount Hermon  ·  Northside Transit Village I–IV  ·  Culmer Place  ·  Sailboat Bend  ·  Saratoga Crossings  ·  Brownsville Transit  ·  Quail Roost I, II + V  ·  Martin Manor  ·  Vista + Breeze  ·  Minneola Hills",
    },
    {
      id: "hudson",
      n: "04",
      layout: "intro",
      transition: 0,
      photo: "hudson-aerial.jpg",
      inset: "hudson-inset.jpg",
      insetCap: "Grand Opening",
      loc: "Hollywood, Florida",
      title: "Hudson Village",
      body: "Affordable housing with a hospitality-minded arrival and warm, expressive shared spaces.",
      stats: [
        { n: "96", l: "Affordable units" },
        { n: "2022", l: "Completed" },
        { n: "20+ yrs", l: "First local high-rise" },
      ],
      chips: ["2023 NAIOP  ·  Project of the Year", "2023 MHN Gold  ·  Affordable Design"],
    },
    {
      id: "hudson-g",
      n: "05",
      layout: "gallery-asym",
      transition: 1,
      photos: ["hudson-g1.jpg", "hudson-g2.jpg", "hudson-g3.jpg"],
      name: "Hudson Village",
      cap: "Graphic rhythm, warm woods, and flexible gathering zones create a confident sense of belonging.",
    },
    {
      id: "tucker",
      n: "06",
      layout: "intro",
      transition: 0,
      photo: "tucker-aerial.jpg",
      inset: "tucker-inset.jpg",
      insetCap: "Grand Opening",
      loc: "West Perrine, Miami-Dade",
      title: "Tucker Tower",
      body: "Senior housing designed for dignity, clarity, connection, and active everyday life.",
      stats: [
        { n: "120", l: "Senior units" },
        { n: "$44M", l: "Development" },
        { n: "2024", l: "Grand opening" },
      ],
      chips: ["2024 MFE  ·  Senior Housing Merit", "2024 SFBJ  ·  Best Affordable Residential"],
    },
    {
      id: "tucker-g",
      n: "07",
      layout: "gallery-quad",
      transition: 1,
      photos: ["tucker-g1.jpg", "tucker-g2.jpg", "tucker-g3.jpg", "tucker-g4.jpg"],
      name: "Tucker Tower",
      cap: "Layered blues, tactile finishes, and intuitive wayfinding make amenity spaces feel warm and residential.",
    },
    {
      id: "university",
      n: "08",
      layout: "intro",
      transition: 0,
      photo: "university-aerial.jpg",
      inset: "university-inset.jpg",
      insetCap: "Ribbon Cutting",
      loc: "Hollywood, Florida",
      title: "University\nStation",
      body: "A $100M transit-oriented development uniting housing, learning, retail, parking, and public purpose.",
      stats: [
        { n: "216", l: "Affordable homes" },
        { n: "635", l: "Parking spaces" },
        { n: "2025", l: "Completed" },
      ],
      chips: ["2023 SFBJ  ·  Best Speculative Project", "2025 SFBJ  ·  Best Affordable Residential"],
      credit: "B Pila: development interiors  /  Barry University interiors: Kaller Architecture",
    },
    {
      id: "university-g",
      n: "09",
      layout: "gallery-asym",
      transition: 1,
      photos: ["university-g1.jpg", "university-g2.jpg", "university-g3.jpg"],
      name: "University Station",
      cap: "A fresh green palette and playful social zones bring energy to resident wellness and connection.",
    },
    {
      id: "mounthermon",
      n: "10",
      layout: "intro",
      transition: 0,
      photo: "mounthermon-aerial.jpg",
      inset: "mounthermon-inset.jpg",
      insetCap: "Community Arrival",
      loc: "Fort Lauderdale, Florida",
      title: "Mount Hermon\nApartments",
      body: "A faith-community partnership delivering contemporary, affordable senior living with purpose.",
      stats: [
        { n: "104", l: "Senior units" },
        { n: "$43.5M", l: "Development" },
        { n: "2025", l: "Completed" },
      ],
      chips: ["2025 MHN Bronze  ·  Senior Housing", "2025 FRA  ·  Outstanding Housing Project"],
    },
    {
      id: "mounthermon-g",
      n: "11",
      layout: "gallery-asym",
      transition: 1,
      photos: ["mounthermon-g1.jpg", "mounthermon-g2.jpg", "mounthermon-g3.jpg"],
      name: "Mount Hermon Apartments",
      cap: "Natural textures, generous greenery, and crisp modern lines create a calm, social home base.",
    },
    {
      id: "minneola",
      n: "12",
      layout: "intro",
      transition: 0,
      photo: "minneola-aerial.jpg",
      inset: "minneola-inset.jpg",
      insetCap: "Community + Landscape",
      loc: "Minneola, Florida",
      title: "Minneola Hills",
      body: "A resort-minded multifamily community where clubhouse, wellness, and gathering spaces set the tone.",
      stats: [
        { n: "297", l: "Apartments" },
        { n: "10", l: "Residential buildings" },
        { n: "8,000+", l: "Sq. ft. clubhouse" },
      ],
      chips: ["NAIOP  ·  Best Multifamily Development", "AAGO  ·  Multifamily Project of the Year"],
    },
    {
      id: "minneola-g",
      n: "13",
      layout: "gallery-span",
      transition: 1,
      photos: ["minneola-g1.jpg", "minneola-g3.jpg", "minneola-g4.jpg"],
      name: "Minneola Hills",
      cap: "Architectural arches, crafted details, and distinctive rooms turn a large clubhouse into a memorable sequence.",
    },
    {
      id: "culmer",
      n: "14",
      layout: "intro",
      transition: 0,
      photo: "culmer-aerial.jpg",
      inset: "culmer-inset.jpg",
      insetCap: "Community Clubroom",
      loc: "Overtown, Miami",
      title: "Culmer Place",
      body: "Family-focused affordable housing where clubroom, fitness, recreation, and gathering spaces support everyday connection.",
      stats: [
        { n: "239", l: "Affordable homes" },
        { n: "7", l: "Stories" },
        { n: "30–80%", l: "Area median income" },
      ],
      chips: ["Clubroom  ·  Billiards  ·  Business Center", "Fitness + Cycle  ·  Resort-style pool"],
    },
    {
      id: "culmer-g",
      n: "15",
      layout: "gallery-tri",
      transition: 1,
      photos: ["culmer-g1.jpg", "culmer-g2.jpg", "culmer-g3.jpg"],
      name: "Culmer Place",
      cap: "Warm neutrals, sculptural lighting, and flexible gathering zones give the clubhouse a confident sense of welcome.",
    },
    {
      id: "oasis",
      n: "16",
      layout: "intro",
      transition: 0,
      photo: "oasis-aerial.jpg",
      inset: "oasis-inset.jpg",
      insetCap: "Community Arrival",
      loc: "Aventura / Ojus, Miami-Dade",
      title: "Oasis at\nAventura",
      body: "Affordable senior living shaped around wellness, independence, and community.",
      stats: [
        { n: "95", l: "Senior homes" },
        { n: "$38M", l: "Development" },
        { n: "2025", l: "Completed" },
      ],
      chips: ["NGBS Certified  ·  Energy-efficient", "Community  ·  Fitness  ·  Library  ·  Terrace"],
    },
    {
      id: "oasis-g",
      n: "17",
      layout: "gallery-quad",
      transition: 1,
      photos: ["oasis-g1.jpg", "oasis-g2.jpg", "oasis-g3.jpg", "oasis-g4.jpg"],
      name: "Oasis at Aventura",
      cap: "A calm, modern palette connects lobby, lounge, recreation, and wellness spaces into one cohesive resident experience.",
    },
    {
      id: "leadership",
      n: "18",
      layout: "leadership",
      transition: 1,
      photos: ["bea-portrait.jpg", "florinda-portrait.jpg"],
      people: [
        {
          name: "Bea Pila-Gonzalez",
          role: "Founder + Principal  ·  ASID, NCIDQ",
          bio: "Four decades of design leadership. Interior designer, author, furniture designer, educator, and advocate for expressive spaces grounded in listening and human connection.",
        },
        {
          name: "Florinda Rossini",
          role: "Architecture + Interior Design  ·  NCIDQ-certified",
          bio: "20+ years across architecture and interiors, from high-end homes to offices, clubhouses, multifamily, and hospitality—balancing beauty, function, purpose, and community impact.",
        },
      ],
    },
    {
      id: "awards",
      n: "19",
      layout: "awards",
      transition: 2,
      kicker: "Awards + Accolades + Media",
      title: "Recognition rooted in work that serves.",
      honors: [
        { name: "Hudson Village", a: "NAIOP Project of the Year  ·  MHN Gold" },
        { name: "Mount Hermon", a: "MHN Bronze Senior Housing  ·  FRA Outstanding Housing Project" },
        { name: "Tucker Tower", a: "MFE Senior Housing Merit  ·  SFBJ Best Affordable Residential" },
        { name: "Minneola Hills", a: "NAIOP Best Multifamily Development  ·  AAGO Project of the Year  ·  ORA Elite 1%" },
        { name: "University Station", a: "SFBJ Best Speculative Project  ·  Best Affordable Residential" },
      ],
      career: [
        { name: "ASID Designer of the Year", a: "Halo / Metalux Competition" },
        { name: "IDG Designer of the Year", a: "1995, 1997" },
        { name: "ASID Design Excellence", a: "1997, 1999  ·  Furniture 1996" },
        { name: "Absolut Vodka Interior Designer of the Year", a: "1996" },
        { name: "Andrew Martin International Interior Design Award", a: "1998, 2003" },
        { name: "International Design Awards", a: "2014" },
        { name: "Latin Builders Association Best Company of the Year", a: "2001" },
        { name: "Southern Accents National Interior Design Contest", a: "2002, 2004" },
        { name: "Home Book Design Excellence Awards", a: "2002" },
        { name: "Florida’s Best Awards", a: "2006" },
        { name: "Midnight Affair Design Excellence Awards", a: "2003" },
        { name: "Dream House Interior Design Showcase", a: "2003" },
        { name: "Florida Style Competition Grand Prize", a: "1995 Hors Concours  ·  1996 Bedroom" },
        { name: "ASFD Pinnacle Awards Finalist", a: "2014  ·  Casual Dining" },
        { name: "Interior Design BOY Awards Finalist", a: "2016  ·  Recreational Tables" },
      ],
      media: [
        "HGTV Designer's Challenge",
        "HGTV Interiors by Design",
        "DIY Network",
        "TEDx",
      ],
      lead: "Miami Dade College Hall of Fame  ·  Luxe Gold List  ·  TCI Top 50 Women-Owned Businesses in Florida",
    },
  ];

  const esc = (s) =>
    String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");

  const src = (file) => (DATA && DATA[file]) || IMG + file;

  function photoEl(file, cls, zoom) {
    return `<div class="photo ${cls || ""} ${zoom ? "zoomable" : ""}"><img alt="" src="${src(file)}" draggable="false"></div>`;
  }

  function foot(n) {
    return `<div class="slide-foot">B Pila Design Studio  /  ${n}</div>`;
  }

  function render(s) {
    switch (s.layout) {
      case "hero":
        return `<section class="slide" data-id="${s.id}">
          <div class="hero-rail">
            <div class="brand-logo reveal"><img src="${src(s.logo)}" alt="${esc(s.brand)}"></div>
            <div class="kicker reveal">${esc(s.kicker)}</div>
            <div class="display">${s.title.map((t) => `<span class="clip"><span class="reveal">${esc(t)}</span></span>`).join("")}</div>
            <div class="body reveal">${esc(s.sub)}</div>
            <div class="foot-label reveal">${esc(s.foot)}</div>
          </div>
          <div class="accent-bar hero-tick"></div>
          ${photoEl(s.photo, "hero-photo")}
        </section>`;
      case "timeline":
        return `<section class="slide" data-id="${s.id}">
          ${photoEl(s.photos[0], "tri-a")}
          ${photoEl(s.photos[1], "tri-b")}
          ${photoEl(s.photos[2], "tri-c")}
          <div class="veil-top"></div><div class="veil-bot"></div>
          <div class="timeline-copy">
            <div class="kicker reveal">${esc(s.kicker)}</div>
            <div class="display reveal">${esc(s.title)}</div>
            <div class="sub reveal">${esc(s.sub)}</div>
          </div>
          <div class="tl-wrap">
            <div class="tl-line"></div>
            ${s.nodes
              .map(
                (nd) => `<div class="tl-node ${nd.now ? "is-now" : ""}" style="left:${3 + nd.p * 94}%">
              <div class="tl-card ${nd.below ? "below" : "above"}">
                <div class="tl-year">${esc(nd.y)}</div>
                <div class="tl-label">${esc(nd.l)}</div>
              </div>
              <div class="tl-dot"></div>
            </div>`
              )
              .join("")}
          </div>
          ${foot(s.n)}
        </section>`;
      case "stats":
        return `<section class="slide" data-id="${s.id}">
          ${photoEl(s.photos[0], "quad-photo q-tl")}
          ${photoEl(s.photos[1], "quad-photo q-tr")}
          ${photoEl(s.photos[2], "quad-photo q-bl")}
          ${photoEl(s.photos[3], "quad-photo q-br")}
          <div class="stats-panel">
            <div class="kicker reveal">${esc(s.kicker)}</div>
            <div class="display reveal">${esc(s.title)}</div>
            <div class="stat-row">
              ${s.stats
                .map(
                  (st) => `<div class="reveal">
                <div class="stat-bar"></div>
                <div class="stat-num" data-val="${esc(st.n)}">${esc(st.n)}</div>
                <div class="stat-lab">${esc(st.lab)}</div>
              </div>`
                )
                .join("")}
            </div>
          </div>
          <div class="stats-lower">
            <div class="cat-row reveal">${esc(s.cats)}</div>
            <div class="project-roll reveal">${esc(s.roll)}</div>
          </div>
          ${foot(s.n)}
        </section>`;
      case "intro":
        return `<section class="slide" data-id="${s.id}">
          <div class="intro-rail">
            <div class="kicker reveal">${esc(s.loc)}</div>
            <div class="display">${s.title.split("\n").map((t) => `<span class="clip"><span class="reveal">${esc(t)}</span></span>`).join("")}</div>
            <div class="accent-bar"></div>
            <div class="body reveal">${esc(s.body)}</div>
            <div class="intro-stats">
              ${s.stats
                .map(
                  (st) => `<div class="reveal"><div class="n">${esc(st.n)}</div><div class="l">${esc(st.l)}</div></div>`
                )
                .join("")}
            </div>
            <div class="chips">
              ${s.chips.map((c) => `<div class="chip reveal">${esc(c)}</div>`).join("")}
            </div>
            ${s.credit ? `<div class="credit reveal">${esc(s.credit)}</div>` : ""}
            <div class="sel-label reveal">Selected Project</div>
          </div>
          ${photoEl(s.photo, "intro-hero")}
          <div class="inset reveal">
            ${photoEl(s.inset, "")}
            <div class="cap">${esc(s.insetCap)}</div>
          </div>
          ${foot(s.n)}
        </section>`;
      case "gallery-asym":
        return `<section class="slide" data-id="${s.id}">
          ${photoEl(s.photos[0], "g-main", true)}
          ${photoEl(s.photos[1], "g-top", true)}
          ${photoEl(s.photos[2], "g-bot", true)}
          <div class="gal-bar">
            <div class="accent-bar"></div>
            <div class="name reveal">${esc(s.name)}</div>
            <div class="cap reveal">${esc(s.cap)}</div>
          </div>
          ${foot(s.n)}
        </section>`;
      case "gallery-span":
        return `<section class="slide" data-id="${s.id}">
          ${photoEl(s.photos[0], "g-span", true)}
          ${photoEl(s.photos[1], "q3", true)}
          ${photoEl(s.photos[2], "q4", true)}
          <div class="gal-bar">
            <div class="accent-bar"></div>
            <div class="name reveal">${esc(s.name)}</div>
            <div class="cap reveal">${esc(s.cap)}</div>
          </div>
          ${foot(s.n)}
        </section>`;
      case "gallery-tri":
        return `<section class="slide" data-id="${s.id}">
          ${photoEl(s.photos[0], "v1", true)}
          ${photoEl(s.photos[1], "v2", true)}
          ${photoEl(s.photos[2], "v3", true)}
          <div class="gal-bar">
            <div class="accent-bar"></div>
            <div class="name reveal">${esc(s.name)}</div>
            <div class="cap reveal">${esc(s.cap)}</div>
          </div>
          ${foot(s.n)}
        </section>`;
      case "gallery-quad":
        return `<section class="slide" data-id="${s.id}">
          ${photoEl(s.photos[0], "q1", true)}
          ${photoEl(s.photos[1], "q2", true)}
          ${photoEl(s.photos[2], "q3", true)}
          ${photoEl(s.photos[3], "q4", true)}
          <div class="gal-bar">
            <div class="accent-bar"></div>
            <div class="name reveal">${esc(s.name)}</div>
            <div class="cap reveal">${esc(s.cap)}</div>
          </div>
          ${foot(s.n)}
        </section>`;
      case "leadership":
        return `<section class="slide" data-id="${s.id}">
          <div class="kicker lead-kicker reveal">Leadership</div>
          ${photoEl(s.photos[0], "lead-shot left")}
          ${photoEl(s.photos[1], "lead-shot right")}
          <div class="lead-copy">
            ${s.people
              .map(
                (p) => `<div>
              <div class="accent-bar"></div>
              <div class="display reveal">${esc(p.name)}</div>
              <div class="role kicker reveal">${esc(p.role)}</div>
              <div class="bio reveal">${esc(p.bio)}</div>
            </div>`
              )
              .join("")}
          </div>
          ${foot(s.n)}
        </section>`;
      case "awards":
        return `<section class="slide" data-id="${s.id}">
          <div class="awards">
            <div class="awards-head">
              <div class="awards-rule"></div>
              <div>
                <div class="kicker reveal">${esc(s.kicker)}</div>
                <div class="display reveal">${esc(s.title)}</div>
              </div>
            </div>
            <div class="media-row">
              ${s.media.map((m) => `<div class="media-item reveal">${esc(m)}</div>`).join("")}
            </div>
            <div class="kicker awards-sec reveal">Project Honors</div>
            <div class="honors">
              ${s.honors
                .map(
                  (h) => `<div class="reveal"><div class="honor-name">${esc(h.name)}</div><div class="honor-awards">${esc(h.a)}</div></div>`
                )
                .join("")}
            </div>
            <div class="awards-rule-h"></div>
            <div class="kicker awards-sec reveal">Career Honors</div>
            <div class="career-grid">
              ${s.career
                .map(
                  (h) => `<div class="reveal"><div class="career-name">${esc(h.name)}</div><div class="career-meta">${esc(h.a)}</div></div>`
                )
                .join("")}
            </div>
            <div class="awards-rule-h"></div>
            <div class="lead-acc">
              <div class="kicker reveal">Leadership</div>
              <div class="list reveal">${esc(s.lead)}</div>
            </div>
          </div>
        </section>`;
      default:
        return "";
    }
  }

  /* ---------- stage scale ---------- */
  function isMobileLayout() {
    return window.matchMedia("(max-width: 860px)").matches;
  }

  function fit() {
    const mobile = isMobileLayout();
    document.documentElement.classList.toggle("is-mobile", mobile);
    const stage = document.getElementById("stage");
    if (mobile) {
      stage.style.zoom = "";
      stage.style.transform = "none";
      const hint = document.getElementById("hint");
      if (hint && !hint.dataset.desktop) {
        hint.dataset.desktop = hint.textContent;
        hint.textContent = "Swipe  ·  Tap photo to pan";
      }
      return;
    }
    const hint = document.getElementById("hint");
    if (hint && hint.dataset.desktop) hint.textContent = hint.dataset.desktop;
    const s = Math.min(window.innerWidth / 1920, window.innerHeight / 1080);
    if (typeof CSS !== "undefined" && CSS.supports && CSS.supports("zoom", "1")) {
      stage.style.zoom = String(s);
      stage.style.transform = "none";
    } else {
      stage.style.zoom = "";
      stage.style.transform = "scale(" + s + ")";
    }
  }

  /* ---------- engine ---------- */
  let index = 0;
  let busy = false;
  let autoplay = false;
  let autoTimer = 0;
  const els = {};

  const imgCache = new Map();
  function preloadFile(file) {
    if (!file || imgCache.has(file)) return;
    const im = new Image();
    im.src = src(file);
    imgCache.set(file, im);
  }
  function preloadAround(i) {
    for (let d = -1; d <= 2; d++) {
      const s = SLIDES[(i + d + SLIDES.length) % SLIDES.length];
      [s.photo, s.inset].concat(s.photos || []).forEach(preloadFile);
    }
  }

  function setHud() {
    document.querySelectorAll("#hud .dot").forEach((d, i) => {
      d.classList.toggle("is-on", i === index);
    });
    document.querySelector("#progress > span").style.width =
      ((index + 1) / SLIDES.length) * 100 + "%";
  }

  function clearSlideStyle(el) {
    el.style.opacity = "";
    el.style.visibility = "";
    el.style.clipPath = "";
    el.style.zIndex = "";
    el.style.pointerEvents = "";
  }

  function parkSlide(el) {
    el.classList.remove("is-active", "is-leaving", "is-entering");
    clearSlideStyle(el);
  }

  function parkOthers(keep) {
    els.slides.forEach((el) => {
      if (keep.indexOf(el) === -1) parkSlide(el);
    });
  }

  function showInstant(i) {
    els.slides.forEach((el, n) => {
      parkSlide(el);
      if (n === i) el.classList.add("is-active");
    });
    index = i;
    setHud();
    location.hash = "/" + SLIDES[i].id;
    preloadAround(i);
  }

  function playEnter(slideEl) {
    if (reduced || typeof anime === "undefined") {
      slideEl.querySelectorAll(".reveal, .accent-bar, .tl-line, .tl-node").forEach((n) => {
        n.style.opacity = "1";
        n.style.transform = "none";
      });
      return;
    }
    const reveals = slideEl.querySelectorAll(".reveal");
    reveals.forEach((n) => {
      n.style.opacity = "0";
      n.style.transform = "translateY(22px)";
    });
    anime({
      targets: reveals,
      opacity: [0, 1],
      translateY: [22, 0],
      easing: "easeOutCubic",
      duration: 900,
      delay: anime.stagger(60, { start: 80 }),
    });
    const bars = slideEl.querySelectorAll(".accent-bar, .hero-tick, .stat-bar, .awards-rule");
    bars.forEach((b) => {
      anime({
        targets: b,
        scaleX: [0, 1],
        easing: "easeOutCubic",
        duration: 700,
        delay: 120,
      });
    });
    const line = slideEl.querySelector(".tl-line");
    if (line) {
      if (isMobileLayout()) {
        line.style.transform = "none";
        line.style.opacity = "1";
      } else {
        anime({ targets: line, scaleX: [0, 1], easing: "easeOutCubic", duration: 1100, delay: 200 });
      }
    }
    const nodes = slideEl.querySelectorAll(".tl-node");
    if (nodes.length) {
      anime({
        targets: nodes,
        opacity: [0, 1],
        easing: "easeOutCubic",
        duration: 640,
        delay: anime.stagger(90, { start: 420 }),
      });
    }
    const chips = slideEl.querySelectorAll(".chip");
    if (chips.length) {
      anime({
        targets: chips,
        opacity: [0, 1],
        translateY: [16, 0],
        easing: "easeOutCubic",
        duration: 640,
        delay: anime.stagger(80, { start: 420 }),
      });
    }
  }

  function easeInOutCubic(t) {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }

  function finishWipe(fromEl, toEl, edge) {
    parkSlide(fromEl);
    toEl.classList.remove("is-leaving", "is-entering");
    toEl.classList.add("is-active");
    clearSlideStyle(toEl);
    parkOthers([toEl]);
    if (edge) {
      edge.style.opacity = "0";
      edge.style.left = "";
    }
  }

  function wipeSlides(fromEl, toEl, dir) {
    const edge = document.getElementById("wipe-edge");
    const duration = reduced ? 280 : 1700;

    parkOthers([fromEl, toEl]);
    fromEl.classList.add("is-leaving");
    fromEl.classList.remove("is-active");
    toEl.classList.add("is-entering", "is-active");
    clearSlideStyle(toEl);

    if (reduced) {
      finishWipe(fromEl, toEl, edge);
      return Promise.resolve();
    }

    if (dir >= 0) toEl.style.clipPath = "inset(0 0 0 100%)";
    else toEl.style.clipPath = "inset(0 100% 0 0)";
    edge.style.opacity = "1";

    return new Promise((resolve) => {
      const t0 = performance.now();
      function frame(now) {
        const t = Math.min(1, (now - t0) / duration);
        const p = easeInOutCubic(t);
        if (dir >= 0) {
          toEl.style.clipPath = "inset(0 0 0 " + ((1 - p) * 100).toFixed(3) + "%)";
          edge.style.left = (p * 100).toFixed(3) + "%";
        } else {
          toEl.style.clipPath = "inset(0 " + ((1 - p) * 100).toFixed(3) + "% 0 0)";
          edge.style.left = ((1 - p) * 100).toFixed(3) + "%";
        }
        if (t < 1) {
          requestAnimationFrame(frame);
        } else {
          finishWipe(fromEl, toEl, edge);
          resolve();
        }
      }
      requestAnimationFrame(frame);
    });
  }

  async function goTo(i, dir) {
    if (lb.open) closeLightbox();
    if (busy) return;
    i = (i + SLIDES.length) % SLIDES.length;
    if (i === index) return;
    busy = true;
    const to = SLIDES[i];
    const fromEl = els.slides[index];
    const toEl = els.slides[i];
    dir = dir == null ? (i > index || (index === SLIDES.length - 1 && i === 0) ? 1 : -1) : dir;

    preloadAround(i);
    index = i;
    setHud();
    location.hash = "/" + to.id;

    const trans = wipeSlides(fromEl, toEl, dir);
    if (!reduced) setTimeout(() => playEnter(toEl), 520);
    else playEnter(toEl);
    await trans;
    busy = false;
    armAuto();
  }

  function next() {
    goTo(index + 1, 1);
  }
  function prev() {
    goTo(index - 1, -1);
  }

  function armAuto() {
    clearTimeout(autoTimer);
    if (!autoplay) return;
    autoTimer = setTimeout(next, 8000);
  }

  function parseHash() {
    const h = (location.hash || "").replace(/^#\/?/, "");
    const i = SLIDES.findIndex((s) => s.id === h || s.n === h);
    return i >= 0 ? i : 0;
  }

  function bindCursor() {
    const cur = document.getElementById("cursor");
    const stage = document.getElementById("stage");
    stage.addEventListener("mousemove", (e) => {
      if (isMobileLayout()) return;
      const r = stage.getBoundingClientRect();
      const x = ((e.clientX - r.left) / r.width) * 1920;
      const y = ((e.clientY - r.top) / r.height) * 1080;
      cur.style.left = x + "px";
      cur.style.top = y + "px";
      const zooming = !!e.target.closest(".photo.zoomable");
      cur.classList.toggle("hot", zooming);
      cur.style.opacity = zooming ? "0" : "1";
      stage.style.cursor = zooming ? "zoom-in" : "none";
    });
  }

  const lb = { open: false, files: [], i: 0 };

  function lbEls() {
    return {
      root: document.getElementById("lightbox"),
      img: document.getElementById("lightbox-img"),
      prev: document.getElementById("lightbox-prev"),
      next: document.getElementById("lightbox-next"),
    };
  }

  function lbShow(i) {
    if (!lb.files.length) return;
    lb.i = (i + lb.files.length) % lb.files.length;
    const { img } = lbEls();
    img.src = lb.files[lb.i];
  }

  function openLightbox(photo) {
    const slide = photo.closest(".slide.is-active");
    if (!slide) return;
    const tiles = Array.from(slide.querySelectorAll(".photo.zoomable img"));
    lb.files = tiles.map((im) => im.getAttribute("src")).filter(Boolean);
    const clicked = photo.querySelector("img");
    const start = Math.max(0, tiles.indexOf(clicked));
    const { root } = lbEls();
    root.classList.toggle("solo", lb.files.length < 2);
    root.classList.add("is-on");
    root.setAttribute("aria-hidden", "false");
    lb.open = true;
    lbShow(start);
    if (autoplay) {
      clearTimeout(autoTimer);
    }
  }

  function closeLightbox() {
    if (!lb.open) return;
    const { root } = lbEls();
    root.classList.remove("is-on");
    root.setAttribute("aria-hidden", "true");
    lb.open = false;
    armAuto();
  }

  function bindLightbox() {
    const { root, prev, next } = lbEls();
    document.getElementById("lightbox-close").addEventListener("click", (e) => {
      e.stopPropagation();
      closeLightbox();
    });
    prev.addEventListener("click", (e) => {
      e.stopPropagation();
      lbShow(lb.i - 1);
    });
    next.addEventListener("click", (e) => {
      e.stopPropagation();
      lbShow(lb.i + 1);
    });
    root.addEventListener("click", (e) => {
      if (e.target.closest("button") || e.target.id === "lightbox-img") return;
      closeLightbox();
    });
    let lx = null;
    root.addEventListener(
      "touchstart",
      (e) => {
        lx = e.changedTouches[0].clientX;
      },
      { passive: true }
    );
    root.addEventListener(
      "touchend",
      (e) => {
        if (lx == null) return;
        const dx = e.changedTouches[0].clientX - lx;
        lx = null;
        if (Math.abs(dx) > 40) lbShow(lb.i + (dx < 0 ? 1 : -1));
      },
      { passive: true }
    );
  }

  function init() {
    fit();
    window.addEventListener("resize", fit);

    const root = document.getElementById("slides");
    root.innerHTML = SLIDES.map(render).join("");
    els.slides = Array.from(root.querySelectorAll(".slide"));

    const rail = document.querySelector("#hud .rail");
    rail.innerHTML = SLIDES.map((_, i) => `<button class="dot" data-i="${i}" aria-label="Slide ${i + 1}"></button>`).join("");
    rail.addEventListener("click", (e) => {
      const b = e.target.closest(".dot");
      if (!b) return;
      e.stopPropagation();
      const i = +b.dataset.i;
      goTo(i, i > index ? 1 : -1);
    });
    document.getElementById("prev-btn").addEventListener("click", (e) => {
      e.stopPropagation();
      prev();
    });
    document.getElementById("next-btn").addEventListener("click", (e) => {
      e.stopPropagation();
      next();
    });

    const start = parseHash();
    showInstant(start);
    playEnter(els.slides[start]);
    preloadAround(start);

    let ignoreClick = false;
    document.getElementById("stage").addEventListener("click", (e) => {
      if (e.target.closest("#hud .pager")) return;
      if (ignoreClick) {
        ignoreClick = false;
        return;
      }
      const photo = e.target.closest(".photo.zoomable");
      if (photo && photo.closest(".slide.is-active")) {
        openLightbox(photo);
        return;
      }
      next();
    });

    window.addEventListener("keydown", (e) => {
      if (lb.open) {
        if (e.key === "Escape") {
          e.preventDefault();
          closeLightbox();
        } else if (e.key === "ArrowRight" || e.key === " " || e.key === "PageDown") {
          e.preventDefault();
          lbShow(lb.i + 1);
        } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
          e.preventDefault();
          lbShow(lb.i - 1);
        }
        return;
      }
      if (e.key === "ArrowRight" || e.key === " " || e.key === "PageDown") {
        e.preventDefault();
        next();
      } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
        e.preventDefault();
        prev();
      } else if (e.key === "Home") {
        e.preventDefault();
        goTo(0, -1);
      } else if (e.key === "End") {
        e.preventDefault();
        goTo(SLIDES.length - 1, 1);
      } else if (e.key === "f" || e.key === "F") {
        e.preventDefault();
        if (!document.fullscreenElement) document.documentElement.requestFullscreen().catch(() => {});
        else document.exitFullscreen();
      } else if (e.key === "p" || e.key === "P") {
        autoplay = !autoplay;
        const hint = document.getElementById("hint");
        hint.textContent = autoplay ? "Autoplay on  ·  P to pause" : "Click or →  ·  F fullscreen  ·  P autoplay";
        hint.classList.remove("is-gone");
        setTimeout(() => hint.classList.add("is-gone"), 2600);
        armAuto();
      }
    });

    let touchX = null;
    document.getElementById("stage").addEventListener(
      "touchstart",
      (e) => {
        if (e.target.closest(".photo.zoomable")) {
          touchX = null;
          return;
        }
        touchX = e.changedTouches[0].clientX;
      },
      { passive: true }
    );
    document.getElementById("stage").addEventListener(
      "touchend",
      (e) => {
        if (touchX == null) return;
        const dx = e.changedTouches[0].clientX - touchX;
        touchX = null;
        if (Math.abs(dx) > 40) {
          ignoreClick = true;
          dx < 0 ? next() : prev();
        }
      },
      { passive: true }
    );

    window.addEventListener("hashchange", () => {
      const i = parseHash();
      if (i !== index) goTo(i);
    });

    bindCursor();
    bindLightbox();
    setTimeout(() => document.getElementById("hint").classList.add("is-gone"), 4200);
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
