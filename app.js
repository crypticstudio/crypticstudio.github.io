const projects = {
  mobis: { number: '01', title: 'HYUNDAI MOBIS\nBRAND FILM', year: '2026', role: 'Planning / Direction', type: 'Brand Film', description: '새로운 브랜드 메시지를 어떻게 시각적 메시지로 보여줄 것인가에서 시작했습니다. 모빌리티를 상징하는 키워드를 장면과 움직임으로 연결하고, 전체 필름이 하나의 흐름으로 읽히도록 기획과 연출을 설계했습니다.', images: ['mobis-hero','mobis-motion','mobis-slogan'] },
  inspire: { number: '02', title: 'INSPIRE RESORT\nAURORA', year: '2026', role: 'Planning / Direction', type: 'Media Wall', description: '화면의 크기보다 중요한 것은 그 공간에서 무엇을 느끼게 할 것인가였습니다. Aurora의 압도적인 스케일과 구조를 이해하고 콘텐츠가 사람들의 마음을 압도할 수 있도록 경험을 설계했습니다.', images: ['inspire-hero','inspire-detail','hd-hyundai'] },
  porsche: { number: '03', title: 'PORSCHE\nSEOUL VIBE', year: '2026', role: 'Creative Direction', type: 'Campaign', description: 'Porsche와 Seoul, 서로 강한 두 이미지를 하나의 리듬으로 연결한 작업입니다. 브랜드의 디자인 아이덴티티를 살리면서 그래픽의 움직임과 화면 전환을 적극적으로 활용해 속도감과 몰입감을 높였습니다.', images: ['porsche-hero','porsche-detail'], video: true },
  lineage: { number: '04', title: 'NC SOFT\nLINEAGE W', year: '2026', role: 'Planning / Direction', type: 'Cinematic Film', description: '짧은 한 장면만으로도 캐릭터의 성격이 느껴지게 하는데 집중했습니다. 캐릭터와 전투, 스케일이 단계적으로 커지도록 장면을 설계하고 시네마틱에서 몰입감이 점점 올라가도록 흐름을 연출했습니다.', images: ['lineage-hero','lineage-detail','blade-soul'] }
};

const content = document.querySelector('#project-content');
function renderProject(key) {
  const p = projects[key] || projects.mobis;
  const gallery = p.images.map((image, index) => `<img class="${index === 0 ? 'full' : index === 1 ? 'large' : 'side'}" src="assets/images/${image}.webp" alt="${p.title.replace('\n',' ')} visual">`).join('') + (p.video ? '<video autoplay muted loop playsinline controls preload="metadata" poster="assets/images/porsche-detail.webp"><source src="assets/video/porsche-seoul-vibe.mp4" type="video/mp4"></video>' : '');
  content.innerHTML = `<div class="project-head"><h1><span class="project-num">${p.number}</span>${p.title.replace('\n','<br>')}</h1><div class="project-meta"><div><b>YEAR</b><span>${p.year}</span></div><div><b>TYPE</b><span>${p.type}</span></div><div><b>ROLE</b><span>${p.role}</span></div></div><p class="project-description">${p.description}</p></div><div class="project-gallery">${gallery}</div>`;
}
function route() {
  const fragment = decodeURIComponent(location.hash.slice(1) || 'home');
  const [type, key] = fragment.split('/');
  const page = type === 'project' ? 'project' : ['home','work','rnd','about','contact'].includes(type) ? type : 'home';
  if (page === 'project') renderProject(key);
  document.querySelectorAll('.page').forEach(section => section.classList.toggle('active', section.dataset.page === page));
  document.querySelectorAll('.site-header nav a').forEach(link => link.classList.toggle('current', link.getAttribute('href') === `#${page}`));
  window.scrollTo({top: 0, behavior: 'instant'});
}
window.addEventListener('hashchange', route);
route();
