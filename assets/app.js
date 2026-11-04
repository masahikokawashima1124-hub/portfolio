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
    id: '37Y-iaI_SKo',
    title: 'HALF COURT 3x3｜架空のストリート3on3大会 告知ティザー（音ハメ・62秒）',
    desc: '高架下のコートで開かれる架空の3on3大会の告知映像。曲の拍と小節を測り、カットを2小節→2拍→1拍と詰めていきながら、キックで寄り・スネアで色ずれ・山場で大きく揺らしています。テロップも拍で打ち、3x3 の12秒ショットクロックを1拍ずつ数え下ろして、曲の音が全部そろう瞬間に「0」のブザー。曲が半拍抜けた直後のダンクに「21点、先に取れ。」を叩きつけます。選手3人は見本の画像から作り、全カットで同じ顔と服にそろえました。',
    note: '架空の大会による作例です。曲：Suno（AI）／映像：AI生成（GPT Image 2.5・Kling 3.0）／編集・テロップ：HTML（HyperFrames / GSAP）。',
    thumb: 'assets/thumbs/halfcourt.jpg',
    badge: '作例',
    filters: ['ai', 'edit', 'self'],
    tags: [{ label: '作例（架空の大会）', cls: 't-self' }, { label: 'AI生成', cls: 't-ai' }, { label: '音ハメ' }, { label: 'キネティックテロップ' }, { label: 'HyperFrames' }]
  },
  {
    id: 'Thb0JoDQIT8',
    title: 'KAZE 01｜架空スニーカーのティザー（音ハメ・67秒）',
    desc: '架空のランニングシューズのティザー。画面全体の彩度を落として靴の信号オレンジだけを残し、色を主役にしました。イントロは靴の部位ラベルを2小節ごとに、曲が1小節落ちる所で「風を、履け。」を1拍1字の縦書きで、ドラムが抜ける溜めで「KAZE 01」を1文字ずつ組み、最後のサビの頭で叩きつけます。カットとキック・スネアの画面効果はすべて曲の拍に合わせています。',
    note: '架空のブランドによる作例です。曲：Suno（AI）／映像：AI生成（GPT Image 2.5・Kling 3.0）／編集・テロップ：HTML（HyperFrames / GSAP）。',
    thumb: 'assets/thumbs/kaze01.jpg',
    badge: '作例',
    filters: ['ai', 'edit', 'self'],
    tags: [{ label: '作例（架空のブランド）', cls: 't-self' }, { label: 'AI生成', cls: 't-ai' }, { label: '音ハメ' }, { label: 'キネティックテロップ' }, { label: 'HyperFrames' }]
  },
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
    id: 'aq74Z8Vh_m0',
    title: 'ひととせ｜記念日の花の定期便 ブランドリール（作例）',
    desc: '記念日の花の定期便を想定した、Instagram リール向けのブランド動画（45秒）。花屋・ギフト系のリール約230本を調べ、伸びている「記念日の積み重ね」の型で構成。月ごとに画面の色がその月の花の色へ移り変わり、最後は12枚の押し花が額に集まって「1年分の、花束。」で完結します。',
    note: '作例（架空のブランド）です。実在のサービス・ご依頼によるものではありません。画像・映像はAIで生成しています。',
    thumb: 'assets/thumbs/hitotose.jpg',
    vertical: true,
    badge: '作例',
    filters: ['ai', 'short', 'edit', 'self'],
    tags: [{ label: '作例（架空のブランド）', cls: 't-self' }, { label: 'AI生成', cls: 't-ai' }, { label: 'ショート', cls: 't-short' }, { label: 'ブランドリール' }, { label: 'HyperFrames' }]
  },
  {
    id: '1cLVHBJW4PU',
    title: 'ねこ日記 #07｜日本語バラエティテロップ（作例・10秒）',
    desc: 'ショート・リール・vlog 向けに、バラエティ番組風のテロップ（花字）を付けた作例。感情ごとにテロップの性格を変えています：うれしい所は1字ずつ弾み、だらける所は字がとけて垂れ、気まずい所は縦書きで固まり、驚く所は集中線と爆発枠で叩きつける。多層の縁取り丸文字・汗・キラキラ・名札・警告帯・スタンプまで、番組テロップの定番を一通り入れ、効果音の打点に文字の入りをそろえました。すべての文字をスマホの画面で隠れない位置に収めています。',
    note: '架空の作例です（猫の写真はAIで生成）。中国語の花字の型 MG Styles「18 Variety Captions」（MIT License）を日本語のテロップに作り直しています。',
    thumb: 'assets/thumbs/neko07.jpg',
    vertical: true,
    badge: '作例',
    filters: ['ai', 'short', 'edit', 'self'],
    tags: [{ label: '作例（架空）', cls: 't-self' }, { label: 'AI生成', cls: 't-ai' }, { label: 'ショート', cls: 't-short' }, { label: 'バラエティテロップ' }, { label: 'モーショングラフィックス' }]
  },
  {
    id: 'd4YYqs2AQWE',
    title: '一反堂「ひと巡り」｜浮世絵スタイルの和のブランド映像（作例・35秒）',
    desc: '架空の手ぬぐい屋のための、Instagram リール向けブランド映像。木版画の「刷り」をそのまま演出にし、店先の版木はそのままに色の版だけを刷り替えて、春・夏・秋・冬を巡らせました。同じ手ぬぐいが贈り物・雨よけ・包み・襟巻きと使われ、最後は色の褪せた一枚で「使うほど、やわらかく。」に着地します。季節の頭の箏と拍子木、夏だけの三味線、冬のあとの完全な無音、結びの鈴と落款の音まで、音でも季節と間を作っています。絵・動き・音楽はすべてプログラムで描いています。',
    note: '架空のブランドによる作例です。ナレーションは音声合成（Gemini TTS）。絵は画像生成を使わずコードで描画し、Lemo-Opuscar「Ukiyo-e」（MIT License）の型を縦型に作り直しています。',
    thumb: 'assets/thumbs/ittando.jpg',
    vertical: true,
    badge: '作例',
    filters: ['ai', 'short', 'edit', 'self'],
    tags: [{ label: '作例（架空のブランド）', cls: 't-self' }, { label: 'ショート', cls: 't-short' }, { label: 'モーショングラフィックス' }, { label: '和風・浮世絵' }, { label: 'AI音声', cls: 't-ai' }]
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
    id: 'lZkQYeElh-A',
    title: 'SANTA RUSH｜寝坊したサンタの0時までの大配達（30秒）',
    desc: '寝坊したサンタが0時までにプレゼントを配りきれるか、を描いたクリスマスのショートフィルム。カメラの動き（狭いすき間の通り抜け・サンタ目線）は Blender で設計して AI 映像生成に渡し、早回しの時計・配達ルートの地図・拍に合わせたカウントダウン・風に飛ばされるテロップをモーショングラフィックスで重ねました。最後は時計台に引っかかった帽子でオチをつけています。',
    note: '架空の作品として制作した自主制作です。映像はAIで生成しています。',
    thumb: 'assets/thumbs/santa-rush.jpg',
    badge: '自主制作',
    filters: ['ai', 'edit', 'self'],
    tags: [{ label: '自主制作', cls: 't-self' }, { label: 'AI生成', cls: 't-ai' }, { label: 'Blender' }, { label: 'モーショングラフィックス' }, { label: 'Firefly' }]
  },
  {
    id: '5Fl6B-5TgMs',
    title: '夜ヲ喰ウ｜オリジナル曲の歌詞MV（ストリート・ミクスチャーロック／2分42秒）',
    desc: '曲から声だけを取り出して歌詞を1音ずつ16分・32分音符に合わせ、テロップを打楽器に連動させた歌詞MV。キックで跳ね、ハイハットで震え、スネアではじけます。見た目はストリートで統一し、判子・スプレー・テープの文字で画面を組んでいます。映像はすべて HTML（HyperFrames / GSAP）で作っています。',
    note: '作曲・歌唱：Suno（AI）／イラスト：AI生成／映像：HTML（HyperFrames / GSAP）で作成。オリジナル曲による自主制作です。',
    thumb: 'assets/thumbs/yoru.jpg',
    badge: '自主制作',
    filters: ['ai', 'edit', 'self'],
    tags: [{ label: '自主制作', cls: 't-self' }, { label: 'AI生成', cls: 't-ai' }, { label: '歌詞MV' }, { label: 'キネティックテロップ' }, { label: 'HyperFrames' }]
  },
  {
    id: 'R7kyHrjZHqw',
    title: '灼ケル｜オリジナル曲の歌詞MV（サイバー・エレクトロ／2分30秒）',
    desc: '「夜ヲ喰ウ」と同じ作り方（声だけを取り出して歌詞を16分・32分音符に合わせ、テロップをキック・ハイハット・スネアに連動）で、見た目をサイバー（HUD・グリッチ）に振った歌詞MV。サビでは画面いっぱいの漢字がひび割れて切れる演出に。映像はすべて HTML（HyperFrames / GSAP）で作っています。',
    note: '作曲・歌唱：Suno（AI）／イラスト：AI生成／映像：HTML（HyperFrames / GSAP）で作成。オリジナル曲による自主制作です。',
    thumb: 'assets/thumbs/shakeru.jpg',
    badge: '自主制作',
    filters: ['ai', 'edit', 'self'],
    tags: [{ label: '自主制作', cls: 't-self' }, { label: 'AI生成', cls: 't-ai' }, { label: '歌詞MV' }, { label: 'キネティックテロップ' }, { label: 'HyperFrames' }]
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
    chips.forEach(function (c) { c.classList.remove('is-on'); c.setAttribute('aria-pressed', 'false'); });
    chip.classList.add('is-on');
    chip.setAttribute('aria-pressed', 'true');
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

let lastFocus = null;   // 閉じたら、押したカードに戻る

function openModal(id, vertical) {
  lastFocus = document.activeElement;
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
  if (lastFocus && lastFocus.focus) lastFocus.focus();
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
  // 開いている間は、Tab で動画と「閉じる」の間だけを行き来する
  if (e.key === 'Tab' && !modal.hidden) {
    const frame = modalBox.querySelector('iframe');
    const order = [modalClose, frame].filter(Boolean);
    const i = order.indexOf(document.activeElement);
    e.preventDefault();
    order[(i + (e.shiftKey ? order.length - 1 : 1)) % order.length].focus();
  }
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
