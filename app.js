document.documentElement.classList.add('js');

const image = (file, alt, className = '', eager = false) =>
  `<img class="${className}" src="assets/images/${file}.webp" alt="${alt}" loading="${eager ? 'eager' : 'lazy'}" decoding="async" sizes="(max-width: 700px) 100vw, 94vw">`;

const projects = {
  mobis: {
    number: '01',
    title: 'HYUNDAI MOBIS\nBRAND FILM',
    year: '2026',
    role: 'Planning / Direction',
    description: '새로운 브랜드 메시지를 어떻게 시각적 메시지로 보여줄 것인가에서 시작했습니다. 모빌리티를 상징하는 키워드를 장면과 움직임으로 연결하고, 전체 필름이 하나의 흐름으로 읽히도록 기획과 연출을 설계했습니다.',
    gallery: () => `
      <figure class="gallery-hero reveal">${image('mobis-hero', 'Cyclist in Hyundai Mobis Brand Film', '', true)}</figure>
      <div class="gallery-pair gallery-pair--shifted reveal">
        ${image('mobis-hero-02', 'Driver reflected in a technical lens')}
        ${image('mobis-motion', 'Mobility sequence from Hyundai Mobis Brand Film')}
      </div>
      <figure class="gallery-wide gallery-wide--inset reveal">${image('mobis-detail', 'Hyundai Mobis Brand Film still')}</figure>`
  },
  inspire: {
    number: '02',
    title: 'INSPIRE RESORT\nAURORA',
    year: '2026',
    role: 'Planning / Direction',
    description: '화면의 크기보다 중요한 것은 그 공간에서 무엇을 느끼게 할 것인가였습니다. Aurora의 압도적인 스케일과 구조를 이해하고 콘텐츠가 사람들의 마음을 압도할 수 있도록 경험을 설계했습니다.',
    gallery: () => `
      <figure class="gallery-hero gallery-hero--contained reveal">${image('inspire-hero', 'Blue planetary scene across Inspire Aurora', '', true)}</figure>
      <figure class="gallery-wide gallery-wide--right reveal">${image('inspire-hero-02', 'Warm planetary rings across Inspire Aurora')}</figure>
      <div class="gallery-pair gallery-pair--portrait-rhythm reveal">
        ${image('inspire-detail', 'Inspire Aurora visual sequence')}
        ${image('inspire-detail-02', 'Inspire Aurora spatial content')}
      </div>
      <figure class="gallery-small gallery-small--left reveal">${image('inspire-detail-03', 'Inspire Aurora supporting visual')}</figure>`
  },
  porsche: {
    number: '03',
    title: 'PORSCHE\nSEOUL VIBE',
    year: '2026',
    role: 'Creative Direction',
    description: 'Porsche와 Seoul, 서로 강한 두 이미지를 하나의 리듬으로 연결한 작업입니다. 브랜드의 디자인 아이덴티티를 살리면서 그래픽의 움직임과 화면 전환을 적극적으로 활용해 속도감과 몰입감을 높였습니다.',
    gallery: () => `
      <figure class="gallery-hero reveal">${image('porsche-hero', 'Porsche cars moving through a vivid Seoul street', '', true)}</figure>
      <div class="gallery-pair gallery-pair--equal reveal">
        ${image('porsche-hero-02', 'Porsche Seoul Vibe graphic tunnel')}
        ${image('porsche-hero-03', 'Orange Porsche close-up')}
      </div>
      <figure class="gallery-video reveal">
        <video autoplay muted loop playsinline preload="metadata" poster="assets/images/porsche-hero-02.webp" aria-label="Porsche Seoul Vibe motion clip">
          <source src="assets/video/porsche-seoul-vibe.mp4" type="video/mp4">
        </video>
      </figure>
      <figure class="gallery-wide gallery-wide--inset reveal">${image('porsche-detail', 'Porsche Seoul Vibe campaign still')}</figure>`
  },
  lineage: {
    number: '04',
    title: 'NC SOFT\nLINEAGE W',
    year: '2026',
    role: 'Planning / Direction',
    description: '짧은 한 장면만으로도 캐릭터의 성격이 느껴지게 하는 데 집중했습니다. 캐릭터와 전투, 스케일이 단계적으로 커지도록 장면을 설계하고 시네마틱에서 몰입감이 점점 올라가도록 흐름을 연출했습니다.',
    gallery: () => `
      <figure class="gallery-hero reveal">${image('lineage-hero-02', 'Lineage W warrior facing an enormous blue eye', '', true)}</figure>
      <div class="gallery-pair gallery-pair--dramatic reveal">
        ${image('lineage-hero', 'Lineage W warrior portrait')}
        ${image('lineage-hero-03', 'Lineage W gunner character')}
      </div>
      <figure class="gallery-wide gallery-wide--right reveal">${image('lineage-warrior', 'Lineage W warrior cinematic still')}</figure>
      <figure class="gallery-small gallery-small--right reveal">${image('lineage-gunner', 'Lineage W gunner cinematic still')}</figure>`
  }
};

const content = document.querySelector('#project-content');
let revealObserver;

function setupReveals(scope = document) {
  const items = scope.querySelectorAll('.reveal:not(.is-observed)');
  if (!('IntersectionObserver' in window)) {
    items.forEach(item => item.classList.add('is-visible'));
    return;
  }
  if (!revealObserver) {
    revealObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
  }
  items.forEach(item => {
    item.classList.add('is-observed');
    revealObserver.observe(item);
  });
}

function renderProject(key) {
  const projectKey = projects[key] ? key : 'mobis';
  const project = projects[projectKey];
  document.querySelectorAll('video').forEach(video => video.pause());
  content.innerHTML = `
    <article class="project-layout project--${projectKey}">
      <header class="project-head">
        <h1><span class="project-num">${project.number}</span>${project.title.replace('\n', '<br>')}</h1>
        <div class="project-info">
          <div class="project-meta">
            <div><b>YEAR</b><span>${project.year}</span></div>
            <div><b>ROLE</b><span>${project.role}</span></div>
          </div>
          <p class="project-description">${project.description}</p>
        </div>
      </header>
      <div class="project-gallery">${project.gallery()}</div>
    </article>`;
  setupReveals(content);
}

function route() {
  const fragment = decodeURIComponent(location.hash.slice(1) || 'home');
  const [type, key] = fragment.split('/');
  const page = type === 'project'
    ? 'project'
    : ['home', 'work', 'rnd', 'about', 'contact'].includes(type) ? type : 'home';

  if (page === 'project') {
    renderProject(key);
  } else {
    document.querySelectorAll('video').forEach(video => video.pause());
  }

  document.querySelectorAll('.page').forEach(section => {
    section.classList.toggle('active', section.dataset.page === page);
  });
  document.querySelectorAll('.site-header nav a').forEach(link => {
    const href = link.getAttribute('href');
    link.classList.toggle('current', href === `#${page}` || (page === 'project' && href === '#work'));
  });
  window.scrollTo({ top: 0, behavior: 'auto' });
  setupReveals(document.querySelector(`.page[data-page="${page}"]`));
}

window.addEventListener('hashchange', route);
route();
