export const normalizeLocale = value => value === 'en' ? 'en' : 'vi';
export function readLocale(storage) { try { return normalizeLocale(storage.getItem('minhvu-language')); } catch { return 'vi'; } }
export const translations = {
  vi: {
    navWork: 'Dự án', navAbout: 'Về mình', navContact: 'Kết nối', skip: 'Đến nội dung',
    discipline: 'Machine learning & computer vision', intro: 'Mình là Minh Vũ.',
    heroTitle: 'AI từ mô hình đến thực tế.',
    heroBody: 'Mình xây dựng hệ thống có thể nhìn, nhận biết và giải quyết vấn đề. Từ nhận diện ký hiệu đến thị giác máy tính và dự đoán dữ liệu.',
    explore: 'Xem dự án', github: 'GitHub của mình', heroNote: 'Sinh viên CNTT tại Đại học Phenikaa',
    handLabel: 'Nhận diện bắt đầu từ những điểm nhỏ.', handMeta: '21 landmarks / một bàn tay',
    pause: 'Dừng chuyển động', resume: 'Bật chuyển động', reset: 'Đặt lại góc nhìn', activate: 'Bật tương tác 3D',
    workTitle: 'Những hệ thống mình xây.', workIntro: 'Computer vision, mô hình dự đoán và ứng dụng AI. Mỗi dự án là một bài toán cụ thể.',
    all: 'Tất cả', cv: 'Computer vision', ml: 'Machine learning', ai: 'Ứng dụng AI', viewProject: 'Xem dự án', source: 'Xem mã nguồn',
    aboutTitle: 'Tò mò về AI. Quan tâm đến cách nó hoạt động.',
    aboutBody: 'Mình là Từ Hữu Minh Vũ, sinh viên Công nghệ thông tin tại Đại học Phenikaa. Mình thích đưa mô hình ra khỏi notebook và kết nối nó với một ứng dụng có thể dùng được.',
    aboutBody2: 'Những bài toán mình theo đuổi trải dài từ nhận diện cử chỉ, phát hiện vi phạm giao thông đến phân tích rủi ro khách hàng. Mình làm việc ở cả phần mô hình, xử lý dữ liệu và backend.',
    tools: 'Bộ công cụ của mình', learning: 'Đang tìm hiểu', learningText: 'AI agents, computer vision và các hệ thống AI hoàn chỉnh.',
    contactTitle: 'Cùng làm một điều hữu ích.', contactBody: 'Trao đổi về AI, một dự án mới, hay đơn giản là kết nối.', email: 'Gửi email', copy: 'Sao chép email', copied: 'Đã sao chép email', copyFailed: 'Bạn có thể dùng liên kết gửi email.',
    footerNote: 'Thiết kế và phát triển cùng sự tò mò.', back: 'Về thư viện dự án', overview: 'Bài toán', approach: 'Cách tiếp cận', role: 'Phạm vi công việc', stack: 'Công nghệ', artifacts: 'Trong repository', details: 'Chi tiết dự án', notFound: 'Không tìm thấy dự án', noScript: 'Bật JavaScript để dùng bộ lọc và xem chi tiết. Các repository vẫn truy cập được bên dưới.', menu: 'Mở điều hướng', closeMenu: 'Đóng điều hướng'
  },
  en: {
    navWork: 'Work', navAbout: 'About', navContact: 'Connect', skip: 'Skip to content',
    discipline: 'Machine learning & computer vision', intro: 'I’m Minh Vũ.',
    heroTitle: 'AI beyond the notebook.',
    heroBody: 'I build systems that see, understand, and solve practical problems. From sign language recognition to computer vision and predictive modeling.',
    explore: 'View projects', github: 'Find me on GitHub', heroNote: 'Computer science student at Phenikaa University',
    handLabel: 'Recognition starts with the smallest points.', handMeta: '21 landmarks / one hand',
    pause: 'Pause motion', resume: 'Play motion', reset: 'Reset camera', activate: 'Enable interactive 3D',
    workTitle: 'Systems I’ve been building.', workIntro: 'Computer vision, predictive models, and AI applications. Each project starts with a concrete problem.',
    all: 'All work', cv: 'Computer vision', ml: 'Machine learning', ai: 'AI applications', viewProject: 'View project', source: 'View source',
    aboutTitle: 'Curious about AI. Interested in how it works.',
    aboutBody: 'I’m Từ Hữu Minh Vũ, a computer science student at Phenikaa University. I enjoy taking models out of notebooks and connecting them to applications people can use.',
    aboutBody2: 'My projects span gesture recognition, traffic violation detection, and customer risk analysis. I work across modeling, data processing, and backend development.',
    tools: 'My toolkit', learning: 'Currently exploring', learningText: 'AI agents, computer vision, and end-to-end AI systems.',
    contactTitle: 'Let’s build something useful.', contactBody: 'Talk AI, discuss a project, or simply say hello.', email: 'Send an email', copy: 'Copy email', copied: 'Email copied', copyFailed: 'You can use the email link instead.',
    footerNote: 'Designed and developed with curiosity.', back: 'Back to all projects', overview: 'The problem', approach: 'The approach', role: 'Scope of work', stack: 'Built with', artifacts: 'Inside the repository', details: 'Project details', notFound: 'Project not found', noScript: 'Enable JavaScript for filters and project details. Repository links are still available below.', menu: 'Open navigation', closeMenu: 'Close navigation'
  }
};

const text = (vi, en) => ({ vi, en });
export const projects = [
  {
    id: 'traffic', category: 'cv', name: 'AI Traffic Monitor', repo: 'Giamsatgiaothong2', visual: 'traffic', tags: ['YOLO11', 'SAM2', 'FastAPI', 'React'],
    title: text('Để máy nhìn đường phố.', 'Teaching machines to see the street.'),
    description: text('Giám sát giao thông, phát hiện vi phạm và đọc biển số trong cùng một pipeline.', 'Traffic monitoring, violation detection, and plate recognition in one pipeline.'),
    overview: text('Xây dựng hệ thống giám sát giao thông từ video, kết hợp nhận diện phương tiện, tín hiệu đèn, mũ bảo hiểm và biển số.', 'Build a video-based traffic monitoring system combining vehicle detection, traffic signals, helmets, and license plates.'),
    approach: text('YOLO11 phát hiện đối tượng, SAM2 hỗ trợ xác định vạch dừng và OCR đọc biển số. FastAPI xử lý pipeline, WebSocket truyền hình ảnh và sự kiện đến giao diện React.', 'YOLO11 detects objects, SAM2 assists stop-line calibration, and OCR reads plates. FastAPI runs the pipeline while WebSocket streams frames and events to React.'),
    role: text('Pipeline thị giác máy tính, backend và tích hợp giao diện giám sát.', 'Computer vision pipeline, backend, and monitoring interface integration.'),
    artifacts: text('Mã nguồn web app, cấu hình pipeline, schema dữ liệu và công cụ đánh giá sự kiện.', 'Web app source, pipeline configuration, data schemas, and event evaluation tools.')
  },
  {
    id: 'vsl', category: 'ai', name: 'Vietnamese Sign Language', repo: 'vietnamese-sign-language-web', visual: 'hand', tags: ['TensorFlow', 'MediaPipe', 'LSTM', 'FastAPI'],
    title: text('Kết nối qua từng cử chỉ.', 'A connection in every gesture.'),
    description: text('Nền tảng học ký hiệu Việt Nam với luyện tập nhận diện cử chỉ theo thời gian thực.', 'A Vietnamese sign language learning platform with real-time gesture practice.'),
    overview: text('Kết hợp nội dung học, bài kiểm tra và luyện tập bằng camera trong một nền tảng ngôn ngữ ký hiệu Việt Nam.', 'Combine lessons, quizzes, and camera-based practice in a Vietnamese sign language learning platform.'),
    approach: text('MediaPipe trích xuất landmark bàn tay. Chuỗi đặc trưng được đưa đến mô hình LSTM qua dịch vụ FastAPI; backend Node.js quản lý người dùng, khóa học và kết quả.', 'MediaPipe extracts hand landmarks. Feature sequences reach an LSTM through FastAPI; a Node.js backend manages users, lessons, and results.'),
    role: text('Kiến trúc hệ thống, backend và AI. Phạm Thị Minh Ngọc phụ trách UI/UX, frontend và nội dung.', 'System architecture, backend, and AI. Phạm Thị Minh Ngọc handles UI/UX, frontend, and content.'),
    artifacts: text('Frontend React, backend Express/MySQL, dịch vụ suy luận và hướng dẫn cài đặt.', 'React frontend, Express/MySQL backend, inference service, and setup documentation.')
  },
  {
    id: 'churn', category: 'ml', name: 'Customer Churn Prediction', repo: 'Customer-Churn-Analysis', visual: 'churn', tags: ['Scikit-learn', 'XGBoost', 'LightGBM', 'Pandas'],
    title: text('Hiểu dữ liệu. Nhìn thấy rủi ro.', 'Understand the data. See the risk.'),
    description: text('Dự đoán và xếp hạng rủi ro rời bỏ dịch vụ trên dữ liệu IBM Telco.', 'Predict and prioritize customer churn risk using the IBM Telco dataset.'),
    overview: text('Nhận diện khách hàng có nguy cơ rời bỏ dịch vụ, đồng thời kiểm soát đánh đổi giữa phát hiện đúng và cảnh báo sai.', 'Identify customers likely to leave a service while accounting for the trade-off between recall and false alerts.'),
    approach: text('Pipeline tám notebook: EDA, tiền xử lý, feature engineering, so sánh mô hình và chọn threshold bằng OOF. Dùng repeated nested-CV và phân tích đặc trưng để kiểm tra kết quả.', 'An eight-notebook pipeline covering EDA, preprocessing, feature engineering, model comparison, and OOF threshold selection. Repeated nested CV and feature analysis help assess results.'),
    role: text('Xử lý dữ liệu, thực nghiệm mô hình, đánh giá và demo dự đoán.', 'Data preparation, model experiments, evaluation, and prediction demo.'),
    artifacts: text('Notebook 01–08, biểu đồ, bảng đánh giá và artifact mô hình. Kết quả hiện tại là development confirmation, cần dữ liệu độc lập để xác nhận ngoài mẫu.', 'Notebooks 01–08, charts, evaluation tables, and model artifacts. Current results are development confirmation; independent data is still needed for external validation.')
  },
  {
    id: 'car-damage', category: 'cv', name: 'Car Damage Detection', repo: 'car_damage', visual: 'car', tags: ['PyTorch', 'torchvision', 'Flask', 'OpenCV'],
    title: text('Nhìn ra những hư hỏng.', 'Finding damage in the details.'),
    description: text('Ứng dụng phân loại hư hỏng xe từ ảnh bằng deep learning và giao diện Flask.', 'A deep learning image classifier for car damage with a Flask interface.'),
    overview: text('Người dùng tải ảnh xe lên để phân loại những loại hư hỏng như trầy xước, móp và vỡ kính.', 'Users upload a car image to classify types of damage such as scratches, dents, and broken glass.'),
    approach: text('PyTorch và torchvision xử lý mô hình; PIL/OpenCV chuẩn bị ảnh. Flask kết nối giao diện upload với bước suy luận.', 'PyTorch and torchvision handle modeling; PIL/OpenCV prepare images. Flask connects the upload interface to inference.'),
    role: text('Dự án học tập về phân loại ảnh và tích hợp mô hình vào web.', 'An academic project exploring image classification and web model integration.'),
    artifacts: text('Mã nguồn ứng dụng, script huấn luyện, tiền xử lý và tài liệu training.', 'Application source, training and preprocessing scripts, and training documentation.')
  },
  {
    id: 'vsl-model', category: 'cv', name: 'Sign Language Recognition', repo: 'Vietnamese-Sign-Language-byVu', visual: 'pose', tags: ['TensorFlow', 'MediaPipe', 'OpenCV', 'Streamlit'],
    title: text('Từ chuyển động đến ngôn ngữ.', 'From movement to language.'),
    description: text('Pipeline xử lý landmark cơ thể và bàn tay cho nhận diện ký hiệu từ video.', 'A body and hand landmark pipeline for video-based sign recognition.'),
    overview: text('Thực nghiệm nhận diện ký hiệu qua video hoặc webcam bằng chuỗi landmark và mô hình học sâu.', 'Explore recognition from video or webcam input using landmark sequences and deep learning.'),
    approach: text('MediaPipe Holistic trích xuất phần thân trên và hai bàn tay. Chuỗi được nội suy theo thời gian trước khi mô hình TensorFlow dự đoán; Streamlit cung cấp giao diện thử nghiệm.', 'MediaPipe Holistic extracts the upper body and both hands. Sequences are temporally interpolated before TensorFlow inference; Streamlit provides the experiment interface.'),
    role: text('Thực nghiệm pipeline nhận diện, tiền xử lý và tăng cường dữ liệu trong repository byVu.', 'Recognition pipeline experiments, preprocessing, and augmentation in the byVu repository.'),
    artifacts: text('Script xử lý và tăng cường dữ liệu, label map và ứng dụng thử nghiệm.', 'Processing and augmentation scripts, label map, and experiment application.')
  },
  {
    id: 'apriori', category: 'ml', name: 'Telco Churn Apriori', repo: 'Telco-Churn-Apriori', visual: 'rules', tags: ['Python', 'Apriori', 'Pandas', 'Jupyter'],
    title: text('Tìm quy luật sau những con số.', 'Finding patterns behind the numbers.'),
    description: text('Khai phá luật kết hợp để tìm đặc điểm thường đi cùng việc rời bỏ dịch vụ.', 'Association rule mining to explore characteristics related to customer churn.'),
    overview: text('Tìm những tổ hợp đặc điểm thường đi cùng Churn=Yes và diễn giải chúng thành hướng khảo sát có căn cứ.', 'Find combinations of characteristics associated with Churn=Yes and interpret them as evidence-based questions for further investigation.'),
    approach: text('Làm sạch và EDA, chuyển dữ liệu thành giao dịch Boolean, chạy Apriori rồi phân tích support, confidence và lift. Các mối liên hệ không được diễn giải thành quan hệ nhân quả.', 'Clean and explore data, encode Boolean transactions, run Apriori, then examine support, confidence, and lift. Associations are not interpreted as causal effects.'),
    role: text('Chuẩn bị dữ liệu, khai phá luật và trình bày kết quả.', 'Data preparation, association mining, and results presentation.'),
    artifacts: text('Ba notebook, bảng luật, mười biểu đồ và tài liệu giải thích phương pháp.', 'Three notebooks, rule tables, ten charts, and method documentation.')
  }
];
