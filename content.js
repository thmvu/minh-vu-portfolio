export const normalizeLocale = value => value === 'en' ? 'en' : 'vi';
export function readLocale(storage) {
  try { return normalizeLocale(storage.getItem('minhvu-language')); } catch { return 'vi'; }
}

export const translations = {
  vi: {
    navWork: 'Dự án AI',
    navEngineering: 'Phần mềm',
    navAbout: 'Về mình',
    navContact: 'Kết nối',
    skip: 'Đến nội dung',
    discipline: 'AI · Machine Learning · Computer Vision',
    intro: 'Mình là Từ Hữu Minh Vũ.',
    heroTitle: 'AI từ mô hình đến thực tế.',
    heroBody: 'Mình xây dựng các hệ thống có thể nhìn, phân tích dữ liệu và vận hành trong ứng dụng thực — từ thị giác máy tính thời gian thực, nhận diện ngôn ngữ ký hiệu đến mô hình dự đoán rủi ro và nghiên cứu AI Agent.',
    explore: 'Khám phá dự án',
    github: 'GitHub @thmvu',
    heroNote: 'Sinh viên Công nghệ Thông tin · Đại học Phenikaa',
    handLabel: 'Di chuột hoặc dùng phím mũi tên để xoay không gian 21 khớp bàn tay.',
    handMeta: '21 landmarks / MediaPipe topology',
    hudMode: 'Mô phỏng đám mây điểm 3D',
    statProjects: '7 dự án AI / ML / CV',
    statSoftware: '3 hệ thống Full-stack & App',
    pause: 'Dừng chuyển động',
    resume: 'Bật chuyển động',
    reset: 'Đặt lại góc nhìn',
    activate: 'Bật tương tác 3D',
    workLabel: 'Selected AI Systems',
    workTitle: 'Những hệ thống AI mình xây dựng.',
    workIntro: 'Thị giác máy tính, học máy trên dữ liệu bảng và ứng dụng AI/Agent. Mỗi dự án đều gắn với pipeline rõ ràng, kiểm chứng thực nghiệm và mã nguồn công khai trên GitHub.',
    all: 'Tất cả',
    cv: 'Computer vision',
    ml: 'Machine learning',
    ai: 'Ứng dụng AI & Agent',
    featuredBadge: 'Hệ thống tiêu biểu',
    viewProject: 'Xem hồ sơ kỹ thuật',
    source: 'Xem mã nguồn',
    engLabel: 'Software & Full-Stack Engineering',
    engTitle: 'Nền tảng phần mềm đứng sau mô hình.',
    engIntro: 'Để đưa mô hình ra khỏi notebook cần kiến trúc phần mềm vững. Đây là các ứng dụng web phân quyền, desktop kết nối cloud database và di động đa ngôn ngữ mình phát triển trên GitHub.',
    engAllRepos: 'Xem toàn bộ 30+ repository trên GitHub',
    aboutLabel: 'Behind the work',
    aboutTitle: 'Tò mò về AI. Nghiêm túc với cách hệ thống vận hành.',
    aboutBody: 'Mình là Từ Hữu Minh Vũ, sinh viên Công nghệ Thông tin tại Đại học Phenikaa. Mình thích đưa mô hình học máy ra khỏi notebook để kết nối với backend, luồng dữ liệu thời gian thực và giao diện người dùng thực tế.',
    aboutBody2: 'Từ tối ưu VRAM 4 GB cho pipeline 6 mô hình giao thông, chuẩn hóa chuỗi landmark cử chỉ tay, đến thiết kế đánh giá chống rò rỉ dữ liệu (fold-safe CV, student-disjoint split), mình luôn ưu tiên tính minh bạch kỹ thuật.',
    pillar1Title: 'Thực nghiệm chống rò rỉ',
    pillar1Body: 'Đóng gói tiền xử lý trong từng fold, chọn ngưỡng bằng OOF và báo cáo trung thực giới hạn dữ liệu.',
    pillar2Title: 'Thị giác & chuỗi thời gian',
    pillar2Body: 'Kết hợp YOLO11, SAM2, MediaPipe và LSTM cùng cơ chế hậu xử lý hình học để giảm cảnh báo giả.',
    pillar3Title: 'Triển khai trọn luồng',
    pillar3Body: 'Kết nối dịch vụ suy luận FastAPI/WebSocket với giao diện React, Node.js, Spring Boot và cơ sở dữ liệu.',
    tools: 'Bộ công cụ kỹ thuật',
    learning: 'Đang tập trung nghiên cứu',
    learningText: 'AI hỗ trợ ra quyết định có kiểm chứng bằng chứng, AI Agents và các hệ thống Computer Vision thời gian thực.',
    contactTitle: 'Cùng xây dựng một hệ thống hữu ích.',
    contactBody: 'Trao đổi về AI, thực tập/cộng tác kỹ thuật, một dự án mới hay đơn giản là kết nối.',
    email: 'Gửi email',
    copy: 'Sao chép email',
    copied: 'Đã sao chép minhvu6723@gmail.com',
    copyFailed: 'Bạn có thể nhấn trực tiếp vào địa chỉ email.',
    footerNote: 'Thiết kế và phát triển dựa trên các dự án mã nguồn mở thực tế.',
    back: 'Về thư viện dự án',
    overview: 'Bài toán & Mục tiêu',
    approach: 'Kiến trúc & Phương pháp',
    pipelineTitle: 'Luồng xử lý hệ thống',
    highlightsTitle: 'Điểm nhấn kỹ thuật từ mã nguồn',
    benchmarkTitle: 'Số liệu & Cấu hình từ Repository',
    role: 'Vai trò & Đóng góp',
    stack: 'Công nghệ sử dụng',
    repoMap: 'Cấu trúc Repository',
    artifacts: 'Artifacts & Giới hạn thực nghiệm',
    artifactPlotTitle: 'Biểu đồ đánh giá xuất trực tiếp từ pipeline',
    prevProject: 'Dự án trước',
    nextProject: 'Dự án tiếp theo',
    details: 'Hồ sơ kỹ thuật',
    notFound: 'Không tìm thấy dự án',
    noScript: 'Bật JavaScript để dùng bộ lọc và xem chi tiết động. Toàn bộ repository vẫn truy cập trực tiếp bên dưới.',
    menu: 'Mở điều hướng',
    closeMenu: 'Đóng điều hướng'
  },
  en: {
    navWork: 'AI Work',
    navEngineering: 'Software',
    navAbout: 'About',
    navContact: 'Connect',
    skip: 'Skip to content',
    discipline: 'AI · Machine Learning · Computer Vision',
    intro: 'I’m Từ Hữu Minh Vũ.',
    heroTitle: 'AI beyond the notebook.',
    heroBody: 'I build systems that see, reason over data, and ship inside real applications — spanning real-time computer vision, sign language recognition, risk modeling, and AI agent research.',
    explore: 'Explore projects',
    github: 'GitHub @thmvu',
    heroNote: 'Computer Science Student · Phenikaa University',
    handLabel: 'Move pointer or use arrow keys to inspect the 21-joint hand topology.',
    handMeta: '21 landmarks / MediaPipe topology',
    hudMode: '3D point-cloud study',
    statProjects: '7 AI / ML / CV systems',
    statSoftware: '3 Full-stack & App systems',
    pause: 'Pause motion',
    resume: 'Play motion',
    reset: 'Reset camera',
    activate: 'Enable interactive 3D',
    workLabel: 'Selected AI Systems',
    workTitle: 'AI systems I’ve engineered.',
    workIntro: 'Computer vision, tabular machine learning, and AI/agent applications. Every entry reflects documented pipelines, verified experiments, and open-source code on GitHub.',
    all: 'All work',
    cv: 'Computer vision',
    ml: 'Machine learning',
    ai: 'AI & Agents',
    featuredBadge: 'Featured system',
    viewProject: 'Read case study',
    source: 'View source',
    engLabel: 'Software & Full-Stack Engineering',
    engTitle: 'Software foundations behind the models.',
    engIntro: 'Taking models out of notebooks requires solid application engineering. Below are role-based web platforms, cloud-backed desktop software, and bilingual mobile apps from my GitHub.',
    engAllRepos: 'Explore all 30+ repositories on GitHub',
    aboutLabel: 'Behind the work',
    aboutTitle: 'Curious about AI. Serious about how systems work.',
    aboutBody: 'I’m Từ Hữu Minh Vũ, a Computer Science student at Phenikaa University. I focus on moving machine learning models out of isolated notebooks and into backends, real-time pipelines, and usable interfaces.',
    aboutBody2: 'Whether balancing a 6-model traffic pipeline inside 4 GB VRAM, normalizing hand-landmark sequences, or enforcing leakage-free cross-validation, I value engineering rigor and transparent reporting.',
    pillar1Title: 'Leakage-free evaluation',
    pillar1Body: 'Fold-safe preprocessing, OOF threshold optimization, student-disjoint splits, and candid scope reporting.',
    pillar2Title: 'Vision & temporal modeling',
    pillar2Body: 'Combining YOLO11, SAM2, MediaPipe, and LSTM with geometric post-processing to cut false positives.',
    pillar3Title: 'End-to-end delivery',
    pillar3Body: 'Connecting FastAPI/WebSocket inference services to React, Node.js, Spring Boot, and relational databases.',
    tools: 'Engineering toolkit',
    learning: 'Currently exploring',
    learningText: 'Evidence-grounded decision-support AI, AI agents, and real-time computer vision systems.',
    contactTitle: 'Let’s build something useful.',
    contactBody: 'Talk AI, discuss engineering internships or collaborations, or simply say hello.',
    email: 'Send an email',
    copy: 'Copy email',
    copied: 'Copied minhvu6723@gmail.com',
    copyFailed: 'You can use the direct email link instead.',
    footerNote: 'Designed and developed from verified open-source work.',
    back: 'Back to all projects',
    overview: 'Problem & Objective',
    approach: 'Architecture & Methodology',
    pipelineTitle: 'System Pipeline',
    highlightsTitle: 'Engineering Highlights',
    benchmarkTitle: 'Verified Repository Metrics & Specs',
    role: 'Role & Attribution',
    stack: 'Tech Stack',
    repoMap: 'Repository Structure',
    artifacts: 'Artifacts & Scope Notes',
    artifactPlotTitle: 'Evaluation chart exported directly from pipeline',
    prevProject: 'Previous project',
    nextProject: 'Next project',
    details: 'Case Study',
    notFound: 'Project not found',
    noScript: 'Enable JavaScript for interactive filters and rich case studies. Direct repository links remain accessible below.',
    menu: 'Open navigation',
    closeMenu: 'Close navigation'
  }
};

const text = (vi, en) => ({ vi, en });

export const projects = [
  {
    id: 'traffic',
    category: 'cv',
    year: '2026',
    name: 'AI Traffic Monitor (ITS Pro)',
    repo: 'Giamsatgiaothong2',
    visual: 'traffic',
    tags: ['YOLO11m', 'SAM2', 'RapidOCR', 'FastAPI', 'WebSocket', 'React 19'],
    cardMetrics: [
      text('6 mô hình AI chuyên biệt', '6 specialized AI models'),
      text('SAM2 Magic Frame · 4GB VRAM', 'SAM2 Magic Frame · 4GB VRAM'),
      text('Luồng WebSocket thời gian thực', 'Real-time WebSocket stream')
    ],
    title: text('Để máy nhìn đường phố và hiểu ngữ cảnh vi phạm.', 'Teaching machines to see the street in real time.'),
    description: text(
      'Hệ thống giám sát giao thông thời gian thực kết hợp phát hiện vượt đèn đỏ, không đội mũ bảo hiểm, tự động căn chỉnh vạch dừng SAM2 và đọc biển số OCR qua WebSocket.',
      'Real-time traffic monitoring combining red-light and helmet violation detection, SAM2 auto stop-line calibration, and OCR plate reading over WebSocket.'
    ),
    overview: text(
      'Xây dựng hệ thống ITS giám sát video giao thông thực tế với hai chế độ vận hành (Web App React 19 + FastAPI WebSocket và Streamlit Desktop), giải quyết bài toán góc quay nghiêng, nhiễu ánh sáng đèn tín hiệu và giới hạn VRAM 4 GB trên GPU phổ thông.',
      'Build a dual-mode Intelligent Transportation System (React 19 + FastAPI WebSocket and Streamlit Desktop) handling angled camera perspectives, ambient red-light glare, and a 4 GB laptop GPU VRAM budget.'
    ),
    approach: text(
      'Sử dụng kiến trúc 6 mô hình phối hợp: YOLO11m + ByteTrack theo vết phương tiện, các model YOLO chuyên biệt kiểm tra đèn và mũ bảo hiểm, SAM2 phân vùng chính xác vạch dừng ở những frame đầu (Magic Frame) rồi giải phóng khỏi GPU, và RapidOCR đọc biển số trên CPU.',
      'Orchestrates 6 specialized models: YOLO11m + ByteTrack for multi-object tracking, custom YOLO detectors for signals and helmets, SAM2 for initial Magic Frame stop-line segmentation before unloading from VRAM, and CPU-side RapidOCR for license plates.'
    ),
    engineering: [
      text('Instant Calibration (Magic Frame): kết hợp YOLO hộp vạch + SAM2 tách đa giác vạch dừng ở vài frame đầu tiên rồi giải phóng SAM2 khỏi RAM/GPU để dồn tài nguyên cho tracking.', 'Instant Calibration (Magic Frame): pairs stop-line detection with SAM2 polygon segmentation on initial frames, then frees SAM2 from VRAM to maximize tracking throughput.'),
      text('Chống báo sai vượt đèn đỏ bằng kiểm chứng mật độ màu HSV trong vùng đèn và logic Bottom-Edge (tính điểm tiếp xúc bánh xe với vạch dừng thay vì tâm bounding box).', 'Eliminates false red-light triggers via HSV red-density verification inside signal boxes and Bottom-Edge wheel-contact geometry rather than box centroids.'),
      text('Tối ưu phần cứng RTX 3050 (4 GB VRAM): chạy các mô hình YOLO (.pt / .onnx) trên CUDA 12.6, điều phối RapidOCR trên CPU và xuất tự động ảnh bằng chứng kèm CSV tại thư mục evidence/.', 'Tuned for 4 GB VRAM GPUs: runs YOLO .pt/.onnx weights on CUDA 12.6 while offloading RapidOCR to CPU, automatically saving annotated violation snapshots and CSV logs.')
    ],
    metrics: [
      { value: '6 Models', label: text('Chuỗi YOLO11 + SAM2 + OCR', 'YOLO11 + SAM2 + OCR chain') },
      { value: '4 GB', label: text('Ngân sách VRAM tối ưu', 'Target GPU VRAM budget') },
      { value: '2 Modes', label: text('React WebSocket & Streamlit', 'React WebSocket & Streamlit') },
      { value: 'Auto CSV', label: text('Lưu ảnh bằng chứng vi phạm', 'Annotated evidence export') }
    ],
    pipeline: [
      { step: '01', name: text('Magic Frame Calibration', 'Magic Frame Calibration'), detail: text('YOLO + SAM2 tách vạch dừng nghiêng, sau đó giải phóng VRAM.', 'YOLO + SAM2 segment angled stop-line, then unload SAM2.') },
      { step: '02', name: text('Tracking & Kiểm tra lỗi', 'Tracking & Violation Logic'), detail: text('YOLO11m + ByteTrack, kiểm tra HSV đèn đỏ, bánh xe chạm vạch & mũ.', 'YOLO11m + ByteTrack with HSV signal & wheel-edge checks.') },
      { step: '03', name: text('Super-Res & RapidOCR', 'Super-Res & RapidOCR'), detail: text('Cắt vùng biển số, tăng nét và nhận dạng ký tự qua ONNX PaddleOCR.', 'Crop plate ROI, enhance clarity, and decode via ONNX RapidOCR.') },
      { step: '04', name: text('FastAPI WebSocket → UI', 'FastAPI WebSocket → UI'), detail: text('Truyền luồng frame nén, console log và thẻ vi phạm sang React 19.', 'Stream compressed frames, live logs, and evidence cards to React 19.') }
    ],
    table: {
      caption: text('Danh mục 6 mô hình thành phần trong pipeline Giamsatgiaothong2', 'Inventory of the 6 specialized models in Giamsatgiaothong2'),
      headers: [text('Thành phần', 'Module'), text('Mô hình / Trọng số', 'Model / Weights'), text('Thiết bị & Vai trò', 'Runtime & Role')],
      rows: [
        ['Vehicle Tracking', 'YOLO11m + ByteTrack', text('GPU · Phát hiện & giữ ID phương tiện qua các frame', 'GPU · Multi-class vehicle detection & persistent IDs')],
        ['Traffic Signal', 'YOLO (phathienden.pt) + HSV', text('GPU + OpenCV · Nhận diện đèn & lọc nhiễu biển quảng cáo', 'GPU + OpenCV · Signal detection & HSV glare filtering')],
        ['Helmet Check', 'YOLO (phathienmu1.pt)', text('GPU · Phát hiện người đi xe máy không đội mũ bảo hiểm', 'GPU · Detect motorcyclists riding without helmets')],
        ['Stop-Line Mask', 'phathienvachmoi.onnx + sam2_b.pt', text('One-shot · Căn chỉnh vạch dừng tự động rồi giải phóng bộ nhớ', 'One-shot · Calibrate stop-line polygon then free memory')],
        ['Plate & OCR', 'biensoxe.onnx + RapidOCR', text('GPU + CPU · Phát hiện khung biển số & đọc ký tự tốc độ cao', 'GPU + CPU · Plate localization & lightweight ONNX OCR')]
      ]
    },
    repoTree: [
      { path: 'backend/main.py & processor.py', desc: text('FastAPI server, luồng nền xử lý AI và truyền tải WebSocket', 'FastAPI server, background AI worker thread, and WebSocket stream') },
      { path: 'core/plate_reader.py', desc: text('Module phát hiện biển số, tiền xử lý tăng nét và RapidOCR', 'License plate detector, image enhancement, and RapidOCR reader') },
      { path: 'utils/violation.py & drawing.py', desc: text('Hình học khoảng cách vạch dừng và vẽ overlay bằng chứng', 'Geometric stop-line violation math and evidence rendering') },
      { path: 'frontend/src/App.jsx', desc: text('Giao diện điều khiển giám sát thời gian thực React 19 + Tailwind', 'React 19 + Tailwind real-time monitoring dashboard') }
    ],
    role: text(
      'Thiết kế toàn bộ kiến trúc hệ thống, huấn luyện/tích hợp chuỗi mô hình Computer Vision, tối ưu bộ nhớ GPU, xây dựng FastAPI WebSocket backend và giao diện giám sát React.',
      'Designed system architecture, integrated the multi-model computer vision pipeline, optimized GPU memory lifecycle, and built the FastAPI WebSocket backend and React dashboard.'
    ),
    artifacts: text(
      'Mã nguồn Web App (React + FastAPI) và Streamlit app, script tự động cấu hình CUDA 12.6 / smoke test (check_environment.py), logic hình học bắt lỗi và cơ chế xuất bằng chứng tự động.',
      'Full React + FastAPI and Streamlit source code, automated CUDA 12.6 setup and smoke-test scripts, geometric violation modules, and automated evidence exporters.'
    )
  },
  {
    id: 'vsl',
    category: 'ai',
    year: '2026',
    name: 'Vietnamese Sign Language Platform',
    repo: 'vietnamese-sign-language-web',
    visual: 'vsl',
    tags: ['React 19', 'MediaPipe Hands', 'TensorFlow LSTM', 'FastAPI', 'Node.js', 'Gemini AI'],
    cardMetrics: [
      text('21 landmarks · 42 đặc trưng (x,y)', '21 landmarks · 42 (x,y) features'),
      text('Chuỗi 100 frames → LSTM', '100-frame window → LSTM'),
      text('Kiến trúc 3 dịch vụ độc lập', '3-tier microservice stack')
    ],
    title: text('Thu hẹp khoảng cách giao tiếp qua từng cử chỉ.', 'Bridging communication through real-time gesture AI.'),
    description: text(
      'Nền tảng web học ngôn ngữ ký hiệu Việt Nam tích hợp luyện tập qua camera thời gian thực bằng mạng LSTM, hệ thống khóa học/quiz và trợ lý ảo Gemini.',
      'A full-stack Vietnamese Sign Language learning platform uniting real-time LSTM camera practice, structured courses/quizzes, and a Gemini AI assistant.'
    ),
    overview: text(
      'Kết hợp lộ trình bài học từ cơ bản đến nâng cao, bài kiểm tra tương tác, phòng luyện tập nhận diện ký hiệu trực tiếp qua webcam và chatbot giải đáp ngữ nghĩa trong cùng một nền tảng web.',
      'Unite structured sign vocabulary courses, interactive quizzes, live webcam gesture recognition practice, and an AI Q&A tutor inside one cohesive web platform.'
    ),
    approach: text(
      'Trình duyệt chạy @mediapipe/hands trích xuất 21 điểm khớp bàn tay (42 tọa độ chuẩn hóa bất biến vị trí/tỷ lệ), gom chuỗi 100 frames gửi sang microservice FastAPI chạy mô hình TensorFlow LSTM; song song với backend Node.js/Express + MySQL quản lý học viên và tích hợp Gemini Flash 2.',
      'Browser-side @mediapipe/hands extracts 21 hand landmarks (42 center- and scale-normalized coordinates) over 100-frame windows for a Python FastAPI LSTM service, paired with a Node.js/Express + MySQL backend and Gemini Flash 2 chatbot.'
    ),
    engineering: [
      text('Chuẩn hóa bất biến không gian: dịch chuyển gốc tọa độ về tâm bàn tay và chuẩn hóa tỷ lệ trước khi đưa vào chuỗi (100, 42), giúp nhận diện ổn định dù người học đứng gần hay xa webcam.', 'Spatial invariance normalization: shifts and scales 21-keypoint coordinates relative to hand center across 100-frame windows so distance and framing changes do not break inference.'),
      text('Kiến trúc tách 3 dịch vụ rõ ràng: Frontend React 19 (:5173), Backend nghiệp vụ Express/Sequelize/MySQL (:5000) bảo mật bằng JWT/Bcrypt/Helmet, và AI Service FastAPI (:8000).', 'Clean 3-service separation: React 19 frontend (:5173), Express/Sequelize/MySQL business backend (:5000) secured with JWT/Bcrypt/Helmet, and dedicated FastAPI inference (:8000).'),
      text('Tích hợp trợ lý ảo dùng Google Gemini Flash 2 hỗ trợ giải thích cách đặt tay, ngữ cảnh sử dụng ký hiệu và lộ trình ôn tập.', 'Integrated Google Gemini Flash 2 assistant to answer sign-language questions and guide learners alongside camera practice.')
    ],
    metrics: [
      { value: '100 × 42', label: text('Tensor chuỗi đầu vào LSTM', 'Temporal LSTM input tensor') },
      { value: '21 Pts', label: text('MediaPipe Hands trên trình duyệt', 'In-browser MediaPipe keypoints') },
      { value: '3 Services', label: text('React · Express · FastAPI', 'React · Express · FastAPI') },
      { value: 'MySQL 8', label: text('Lưu tiến độ học & điểm Quiz', 'Course & quiz persistence') }
    ],
    pipeline: [
      { step: '01', name: text('Webcam & MediaPipe', 'Webcam & MediaPipe'), detail: text('Trích xuất 21 landmarks trực tiếp trên trình duyệt người học.', 'Extract 21 hand landmarks directly in the client browser.') },
      { step: '02', name: text('Chuẩn hóa 100 Frames', '100-Frame Normalization'), detail: text('Chuẩn hóa 42 tọa độ (x,y) bất biến vị trí và gom cửa sổ thời gian.', 'Center/scale normalize 42 (x,y) features into 100-frame sequences.') },
      { step: '03', name: text('FastAPI LSTM Inference', 'FastAPI LSTM Inference'), detail: text('Mô hình Keras LSTM dự đoán từ vựng ký hiệu và độ tự tin.', 'TensorFlow/Keras LSTM predicts sign label and confidence.') },
      { step: '04', name: text('Express / MySQL & Gemini', 'Express / MySQL & Gemini'), detail: text('Lưu kết quả luyện tập, chấm điểm Quiz và hỗ trợ hỏi đáp AI.', 'Persist lesson progress, grade quizzes, and power Gemini Q&A.') }
    ],
    table: {
      caption: text('Phân tách kiến trúc 3 tầng dịch vụ trong vietnamese-sign-language-web', 'Three-service architecture in vietnamese-sign-language-web'),
      headers: [text('Dịch vụ', 'Service'), text('Cổng / Công nghệ', 'Port / Stack'), text('Trách nhiệm chính', 'Core Responsibility')],
      rows: [
        ['Frontend Web', ':5173 · React 19, Vite, Tailwind, MediaPipe', text('Giao diện khóa học, thu thập landmark camera & hiển thị phản hồi', 'Course UI, in-browser hand tracking & real-time practice feedback')],
        ['Business API', ':5000 · Node.js 20, Express, Sequelize, MySQL', text('Xác thực JWT, quản lý bài giảng/quiz, tiến độ và Gemini Chatbot', 'JWT auth, lessons/quizzes, user progress & Gemini Flash 2 integration')],
        ['AI Inference', ':8000 · Python 3.10, FastAPI, TensorFlow/Keras', text('Chuẩn hóa chuỗi đặc trưng và suy luận mô hình LSTM thời gian thực', 'Sequence normalization and low-latency LSTM sign classification')]
      ]
    },
    repoTree: [
      { path: 'aiservice/api.py & inference.py', desc: text('FastAPI endpoint, chuẩn hóa chuỗi landmark và suy luận Keras LSTM', 'FastAPI endpoint, sequence normalization, and Keras LSTM inference') },
      { path: 'backend/controllers & routes', desc: text('REST API Node.js/Express, xác thực JWT và tích hợp Gemini', 'Node.js/Express REST controllers, JWT auth, and Gemini service') },
      { path: 'frontend/src/hooks & pages', desc: text('Custom hooks bắt bàn tay MediaPipe và giao diện học/luyện tập', 'Custom MediaPipe tracking hooks and course/practice views') },
      { path: 'database/', desc: text('Schema SQL quản lý người dùng, bài học và lịch sử kiểm tra', 'MySQL schema scripts for users, lessons, and quiz history') }
    ],
    role: text(
      'Kiến trúc sư hệ thống, Backend Developer & AI Engineer (thiết kế kiến trúc 3 dịch vụ, xây dựng FastAPI LSTM service và Node.js/MySQL backend). Phạm Thị Minh Ngọc phụ trách UI/UX, Frontend và nội dung học liệu.',
      'System Architect, Backend Developer & AI Engineer (designed the 3-service architecture, FastAPI LSTM inference service, and Node.js/MySQL backend). Phạm Thị Minh Ngọc led UI/UX, Frontend, and learning content.'
    ),
    artifacts: text(
      'Mã nguồn monorepo chạy đồng thời 3 dịch vụ bằng một lệnh (npm run dev), trọng số mô hình .keras + labels.json, schema cơ sở dữ liệu MySQL và tài liệu kiến trúc.',
      'Monorepo source launching all 3 services concurrently via npm run dev, .keras LSTM model weights and label maps, MySQL schemas, and setup documentation.'
    )
  },
  {
    id: 'kt',
    category: 'ai',
    year: '2026',
    name: 'Knowledge Tracing & LLM Agent',
    repo: 'nghiencuuhocsinh',
    visual: 'kt',
    tags: ['Python', 'XGBoost', 'BKT / PFA', 'Qwen2.5 (Ollama)', 'Knowledge Tracing'],
    cardMetrics: [
      text('238.330 interactions TEST', '238,330 TEST interactions'),
      text('ROC-AUC 0.7884 · Brier 0.1782', 'ROC-AUC 0.7884 · Brier 0.1782'),
      text('328 lượt thực nghiệm Agent v3', '328 local Agent v3 runs')
    ],
    title: text('Ước lượng trạng thái kiến thức và thử nghiệm Agent gợi ý bài tập.', 'Tracing student knowledge and auditing local LLM recommendation agents.'),
    description: text(
      'Đề tài nghiên cứu khoa học sinh viên trên dữ liệu FoundationalASSIST (1,61 triệu tương tác): so sánh 5 mô hình Knowledge Tracing và kiểm định nghiêm ngặt prototype Agent Qwen2.5 cục bộ.',
      'Student research on FoundationalASSIST (1.61M interactions): benchmarking 5 Knowledge Tracing models and rigorously auditing a local Qwen2.5 adaptive exercise agent.'
    ),
    overview: text(
      'Nghiên cứu hai câu hỏi thực nghiệm (RQ1: dự đoán kết quả làm bài trên tập student-disjoint; RQ2: chọn bài luyện tập kế tiếp từ trạng thái BKT bằng luật B+ và LLM nhỏ chạy cục bộ) với giao thức khóa cấu hình chống rò rỉ tập TEST.',
      'Investigate two locked research questions on FoundationalASSIST: RQ1 interaction outcome prediction under a strict student-disjoint split, and RQ2 adaptive problem selection combining BKT mastery states with rule policy B+ and a local Qwen2.5 LLM.'
    ),
    approach: text(
      'Làm sạch hơn 1,61 triệu dòng tương tác của 5.000 học sinh (chia 70/15/15 theo học sinh, seed 42). Đánh giá một lần duy nhất RQ1 trên 238.330 tương tác TEST; với RQ2, xây dựng pipeline BKT → 8 ứng viên metadata → Qwen2.5:1.5b (Ollama) kèm kiểm tra độ ổn định hoán vị và giao diện tự rà soát mù 40 phiếu.',
      'Cleaned 1.61M interactions across 5,000 students (student-disjoint 70/15/15 split, seed 42). Evaluated 5 RQ1 models once on 238,330 locked TEST interactions, then built an RQ2 validation prototype (BKT state → 8 candidate problems → local Qwen2.5:1.5b) with permutation invariance checks and a blind 40-item review UI.'
    ),
    engineering: [
      text('Thiết kế kỷ luật thực nghiệm nghiêm ngặt (Protocol v4): cấm tuyệt đối dùng answer_text[t], hint_count[t], saw_answer[t] làm biến dự đoán hiện tại và khóa hoàn toàn tập TEST khỏi bước chọn mô hình/prompt.', 'Strict experimental hygiene (Protocol v4): excludes contemporaneous leakage features (answer_text[t], hint_count[t], saw_answer[t]) and locks TEST away from prompt or policy tuning.'),
      text('Kiểm định trung thực hạn chế của LLM nhỏ (Qwen2.5:1.5b): dù đạt 240/240 phản hồi đúng schema hợp lệ, kiểm tra đảo thứ tự 3 hoán vị phát hiện độ ổn định chỉ đạt 5/40–6/40 học sinh (dưới ngưỡng vận hành 32/40), từ đó dừng mở TEST RQ2 đúng quy tắc khoa học.', 'Candid LLM stability audit: although Qwen2.5:1.5b achieved 240/240 schema-valid selections, 3-permutation order testing revealed 5/40–6/40 consistency (below the pre-registered 32/40 bar), halting RQ2 TEST per protocol.'),
      text('Xây dựng công cụ web cục bộ (run_foundational_rq2_review_ui.py) giấu lựa chọn của Agent cho tới khi người chấm hoàn tất 40 phiếu để tránh thiên lệch xác nhận.', 'Built a local blind-review web server (:9411) hiding Agent picks until all 40 human selections are locked to prevent confirmation bias.')
    ],
    metrics: [
      { value: '238,330', label: text('Interactions đánh giá RQ1 TEST', 'Locked RQ1 TEST interactions') },
      { value: '0.1782', label: text('Brier score tốt nhất (XGBoost)', 'Best Brier score (XGBoost)') },
      { value: '0.7884', label: text('ROC-AUC trên tập TEST', 'TEST ROC-AUC (XGBoost)') },
      { value: '240/240', label: text('Lượt Agent trả về đúng schema', 'Schema-valid local Agent runs') }
    ],
    pipeline: [
      { step: '01', name: text('Student-Disjoint Split', 'Student-Disjoint Split'), detail: text('3.500 học sinh Train (1,12M dòng), 750 Val, 750 Test.', '3,500 Train students (1.12M rows), 750 Val, 750 Test.') },
      { step: '02', name: text('RQ1 Outcome Modeling', 'RQ1 Outcome Modeling'), detail: text('So sánh Global, Problem, PFA, BKT và XGBoost theo Brier & AUC.', 'Compare Global, Problem, PFA, BKT, and XGBoost on Brier & AUC.') },
      { step: '03', name: text('RQ2 BKT + Qwen2.5 Agent', 'RQ2 BKT + Qwen2.5 Agent'), detail: text('Ước lượng mastery BKT → lọc 8 bài ứng viên → chọn bài qua Ollama.', 'Estimate BKT mastery → 8 candidate items → local Ollama selection.') },
      { step: '04', name: text('Permutation & Blind Audit', 'Permutation & Blind Audit'), detail: text('Kiểm tra bất biến thứ tự 3 hoán vị và giao diện chấm mù 40 phiếu.', '3-permutation stability audit and blind 40-item evaluation UI.') }
    ],
    table: {
      caption: text('Kết quả RQ1 chính thức trên 238.330 tương tác TEST (FoundationalASSIST v4)', 'Official RQ1 results across 238,330 single-skill TEST interactions'),
      headers: [text('Mô hình', 'Model'), text('Brier Score (↓)', 'Brier Score (↓)'), text('ROC-AUC (↑)', 'ROC-AUC (↑)'), text('Log Loss (↓)', 'Log Loss (↓)')],
      rows: [
        ['XGBoost', '0.178223', '0.788408', '0.531971'],
        ['Problem Baseline', '0.209004', '0.697131', '0.605033'],
        ['BKT (Bayesian KT)', '0.210158', '0.686573', '0.609358'],
        ['PFA (Performance Factors)', '0.210532', '0.690395', '0.609967'],
        ['Global Baseline', '0.235420', '0.500000', '0.663701']
      ]
    },
    repoTree: [
      { path: 'NCKH_Knowledge_Tracing_AI_Agent_Plan_v4_FoundationalASSIST.md', desc: text('Tài liệu thiết kế giao thức dữ liệu, khóa split và tiêu chuẩn dừng', 'Full v4 research protocol, split locks, and stopping criteria') },
      { path: 'reports/foundationalassist_v4_rq1_test.md', desc: text('Báo cáo chi tiết kết quả đánh giá RQ1 và biểu đồ calibration', 'Detailed RQ1 TEST benchmark report and calibration analysis') },
      { path: 'reports/foundationalassist_v4_rq2_selection_v3.md', desc: text('Phân tích 328 lượt chạy Agent Qwen2.5, kiểm tra hoán vị & baseline', 'Audit of 328 local Qwen2.5 runs, permutation tests, and baselines') },
      { path: 'scripts/run_foundational_rq2_review_ui.py', desc: text('Ứng dụng web loopback phục vụ quy trình tự rà soát mù hai giai đoạn', 'Local loopback web server for two-stage blind rationale review') }
    ],
    role: text(
      'Tác giả nghiên cứu độc lập: thiết kế protocol thực nghiệm chống rò rỉ dữ liệu, lập trình pipeline tiền xử lý/huấn luyện RQ1–RQ2, tích hợp Ollama Agent và xây dựng bộ công cụ kiểm định.',
      'Sole student researcher and developer: designed leakage-safe evaluation protocols, implemented RQ1/RQ2 modeling pipelines, integrated local Ollama inference, and built verification tooling.'
    ),
    artifacts: text(
      'Báo cáo thực nghiệm RQ1/RQ2, biểu đồ hiệu chuẩn xác suất (calibration plots), bảng tổng hợp JSON không chứa dữ liệu nhạy cảm và bộ kiểm thử unittest. Đề tài hiện được lưu hồ sơ trung thực (tạm gác ngày 05/10/2026 để chuẩn bị hướng nghiên cứu AI hỗ trợ ra quyết định doanh nghiệp).',
      'RQ1/RQ2 technical reports, probability calibration plots, privacy-safe summary JSON tables, and unit tests. Archived candidly on 2026-10-05 while transitioning toward evidence-grounded enterprise decision-support AI.'
    )
  },
  {
    id: 'churn',
    category: 'ml',
    year: '2026',
    name: 'Customer Churn Risk Prioritization',
    repo: 'Customer-Churn-Analysis',
    visual: 'churn',
    tags: ['Scikit-learn', 'XGBoost', 'LightGBM', 'Nested-CV', 'Pandas'],
    cardMetrics: [
      text('Fixed-Eval F2 0.7359 · Recall 83.2%', 'Fixed-Eval F2 0.7359 · Recall 83.2%'),
      text('132 cấu hình · 5×3 Nested-CV', '132 candidates · 5×3 Nested-CV'),
      text('Phát hiện 311/374 khách rời bỏ', 'Caught 311/374 churners')
    ],
    title: text('Hiểu dữ liệu. Xếp hạng đúng rủi ro rời bỏ dịch vụ.', 'Prioritizing customer churn risk with fold-safe ensembles.'),
    description: text(
      'Pipeline 8 notebook chống rò rỉ dữ liệu trên bộ IBM Telco: tìm kiếm cân bằng 132 cấu hình, tối ưu trọng số Feedback-Loop Ensemble và chọn ngưỡng quyết định bằng OOF F2.',
      'An 8-notebook leakage-free ML pipeline on IBM Telco: balanced 132-candidate search, feedback-loop voting ensemble optimization, and OOF F2 threshold selection.'
    ),
    overview: text(
      'Nhận diện và xếp hạng khách hàng viễn thông có nguy cơ rời bỏ dịch vụ cao nhất, ưu tiên tối đa hóa độ phủ (Recall thông qua thước đo F2) trong khi vẫn giữ ràng buộc Precision ≥ 0,50 để kiểm soát chi phí cảnh báo sai.',
      'Rank telecom customers by churn risk, maximizing churner recall via the F2 metric while enforcing a strict out-of-fold Precision ≥ 0.50 floor to keep retention alerts actionable.'
    ),
    approach: text(
      'Đóng gói toàn bộ bước điền khuyết, chuẩn hóa, mã hóa, chọn đặc trưng (None / Mutual Information / L1) và mô hình bên trong pipeline an toàn theo từng fold. So sánh 132 ứng viên qua 7 họ thuật toán cùng Feedback-Loop Voting Ensemble (ExtraTrees, Random Forest, XGBoost, LightGBM), kiểm định lại bằng Repeated Nested-CV 5×3.',
      'Encapsulates imputation, scaling, encoding, feature selection (None / Mutual Information / L1), and estimators inside fold-safe pipelines. Evaluates 132 candidates across 7 model families plus a Feedback-Loop Soft Voting Ensemble, audited with 5×3 Repeated Nested-CV.'
    ),
    engineering: [
      text('Loại bỏ triệt để rò rỉ tiền xử lý phổ biến: bỏ LabelEncoder gây thứ tự giả trên biến định danh, không fit Scaler hay SMOTENC trước khi chia CV, và tính lại scale_pos_weight ngay trong từng lượt fit.', 'Eliminated classic tabular leakage: removed ordinal LabelEncoder misuse on nominals, banned pre-CV scaling/SMOTENC, and recomputed XGBoost class weights strictly inside each fold.'),
      text('Feedback-Loop Ensemble học trọng số từ dự đoán inner-OOF theo mục tiêu F2 có sàn precision, hội tụ sau 7 vòng với trọng số cuối XGBoost 0,6843 + LightGBM 0,3157.', 'Feedback-Loop Soft Voting learns ensemble weights from inner-OOF predictions under constrained F2, converging in 7 iterations to 0.6843 XGBoost + 0.3157 LightGBM.'),
      text('Đóng gói toàn bộ bước tiền xử lý + mô hình + ngưỡng OOF (τ = 0,460) thành một file robust_churn_pipeline.joblib duy nhất để suy luận trực tiếp trên dữ liệu thô.', 'Bundled preprocessing, feature engineering, ensemble estimator, and OOF threshold (τ = 0.460) into a single robust_churn_pipeline.joblib artifact for raw-CSV inference.')
    ],
    metrics: [
      { value: '0.7359', label: text('Fixed-Evaluation F2 Score', 'Fixed-Evaluation F2 Score') },
      { value: '83.16%', label: text('Recall (bắt đúng 311/374 churn)', 'Recall (311/374 churners)') },
      { value: '0.6697', label: text('Fixed-Evaluation PR-AUC', 'Fixed-Evaluation PR-AUC') },
      { value: 'τ = 0.460', label: text('Ngưỡng chọn từ OOF F2', 'OOF-selected threshold') }
    ],
    pipeline: [
      { step: '01', name: text('Inventory & Train-Only EDA', 'Inventory & Train-Only EDA'), detail: text('Kiểm tra hash dữ liệu, tách split cố định và chỉ EDA trên tập Train.', 'Verify SHA256 hashes, lock splits, and restrict EDA to training data.') },
      { step: '02', name: text('Fold-Safe Feature Pipeline', 'Fold-Safe Feature Pipeline'), detail: text('Tạo charges_per_tenure, service_count; ghép 3 nhánh selector cân bằng.', 'Engineer domain features and pair None, MI, and L1 branches equally.') },
      { step: '03', name: text('132-Candidate & Nested Audit', '132-Candidate & Nested Audit'), detail: text('Huấn luyện Feedback-Loop Ensemble và kiểm định chéo lồng nhau 5×3.', 'Run Feedback-Loop Ensemble search and 5×3 Repeated Nested-CV audit.') },
      { step: '04', name: text('OOF Threshold & Packaging', 'OOF Threshold & Packaging'), detail: text('Chọn ngưỡng τ = 0,460 từ OOF và xuất pipeline .joblib + danh sách hành động.', 'Lock τ = 0.460 from OOF F2 and export single .joblib predictor.') }
    ],
    table: {
      caption: text('Tổng hợp chỉ số đánh giá chính thức trong Customer-Churn-Analysis', 'Verified evaluation metrics from Customer-Churn-Analysis'),
      headers: [text('Cấu hình / Tập đánh giá', 'Configuration / Split'), text('F2 Score', 'F2 Score'), text('Recall / PR-AUC', 'Recall / PR-AUC'), text('Ghi chú kiểm định', 'Audit Note')],
      rows: [
        ['Feedback-Loop Ensemble (CV)', '0.7269 ± 0.0116', 'Recall 80.67% · PR-AUC 0.6655', text('Thắng ràng buộc Precision ≥ 0.50 trên tập phát triển', 'Winner under Precision ≥ 0.50 constraint')],
        ['Fixed Evaluation (n = 1,409)', '0.7359', 'Recall 83.16% · PR-AUC 0.6697', text('Phát hiện 311/374 churn, 95% bootstrap CI [79.4%, 86.6%]', '311/374 churners found, 95% CI [79.4%, 86.6%]')],
        ['Nested-CV XGBoost (5×3)', '0.7267 ± 0.0139', 'Selected in 8/15 outer splits', text('ΔF2 vs RF +0.0078 (95% CI đi qua 0 → không tuyên bố tuyệt đối)', 'ΔF2 vs RF +0.0078 (CI crosses 0 → honest reporting)')],
        ['Nested-CV Random Forest (5×3)', '0.7188 ± 0.0143', 'Selected in 5/15 outer splits', text('Kiểm định độc lập toàn bộ preprocessing + threshold inner OOF', 'Full inner-OOF threshold & selector audit')]
      ]
    },
    repoTree: [
      { path: 'notebooks/01..08_*.ipynb', desc: text('Chuỗi 8 notebook khép kín từ thu thập dữ liệu đến demo dự đoán', 'End-to-end 8-notebook workflow from data audit to inference demo') },
      { path: 'models/metrics/robust_*.csv', desc: text('Bảng kết quả CV, nested-CV, bootstrap CI và độ ổn định đặc trưng', 'Exported CV summaries, nested outer folds, and feature stability CSVs') },
      { path: 'tools/rebuild_pipeline_notebooks.py', desc: text('Công cụ tái tạo cấu trúc notebook nhất quán và kiểm thử pytest', 'Reproducible notebook builder and automated pytest suite') },
      { path: 'reports/final_report/', desc: text('Báo cáo tổng kết phương pháp và biểu đồ Precision-Recall thực nghiệm', 'Final methodology report and precision-recall figures') }
    ],
    artifactImage: {
      src: 'assets/projects/churn.png',
      caption: text(
        'Biểu đồ Precision-Recall gốc (AP = 0.67) xuất trực tiếp từ tập Fixed Evaluation trong repository Customer-Churn-Analysis.',
        'Original Precision-Recall curve (AP = 0.67) exported directly from the Fixed Evaluation split in Customer-Churn-Analysis.'
      )
    },
    role: text(
      'Thực hiện toàn bộ quy trình khoa học dữ liệu: tái cấu trúc pipeline chống rò rỉ, thiết kế thực nghiệm 132 cấu hình & Nested-CV, phân tích thống kê có khoảng tin cậy và đóng gói mô hình dự đoán.',
      'Executed the complete data science lifecycle: refactored leakage-free pipelines, designed the 132-candidate and Nested-CV experiments, ran paired confidence-interval audits, and packaged inference.'
    ),
    artifacts: text(
      'Notebook 01–08, bộ kiểm thử pytest, 16 bảng CSV metrics/manifest và mô hình đóng gói. Kết quả Fixed Evaluation được ghi nhận rõ là development confirmation; cần dữ liệu ngoài mẫu theo thời gian để xác nhận độc lập trước khi vận hành thương mại.',
      'Notebooks 01–08, pytest suite, 16 metric/manifest CSV artifacts, and serialized pipeline. Fixed-evaluation metrics are transparently documented as development confirmation pending external temporal validation.'
    )
  },
  {
    id: 'apriori',
    category: 'ml',
    year: '2026',
    name: 'Telco Churn Apriori Mining',
    repo: 'Telco-Churn-Apriori',
    visual: 'rules',
    tags: ['Python 3.12', 'mlxtend Apriori', 'Pandas', 'Data Mining', 'Jupyter'],
    cardMetrics: [
      text('7.043 khách hàng · 42 mục Boolean', '7,043 customers · 42 Boolean items'),
      text('11.604 tập phổ biến → 261 luật', '11,604 itemsets → 261 clean rules'),
      text('Lift 2.63× · Confidence 69.9%', 'Lift 2.63× · Confidence 69.9%')
    ],
    title: text('Tìm quy luật kết hợp phía sau hành vi rời bỏ.', 'Mining interpretable association rules behind customer churn.'),
    description: text(
      'Khai phá luật kết hợp trên 7.043 khách hàng viễn thông: rời rạc hóa 42 mục giao dịch Boolean, lọc luật dư thừa và đối chiếu độ nhạy ngưỡng support.',
      'Association rule mining across 7,043 telecom customers: encoding 42 Boolean transaction items, pruning redundant rules, and auditing support sensitivity.'
    ),
    overview: text(
      'Khám phá những tổ hợp đặc điểm dịch vụ và hợp đồng thường xuất hiện cùng trạng thái Churn=Yes, chuyển các con số thống kê thành giả thuyết khảo sát khách hàng có căn cứ.',
      'Uncover multi-factor combinations of contract, tenure, and internet features co-occurring with Churn=Yes, translating raw counts into evidence-backed retention hypotheses.'
    ),
    approach: text(
      'Làm sạch dữ liệu gốc (xử lý 11 dòng TotalCharges trống khi tenure = 0 mà không sinh mẫu giả), mã hóa mỗi khách hàng thành giao dịch 15/42 mục True, chạy thuật toán Apriori (support ≥ 0,05, confidence ≥ 0,40, lift ≥ 1,5, tối đa 3 điều kiện tiền đề) và lọc bỏ các luật mở rộng không tăng quá 2 điểm phần trăm confidence.',
      'Preserves natural class prevalence across 7,043 customers (handling 11 zero-tenure blank charges), encodes 15 active items out of 42 Boolean features per customer, runs Apriori (support ≥ 0.05, confidence ≥ 0.40, lift ≥ 1.5, max 3 antecedents), and prunes redundant extensions gaining ≤ 2 percentage points in confidence.'
    ),
    engineering: [
      text('Kiểm tra toàn vẹn dữ liệu bằng mã băm SHA256 giữa Notebook 01 → 02 → 03 để đảm bảo mọi bảng luật và biểu đồ đều sinh từ đúng một phiên bản dữ liệu sạch.', 'Enforces SHA256 input verification across Notebooks 01 → 02 → 03 so downstream rule tables and figures always match the exact cleaned dataset.'),
      text('Lọc dư thừa có định lượng: từ 659 luật mục tiêu {Churn=Yes} ban đầu (tại support 0,05), giữ lại 530 luật đạt ngưỡng và cô đọng thành 261 luật không dư thừa.', 'Quantitative redundancy pruning: narrows 659 target {Churn=Yes} rules at 0.05 support down to 530 threshold-passing rules and 261 non-redundant rules.'),
      text('Diễn giải đúng bản chất thống kê: nhấn mạnh luật kết hợp phản ánh mối liên hệ đồng xuất hiện chứ không khẳng định quan hệ nhân quả, kèm kiểm chứng tính tay từng chỉ số.', 'Rigorous statistical framing: distinguishes co-occurrence from causality, prevents overlapping customer double-counting, and verifies key rules with manual count checks.')
    ],
    metrics: [
      { value: '7,043', label: text('Giao dịch khách hàng thực tế', 'Customer transactions') },
      { value: '261 Rules', label: text('Luật {Churn=Yes} sau lọc dư thừa', 'Pruned {Churn=Yes} rules') },
      { value: '69.88%', label: text('Confidence luật tiêu biểu', 'Featured rule confidence') },
      { value: '2.63×', label: text('Lift (Cáp quang + Tenure 0–12m)', 'Lift (Fiber + 0–12m tenure)') }
    ],
    pipeline: [
      { step: '01', name: text('Làm sạch & EDA (NB 01)', 'Cleaning & EDA (NB 01)'), detail: text('Xử lý TotalCharges trống khi tenure=0, xuất 6 biểu đồ tỷ lệ nền.', 'Resolve zero-tenure charges, log SHA256, and plot 6 baseline charts.') },
      { step: '02', name: text('Rời rạc hóa 42 mục (NB 02)', '42-Item Encoding (NB 02)'), detail: text('Chia nhóm tenure (0–12..>48) & phân vị phí tháng thành Boolean.', 'Bin tenure and monthly-charge tertiles into 42 Boolean items.') },
      { step: '03', name: text('Apriori & Lọc luật dư thừa', 'Apriori & Redundancy Filter'), detail: text('Sinh 11.604 tập phổ biến, lọc lift ≥ 1,5 và loại luật con trùng lặp.', 'Mine 11,604 itemsets, apply lift ≥ 1.5, and prune +2pp extensions.') },
      { step: '04', name: text('Diễn giải 7 luật tiêu biểu', '7-Rule Interpretation (NB 03)'), detail: text('Kiểm tra số đếm 645/923 khách và đối chiếu độ nhạy support 0,10.', 'Verify exact customer counts (645/923) and compare 0.10 support.') }
    ],
    table: {
      caption: text('Đối chiếu độ nhạy ngưỡng Support trong Telco-Churn-Apriori', 'Support threshold sensitivity analysis in Telco-Churn-Apriori'),
      headers: [text('Ngưỡng Support', 'Min Support'), text('Tập phổ biến', 'Frequent Itemsets'), text('Luật {Churn=Yes}', 'Target Rules'), text('Sau lọc dư thừa', 'Non-Redundant Rules')],
      rows: [
        ['Support ≥ 0.05', '11,604', '659 (530 đạt conf/lift)', '261'],
        ['Support ≥ 0.10', '3,717', '221 (195 đạt conf/lift)', '137'],
        [text('Luật tiêu biểu (Fiber + 0–12m)', 'Featured Rule (Fiber + 0–12m)'), 'Support 9.16%', 'Confidence 69.88%', 'Lift 2.63× (645 / 923)']
      ]
    },
    repoTree: [
      { path: 'notebooks/apriori/01..03_*.ipynb', desc: text('Ba notebook lưu sẵn output từ EDA, sinh giao dịch đến diễn giải luật', 'Three executed notebooks covering EDA, Apriori mining, and rule review') },
      { path: 'reports/apriori/figures/', desc: text('10 biểu đồ phân bố, độ nhạy support và mức độ chồng lấn giữa các luật', '10 publication-ready charts of distributions, sensitivity, and overlap') },
      { path: 'reports/apriori/tables/', desc: text('Bảng tỷ lệ EDA, bảng luật đầy đủ và danh sách luật sau lọc dư thừa', 'Full EDA summaries, raw rule tables, and pruned rule exports') },
      { path: 'reports/apriori/apriori_report_and_study_guide.md', desc: text('Báo cáo phân tích phương pháp, tính tay kiểm chứng và giới hạn', 'Comprehensive methodology report and manual verification guide') }
    ],
    role: text(
      'Thiết kế quy trình rời rạc hóa giao dịch, lập trình thực nghiệm Apriori, xây dựng bộ lọc luật dư thừa, trực quan hóa 10 biểu đồ và biên soạn báo cáo phương pháp.',
      'Designed transaction discretization, implemented Apriori mining and redundancy pruning, generated 10 analytical figures, and authored the methodology report.'
    ),
    artifacts: text(
      'Ba Jupyter Notebook đã chạy sẵn kết quả, bảng luật CSV, 10 biểu đồ PNG và tài liệu giải thích phương pháp. Các luật mô tả quan hệ đồng xuất hiện trên tập dữ liệu hiện có, không thay thế kiểm định nhân quả.',
      'Three executed Jupyter notebooks, CSV rule tables, 10 analytical figures, and study documentation. Rules describe observational co-occurrence rather than causal intervention effects.'
    )
  },
  {
    id: 'vsl-model',
    category: 'cv',
    year: '2025',
    name: 'Holistic Sign Recognition',
    repo: 'Vietnamese-Sign-Language-byVu',
    visual: 'pose',
    tags: ['TensorFlow', 'MediaPipe Holistic', 'OpenCV', 'Streamlit', 'NumPy'],
    cardMetrics: [
      text('Thân trên + 2 bàn tay (Holistic)', 'Upper-body + dual-hand keypoints'),
      text('Nội suy chuỗi thời gian & Augment', 'Temporal interpolation & augment'),
      text('Giao diện thử nghiệm Streamlit', 'Live Streamlit webcam testbed')
    ],
    title: text('Từ chuyển động toàn thân trên đến ngôn ngữ ký hiệu.', 'From upper-body and dual-hand motion to sign recognition.'),
    description: text(
      'Pipeline nghiên cứu trích xuất đồng thời khung xương thân trên và hai bàn tay bằng MediaPipe Holistic, nội suy chuỗi thời gian cho mô hình học sâu TensorFlow.',
      'An experimental recognition pipeline capturing upper-body pose and both hands with MediaPipe Holistic, paired with temporal sequence interpolation for TensorFlow.'
    ),
    overview: text(
      'Nhiều từ vựng ngôn ngữ ký hiệu Việt Nam phụ thuộc vào cả hai bàn tay và vị trí tương đối với vùng ngực/vai. Dự án xây dựng pipeline xử lý chuỗi toàn diện cho webcam và video.',
      'Many Vietnamese signs rely on two-handed motion relative to the torso and shoulders. This project explores holistic landmark sequence extraction and classification from video or webcam streams.'
    ),
    approach: text(
      'Sử dụng MediaPipe Holistic thu thập tọa độ thân trên cùng hai bàn tay, áp dụng nội suy theo trục thời gian để đồng bộ độ dài chuỗi video khác tốc độ, kết hợp tăng cường dữ liệu hình học trước khi đưa vào mạng TensorFlow và giao diện thử nghiệm Streamlit.',
      'Applies MediaPipe Holistic to capture upper-body and dual-hand keypoints, performs temporal interpolation to standardize variable-speed clips, augments sequences, and serves predictions in Streamlit.'
    ),
    engineering: [
      text('Xử lý đồng thời đặc trưng tư thế thân trên (Pose) và hai bàn tay (Left + Right Hand), mở rộng không gian biểu diễn cho các ký hiệu hai tay phức tạp.', 'Jointly encodes upper-body pose and bilateral hand landmarks to represent compound two-handed signs accurately.'),
      text('Nội suy chuỗi theo thời gian (temporal interpolation) giúp chuẩn hóa các đoạn video quay ở tốc độ khung hình hoặc nhịp độ biểu diễn khác nhau.', 'Temporal sequence interpolation normalizes variable-length sign recordings into fixed-length model inputs.'),
      text('Xây dựng bộ script tiền xử lý, tăng cường dữ liệu (augmentation) và ứng dụng Streamlit hỗ trợ kiểm tra trực quan qua webcam.', 'Includes dedicated preprocessing, coordinate augmentation scripts, label mapping, and an interactive Streamlit webcam app.')
    ],
    metrics: [
      { value: 'Holistic', label: text('Pose thân trên + 2 bàn tay', 'Pose + left & right hands') },
      { value: 'Temporal', label: text('Nội suy chuẩn hóa độ dài chuỗi', 'Sequence length interpolation') },
      { value: 'Augment', label: text('Tăng cường biến đổi tọa độ', 'Landmark data augmentation') },
      { value: 'Streamlit', label: text('Thử nghiệm trực tiếp qua video/cam', 'Interactive video/cam UI') }
    ],
    pipeline: [
      { step: '01', name: text('Video / Webcam Capture', 'Video / Webcam Capture'), detail: text('Đọc luồng khung hình bằng OpenCV từ tệp video hoặc camera.', 'Read frame sequences via OpenCV from video clips or live camera.') },
      { step: '02', name: text('MediaPipe Holistic', 'MediaPipe Holistic'), detail: text('Trích xuất đồng bộ điểm khớp thân trên, tay trái và tay phải.', 'Extract synchronized upper-body, left-hand, and right-hand landmarks.') },
      { step: '03', name: text('Interpolation & Augment', 'Interpolation & Augment'), detail: text('Nội suy theo thời gian và biến đổi tăng cường độ bền mẫu.', 'Temporally interpolate sequences and apply geometric augmentations.') },
      { step: '04', name: text('TensorFlow + Streamlit', 'TensorFlow + Streamlit'), detail: text('Dự đoán nhãn ký hiệu theo chuỗi và hiển thị trực quan.', 'Run TensorFlow sequence inference inside a Streamlit testbed.') }
    ],
    table: {
      caption: text('Các khối chức năng trong repository Vietnamese-Sign-Language-byVu', 'Core modules inside Vietnamese-Sign-Language-byVu'),
      headers: [text('Giai đoạn', 'Stage'), text('Kỹ thuật áp dụng', 'Technique'), text('Mục đích kỹ thuật', 'Engineering Purpose')],
      rows: [
        ['Keypoint Extraction', 'MediaPipe Holistic + OpenCV', text('Bắt đồng thời tương quan vị trí hai tay so với thân trên', 'Capture bilateral hand trajectories relative to upper torso')],
        ['Sequence Alignment', 'Temporal Interpolation', text('Đưa các clip dài/ngắn khác nhau về cùng số bước thời gian', 'Standardize variable-duration sign clips to uniform sequence length')],
        ['Training Prep', 'Landmark Augmentation + Label Map', text('Tăng độ đa dạng góc lệch nhỏ và quản lý từ điển nhãn', 'Improve robustness to slight camera shifts and map vocabulary IDs')],
        ['Experiment UI', 'TensorFlow + Streamlit', text('Kiểm tra nhanh phản hồi mô hình trên video và webcam thực', 'Rapid interactive testing on uploaded videos and live webcam')]
      ]
    },
    repoTree: [
      { path: 'Data processing & augmentation scripts', desc: text('Trích xuất chuỗi landmark Holistic, nội suy thời gian và nhân bản mẫu', 'Holistic landmark extraction, temporal interpolation, and augmentation') },
      { path: 'Label map & model config', desc: text('Ánh xạ nhãn từ vựng ký hiệu và cấu hình đầu vào mô hình TensorFlow', 'Sign vocabulary mapping and TensorFlow sequence input definitions') },
      { path: 'Streamlit experiment app', desc: text('Giao diện thử nghiệm nhận diện từ video/webcam trực quan', 'Interactive Streamlit interface for webcam and video testing') }
    ],
    role: text(
      'Thực nghiệm độc lập toàn bộ pipeline trích xuất đặc trưng MediaPipe Holistic, chuẩn hóa/tăng cường chuỗi thời gian và xây dựng giao diện kiểm thử trong nhánh nghiên cứu byVu.',
      'Independently built the MediaPipe Holistic extraction pipeline, temporal interpolation and augmentation routines, and the Streamlit evaluation interface.'
    ),
    artifacts: text(
      'Bộ script tiền xử lý và tăng cường dữ liệu chuỗi landmark, bảng ánh xạ nhãn từ vựng và ứng dụng thử nghiệm Streamlit.',
      'Landmark sequence preprocessing and augmentation scripts, vocabulary label maps, and the Streamlit testbed application.'
    )
  },
  {
    id: 'car-damage',
    category: 'cv',
    year: '2025',
    name: 'Car Damage Classification',
    repo: 'car_damage',
    visual: 'car',
    tags: ['PyTorch', 'torchvision', 'OpenCV', 'Flask', 'Docker'],
    cardMetrics: [
      text('PyTorch + torchvision CNN', 'PyTorch + torchvision CNN'),
      text('Phân loại vết xước, móp, vỡ kính', 'Scratch, dent & glass classes'),
      text('Flask Web + Dockerfile đóng gói', 'Flask Web + Dockerfile ready')
    ],
    title: text('Nhận diện hư hỏng thân vỏ xe từ ảnh chụp.', 'Classifying vehicle body damage from uploaded photos.'),
    description: text(
      'Ứng dụng web phân loại các dạng hư hỏng xe hơi (trầy xước, móp méo, vỡ kính) bằng mô hình học sâu PyTorch kết hợp backend Flask.',
      'A deep learning web application classifying vehicle damage types (scratches, dents, shattered glass) with PyTorch, torchvision, and Flask.'
    ),
    overview: text(
      'Hỗ trợ quy trình kiểm tra sơ bộ tình trạng ngoại thất ô tô thông qua ảnh chụp: người dùng tải ảnh xe lên giao diện web để nhận kết quả phân loại loại hư hỏng nhanh chóng.',
      'Streamline preliminary vehicle exterior inspection from photographs: users upload a car image via a web form or cURL endpoint to classify visible damage categories.'
    ),
    approach: text(
      'Tách bạch quy trình huấn luyện (scripts/train_model.py, preprocess.py với PyTorch & torchvision) khỏi dịch vụ suy luận web Flask (app/routes.py), quản lý trọng số model.pth tách rời khỏi Git và hỗ trợ đóng gói bằng Dockerfile.',
      'Separates offline training and image preparation (PyTorch, torchvision, PIL/OpenCV) from a lightweight Flask web inference router, keeping large model.pth weights out of Git and providing a Dockerfile.'
    ),
    engineering: [
      text('Chuẩn hóa luồng tiền xử lý ảnh đồng nhất giữa lúc huấn luyện (preprocess.py) và lúc suy luận trực tuyến qua Flask bằng PIL và OpenCV.', 'Consistent image resize and tensor normalization shared between offline training scripts and live Flask request handling.'),
      text('Thiết kế endpoint hỗ trợ cả giao diện upload trực quan trên trình duyệt lẫn kiểm thử tự động nhanh qua dòng lệnh cURL.', 'Supports both interactive HTML/Bootstrap browser uploads and scriptable multipart cURL testing.'),
      text('Tách lưu trữ trọng số mô hình dung lượng lớn (model.pth) ra khỏi lịch sử Git kết hợp tài liệu TRAINING.md và Dockerfile.', 'Cleanly separates binary model checkpoints from source control alongside dedicated training docs and Docker containerization.')
    ],
    metrics: [
      { value: 'PyTorch', label: text('Huấn luyện CNN với torchvision', 'CNN training via torchvision') },
      { value: 'Flask API', label: text('Giao diện web & REST upload', 'Web UI & multipart upload API') },
      { value: 'OpenCV', label: text('Tiền xử lý & chuẩn hóa ảnh', 'Image preprocessing pipeline') },
      { value: 'Docker', label: text('Cấu hình đóng gói môi trường', 'Containerized deployment spec') }
    ],
    pipeline: [
      { step: '01', name: text('Image Upload / cURL', 'Image Upload / cURL'), detail: text('Người dùng gửi ảnh xe qua form web hoặc HTTP POST.', 'Submit vehicle photo through web interface or HTTP POST.') },
      { step: '02', name: text('PIL & OpenCV Prep', 'PIL & OpenCV Prep'), detail: text('Đọc ảnh, chuẩn hóa kích thước và biến đổi sang tensor.', 'Decode image, resize, and normalize into PyTorch tensor.') },
      { step: '03', name: text('PyTorch Inference', 'PyTorch Inference'), detail: text('Nạp model.pth dự đoán nhóm hư hỏng (trầy, móp, vỡ kính).', 'Evaluate model.pth across scratch, dent, and glass classes.') },
      { step: '04', name: text('Flask Result View', 'Flask Result View'), detail: text('Hiển thị ảnh xe kèm nhãn phân loại trên giao diện người dùng.', 'Render uploaded vehicle image alongside predicted damage label.') }
    ],
    table: {
      caption: text('Thành phần kiến trúc trong dự án car_damage', 'Component breakdown in the car_damage repository'),
      headers: [text('Tầng', 'Layer'), text('Công nghệ', 'Technology'), text('Chức năng', 'Function')],
      rows: [
        ['Modeling', 'PyTorch, torchvision', text('Huấn luyện và trích xuất đặc trưng phân loại ảnh hư hỏng xe', 'Train and evaluate image classification models for car damage')],
        ['Image Processing', 'PIL, OpenCV', text('Chuẩn bị dữ liệu huấn luyện (preprocess.py) và xử lý ảnh tải lên', 'Dataset preparation and online request tensor transforms')],
        ['Web Serving', 'Flask, HTML, Bootstrap', text('Định tuyến HTTP (routes.py), nhận file ảnh và trả kết quả trực quan', 'HTTP routing, file handling, and result rendering')],
        ['Packaging', 'Dockerfile & TRAINING.md', text('Tài liệu hóa thuật toán/metrics và đóng gói môi trường chạy', 'Training documentation and container setup')]
      ]
    },
    repoTree: [
      { path: 'app/routes.py & templates/index.html', desc: text('Flask router tiếp nhận ảnh tải lên, gọi mô hình và trả kết quả', 'Flask inference routes and Bootstrap upload interface') },
      { path: 'scripts/train_model.py & preprocess.py', desc: text('Script tiền xử lý tập ảnh và huấn luyện mô hình PyTorch', 'Dataset preprocessing and PyTorch model training scripts') },
      { path: 'TRAINING.md & Dockerfile', desc: text('Tài liệu quy trình huấn luyện và cấu hình đóng gói container', 'Training notes, metrics documentation, and Docker specification') }
    ],
    role: text(
      'Tác giả thực hiện toàn bộ dự án học tập tại Đại học Phenikaa: chuẩn bị dữ liệu, huấn luyện mô hình phân loại PyTorch và xây dựng ứng dụng web Flask.',
      'Sole developer for this Phenikaa University project: handled image preprocessing, PyTorch model training, and Flask web integration.'
    ),
    artifacts: text(
      'Mã nguồn ứng dụng Flask, bộ script huấn luyện/tiền xử lý, ảnh kiểm thử mẫu, tài liệu TRAINING.md và Dockerfile.',
      'Flask web application source, training and preprocessing scripts, sample test images, TRAINING.md documentation, and Dockerfile.'
    )
  }
];

export const softwareProjects = [
  {
    id: 'warehouse',
    name: 'Warehouse Management System',
    repo: 'Thiet_Ke_Kho_hang_pttkpm123',
    domain: text('Enterprise Web · Phân quyền 3 vai trò', 'Enterprise Web · 3-Role RBAC'),
    stack: ['Java', 'Spring Boot', 'Thymeleaf', 'MySQL'],
    summary: text(
      'Ứng dụng web quản lý kho hàng phân quyền chặt chẽ (Manager, Seller, Customer), xử lý vòng đời sản phẩm, đồng bộ tồn kho tự động và lập hóa đơn đa mặt hàng.',
      'Role-based warehouse web application (Manager, Seller, Customer) managing product catalogs, live stock updates, and multi-item customer invoicing.'
    ),
    highlight: text('Nhóm trưởng · Thiết kế OOP & nghiệp vụ cùng Nguyễn Hữu Tình', 'Team Lead · OOP architecture & workflows with Nguyễn Hữu Tình')
  },
  {
    id: 'musicbox',
    name: 'Music Box Booking & Operations',
    repo: 'MusicBoxManagement.Wpf',
    domain: text('Desktop App · Cloud MySQL (Aiven TLS)', 'Desktop App · Cloud MySQL (Aiven TLS)'),
    stack: ['C#', 'WPF .NET 4.7.2', 'MySQL (VerifyFull)', 'MVVM / Services'],
    summary: text(
      'Phần mềm quản lý đặt phòng Music Box theo ca (09:00–12:00, 13:00–23:00), nhận phòng walk-in/booking, gọi món, tính hóa đơn, xuất báo cáo Excel và phân quyền Admin/Manager/Staff.',
      'Shift-aware room booking and POS desktop suite supporting walk-in/reservation check-ins, F&B billing, Excel reporting, and TLS-verified Aiven MySQL.'
    ),
    highlight: text('Đạt 34/34 nhóm kiểm thử luồng MySQL Release & tài liệu ERD đầy đủ', '34/34 verified MySQL release flow groups & full ERD documentation')
  },
  {
    id: 'todolist',
    name: 'Bilingual Task & Calendar App',
    repo: '2025_2_LTTBDD_N03_Nhom_17',
    domain: text('Mobile App · Đa ngôn ngữ VI / EN', 'Mobile App · Bilingual VI / EN'),
    stack: ['Dart', 'Flutter', 'Material Design', 'table_calendar'],
    summary: text(
      'Ứng dụng di động quản lý công việc tích hợp lịch tháng tương tác, thanh tiến trình hoàn thành theo thời gian thực và chuyển đổi ngôn ngữ Việt / Anh tức thì.',
      'Cross-platform Flutter mobile app featuring interactive monthly calendar filtering, live completion progress bars, and instant Vietnamese/English switching.'
    ),
    highlight: text('Project Manager & Developer · Phát triển cùng Phạm Thị Minh Ngọc', 'Project Manager & Developer · Built with Phạm Thị Minh Ngọc')
  }
];
