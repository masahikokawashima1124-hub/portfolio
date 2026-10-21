/* ============================================================
   作品データ ここを編集すれば作品が増減します
   id       : YouTube の動画ID（URL の v= のあと / youtu.be/ のあと）
              空文字のものは未公開扱いで、サイトには表示されません
   vertical : ショート動画（縦型）なら true
   badge    : カード左上に出す小さなラベル（任意）
   note     : 説明の下に小さく出る注記（任意）
   thumb    : 自前のサムネイル画像（任意。無ければ YouTube のサムネイル）
   tags     : 表示タグ。filter は絞り込みキー（ai / edit / short / biz / self）
   ============================================================ */
const WORKS = [
  /* --- 自主制作。動画IDが空のものは表示されません --- */
  {
    id: 'eVqQxz2NKRE',
    title: 'トレポチ｜AI歌もの広告MV（アニメ調）',
    desc: '三日坊主の会社員が覚醒するまでを、アニメ主題歌風のロックで描いたジム予約アプリの広告。歌声を解析して1文字ずつ歌う瞬間に合わせ、感情ごとに叩きつけ・揺れ・砕け散るキネティックテロップを設計。企画・作詞・AI映像生成・リップシンク・編集・モーショングラフィックスまで1人で制作。',
    note: '架空のサービスを題材にした自主制作です。',
    thumb: 'assets/thumbs/trepochi.jpg',
    vertical: true,
    badge: '自主制作',
    filters: ['ai', 'short', 'edit', 'self'],
    tags: [{ label: '自主制作', cls: 't-self' }, { label: 'AI生成', cls: 't-ai' }, { label: 'ショート', cls: 't-short' }, { label: 'キネティックテロップ' }, { label: 'Suno' }]
  },
  {
    id: '5d1GGATDAuk',
    title: 'イエラク｜AI歌もの広告MV（実写風）',
    desc: '家事に追われる休日から解放されるまでを、明るいシティポップで描いた家事代行マッチングの広告。丸い書体と、弾む・沈む・飛んでくるテロップで「暮らしの軽さ」を表現し、アプリ画面のUIアニメーションも自作。',
    note: '架空のサービスを題材にした自主制作です。',
    thumb: 'assets/thumbs/ieraku.jpg',
    vertical: true,
    badge: '自主制作',
    filters: ['ai', 'short', 'edit', 'self'],
    tags: [{ label: '自主制作', cls: 't-self' }, { label: 'AI生成', cls: 't-ai' }, { label: 'ショート', cls: 't-short' }, { label: 'キネティックテロップ' }, { label: 'Suno' }]
  },
  {
    id: 'qfYBnz_Bzmc',
    title: '美容医師ショート「毛穴の黒ずみ、洗うほど逆効果」',
    desc: '伸びている美容医師系アカウントの編集の型（縦書きの特大テロップ、背景を暗くする強調、情報カード、引きと寄りの切り替え、Bロールの差し込み）を分析して再現したサンプル。人物・ナレーション・Bロール・BGMはすべてAIで生成し、口の動きはリップシンク専用ツールで声と合わせています。',
    note: '登場人物・映像はAIで生成したもので、実在の医師ではありません。',
    vertical: true,
    badge: '自主制作',
    filters: ['ai', 'short', 'edit', 'self'],
    tags: [{ label: '自主制作', cls: 't-self' }, { label: 'AI生成', cls: 't-ai' }, { label: 'ショート', cls: 't-short' }, { label: 'リップシンク' }]
  },
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

  {
    id: 'S0JJbnzaXtU',
    title: '2ch風ショート「手柄を横取りする課長」',
    desc: '掲示板のスレッド形式で、職場の理不尽な話を見せるストーリー系ショート。読ませる文字量と、続きを見たくなるテンポの両立を狙った構成。',
    vertical: true,
    badge: '自主制作',
    filters: ['short', 'edit', 'self'],
    tags: [{ label: '自主制作', cls: 't-self' }, { label: 'ショート', cls: 't-short' }, { label: '2ch風' }]
  },

  {
    id: 'N9TS4KRRTvI',
    title: '炎の向こうへ｜架空の映画予告編（60秒）',
    desc: '高層マンションの火災から少女を救い出す消防士の物語を、緊張・驚き・恐怖・決意・興奮という「激しい感情」だけで構成した予告編。主役は映像ではなくモーショングラフィックスと編集：計器（時計・室温・残り酸素）、現場までの地図、建物の見取り図、鼓動と同期する心電図、炎に飲まれる文字、火の粉が集まる題字。曲の構成を解析し、無音・山場・最後の一打を場面に合わせています。',
    note: '架空の映画として制作した自主制作です。登場人物・映像はAIで生成しています。',
    thumb: 'assets/thumbs/honoo.jpg',
    badge: '自主制作',
    filters: ['ai', 'edit', 'self'],
    tags: [{ label: '自主制作', cls: 't-self' }, { label: 'AI生成', cls: 't-ai' }, { label: 'モーショングラフィックス' }, { label: '予告編' }, { label: 'HyperFrames' }]
  },
  {
    id: 'cq1PoIJ06UA',
    title: '「ありがとう」を7つの感情で（58秒）',
    desc: '同じ一言「ありがとう」を、興奮・コミカル・怒り・悲しみ・懐かしさ・優しさ・愛情で演じ分けた感情演出の作例。章ごとに書体・色・イージング・カットのリズム・効果音を変え、拍に合わせた連打、間で笑わせるスマッシュカット、打ち消し線と無音、沈む文字、線で描く文字などで感情を表現しました。',
    note: '自主制作です。写真・映像はAIで生成しています。',
    thumb: 'assets/thumbs/arigatou.jpg',
    badge: '自主制作',
    filters: ['ai', 'edit', 'self'],
    tags: [{ label: '自主制作', cls: 't-self' }, { label: 'AI生成', cls: 't-ai' }, { label: 'モーショングラフィックス' }, { label: '感情演出' }, { label: 'HyperFrames' }]
  },

  /* --- ここから受託・実務の作品 --- */
  {
    id: 'u9rzry8JGws',
    title: 'サンリバー × カワコー 会社案内ムービー',
    desc: '石川県小松市の製造業2社（溶接・マシニング × 大型旋盤）の会社案内。設備のスペックや製作事例を、数字が動くモーショングラフィックスで見せ、「何が作れる会社か」が一目で伝わる構成にしました。',
    note: 'Before：現場写真46枚と紙の会社案内のみ → After：93秒の動画。ヒアリング・構成・絵コンテから、AIナレーション・BGMの調整まで一貫して担当。',
    filters: ['biz', 'edit'],
    tags: [{ label: '実務', cls: 't-biz' }, { label: '会社案内' }, { label: 'モーショングラフィックス' }, { label: 'AIナレーション' }]
  },
  {
    id: 'SNCdh7bibVo',
    title: '雫野醸造 会社案内ムービー',
    desc: 'しょうゆ醸造元の会社案内（約90秒）。創業年・木桶の本数・熟成期間・出荷数などのデータを、しょうゆの「雫」が落ちて線になる仕掛けでつなぎ、数字が動くモーショングラフィックスで見せる構成。',
    note: '架空の会社・数字で制作したサンプルです。画像はAIで生成しています。',
    badge: '自主制作',
    filters: ['ai', 'edit', 'self'],
    tags: [{ label: '自主制作', cls: 't-self' }, { label: 'AI生成', cls: 't-ai' }, { label: '会社案内' }, { label: 'モーショングラフィックス' }]
  },
  {
    id: '-7ePMn_UeD8',
    title: '凪音整体院 紹介ムービー',
    desc: '整体院の紹介（約84秒）。初回カウンセリング・施術の流れ・メニュー・院内の設備を、呼吸をイメージした丸が落ちて線になる演出で見せる構成。明るく淡い配色にして、同じ型の表現の幅を見せた版。',
    note: '架空の院・数字で制作したサンプルです。画像はAIで生成しています。',
    badge: '自主制作',
    filters: ['ai', 'edit', 'self'],
    tags: [{ label: '自主制作', cls: 't-self' }, { label: 'AI生成', cls: 't-ai' }, { label: '会社案内' }, { label: 'モーショングラフィックス' }]
  },
  {
    id: 'dje3bj_4ZG0',
    title: '柚葉工務店 会社案内ムービー',
    desc: '工務店の会社案内（約83秒）。県産材・ご相談からお引き渡しまでの6工程・耐震と断熱の性能・施工実績を、「家の形」が落ちて線になる演出とメーターで見せる構成。',
    note: '架空の会社・数字で制作したサンプルです。画像はAIで生成しています。',
    badge: '自主制作',
    filters: ['ai', 'edit', 'self'],
    tags: [{ label: '自主制作', cls: 't-self' }, { label: 'AI生成', cls: 't-ai' }, { label: '会社案内' }, { label: 'モーショングラフィックス' }]
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

/* ---------- 作品カードを描画（縦型と横型でグループを分ける） ---------- */
function cardHTML(w) {
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
        (w.thumb
          ? '<img loading="lazy" alt="" src="' + w.thumb + '">'
          : '<img loading="lazy" alt="" src="https://i.ytimg.com/vi/' + w.id + '/maxresdefault.jpg"' +
            ' onerror="this.onerror=null;this.src=\'https://i.ytimg.com/vi/' + w.id + '/hqdefault.jpg\'">') +
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
}

const published = WORKS.filter(function (w) { return w.id; });   // 動画IDが未入力のものは表示しない
document.getElementById('grid-v').innerHTML =
  published.filter(function (w) { return w.vertical; }).map(cardHTML).join('');
document.getElementById('grid-h').innerHTML =
  published.filter(function (w) { return !w.vertical; }).map(cardHTML).join('');

/* ---------- 絞り込み ---------- */
const chips = document.querySelectorAll('.chip');
const cards = document.querySelectorAll('.work-group .card');
const groups = document.querySelectorAll('.work-group');

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
    // 中身が全部隠れたグループは、見出しごと隠す
    groups.forEach(function (g) {
      const any = Array.prototype.some.call(g.querySelectorAll('.card'), function (c) { return c.style.display !== 'none'; });
      g.hidden = !any;
    });
  });
});

// 作品が1本も無いグループは最初から隠す
groups.forEach(function (g) { g.hidden = !g.querySelector('.card'); });

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

/* ---------- モーショングラフィックス ----------
   画面に入ったら無音で自動再生、外れたら一時停止。
   「音ありで見る」を押すと、その1本だけ音ありで頭から再生する。 */
const mgVideos = document.querySelectorAll('.mg-media video');
const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!reduceMotion && 'IntersectionObserver' in window) {
  const mgIO = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      const v = entry.target;
      if (entry.isIntersecting) {
        const p = v.play();
        if (p && p.catch) p.catch(function () {});
      } else {
        v.pause();
      }
    });
  }, { threshold: 0.5 });
  mgVideos.forEach(function (v) { mgIO.observe(v); });
}

document.querySelectorAll('.mg-sound').forEach(function (btn) {
  btn.addEventListener('click', function () {
    const v = btn.parentElement.querySelector('video');
    mgVideos.forEach(function (o) { if (o !== v) o.muted = true; });   // 他は消音
    v.muted = false;
    v.controls = true;
    v.currentTime = 0;
    const p = v.play();
    if (p && p.catch) p.catch(function () {});
    btn.hidden = true;
  });
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
