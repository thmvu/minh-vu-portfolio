import { writeFile, mkdir } from 'node:fs/promises';
import { createHandPoints, landmarks, connections, keyLandmarks, landmarkNames } from '../hand-data.js';

await mkdir('assets/projects', { recursive: true });

const svg = (body, bg = '#0d1726', id = 'g') => `<svg xmlns="http://www.w3.org/2000/svg" width="760" height="480" viewBox="0 0 760 480">
  <defs>
    <radialGradient id="glow-${id}" cx="50%" cy="52%" r="58%">
      <stop offset="0%" stop-color="#38bdf8" stop-opacity=".14"/>
      <stop offset="65%" stop-color="#1e3a5f" stop-opacity=".05"/>
      <stop offset="100%" stop-color="${bg}" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="panel-${id}" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#132238" stop-opacity=".92"/>
      <stop offset="100%" stop-color="#0b1524" stop-opacity=".95"/>
    </linearGradient>
  </defs>
  <rect width="760" height="480" fill="${bg}"/>
  <rect width="760" height="480" fill="url(#glow-${id})"/>
  ${body}
</svg>`;

const grid = (step = 38, color = '#1b2d45', opacity = '.35') => {
  let out = '';
  for (let x = 0; x <= 760; x += step) out += `<line x1="${x}" y1="64" x2="${x}" y2="480" stroke="${color}" opacity="${opacity}"/>`;
  for (let y = 64; y <= 480; y += step) out += `<line x1="0" y1="${y}" x2="760" y2="${y}" stroke="${color}" opacity="${opacity}"/>`;
  return out;
};

const esc = value => String(value).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const txt = (x, y, value, size = 12, color = '#9eb9d4', extra = '') =>
  `<text x="${x}" y="${y}" font-family="'Instrument Sans',system-ui,sans-serif" font-size="${size}" fill="${color}" ${extra}>${esc(value)}</text>`;

const pill = (x, y, w, h, label, sub = '', accent = '#a6d2ff') => `
  <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="6" fill="#0e1b2d" stroke="#28405e" stroke-width="1"/>
  <circle cx="${x + 14}" cy="${y + 18}" r="3.5" fill="${accent}"/>
  ${txt(x + 24, y + 22, label, 12, '#e6f1ff', 'font-weight="600"')}
  ${sub ? txt(x + 14, y + 40, sub, 11, '#89a3c2') : ''}
`;

// 1. TRAFFIC (Giamsatgiaothong2 — YOLO11m + SAM2 + RapidOCR + FastAPI WebSocket)
let traffic = grid(38, '#1a2d44', '.38');
traffic += `
  <path d="M168 468 296 86h168l128 382" fill="#102033" stroke="#355273" stroke-width="1.5"/>
  <path d="M380 86v382M324 86 266 468M436 86 494 468" stroke="#567a9e" stroke-dasharray="12 12" opacity=".45"/>
  <!-- SAM2 Calibrated Stop-Line Polygon -->
  <polygon points="205,342 555,342 566,374 194,374" fill="#2dd4bf" fill-opacity=".12" stroke="#5eead4" stroke-width="1.5" stroke-dasharray="6 4"/>
  <line x1="200" y1="356" x2="560" y2="356" stroke="#a6d2ff" stroke-width="2.5"/>
  <!-- Traffic Light HSV Box -->
  <rect x="344" y="76" width="72" height="26" rx="13" fill="#0d1828" stroke="#f87171" stroke-width="1.2"/>
  <circle cx="360" cy="89" r="5" fill="#ef4444"/><circle cx="380" cy="89" r="4" fill="#334155"/><circle cx="398" cy="89" r="4" fill="#334155"/>
`;
for (const [x, y, w, h, id, plate, status, col] of [
  [288, 166, 48, 78, 'ID #14 · Car', '30A-842.19', 'OK', '#7dd3fc'],
  [408, 238, 52, 86, 'ID #21 · Moto', 'Helmet ✓', 'TRACK', '#a6d2ff'],
  [316, 326, 60, 106, 'ID #27 · Red-Light', '29H-519.04', 'VIOLATION', '#fb7185']
]) {
  traffic += `
    <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="10" fill="#1b314b" stroke="${col}" stroke-width="1.5"/>
    <path d="M${x + 7} ${y + 18}h${w - 14}M${x + 7} ${y + h - 18}h${w - 14}" stroke="${col}" opacity=".65"/>
    <rect x="${x - 8}" y="${y - 8}" width="${w + 16}" height="${h + 16}" rx="4" fill="none" stroke="${col}" stroke-width="1" stroke-dasharray="5 3"/>
    <rect x="${x - 8}" y="${y - 24}" width="${w + 46}" height="15" rx="3" fill="${col}" fill-opacity=".18"/>
    ${txt(x - 4, y - 13, id, 10, '#eef6ff', 'font-weight="600"')}
    <rect x="${x + 8}" y="${y + h - 14}" width="${w - 16}" height="10" rx="2" fill="#091321" stroke="${col}" stroke-width=".8"/>
  `;
  if (status === 'VIOLATION') {
    traffic += `<circle cx="${x + 12}" cy="${y + h}" r="4" fill="#fb7185"/><circle cx="${x + w - 12}" cy="${y + h}" r="4" fill="#fb7185"/>`;
  }
}
traffic += pill(28, 108, 178, 54, 'YOLO11m + ByteTrack', 'Multi-class vehicle & helmet', '#7dd3fc');
traffic += `<line x1="206" y1="136" x2="280" y2="188" stroke="#557b9e" stroke-dasharray="3 4"/>`;
traffic += pill(28, 184, 178, 54, 'HSV Light + Bottom-Edge', 'Anti-glare red-light logic', '#fb7185');
traffic += `<line x1="206" y1="210" x2="344" y2="92" stroke="#fb7185" stroke-dasharray="3 4" opacity=".6"/>`;
traffic += pill(554, 146, 178, 54, 'SAM2 Magic Frame', 'Auto stop-line · 4GB VRAM', '#5eead4');
traffic += `<line x1="554" y1="176" x2="520" y2="342" stroke="#5eead4" stroke-dasharray="3 4" opacity=".7"/>`;
traffic += pill(554, 224, 178, 54, 'RapidOCR + WebSocket', '29H-519.04 → React 19 UI', '#a6d2ff');
traffic += `<line x1="554" y1="252" x2="384" y2="380" stroke="#a6d2ff" stroke-dasharray="3 4" opacity=".7"/>`;
traffic += `<rect x="28" y="424" width="704" height="34" rx="6" fill="#0b1524" stroke="#223650"/>
  ${txt(44, 445, 'PIPELINE: Video Stream → YOLO11m / SAM2 Calibration → RapidOCR → FastAPI Thread → WebSocket → React 19', 11, '#9ab2ce')}`;
await writeFile('assets/projects/traffic.svg', svg(traffic, '#0c1626', 'traffic'));

// 2. VSL WEB (vietnamese-sign-language-web — MediaPipe 21 Landmarks × 100 Frames → FastAPI LSTM → Node/MySQL + Gemini)
let vsl = grid(38, '#17313d', '.35');
function projectHand2D(p) {
  const ay = -.28, ax = .12, a = -.1;
  let x = p[0] * Math.cos(ay) + p[2] * Math.sin(ay), z = -p[0] * Math.sin(ay) + p[2] * Math.cos(ay);
  let y = p[1] * Math.cos(ax) - z * Math.sin(ax);
  const xx = x * Math.cos(a) + y * Math.sin(a), yy = -x * Math.sin(a) + y * Math.cos(a);
  return [154 + xx * 118, 268 - yy * 118];
}
vsl += `<rect x="32" y="92" width="242" height="318" rx="10" fill="#0b1c26" stroke="#264b5e"/>`;
vsl += txt(50, 118, '01 · Browser @mediapipe/hands', 12, '#7dd3fc', 'font-weight="600"');
vsl += txt(50, 136, '21 landmarks · 42 normalized (x,y)', 11, '#88a8be');
for (const [a, b] of connections) {
  const [x1, y1] = projectHand2D(landmarks[a]), [x2, y2] = projectHand2D(landmarks[b]);
  vsl += `<line x1="${x1.toFixed(1)}" y1="${y1.toFixed(1)}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}" stroke="#5eead4" stroke-width="1.8" opacity=".75"/>`;
}
landmarks.forEach((pt, idx) => {
  const [x, y] = projectHand2D(pt);
  const key = keyLandmarks.includes(idx);
  vsl += `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${key ? 4.5 : 2.8}" fill="${key ? '#5eead4' : '#bae6fd'}" stroke="#081520" stroke-width="1"/>`;
});
vsl += `<rect x="48" y="366" width="210" height="28" rx="5" fill="#102836" stroke="#2c586e"/>
  ${txt(60, 384, 'Center-invariant scale · 100 frames', 11, '#a6d2ff')}`;

// Middle column: Sequence Tensor + FastAPI LSTM
vsl += `<rect x="298" y="92" width="214" height="318" rx="10" fill="#0d1b2d" stroke="#284363"/>`;
vsl += txt(316, 118, '02 · FastAPI + LSTM (:8000)', 12, '#a6d2ff', 'font-weight="600"');
vsl += txt(316, 136, 'Sequence shape: (100, 42) tensor', 11, '#89a4c2');
for (let i = 0; i < 12; i++) {
  const bx = 318 + i * 14.5;
  const bh = 38 + Math.round(Math.sin(i * .65 + .4) * 24 + (i > 7 ? 22 : 0));
  const by = 242 - bh;
  vsl += `<rect x="${bx}" y="${by}" width="10" height="${bh}" rx="2" fill="${i > 8 ? '#5eead4' : '#38bdf8'}" opacity="${(.45 + i * .045).toFixed(2)}"/>`;
}
vsl += `<rect x="316" y="258" width="178" height="62" rx="6" fill="#13263e" stroke="#365980"/>
  ${txt(330, 281, 'TensorFlow / Keras LSTM', 12, '#eef6ff', 'font-weight="600"')}
  ${txt(330, 301, 'Temporal gesture classifier', 11, '#9ab2ce')}
  <rect x="316" y="334" width="178" height="58" rx="6" fill="#102338" stroke="#284363"/>
  ${txt(330, 356, 'Confidence: 96.4%', 12, '#5eead4', 'font-weight="600"')}
  ${txt(330, 375, 'Label → "Xin chào / Cảm ơn"', 11, '#c8ddf5')}`;

// Right column: Express/MySQL + React 19 + Gemini Flash 2
vsl += `<rect x="536" y="92" width="192" height="318" rx="10" fill="#0d1b2d" stroke="#284363"/>`;
vsl += txt(554, 118, '03 · Web & AI Tutor', 12, '#a6d2ff', 'font-weight="600"');
vsl += txt(554, 136, 'React 19 + Node.js 20', 11, '#89a4c2');
vsl += pill(550, 154, 164, 52, 'Courses & Quizzes', 'Progress tracking · JWT', '#7dd3fc');
vsl += pill(550, 218, 164, 52, 'Camera AI Practice', 'Real-time feedback loop', '#5eead4');
vsl += pill(550, 282, 164, 52, 'Gemini Flash 2 Bot', 'Sign Q&A assistant', '#c084fc');
vsl += pill(550, 346, 164, 48, 'Express + MySQL 8', 'Sequelize ORM (:5000)', '#93c5fd');
vsl += `<path d="M274 250h24M512 250h24" stroke="#5eead4" stroke-width="2" stroke-dasharray="4 3"/>`;
vsl += `<rect x="32" y="424" width="696" height="34" rx="6" fill="#0a1622" stroke="#213c50"/>
  ${txt(48, 445, '3-SERVICE STACK: React 19 (:5173)  ⇄  Node.js / Express / MySQL (:5000)  ⇄  FastAPI LSTM Service (:8000)', 11, '#9ab2ce')}`;
await writeFile('assets/projects/vsl.svg', svg(vsl, '#0b1c26', 'vsl'));

// 3. KNOWLEDGE TRACING & ADAPTIVE LLM AGENT (nghiencuuhocsinh — FoundationalASSIST 238,330 test interactions + BKT + Qwen Agent)
let kt = grid(38, '#1b2b44', '.35');
kt += `<rect x="30" y="90" width="338" height="320" rx="10" fill="#0f1c30" stroke="#294366"/>`;
kt += txt(48, 118, 'RQ1 · FoundationalASSIST Benchmark (TEST)', 13, '#e6f1ff', 'font-weight="600"');
kt += txt(48, 138, '238,330 single-skill interactions · Student-disjoint 70/15/15', 11, '#8ba5c4');
const rq1Models = [
  ['XGBoost', '0.1782', '0.7884', 248, '#5eead4'],
  ['Problem', '0.2090', '0.6971', 186, '#60a5fa'],
  ['BKT', '0.2102', '0.6866', 178, '#7dd3fc'],
  ['PFA', '0.2105', '0.6904', 180, '#93c5fd'],
  ['Global', '0.2354', '0.5000', 118, '#475569']
];
kt += txt(48, 166, 'Model', 10, '#7c97b8') + txt(124, 166, 'ROC-AUC (higher ↑)', 10, '#7c97b8') + txt(298, 166, 'Brier ↓', 10, '#7c97b8');
rq1Models.forEach(([m, brier, auc, bw, col], idx) => {
  const y = 182 + idx * 38;
  kt += `
    ${txt(48, y + 14, m, 12, idx === 0 ? '#5eead4' : '#d2e4f8', idx === 0 ? 'font-weight="600"' : '')}
    <rect x="124" y="${y + 2}" width="160" height="14" rx="4" fill="#091322" stroke="#1e334d"/>
    <rect x="124" y="${y + 2}" width="${Math.round(bw * .62)}" height="14" rx="4" fill="${col}" opacity="${idx === 0 ? '.9' : '.65'}"/>
    ${txt(236, y + 13, auc, 10, '#08111d', 'font-weight="600"')}
    ${txt(298, y + 14, brier, 11, idx === 0 ? '#5eead4' : '#9eb9d4', idx === 0 ? 'font-weight="600"' : '')}
  `;
});
kt += `<rect x="48" y="372" width="302" height="24" rx="4" fill="#0a1423"/>
  ${txt(58, 388, 'Train: 1.12M · Val: 241.5k · Test: 242.0k rows', 11, '#8ea9c9')}`;

// Right column: RQ2 BKT + Policy B+ + Local Qwen Agent
kt += `<rect x="392" y="90" width="338" height="320" rx="10" fill="#0f1c30" stroke="#294366"/>`;
kt += txt(410, 118, 'RQ2 · Adaptive Selection Prototype (v3)', 13, '#e6f1ff', 'font-weight="600"');
kt += txt(410, 138, 'BKT Mastery State → 8 Candidates → Policy B+ / Qwen2.5', 11, '#8ba5c4');
kt += pill(410, 156, 302, 50, '1 · BKT Skill Mastery State', 'Estimated per-skill mastery at student cutoff', '#7dd3fc');
kt += pill(410, 218, 302, 50, '2 · Candidate Pool (8 Problems)', 'Filtered from TRAIN metadata + difficulty/support', '#60a5fa');
kt += pill(410, 280, 302, 50, '3 · Qwen2.5:1.5b (Ollama) + Policy B+', '240/240 schema-valid runs · 328 local evaluations', '#5eead4');
kt += `<rect x="410" y="344" width="302" height="50" rx="6" fill="#13253d" stroke="#315177"/>
  ${txt(424, 365, 'Blind 40-Item Self-Review UI (:9411)', 12, '#a6d2ff', 'font-weight="600"')}
  ${txt(424, 383, 'Locked protocol v4 · Permutation stability audit', 11, '#9ab2ce')}`;
kt += `<rect x="30" y="424" width="700" height="34" rx="6" fill="#0a1423" stroke="#223650"/>
  ${txt(46, 445, 'STUDENT RESEARCH: FoundationalASSIST Snapshot · BKT / PFA / XGBoost · Local Qwen Agent & Verification Protocol', 11, '#9ab2ce')}`;
await writeFile('assets/projects/kt.svg', svg(kt, '#0c1628', 'kt'));

// 4. CHURN (Customer-Churn-Analysis — Dark-Mode Precision-Recall & Feedback-Loop Ensemble Blueprint)
let churn = grid(38, '#1a2c42', '.35');
churn += `<rect x="30" y="88" width="424" height="322" rx="10" fill="#0d192b" stroke="#284261"/>`;
churn += txt(48, 116, 'Precision-Recall Curve · Fixed Evaluation (n = 1,409)', 13, '#e6f1ff', 'font-weight="600"');
churn += txt(48, 134, 'Feedback-Loop Soft Voting Ensemble (PR-AUC = 0.6697)', 11, '#8ba5c4');
// Axes: x from 84 to 424 (width 340), y from 156 to 366 (height 210)
churn += `<line x1="84" y1="156" x2="84" y2="366" stroke="#476585" stroke-width="1.5"/>`;
churn += `<line x1="84" y1="366" x2="424" y2="366" stroke="#476585" stroke-width="1.5"/>`;
for (let i = 0; i <= 4; i++) {
  const gx = 84 + i * 85;
  const gy = 156 + i * 52.5;
  churn += `<line x1="${gx}" y1="156" x2="${gx}" y2="366" stroke="#1e324a" stroke-dasharray="3 3"/>`;
  churn += `<line x1="84" y1="${gy}" x2="424" y2="${gy}" stroke="#1e324a" stroke-dasharray="3 3"/>`;
  churn += txt(gx - 8, 382, (i * 0.25).toFixed(2), 10, '#7e99b8');
  churn += txt(52, 370 - i * 52.5, (i * 0.25).toFixed(2), 10, '#7e99b8');
}
churn += txt(218, 398, 'Recall (Positive label: Churn = 1)', 10, '#9eb9d4');
// Baseline prevalence line (~0.265)
churn += `<line x1="84" y1="310" x2="424" y2="310" stroke="#64748b" stroke-dasharray="5 5"/>`;
churn += txt(94, 304, 'No-skill baseline (0.265)', 10, '#8499b3');
// PR Curve area & path
const prPath = 'M84,158 L112,162 L145,174 L178,186 L212,202 L248,215 L284,228 L318,242 L346,253 L367,260 L388,278 L408,298 L424,310';
churn += `<path d="${prPath} L424,366 L84,366 Z" fill="#38bdf8" fill-opacity=".12"/>`;
churn += `<path d="${prPath}" fill="none" stroke="#5eead4" stroke-width="2.6"/>`;
// Operating point at Recall = 0.8316 (x = 84 + 0.8316*340 = 366.7), Precision = 0.5041 (y = 366 - 0.5041*210 = 260.1)
churn += `<line x1="367" y1="156" x2="367" y2="366" stroke="#a6d2ff" stroke-dasharray="3 3" opacity=".7"/>`;
churn += `<line x1="84" y1="260" x2="367" y2="260" stroke="#a6d2ff" stroke-dasharray="3 3" opacity=".7"/>`;
churn += `<circle cx="367" cy="260" r="6" fill="#0d192b" stroke="#5eead4" stroke-width="3"/>`;
churn += `<rect x="210" y="162" width="148" height="44" rx="5" fill="#11243b" stroke="#3b628b"/>
  ${txt(220, 180, 'OOF Threshold τ = 0.460', 11, '#5eead4', 'font-weight="600"')}
  ${txt(220, 196, 'Recall 83.2% · F2 0.736', 10, '#d6e8ff')}`;

// Right panel: Pipeline & Ensemble Weights
churn += `<rect x="472" y="88" width="258" height="322" rx="10" fill="#0d192b" stroke="#284261"/>`;
churn += txt(490, 116, '8-Notebook Fold-Safe Pipeline', 13, '#e6f1ff', 'font-weight="600"');
churn += txt(490, 134, '132 candidates · 5×3 Nested-CV', 11, '#8ba5c4');
churn += pill(490, 152, 222, 50, 'Fixed-Eval F2: 0.7359', 'CV F2: 0.7269 ± 0.0116', '#5eead4');
churn += pill(490, 212, 222, 50, '311 / 374 Churners Caught', '95% CI Recall: 79.4% – 86.6%', '#7dd3fc');
churn += pill(490, 272, 222, 50, 'Converged Voting Weights', 'XGBoost 0.684 · LightGBM 0.316', '#60a5fa');
churn += `<rect x="490" y="334" width="222" height="58" rx="6" fill="#112238" stroke="#2b486b"/>
  ${txt(504, 355, 'Single Artifact Packaging', 12, '#a6d2ff', 'font-weight="600"')}
  ${txt(504, 374, 'robust_churn_pipeline.joblib', 11, '#9ab2ce')}`;
churn += `<rect x="30" y="424" width="700" height="34" rx="6" fill="#0a1423" stroke="#223650"/>
  ${txt(46, 445, 'WORKFLOW: Notebooks 01–08 · Impute/Scale/Encode inside CV · OOF Constrained F2 (Precision ≥ 0.50)', 11, '#9ab2ce')}`;
await writeFile('assets/projects/churn.svg', svg(churn, '#0b1525', 'churn'));

// 5. CAR DAMAGE (car_damage — PyTorch + torchvision + OpenCV + Flask)
let car = grid(38, '#1d2b44', '.35');
car += `<ellipse cx="388" cy="378" rx="258" ry="24" fill="#060c16" opacity=".65"/>
  <path d="m132 308 38-69 99-28 66-72h135l92 76 78 28 34 71-8 46H139Z" fill="#1c3049" stroke="#7da6ce" stroke-width="1.6"/>
  <path d="m281 212 62-59h116l71 61ZM180 241l83-17h284l80 29-9 63H158Z" fill="#132235" stroke="#5b7ea1"/>
  <path d="M291 213h244M365 156l-9 60M442 156l19 60M169 264l459 18M160 291l463 13M274 227l-16 93M373 225v99M485 228l22 91" fill="none" stroke="#5b7ea1" opacity=".55"/>`;
for (const [cx, cy] of [[224, 347], [563, 348]]) {
  car += `<ellipse cx="${cx}" cy="${cy}" rx="37" ry="43" fill="#0b1422" stroke="#729abf" stroke-width="2"/>
    <ellipse cx="${cx}" cy="${cy}" rx="18" ry="24" fill="#1e344d" stroke="#8ab4d8"/>`;
}
// Damage ROI boxes
car += `
  <rect x="454" y="220" width="128" height="92" rx="4" fill="#fb718518" stroke="#fb7185" stroke-width="1.5" stroke-dasharray="6 4"/>
  <path d="m474 262 15-10 12 13 17-10 17 16" fill="none" stroke="#fb7185" stroke-width="2.2"/>
  <rect x="454" y="200" width="136" height="18" rx="3" fill="#fb7185" fill-opacity=".22"/>
  ${txt(462, 213, 'ROI #1 · Dent / Scratch', 10, '#ffe4e6', 'font-weight="600"')}
  <rect x="292" y="152" width="132" height="58" rx="4" fill="#38bdf815" stroke="#5eead4" stroke-width="1.3" stroke-dasharray="5 3"/>
  ${txt(300, 145, 'ROI #2 · Glass Check', 10, '#5eead4', 'font-weight="600"')}
`;
car += pill(32, 96, 198, 52, '1 · Image Upload & PIL', 'OpenCV resize · tensor norm', '#7dd3fc');
car += pill(280, 96, 200, 52, '2 · PyTorch CNN Model', 'torchvision feature extractor', '#5eead4');
car += pill(530, 96, 198, 52, '3 · Flask Web Inference', 'Damage class + confidence UI', '#a6d2ff');
car += `<rect x="32" y="424" width="696" height="34" rx="6" fill="#0b1524" stroke="#223650"/>
  ${txt(48, 445, 'PIPELINE: User Vehicle Photo → PIL / OpenCV Transforms → PyTorch (model.pth) → Flask Web Result', 11, '#9ab2ce')}`;
await writeFile('assets/projects/car.svg', svg(car, '#101c2e', 'car'));

// 6. POSE / HOLISTIC SIGN LANGUAGE (Vietnamese-Sign-Language-byVu — MediaPipe Holistic + Temporal Interpolation + TF)
let pose = grid(38, '#162c3d', '.35');
const skeleton = [[380, 152], [380, 202], [295, 216], [245, 278], [186, 224], [466, 216], [516, 278], [574, 210], [333, 334], [430, 334], [306, 408], [460, 408]];
const segments = [[0, 1], [1, 2], [2, 3], [3, 4], [1, 5], [5, 6], [6, 7], [2, 8], [5, 9], [8, 9], [8, 10], [9, 11]];
pose += `<rect x="118" y="96" width="524" height="316" rx="10" fill="#0c1d2c" stroke="#294e6b" stroke-dasharray="8 5"/>`;
for (const [a, b] of segments) {
  pose += `<line x1="${skeleton[a][0]}" y1="${skeleton[a][1]}" x2="${skeleton[b][0]}" y2="${skeleton[b][1]}" stroke="#5eead4" stroke-width="2.2"/>`;
}
for (const [x, y] of skeleton) {
  pose += `<circle cx="${x}" cy="${y}" r="5" fill="#e0f2fe" stroke="#0c1d2c" stroke-width="1.5"/><circle cx="${x}" cy="${y}" r="12" fill="none" stroke="#38bdf8" opacity=".45"/>`;
}
for (const [cx, cy, direction] of [[175, 210, -1], [584, 196, 1]]) {
  for (let f = 0; f < 5; f++) {
    const ex = cx + direction * (10 + f * 7), ey = cy - 25 - Math.sin(f / 4 * Math.PI) * 22;
    pose += `<line x1="${cx}" y1="${cy}" x2="${ex}" y2="${ey}" stroke="#7dd3fc" stroke-width="1.5"/><circle cx="${ex}" cy="${ey}" r="3.2" fill="#5eead4"/>`;
  }
}
pose += pill(32, 106, 186, 52, 'MediaPipe Holistic', 'Upper body + both hands', '#5eead4');
pose += pill(32, 172, 186, 52, 'Temporal Interpolation', 'Sequence norm & augment', '#7dd3fc');
pose += pill(542, 106, 186, 52, 'TensorFlow Classifier', 'Multi-sign sequence model', '#a6d2ff');
pose += pill(542, 172, 186, 52, 'Streamlit Testbed', 'Webcam & video evaluation', '#60a5fa');
pose += `<rect x="32" y="424" width="696" height="34" rx="6" fill="#091624" stroke="#213c52"/>
  ${txt(48, 445, 'HOLISTIC PIPELINE: Video / Webcam → Upper-Body + Dual-Hand Keypoints → Sequence Interpolation → TensorFlow', 11, '#9ab2ce')}`;
await writeFile('assets/projects/pose.svg', svg(pose, '#0d1e2d', 'pose'));

// 7. APRIORI RULES (Telco-Churn-Apriori — 7,043 customers, 42 Boolean items, 11,604 itemsets → 261 rules)
let rules = grid(38, '#1d243d', '.35');
const nodes = [
  [136, 162, 'Fiber optic', 'InternetService'],
  [136, 262, 'Tenure 0–12m', 'Early lifecycle'],
  [136, 362, 'Electronic check', 'PaymentMethod'],
  [372, 262, 'Apriori Engine', '42 Boolean items'],
  [608, 162, 'Support 9.16%', '645 / 7,043 cust.'],
  [608, 262, 'Confidence 69.9%', '645 / 923 match'],
  [608, 362, 'Lift 2.63×', '261 filtered rules']
];
for (const [a, b] of [[0, 3], [1, 3], [2, 3], [3, 4], [3, 5], [3, 6]]) {
  rules += `<line x1="${nodes[a][0]}" y1="${nodes[a][1]}" x2="${nodes[b][0]}" y2="${nodes[b][1]}" stroke="#60a5fa" stroke-width="1.8" stroke-dasharray="${a < 3 ? 'none' : '5 4'}" opacity=".75"/>`;
}
nodes.forEach(([x, y, title, sub], i) => {
  const center = i === 3;
  const w = center ? 168 : 154, h = center ? 76 : 58;
  const stroke = center ? '#5eead4' : i > 3 ? '#a6d2ff' : '#60a5fa';
  rules += `
    <rect x="${x - w / 2}" y="${y - h / 2}" width="${w}" height="${h}" rx="${center ? 12 : 8}" fill="${center ? '#162a45' : '#101d33'}" stroke="${stroke}" stroke-width="${center ? 2 : 1.3}"/>
    ${txt(x, y - 4, title, center ? 15 : 13, '#eef6ff', 'text-anchor="middle" font-weight="600"')}
    ${txt(x, y + 16, sub, 11, center ? '#5eead4' : '#8ea9c9', 'text-anchor="middle"')}
  `;
});
rules += `<rect x="32" y="424" width="696" height="34" rx="6" fill="#0b1424" stroke="#233754"/>
  ${txt(48, 445, 'RULE MINING: 7,043 Customers × 42 Boolean Items → 11,604 Frequent Itemsets → 261 Non-Redundant Rules (Churn=Yes)', 11, '#9ab2ce')}`;
await writeFile('assets/projects/rules.svg', svg(rules, '#0e172a', 'rules'));

// 8. HAND POSTER (Same deterministic geometry as WebGL + 21 MediaPipe landmark rings & callouts)
function project(p) {
  const ay = -.34, ax = .13, a = -.13;
  let x = p[0] * Math.cos(ay) + p[2] * Math.sin(ay), z = -p[0] * Math.sin(ay) + p[2] * Math.cos(ay);
  let y = p[1] * Math.cos(ax) - z * Math.sin(ax);
  z = p[1] * Math.sin(ax) + z * Math.cos(ax);
  const xx = x * Math.cos(a) + y * Math.sin(a), yy = -x * Math.sin(a) + y * Math.cos(a) - .03;
  return [380 + xx * 315, 410 - yy * 315, z];
}

let hand = `<defs>
  <radialGradient id="halo"><stop stop-color="#367398" stop-opacity=".18"/><stop offset="1" stop-color="#367398" stop-opacity="0"/></radialGradient>
</defs>
<ellipse cx="388" cy="410" rx="340" ry="390" fill="url(#halo)"/>`;

for (let i = 0, points = createHandPoints(3000); i < points.length; i += 3) {
  const [x, y, z] = project([points[i], points[i + 1], points[i + 2]]);
  hand += `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${(1.1 + z * .4).toFixed(2)}" fill="#b4dfff" opacity="${(.38 + z * .5).toFixed(2)}"/>`;
}
for (const [a, b] of connections) {
  const [x, y] = project(landmarks[a]), [xx, yy] = project(landmarks[b]);
  hand += `<line x1="${x.toFixed(1)}" y1="${y.toFixed(1)}" x2="${xx.toFixed(1)}" y2="${yy.toFixed(1)}" stroke="#7cc4f5" stroke-width="1.2" opacity=".38"/>`;
}
landmarks.forEach((pt, idx) => {
  const [x, y] = project(pt);
  const isKey = keyLandmarks.includes(idx);
  hand += `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${isKey ? 4.2 : 2.6}" fill="${idx === 8 ? '#5eead4' : '#bce3ff'}" opacity=".9"/>`;
  if (isKey) {
    hand += `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="8.5" fill="none" stroke="${idx === 8 ? '#5eead4' : '#7cc4f5'}" opacity=".55"/>`;
  }
});
for (const [idx, dx, dy] of [[0, 16, 6], [4, -92, -6], [8, -94, -8], [12, 14, -8], [20, 14, 4]]) {
  const [x, y] = project(landmarks[idx]);
  hand += `<text x="${(x + dx).toFixed(1)}" y="${(y + dy).toFixed(1)}" font-family="monospace" font-size="11" fill="#9cc5e8" opacity=".82">[${String(idx).padStart(2, '0')}] ${landmarkNames[idx]}</text>`;
}

await writeFile('assets/hand-poster.svg', `<svg xmlns="http://www.w3.org/2000/svg" width="760" height="820" viewBox="0 0 760 820">${hand}</svg>`);
console.log('Generated 7 dark-mode technical SVG blueprints and upgraded 21-landmark hand poster.');
