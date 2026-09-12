document.documentElement.classList.add('js');

const image = (file, alt, className = '', eager = false) =>
  `<img class="${className}" src="assets/images/${file}.webp" alt="${alt}" loading="${eager ? 'eager' : 'lazy'}" decoding="async" sizes="(max-width: 700px) 100vw, 94vw">`;

const motion = (file, label, className = '') => `
  <video class="motion-loop ${className}" autoplay muted loop playsinline preload="none" poster="assets/images/${file}-poster.webp" aria-label="${label}">
    <source data-src="assets/video/${file}.mp4" type="video/mp4">
  </video>`;

const projects = {
  mobis: {
    number: '01',
    title: 'HYUNDAI MOBIS\nBRAND FILM',
    year: '2025',
    role: 'Planning / Direction',
    description: '새로운 브랜드 메시지를 어떻게 시각적 메시지로 보여줄 것인가에서 시작했습니다. 모빌리티를 상징하는 키워드를 장면과 움직임으로 연결하고, 전체 필름이 하나의 흐름으로 읽히도록 기획과 연출을 설계했습니다.',
    gallery: () => `
      <figure class="gallery-hero reveal">${image('mobis-hero', 'Cyclist in Hyundai Mobis Brand Film', '', true)}</figure>
      <div class="gallery-pair gallery-pair--shifted reveal">
        ${image('mobis-hero-02', 'Driver reflected in a technical lens')}
        ${image('mobis-motion', 'Mobility sequence from Hyundai Mobis Brand Film')}
      </div>
      <figure class="gallery-video reveal">${motion('mobis-loop-01', 'Hyundai Mobis cyclist motion clip')}</figure>
      <div class="gallery-pair gallery-motion-pair reveal">
        ${motion('mobis-loop-02', 'Hyundai Mobis powertrain motion clip')}
        ${motion('mobis-loop-03', 'Hyundai Mobis music performance motion clip', 'mobile-optional')}
      </div>
      <figure class="gallery-wide gallery-wide--inset reveal">${image('mobis-detail', 'Hyundai Mobis Brand Film still')}</figure>
      <div class="gallery-pair gallery-motion-pair reveal">
        ${motion('mobis-loop-04', 'Hyundai Mobis cockpit motion clip')}
        ${motion('mobis-loop-05', 'Hyundai Mobis design team motion clip', 'mobile-optional')}
      </div>`
  },
  inspire: {
    number: '02',
    title: 'INSPIRE RESORT\nAURORA',
    year: '2024',
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
        ${motion('porsche-loop-01', 'Porsche Seoul Vibe blue tunnel motion clip')}
      </figure>
      <div class="gallery-pair gallery-motion-pair reveal">
        ${motion('porsche-loop-02', 'Porsche moving through a blue graphic tunnel')}
        ${motion('porsche-loop-03', 'Porsche orange graphic driving sequence', 'mobile-optional')}
      </div>
      <figure class="gallery-wide gallery-wide--inset reveal">${image('porsche-detail', 'Porsche Seoul Vibe campaign still')}</figure>
      <figure class="gallery-video reveal">${motion('porsche-loop-04', 'Porsche red racing graphic sequence')}</figure>`
  },
  lineage: {
    number: '04',
    title: 'NC SOFT\nLINEAGE W',
    year: '2024',
    role: 'Planning / Direction',
    description: '짧은 한 장면만으로도 캐릭터의 성격이 느껴지게 하는 데 집중했습니다. 캐릭터와 전투, 스케일이 단계적으로 커지도록 장면을 설계하고 시네마틱에서 몰입감이 점점 올라가도록 흐름을 연출했습니다.',
    gallery: () => `
      <figure class="gallery-hero reveal">${image('lineage-hero-02', 'Lineage W warrior facing an enormous blue eye', '', true)}</figure>
      <div class="gallery-pair gallery-pair--dramatic reveal">
        ${image('lineage-hero', 'Lineage W warrior portrait')}
        ${image('lineage-hero-03', 'Lineage W gunner character')}
      </div>
      <figure class="gallery-video reveal">${motion('lineage-loop-01', 'Lineage W enormous blue eye motion clip')}</figure>
      <div class="gallery-pair gallery-motion-pair reveal">
        ${motion('lineage-loop-02', 'Lineage W gunner hero motion clip')}
        ${motion('lineage-loop-03', 'Lineage W combat motion clip', 'mobile-optional')}
      </div>
      <figure class="gallery-wide gallery-wide--right reveal">${image('lineage-warrior', 'Lineage W warrior cinematic still')}</figure>
      <div class="gallery-pair gallery-motion-pair reveal">
        ${motion('lineage-loop-04', 'Lineage W fiery character motion clip')}
        ${motion('lineage-loop-05', 'Lineage W underwater environmental motion clip', 'mobile-optional')}
      </div>
      <figure class="gallery-small gallery-small--right reveal">${image('lineage-gunner', 'Lineage W gunner cinematic still')}</figure>`
  }
};

const archiveProjects = {
  automotive: {
    title: 'AUTOMOTIVE FILE',
    images: ['automotive-file', 'automotive-alt', 'archive-auto-03']
  },
  blade2: {
    title: 'BLADE & SOUL 2',
    images: ['blade-soul', 'blade-soul-alt', 'archive-blade-03']
  },
  fragpunk: {
    title: 'FRAG PUNK',
    images: ['frag-punk', 'archive-frag-02', 'archive-frag-03']
  },
  hdhyundai: {
    title: 'HD HYUNDAI CES',
    images: ['hd-hyundai', 'archive-hd-02', 'archive-hd-03']
  },
  goyang: {
    title: 'HYUNDAI GOYANG MOTORSTUDIO',
    images: ['goyang', 'archive-goyang-02', 'archive-goyang-03']
  },
  mobisslogan: {
    title: 'HYUNDAI MOBIS SLOGAN',
    images: ['mobis-slogan', 'archive-mobis-slogan-02', 'archive-mobis-slogan-03']
  },
  blader: {
    title: 'BLADE & SOUL R / CLASS FILMS',
    images: ['blade-r-01', 'blade-r-02', 'blade-r-03']
  },
  wia: {
    title: 'HYUNDAI WIA CES',
    images: ['hyundai-wia', 'archive-wia-02', 'archive-wia-03']
  },
  kia360: {
    title: 'KIA 360 HERITAGE',
    images: ['kia-360', 'archive-kia360-02', 'archive-kia360-03']
  },
  kiaconnect: {
    title: 'KIA CONNECT STORE / KBO',
    images: ['kia-connect', 'archive-kia-connect-02', 'archive-kia-connect-03']
  },
  pyeongtaek: {
    title: 'KIA 평택 CXP',
    images: ['kia-pyeongtaek', 'archive-pyeongtaek-02', 'archive-pyeongtaek-03']
  },
  lig: {
    title: 'LIG HERITAGE',
    images: ['lig', 'archive-lig-02', 'archive-lig-03']
  },
  musports: {
    title: 'MU SPORTS BRAND FILM',
    images: ['mu-sports', 'mu-sports-alt', 'archive-mu-03']
  },
  firststep: {
    title: 'THE FIRST STEP',
    images: ['first-step', 'archive-first-02', 'archive-first-03']
  },
  hoyeon: {
    title: '호연 류아라편',
    images: ['hoyeon', 'archive-hoyeon-02', 'archive-hoyeon-03']
  }
};

const content = document.querySelector('#project-content');
let revealObserver;
const archiveExpansion = document.querySelector('#archive-expansion');
const archiveExpansionTitle = document.querySelector('#archive-expansion-title');
const archiveExpansionTrack = document.querySelector('#archive-expansion-track');
let motionObserver;
let motionSyncFrame;

function hydrateMotion(video) {
  if (video.dataset.motionReady === 'true') return;
  video.querySelectorAll('source[data-src]').forEach(source => {
    source.src = source.dataset.src;
    delete source.dataset.src;
  });
  video.dataset.motionReady = 'true';
  video.load();
}

function pauseMotion(video, reset = false) {
  video.pause();
  if (reset && Number.isFinite(video.duration)) video.currentTime = 0;
}

function playMotion(video) {
  hydrateMotion(video);
  video.play().catch(() => {});
}

function syncVisibleMotion() {
  cancelAnimationFrame(motionSyncFrame);
  motionSyncFrame = requestAnimationFrame(() => {
    const activePage = document.querySelector('.page.active');
    if (!activePage) return;
    const mobile = window.matchMedia('(max-width: 700px)').matches;
    const candidates = [...activePage.querySelectorAll('video.motion-loop[data-motion-visible="true"]')]
      .filter(video => !video.classList.contains('featured-loop') || mobile)
      .filter(video => !mobile || (!video.classList.contains('mobile-extra') && !video.classList.contains('mobile-optional')))
      .filter(video => {
        const rect = video.getBoundingClientRect();
        return rect.bottom > 0 && rect.top < window.innerHeight;
      })
      .sort((a, b) => {
        const center = window.innerHeight / 2;
        const aRect = a.getBoundingClientRect();
        const bRect = b.getBoundingClientRect();
        return Math.abs((aRect.top + aRect.bottom) / 2 - center)
          - Math.abs((bRect.top + bRect.bottom) / 2 - center);
      });

    let selected = candidates[0];
    if (selected) {
      const selectedRect = selected.getBoundingClientRect();
      const selectedCenter = (selectedRect.top + selectedRect.bottom) / 2;
      const sameRow = candidates.filter(video => {
        const rect = video.getBoundingClientRect();
        return Math.abs((rect.top + rect.bottom) / 2 - selectedCenter) < 2;
      });
      if (sameRow.length > 1 && selectedCenter < window.innerHeight * 0.6) {
        selected = sameRow[sameRow.length - 1];
      }
    }
    activePage.querySelectorAll('video.motion-loop').forEach(video => {
      if (video === selected) playMotion(video);
      else if (!video.closest('.work-row:hover')) pauseMotion(video);
    });
  });
}

function setupMotion(scope = document) {
  const videos = scope.querySelectorAll('video.motion-loop:not([data-motion-observed])');
  if (!videos.length) return;
  if (!('IntersectionObserver' in window)) {
    videos.forEach(video => {
      hydrateMotion(video);
      playMotion(video);
    });
    return;
  }
  if (!motionObserver) {
    motionObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        entry.target.dataset.motionVisible = String(entry.isIntersecting);
        if (entry.isIntersecting) {
          const mobile = window.matchMedia('(max-width: 700px)').matches;
          if (!mobile || (!entry.target.classList.contains('mobile-extra') && !entry.target.classList.contains('mobile-optional'))) {
            hydrateMotion(entry.target);
          }
        } else {
          pauseMotion(entry.target);
        }
      });
      syncVisibleMotion();
    }, { rootMargin: '180px 0px', threshold: 0.08 });
  }
  videos.forEach(video => {
    video.dataset.motionObserved = 'true';
    motionObserver.observe(video);
  });
}

document.querySelectorAll('.work-row').forEach(row => {
  const playRow = () => {
    if (!window.matchMedia('(hover: hover) and (min-width: 701px)').matches) return;
    document.querySelectorAll('.work-row video.motion-loop').forEach(video => pauseMotion(video));
    row.querySelectorAll('video.motion-loop').forEach(video => playMotion(video));
  };
  const pauseRow = () => row.querySelectorAll('video.motion-loop').forEach(video => pauseMotion(video));
  row.addEventListener('pointerenter', playRow);
  row.addEventListener('pointerleave', pauseRow);
  row.addEventListener('focusin', playRow);
  row.addEventListener('focusout', pauseRow);
});

function closeArchive() {
  if (!archiveExpansion) return;
  archiveExpansion.hidden = true;
  archiveExpansion.dataset.project = '';
  document.querySelectorAll('.archive-piece[aria-expanded="true"]').forEach(item => {
    item.setAttribute('aria-expanded', 'false');
  });
}

function openArchive(key, trigger) {
  const project = archiveProjects[key];
  if (!project || !archiveExpansion) return;
  if (!archiveExpansion.hidden && archiveExpansion.dataset.project === key) {
    closeArchive();
    return;
  }
  document.querySelectorAll('.archive-piece').forEach(item => {
    item.setAttribute('aria-expanded', String(item === trigger));
  });
  archiveExpansionTitle.textContent = project.title;
  archiveExpansionTrack.innerHTML = project.images
    .map((file, index) => image(file, `${project.title} image ${index + 1}`))
    .join('');
  trigger.insertAdjacentElement('afterend', archiveExpansion);
  archiveExpansion.dataset.project = key;
  archiveExpansion.hidden = false;
  archiveExpansion.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

document.querySelectorAll('.archive-piece').forEach(item => {
  item.addEventListener('click', () => openArchive(item.dataset.archive, item));
  item.addEventListener('keydown', event => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      openArchive(item.dataset.archive, item);
    }
  });
});
document.querySelector('#archive-expansion-close')?.addEventListener('click', closeArchive);

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
    if (page !== 'work') closeArchive();
  }

  document.querySelectorAll('.page').forEach(section => {
    section.classList.toggle('active', section.dataset.page === page);
  });
  document.querySelectorAll('.site-header nav a').forEach(link => {
    const href = link.getAttribute('href');
    link.classList.toggle('current', href === `#${page}` || (page === 'project' && href === '#work'));
  });
  const previousScrollBehavior = document.documentElement.style.scrollBehavior;
  document.documentElement.style.scrollBehavior = 'auto';
  window.scrollTo(0, 0);
  requestAnimationFrame(() => {
    document.documentElement.style.scrollBehavior = previousScrollBehavior;
  });
  const activePage = document.querySelector(`.page[data-page="${page}"]`);
  setupReveals(activePage);
  setupMotion(activePage);
  syncVisibleMotion();
}

window.addEventListener('hashchange', route);
window.addEventListener('scroll', syncVisibleMotion, { passive: true });
window.addEventListener('resize', syncVisibleMotion);
route();
