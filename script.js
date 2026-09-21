const $ = (s) => document.querySelector(s);
const timeline = $('#timeline');
const modal = $('#memoryModal');
const photoStage = $('#photoStage');
let activeMemory = null;
let activeImage = 0;

const archivePhotos = [
  'images/archive/205D7214-81D1-499A-AD44-40A3270CAC2B.jpeg',
  'images/archive/20988f62-3f3a-4745-ad56-adf36da02184.jpg',
  'images/archive/26935314-a28d-4222-b2ab-b4c01fb2aa2a.jpg',
  'images/archive/46599a2e-349d-4e54-9a94-5f9deb2ecfc6.jpg',
  'images/archive/4c51dd4d-bd21-45e2-a914-f78b400377d4.jpg',
  'images/archive/4e322fa4-dc1c-47e3-9a1c-86838b4bb735.jpg',
  'images/archive/63a84bae-79bb-44c0-b0a5-8383842c1db1.jpg',
  'images/archive/69B0D67A-3A4C-45D9-BB0C-638A5163D852.jpeg',
  'images/archive/76969742-5321-473d-9e44-419b821b66cc.jpeg',
  'images/archive/7824bd2f-bf8e-4aeb-818e-76292610f8fc.jpg',
  'images/archive/79DD307B-97A3-4E8C-86C2-07BC2D855585(1).jpeg',
  'images/archive/7ED69FB6-B55B-4FDE-AA7F-817264FC0ECC.jpeg',
  'images/archive/7f0ebabe-e7a6-4ea3-9963-19e50faab461.jpg',
  'images/archive/87EC9D04-3FC8-403A-A07A-083DF97F236F.jpeg',
  'images/archive/90e87a32-79ee-4953-b368-e8455ff218a0.jpeg',
  'images/archive/DAE8DD08-AFEA-4E26-BDE0-AFACF29D41CE.jpeg',
  'images/archive/F0B1B677-690A-488F-BFCE-1265E6C87082.jpeg',
  'images/archive/F0CBD60A-EB26-483E-9EB3-FB9E42B8DA38.jpeg',
  'images/archive/IMG_0039.jpeg',
  'images/archive/IMG_0055.jpeg',
  'images/archive/IMG_0075.jpeg',
  'images/archive/IMG_1515.jpeg',
  'images/archive/IMG_1516.jpeg',
  'images/archive/IMG_1943.jpeg',
  'images/archive/IMG_2958.jpeg',
  'images/archive/IMG_2959.jpeg',
  'images/archive/IMG_2961(1).jpeg',
  'images/archive/IMG_2976.jpeg',
  'images/archive/IMG_3871.jpeg',
  'images/archive/IMG_4588.jpeg',
  'images/archive/IMG_4597.jpeg',
  'images/archive/IMG_4598.jpeg',
  'images/archive/IMG_5219.jpeg',
  'images/archive/IMG_5223.jpeg',
  'images/archive/IMG_5225.jpeg',
  'images/archive/IMG_5228.jpeg',
  'images/archive/IMG_5233.jpeg',
  'images/archive/IMG_5236.jpeg',
  'images/archive/IMG_6215(1).jpeg',
  'images/archive/IMG_6215.jpeg',
  'images/archive/IMG_6221.jpeg',
  'images/archive/IMG_6222.jpeg',
  'images/archive/IMG_6224.jpeg',
  'images/archive/IMG_6236.jpeg',
  'images/archive/IMG_6242.jpeg',
  'images/archive/IMG_8276.jpeg',
  'images/archive/IMG_8278.jpeg',
  'images/archive/IMG_8299.jpeg',
  'images/archive/IMG_8319(1).jpeg',
  'images/archive/IMG_8331.jpeg',
  'images/archive/IMG_8334.jpeg',
  'images/archive/IMG_8337(1).jpeg',
  'images/archive/IMG_8340.jpeg',
  'images/archive/IMG_8383.jpeg',
  'images/archive/IMG_8384.jpeg',
  'images/archive/IMG_8417.jpeg',
  'images/archive/IMG_8418.jpeg',
  'images/archive/IMG_8421.jpeg',
  'images/archive/IMG_9488.jpeg',
  'images/archive/IMG_9494.jpeg',
  'images/archive/IMG_9495.jpeg',
  'images/archive/IMG_9497.jpeg',
  'images/archive/IMG_9894.jpeg',
  'images/archive/IMG_9897.jpeg',
  'images/archive/IMG_9899.jpeg',
  'images/archive/IMG_9901.jpeg',
  'images/archive/IMG_9902.jpeg',
  'images/archive/IMG_9903.jpeg',
  'images/archive/IMG_9992.jpeg',
  'images/archive/IMG_9993.jpeg',
  'images/archive/WhatsApp Image 2026-09-21 at 18.21.28 (1).jpeg',
  'images/archive/WhatsApp Image 2026-09-21 at 18.21.28 (2).jpeg',
  'images/archive/WhatsApp Image 2026-09-21 at 18.21.28.jpeg',
  'images/archive/WhatsApp Image 2026-09-21 at 18.21.29 (1).jpeg',
  'images/archive/WhatsApp Image 2026-09-21 at 18.21.29 (2).jpeg',
  'images/archive/edee013c-76d5-4c2b-ba6a-a0d9d7ce733e.jpg'
];

function makePhotoGallery() {
  const gallery = $('#photoGallery');
  if (!gallery) return;
  gallery.innerHTML = archivePhotos.map((src, i) => `<img class="archive-photo" src="${escapeHtml(src)}" alt="Our memory photo ${i+1}" loading="lazy" />`).join('');
  gallery.addEventListener('click', (e) => {
    if (!e.target.classList.contains('archive-photo')) return;
    const imgs = archivePhotos;
    const idx = imgs.indexOf(e.target.getAttribute('src'));
    if (idx < 0) return;
    activeMemory = {date:'Photo Archive', title:'Our Memory', note:'A little piece of our story. ❤️', images: imgs};
    activeImage = idx;
    $('#modalDate').textContent = activeMemory.date;
    $('#modalTitle').textContent = activeMemory.title;
    $('#modalNote').textContent = activeMemory.note;
    renderPhoto();
    modal.classList.remove('hidden');
    modal.setAttribute('aria-hidden','false');
    document.body.classList.add('modal-open');
  });
}


function escapeHtml(value) {
  return String(value).replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));
}

function makeTimeline() {
  memories.forEach((m, i) => {
    const card = document.createElement('article');
    card.className = `memory-card reveal ${i % 2 ? 'right' : 'left'}`;
    card.innerHTML = `
      <div class="memory-dot"></div>
      <div class="memory-inner">
        <p class="memory-date">${escapeHtml(m.date)}</p>
        <h3>${escapeHtml(m.title)}</h3>
        <p>${escapeHtml(m.note)}</p>
        ${m.images?.length ? `<div class="timeline-photos">${m.images.slice(0, 4).map((src, pi) => `<img src="${escapeHtml(src)}" alt="${escapeHtml(m.title)} photo ${pi+1}" loading="lazy">`).join('')} ${m.images.length > 4 ? `<span class="photo-more">+${m.images.length-4}</span>` : ''}</div>` : `<div class="no-photo-note">No photo for this date — but the memory is still here. ❤️</div>`}
        <button class="memory-btn" data-index="${i}">Open this memory <span>→</span></button>
      </div>`;
    timeline.appendChild(card);
  });

  timeline.addEventListener('click', (e) => {
    const btn = e.target.closest('.memory-btn');
    if (!btn) return;
    openMemory(Number(btn.dataset.index));
  });
}

function renderPhoto() {
  if (!activeMemory) return;
  const imgs = activeMemory.images || [];
  if (!imgs.length) {
    photoStage.innerHTML = `<div class="photo-placeholder"><span>📷</span><p>Our photo will live here ❤️</p><small>Add your photo to <b>images/${activeMemory.iso}/</b></small></div>`;
  } else {
    const src = imgs[activeImage];
    photoStage.innerHTML = `<img class="memory-photo" src="${escapeHtml(src)}" alt="${escapeHtml(activeMemory.title)}" />`;
  }
  $('#modalDots').innerHTML = imgs.map((_, i) => `<button class="dot ${i === activeImage ? 'active' : ''}" data-photo="${i}" aria-label="Photo ${i+1}"></button>`).join('');
}

function openMemory(index) {
  activeMemory = memories[index];
  activeImage = 0;
  $('#modalDate').textContent = activeMemory.date;
  $('#modalTitle').textContent = activeMemory.title;
  $('#modalNote').textContent = activeMemory.note;
  renderPhoto();
  modal.classList.remove('hidden');
  modal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');
}

function closeMemory() {
  modal.classList.add('hidden');
  modal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
}

$('#closeModal').addEventListener('click', closeMemory);
modal.addEventListener('click', (e) => {
  if (e.target.dataset.close) closeMemory();
  const dot = e.target.closest('.dot');
  if (dot && activeMemory?.images?.length) {
    activeImage = Number(dot.dataset.photo);
    renderPhoto();
  }
});
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMemory(); });

$('#enterBtn').addEventListener('click', () => {
  $('#story').classList.remove('hidden');
  setTimeout(() => $('#story').scrollIntoView({behavior:'smooth'}), 40);
  launchHearts(12);
});

$('#giftBtn').addEventListener('click', () => {
  $('#giftMessage').classList.remove('hidden');
  $('#giftBtn').textContent = '❤️ I Love You, Ammu';
  launchHearts(30);
});

function countStats() {
  $('#dateCount').textContent = memories.length;
  $('#photoCount').textContent = memories.reduce((n,m) => n + (m.images?.length || 0), 0);
  const start = new Date('2025-03-15T00:00:00');
  const now = new Date();
  $('#dayCount').textContent = Math.max(0, Math.floor((now-start)/86400000));
}

function observeReveals() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {threshold: .12});
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

function makeStars() {
  const wrap = $('#stars');
  for (let i=0; i<90; i++) {
    const s = document.createElement('i');
    s.style.left = `${Math.random()*100}%`;
    s.style.top = `${Math.random()*100}%`;
    s.style.animationDelay = `${Math.random()*5}s`;
    s.style.animationDuration = `${3+Math.random()*5}s`;
    wrap.appendChild(s);
  }
}

function launchHearts(count) {
  for (let i=0; i<count; i++) {
    const h = document.createElement('span');
    h.className = 'floating-heart';
    h.textContent = Math.random() > .5 ? '❤' : '♡';
    h.style.left = `${20 + Math.random()*60}%`;
    h.style.setProperty('--drift', `${(Math.random()-.5)*180}px`);
    h.style.animationDelay = `${Math.random()*.5}s`;
    document.body.appendChild(h);
    setTimeout(() => h.remove(), 4000);
  }
}

makeTimeline();
makePhotoGallery();
countStats();
makeStars();
observeReveals();
