/* ============================================================
   作品データ ここを編集すれば作品が増減します
   id       : YouTube の動画ID（URL の v= のあと / youtu.be/ のあと）
              空文字のものは未公開扱いで、サイトには表示されません
   vertical : ショート動画（縦型）なら true
   badge    : カード左上に出す小さなラベル（任意）
   note     : 説明の下に小さく出る注記（任意）
   tags     : 表示タグ。filter は絞り込みキー（ai / edit / short / biz / self）
   ============================================================ */
const WORKS = [
  /* --- 自主制作。動画IDが空のものは表示されません --- */
  {
    id: 'xrYHzMQLMjk',
    title: 'ワンスワイプルージュ UGC風ショート',
    desc: 'TikTok 向けに、個人の投稿として成立する形で構成。素材はすべて AI 生成で、広告に見せない画づくりを狙った版。',
    note: '架空の商品を題材にした自主制作です。',
    vertical: true,
    badge: '自主制作',
    filters: ['ai', 'short', 'self'],
    tags: [{ label: '自主制作', cls: 't-self' }, { label: 'AI生成', cls: 't-ai' }, { label: 'UGC風' }, { label: 'TikTok' }]
  },
  {
    id: '0-29ITBR1z8',
    title: '転職エージェント広告 ショート',
    desc: '主人公の心情の変化を、動画の明暗でも表現。迷いの暗さから決断の明るさへ、画づくりで感情を語らせる構成。',
    note: '架空のサービスを題材にした自主制作です。',
    vertical: true,
    badge: '自主制作',
    filters: ['ai', 'short', 'self'],
    tags: [{ label: '自主制作', cls: 't-self' }, { label: 'AI生成', cls: 't-ai' }, { label: 'Seedance' }, { label: 'Suno' }, { label: 'Premiere Pro' }]
  },
  {
    id: 'k-rAQ7-NF3Q',
    title: '化粧品広告（CM風）',
    desc: '同じ商材を、CM の文法で構成した版。朝の光と質感で見せる 15 秒。',
    note: '実在ブランドを題材にした自主制作です。ご依頼によるものではありません。',
    vertical: true,
    badge: '自主制作',
    filters: ['ai', 'short', 'self'],
    tags: [{ label: '自主制作', cls: 't-self' }, { label: 'AI生成', cls: 't-ai' }, { label: 'CM風' }]
  },
  {
    id: 'Ze6biXcjWXU',
    title: '化粧品広告（UGC風）',
    desc: '同じ商材を、スマホで撮った個人の投稿として構成した版。手ブレとジャンプカットで組む 15 秒。',
    note: '実在ブランドを題材にした自主制作です。ご依頼によるものではありません。',
    vertical: true,
    badge: '自主制作',
    filters: ['ai', 'short', 'self'],
    tags: [{ label: '自主制作', cls: 't-self' }, { label: 'AI生成', cls: 't-ai' }, { label: 'UGC風' }]
  },

  /* --- ここから受託・実務の作品 --- */
  {
    id: 'b9b4MQl33Rg',
    title: '学校イベント用ムービー',
    desc: '素材をすべて AI で生成し、Premiere Pro で構成・編集。',
    filters: ['ai', 'edit'],
    tags: [{ label: 'AI生成', cls: 't-ai' }, { label: 'イベント' }, { label: 'Premiere Pro' }]
  },
  {
    id: '11oE_QAc7NA',
    title: 'NEWXUS様 AI HACKATHON 応募動画',
    desc: 'コンテスト応募用に制作。伝えたいことを短い尺に収める構成。',
    filters: ['ai', 'edit', 'biz'],
    tags: [{ label: '実務', cls: 't-biz' }, { label: 'AI生成', cls: 't-ai' }, { label: 'コンテスト' }, { label: 'Premiere Pro' }]
  },
  {
    id: 'Hqe473NYiIE',
    title: '物知り博士 Instagram 用ショート',
    desc: '素材はフル AI 出力。縦型フォーマットに合わせてテンポよく編集。',
    vertical: true,
    filters: ['ai', 'short', 'edit'],
    tags: [{ label: 'ショート', cls: 't-short' }, { label: 'AI生成', cls: 't-ai' }, { label: 'Premiere Pro' }]
  },
  {
    id: '4f8MFYTlCok',
    title: '企業研修動画（字幕付き）',
    desc: '音声を再生成し、余計な間をカット。字幕を付けて最後まで見やすい長さに整えました。',
    filters: ['biz', 'edit'],
    tags: [{ label: '実務', cls: 't-biz' }, { label: '字幕' }, { label: 'Premiere Pro' }]
  }
];

/* ---------- 作品カードを描画 ---------- */
const grid = document.getElementById('work-grid');

grid.innerHTML = WORKS.filter(function (w) {
  return w.id;              // 動画IDが未入力のものは表示しない
}).map(function (w) {
  const tags = w.tags.map(function (t) {
    return '<li class="' + (t.cls || '') + '">' + t.label + '</li>';
  }).join('');

  return '' +
    '<button class="card reveal' + (w.vertical ? ' is-vertical' : '') + '"' +
    ' data-id="' + w.id + '"' +
    ' data-vertical="' + (w.vertical ? '1' : '') + '"' +
    ' data-filters="' + w.filters.join(' ') + '"' +
    ' aria-label="' + w.title + ' を再生">' +
      '<div class="card-media">' +
        '<img loading="lazy" alt="" src="https://i.ytimg.com/vi/' + w.id + '/maxresdefault.jpg"' +
        ' onerror="this.onerror=null;this.src=\'https://i.ytimg.com/vi/' + w.id + '/hqdefault.jpg\'">' +
        '<div class="card-play"><span>&#9654;</span></div>' +
        (w.badge ? '<span class="card-badge">' + w.badge + '</span>' : '') +
      '</div>' +
      '<div class="card-body">' +
        '<h3 class="card-title">' + w.title + '</h3>' +
        '<p class="card-desc">' + w.desc + '</p>' +
        (w.note ? '<p class="card-note">' + w.note + '</p>' : '') +
        '<ul class="card-tags">' + tags + '</ul>' +
      '</div>' +
    '</button>';
}).join('');

/* ---------- 絞り込み ---------- */
const chips = document.querySelectorAll('.chip');
const cards = grid.querySelectorAll('.card');

/* 該当する作品が1つも無いフィルタは、ボタンごと消す */
chips.forEach(function (chip) {
  const f = chip.dataset.filter;
  if (f === 'all') return;
  const hit = Array.prototype.some.call(cards, function (card) {
    return card.dataset.filters.split(' ').indexOf(f) !== -1;
  });
  if (!hit) chip.remove();
});

chips.forEach(function (chip) {
  chip.addEventListener('click', function () {
    chips.forEach(function (c) { c.classList.remove('is-on'); });
    chip.classList.add('is-on');
    const f = chip.dataset.filter;
    cards.forEach(function (card) {
      const hit = f === 'all' || card.dataset.filters.split(' ').indexOf(f) !== -1;
      card.style.display = hit ? '' : 'none';
    });
  });
});

/* ---------- モーダル再生 ---------- */
const modal = document.getElementById('modal');
const modalBox = document.getElementById('modal-box');
const modalClose = document.getElementById('modal-close');

function openModal(id, vertical) {
  modalBox.classList.toggle('is-vertical', !!vertical);
  modalBox.innerHTML =
    '<iframe src="https://www.youtube.com/embed/' + id + '?autoplay=1&rel=0" ' +
    'title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; ' +
    'encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
  modal.hidden = false;
  document.body.style.overflow = 'hidden';
  modalClose.focus();
}

function closeModal() {
  modal.hidden = true;
  modalBox.innerHTML = '';
  document.body.style.overflow = '';
}

cards.forEach(function (card) {
  card.addEventListener('click', function () {
    openModal(card.dataset.id, card.dataset.vertical);
  });
});
modalClose.addEventListener('click', closeModal);
modal.addEventListener('click', function (e) {
  if (e.target === modal) closeModal();
});
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.hidden) closeModal();
});

/* ---------- アプリの実画面を読み込む ---------- */
const appFrame = document.getElementById('app-frame');
const loadBtn = appFrame.querySelector('.device-load');

loadBtn.addEventListener('click', function () {
  const iframe = document.createElement('iframe');
  iframe.src = appFrame.dataset.src;
  iframe.title = 'まなびめぐる';
  iframe.loading = 'lazy';
  appFrame.querySelector('.device-screen').innerHTML = '';
  appFrame.querySelector('.device-screen').appendChild(iframe);
});

/* ---------- スクロールで表示 ---------- */
const io = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-in');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach(function (el, i) {
  el.style.transitionDelay = (i % 3) * 90 + 'ms';
  io.observe(el);
});

/* ---------- ヘッダーの影 ---------- */
const head = document.querySelector('.site-head');
addEventListener('scroll', function () {
  head.classList.toggle('is-stuck', scrollY > 10);
}, { passive: true });

/* ---------- 年号 ---------- */
document.getElementById('year').textContent = new Date().getFullYear();
