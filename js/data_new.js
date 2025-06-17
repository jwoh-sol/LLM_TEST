// data.js

// 현재 언어를 관리하는 전역 변수 (초기값은 한국어)
let currentLanguage = 'ko'; 

// LocalizedString 타입을 위한 헬퍼 함수
function getLocalizedString(keyObject) {
    return keyObject[currentLanguage] || keyObject['en']; // 현재 언어 없으면 영어로 대체
}

// 언어 설정 함수 (script.js에서 호출)
function setLanguage(lang) {
    currentLanguage = lang;
    // UI 업데이트 로직은 script.js 또는 각 컴포넌트에서 처리
    document.dispatchEvent(new CustomEvent('languageChange', { detail: lang }));
}


const CV_DATA = {
    personalInfo: {
        name: {
            ko: "홍길동",
            en: "Gil-dong Hong"
        },
        title: {
            ko: "웹 개발자 | 소프트웨어 엔지니어",
            en: "Web Developer | Software Engineer"
        },
        profileImage: "assets/images/profile.png", // 이미지 경로
        contact: {
            email: "hong.gildong@example.com",
            phone: "+82-10-1234-5678",
            location: {
                ko: "서울, 대한민국",
                en: "Seoul, South Korea"
            }
        },
        keywords: [
            { ko: "JavaScript", en: "JavaScript" },
            { ko: "React", en: "React" },
            { ko: "Node.js", en: "Node.js" },
            { ko: "웹 개발", en: "Web Development" },
            { ko: "프론트엔드", en: "Frontend" },
            { ko: "백엔드", en: "Backend" }
        ],
        summaryQualifications: {
            ko: "정보처리기사 자격증 보유, 소프트웨어 공모전 대상 수상",
            en: "Certified Information Processing Engineer, Grand Prize Winner of Software Contest"
        },
        externalLinks: {
            github: "https://github.com/gildonghong",
            linkedin: "https://linkedin.com/in/gildonghong",
            blog: "https://gildonghong.tistory.com"
        }
    },
    sections: {
        introduction: {
            title: { ko: "소개", en: "Introduction" },
            selfIntro: {
                ko: "안녕하세요, 웹 개발자 홍길동입니다. 사용자 경험을 최우선으로 생각하며, 효율적이고 확장 가능한 코드 작성을 지향합니다. 새로운 기술을 배우고 적용하는 것을 즐기며, 다양한 프로젝트를 통해 문제 해결 능력을 키워왔습니다. 특히 프론트엔드와 백엔드 기술을 아우르는 풀스택 개발 역량을 보유하고 있습니다. (1000자 미만)",
                en: "Hello, I'm Gil-dong Hong, a web developer. I prioritize user experience and strive to write efficient and scalable code. I enjoy learning and applying new technologies, and I have developed problem-solving skills through various projects. I possess full-stack development capabilities covering both frontend and backend technologies. (less than 1000 characters)"
            },
            goal: {
                ko: "저는 사용자에게 가치를 제공하고 비즈니스 성장에 기여하는 웹 서비스를 개발하는 데 기여하고자 합니다. 끊임없이 학습하고 발전하여, 기술 트렌드를 선도하는 개발자로 성장하는 것이 목표입니다. 특히 AI 기반 서비스 개발에 관심을 가지고 있으며, 관련 기술을 습득하여 미래 지향적인 솔루션을 구축하는 데 참여하고 싶습니다. (2000자 미만)",
                en: "My goal is to contribute to developing web services that provide value to users and contribute to business growth. I aim to continuously learn and grow into a leading developer in technology trends. I am particularly interested in AI-based service development and want to participate in building future-oriented solutions by acquiring relevant technologies. (less than 2000 characters)"
            }
        },
        education: {
            title: { ko: "학력", en: "Education" },
            items: [
                {
                    degree: { ko: "소프트웨어공학 석사", en: "M.S. in Software Engineering" },
                    institution: { ko: "OO대학교", en: "OO University" },
                    period: "2020.03 - 2022.02",
                    description: { ko: "데이터베이스 시스템 연구실, 인공지능 기반 데이터 분석 프로젝트 참여", en: "Database Systems Lab, Participated in AI-based data analysis projects" }
                },
                {
                    degree: { ko: "컴퓨터공학 학사", en: "B.S. in Computer Science" },
                    institution: { ko: "△△대학교", en: "△△ University" },
                    period: "2016.03 - 2020.02",
                    description: { ko: "컴퓨터공학 전반에 걸친 이론 및 실습 학습, 캡스톤 디자인 프로젝트 최우수상 수상", en: "Studied theoretical and practical aspects of computer science, Won the Grand Prize in Capstone Design Project" }
                }
            ]
        },
        experience: {
            title: { ko: "경력", en: "Experience" },
            items: [
                {
                    title: { ko: "선임 소프트웨어 엔지니어", en: "Senior Software Engineer" },
                    company: { ko: "주식회사 A", en: "Company A Co., Ltd." },
                    period: "2023.01 - 현재",
                    responsibilities: [
                        { ko: "클라우드 기반 백엔드 시스템 설계 및 개발", en: "Designed and developed cloud-based backend systems" },
                        { ko: "대규모 트래픽 처리를 위한 아키텍처 개선", en: "Improved architecture for handling large-scale traffic" },
                        { ko: "데이터베이스 최적화 및 성능 튜닝", en: "Optimized databases and tuned performance" }
                    ],
                    projects: [
                        { ko: "고객 관리 시스템 개발", en: "Developed Customer Relationship Management system" },
                        { ko: "실시간 데이터 분석 플랫폼 구축", en: "Built real-time data analytics platform" }
                    ]
                },
                {
                    title: { ko: "소프트웨어 엔지니어", en: "Software Engineer" },
                    company: { ko: "주식회사 B", en: "Company B Co., Ltd." },
                    period: "2020.03 - 2022.12",
                    responsibilities: [
                        { ko: "웹 서비스 프론트엔드 개발 (React)", en: "Developed web service frontend (React)" },
                        { ko: "RESTful API 연동 및 데이터 처리", en: "Integrated RESTful APIs and processed data" }
                    ],
                    projects: [
                        { ko: "온라인 쇼핑몰 리뉴얼 프로젝트", en: "Online Shopping Mall Renewal Project" }
                    ]
                },
                {
                    title: { ko: "인턴 개발자", en: "Intern Developer" },
                    company: { ko: "주식회사 C", en: "Company C Co., Ltd." },
                    period: "2019.07 - 2019.12",
                    responsibilities: [
                        { ko: "웹 페이지 UI/UX 개선 작업", en: "Improved web page UI/UX" }
                    ],
                    projects: []
                }
            ]
        },
        projects: {
            title: { ko: "프로젝트", en: "Projects" },
            items: [
                {
                    id: "project_ai",
                    name: { ko: "AI 기반 추천 시스템 개발", en: "AI-based Recommendation System Development" },
                    description: { ko: "사용자 구매 이력을 분석하여 개인 맞춤형 상품을 추천하는 시스템 개발. Python, TensorFlow 활용.", en: "Developed a system to recommend personalized products by analyzing user purchase history. Utilized Python, TensorFlow." },
                    technologies: ["Python", "TensorFlow", "Django", "MySQL"],
                    period: "2024.01 - 2024.06",
                    links: {
                        github: "https://github.com/project-ai",
                        demo: "https://demo.project-ai.com"
                    },
                    thumbnail: "assets/images/project_ai.png",
                    detail: {
                        ko: "상세 설명: 이 프로젝트는 대규모 데이터를 기반으로 사용자 행동 패턴을 학습하고, 이를 통해 개인화된 상품 추천을 제공합니다. 협업 필터링 및 딥러닝 기반 모델을 적용하여 추천 정확도를 높였습니다. 주요 기능으로는 실시간 추천, 사용자 피드백 반영, 추천 결과 시각화 등이 있습니다. 시스템의 확장성을 고려하여 마이크로서비스 아키텍처로 설계하였으며, 클라우드 환경에 배포하였습니다.",
                        en: "Detailed description: This project learns user behavior patterns based on large-scale data and provides personalized product recommendations. Recommendation accuracy was improved by applying collaborative filtering and deep learning-based models. Key features include real-time recommendations, user feedback reflection, and visualization of recommendation results. The system was designed with a microservices architecture for scalability and deployed in a cloud environment."
                    }
                },
                {
                    id: "project_editor",
                    name: { ko: "온라인 코드 에디터", en: "Online Code Editor" },
                    description: { ko: "웹 기반 코드 작성 및 실행 환경 제공. React, Node.js 활용.", en: "Provided web-based code writing and execution environment. Utilized React, Node.js." },
                    technologies: ["React", "Node.js", "Express.js", "WebSocket"],
                    period: "2023.07 - 2023.12",
                    links: {
                        github: "https://github.com/online-editor",
                        demo: "https://demo.online-editor.com"
                    },
                    thumbnail: "assets/images/project_editor.png",
                    detail: {
                        ko: "상세 설명: 이 프로젝트는 실시간 코드 공유 및 협업 기능을 지원하는 온라인 코드 에디터입니다. 웹소켓을 이용하여 여러 사용자가 동시에 코드를 편집하고 결과를 확인할 수 있도록 구현했습니다. 구문 강조, 자동 완성, 디버깅 기능 등을 제공하여 개발 생산성을 높였습니다. 확장성을 고려하여 플러그인 아키텍처를 도입할 예정입니다.",
                        en: "Detailed description: This project is an online code editor that supports real-time code sharing and collaboration. It was implemented using WebSockets to allow multiple users to edit code and view results simultaneously. It improves development productivity by providing features such as syntax highlighting, auto-completion, and debugging. A plugin architecture will be introduced for scalability."
                    }
                },
                {
                    id: "project_todo",
                    name: { ko: "모바일 할 일 관리 앱", en: "Mobile Todo Management App" },
                    description: { ko: "간단한 할 일 목록을 관리하는 모바일 앱. React Native 활용.", en: "Mobile app for managing simple todo lists. Utilized React Native." },
                    technologies: ["React Native", "Firebase"],
                    period: "2023.01 - 2023.06",
                    links: {
                        github: "https://github.com/todo-app",
                        demo: "https://demo.todo-app.com"
                    },
                    thumbnail: "assets/images/project_todo.png",
                    detail: {
                        ko: "상세 설명: 사용자 친화적인 UI를 갖춘 모바일 할 일 관리 앱입니다. 할 일 추가, 수정, 삭제, 완료 표시 등 기본적인 기능을 제공합니다. Firebase를 이용하여 데이터를 실시간으로 동기화하고 사용자 인증 기능을 구현했습니다. 푸시 알림 기능을 추가하여 중요한 일정을 놓치지 않도록 지원합니다.",
                        en: "Detailed description: A mobile todo management app with a user-friendly UI. It provides basic functions such as adding, editing, deleting, and marking tasks as complete. Firebase was used to synchronize data in real-time and implement user authentication. Push notification functionality was added to help users not miss important schedules."
                    }
                },
                {
                    id: "project_blog",
                    name: { ko: "블로그 플랫폼", en: "Blog Platform" },
                    description: { ko: "개인 블로그를 생성하고 관리하는 플랫폼. Vue.js, Spring Boot 활용.", en: "Platform for creating and managing personal blogs. Utilized Vue.js, Spring Boot." },
                    technologies: ["Vue.js", "Spring Boot", "MySQL", "AWS S3"],
                    period: "2022.07 - 2022.12",
                    links: {
                        github: "https://github.com/blog-platform",
                        demo: "https://demo.blog-platform.com"
                    },
                    thumbnail: "assets/images/project_blog.png",
                    detail: {
                        ko: "상세 설명: 사용자가 자신만의 블로그를 쉽게 개설하고 포스팅을 관리할 수 있도록 지원하는 플랫폼입니다. 마크다운 에디터를 제공하여 콘텐츠 작성을 용이하게 하고, 이미지 업로드 및 관리 기능을 포함합니다. 검색 엔진 최적화(SEO)를 고려하여 설계되었으며, 방문자 통계 기능을 제공합니다.",
                        en: "Detailed description: A platform that helps users easily create their own blogs and manage posts. It provides a Markdown editor for easy content creation and includes image upload and management functions. It was designed with search engine optimization (SEO) in mind and provides visitor statistics."
                    }
                },
                {
                    id: "project_gallery",
                    name: { ko: "사진 갤러리 웹사이트", en: "Photo Gallery Website" },
                    description: { ko: "사용자가 사진을 업로드하고 공유할 수 있는 갤러리 웹사이트. PHP, Laravel 활용.", en: "Gallery website where users can upload and share photos. Utilized PHP, Laravel." },
                    technologies: ["PHP", "Laravel", "JavaScript", "SQLite"],
                    period: "2022.01 - 2022.06",
                    links: {
                        github: "https://github.com/photo-gallery",
                        demo: "https://demo.photo-gallery.com"
                    },
                    thumbnail: "assets/images/project_gallery.png",
                    detail: {
                        ko: "상세 설명: 사용자 친화적인 인터페이스를 제공하는 사진 갤러리 웹사이트입니다. 사진 업로드, 앨범 생성, 댓글 기능, 좋아요 기능 등을 구현했습니다. 이미지 처리 라이브러리를 이용하여 업로드된 사진의 크기를 자동으로 조절하고 최적화하여 로딩 속도를 개선했습니다.",
                        en: "Detailed description: A photo gallery website that provides a user-friendly interface. It implements features such as photo upload, album creation, commenting, and liking. Image processing libraries were used to automatically resize and optimize uploaded photos to improve loading speed."
                    }
                },
                {
                    id: "project_chat",
                    name: { ko: "실시간 채팅 앱", en: "Real-time Chat App" },
                    description: { ko: "웹 소켓을 이용한 실시간 채팅 애플리케이션. Socket.IO 활용.", en: "Real-time chat application using WebSockets. Utilized Socket.IO." },
                    technologies: ["Node.js", "Socket.IO", "Express.js", "MongoDB"],
                    period: "2021.07 - 2021.12",
                    links: {
                        github: "https://github.com/chat-app",
                        demo: "https://demo.chat-app.com"
                    },
                    thumbnail: "assets/images/project_chat.png",
                    detail: {
                        ko: "상세 설명: 다자간 실시간 채팅 기능을 제공하는 웹 애플리케이션입니다. 사용자 인증, 채팅방 생성 및 입장, 메시지 전송, 이모티콘 사용 등의 기능을 구현했습니다. MongoDB를 사용하여 채팅 기록을 저장하고 관리하며, 보안 강화를 위해 암호화 기술을 적용했습니다.",
                        en: "Detailed description: A web application that provides real-time multi-user chat functionality. It implements features such as user authentication, chat room creation and entry, message sending, and emoji usage. MongoDB is used to store and manage chat history, and encryption technology has been applied to enhance security."
                    }
                },
                {
                    id: "project_weather",
                    name: { ko: "날씨 정보 대시보드", en: "Weather Information Dashboard" },
                    description: { ko: "OpenWeatherMap API를 활용한 실시간 날씨 정보 대시보드. JavaScript.", en: "Real-time weather information dashboard using OpenWeatherMap API. JavaScript." },
                    technologies: ["JavaScript", "HTML", "CSS", "OpenWeatherMap API"],
                    period: "2021.01 - 2021.06",
                    links: {
                        github: "https://github.com/weather-dashboard",
                        demo: "https://demo.weather-dashboard.com"
                    },
                    thumbnail: "assets/images/project_weather.png",
                    detail: {
                        ko: "상세 설명: 현재 위치 또는 특정 도시의 날씨 정보를 실시간으로 보여주는 대시보드입니다. 온도, 습도, 풍속, 미세먼지 등 다양한 기상 정보를 시각적으로 표현하며, 5일간의 일기 예보를 제공합니다. 반응형 디자인으로 모바일에서도 편리하게 이용할 수 있도록 구현했습니다.",
                        en: "Detailed description: A dashboard that displays real-time weather information for the current location or a specific city. It visually represents various meteorological information such as temperature, humidity, wind speed, and fine dust, and provides a 5-day weather forecast. It was implemented with a responsive design to be conveniently accessible on mobile devices."
                    }
                },
                {
                    id: "project_ledger",
                    name: { ko: "가계부 웹 애플리케이션", en: "Household Ledger Web Application" },
                    description: { ko: "수입 및 지출을 기록하고 관리하는 웹 기반 가계부 앱. Django.", en: "Web-based household ledger app for recording and managing income and expenses. Django." },
                    technologies: ["Django", "Python", "HTML", "CSS", "PostgreSQL"],
                    period: "2020.07 - 2020.12",
                    links: {
                        github: "https://github.com/household-ledger",
                        demo: "https://demo.household-ledger.com"
                    },
                    thumbnail: "assets/images/project_ledger.png",
                    detail: {
                        ko: "상세 설명: 사용자가 자신의 수입과 지출 내역을 체계적으로 관리할 수 있는 웹 기반 가계부 애플리케이션입니다. 카테고리별 분류, 기간별 조회, 통계 그래프 등의 기능을 제공합니다. 예산 설정 기능을 통해 재정 관리를 돕고, 데이터를 CSV 파일로 내보내는 기능을 지원합니다.",
                        en: "Detailed description: A web-based household ledger application that allows users to systematically manage their income and expense history. It provides functions such as categorization, period-based inquiry, and statistical graphs. It helps with financial management through budget setting and supports exporting data to CSV files."
                    }
                }
            ]
        },
        skills: {
            title: { ko: "기술", en: "Skills" },
            languages: {
                name: { ko: "언어", en: "Languages" },
                items: [
                    { name: "JavaScript", level: 5 }, // 1 (초급) ~ 5 (전문가)
                    { name: "Python", level: 4 },
                    { name: "Java", level: 3 },
                    { name: "HTML5", level: 5 },
                    { name: "CSS3", level: 5 }
                ]
            },
            frontend: {
                name: { ko: "프론트엔드", en: "Frontend" },
                items: [
                    { name: "React", level: 4 },
                    { name: "Vue.js", level: 3 },
                    { name: "Sass/Less", level: 4 },
                    { name: "Responsive Design", level: 5 }
                ]
            },
            backend: {
                name: { ko: "백엔드", en: "Backend" },
                items: [
                    { name: "Node.js", level: 4 },
                    { name: "Express.js", level: 4 },
                    { name: "Spring Boot", level: 3 },
                    { name: "Django", level: 3 },
                    { name: "RESTful API", level: 5 }
                ]
            },
            databases: {
                name: { ko: "데이터베이스", en: "Databases" },
                items: [
                    { name: "MySQL", level: 4 },
                    { name: "PostgreSQL", level: 3 },
                    { name: "MongoDB", level: 3 }
                ]
            },
            tools: {
                name: { ko: "도구", en: "Tools" },
                items: [
                    { name: "Git", level: 5 },
                    { name: "Docker", level: 3 },
                    { name: "VS Code", level: 5 }
                ]
            },
            etc: {
                name: { ko: "기타", en: "Etc." },
                items: [
                    { name: "AWS S3", level: 3 },
                    { name: "CI/CD", level: 2 }
                ]
            }
        },
        research: {
            title: { ko: "연구", en: "Research" },
            items: [
                {
                    title: { ko: "딥러닝 기반 이미지 인식 기술 연구", en: "Research on Deep Learning-based Image Recognition Technology" },
                    publisher: { ko: "한국컴퓨터학회 논문지", en: "Journal of the Korea Computer Society" },
                    date: "2021.11",
                    link: "http://sol-link.com/"
                },
                {
                    title: { ko: "빅데이터 환경에서의 분산 처리 시스템 성능 분석", en: "Performance Analysis of Distributed Processing Systems in Big Data Environments" },
                    publisher: { ko: "정보과학회 논문지", en: "Journal of Korea Information Science Society" },
                    date: "2020.05",
                    link: "http://sol-link.com/"
                }
            ]
        },
        awards: {
            title: { ko: "수상/자격증", en: "Awards & Certificates" },
            items: [
                {
                    name: { ko: "소프트웨어 공모전 대상", en: "Grand Prize, Software Contest" },
                    issuer: { ko: "한국 소프트웨어 진흥원", en: "Korea Software Promotion Agency" },
                    date: "2022.08"
                },
                {
                    name: { ko: "정보처리기사 자격증", en: "Information Processing Engineer Certificate" },
                    issuer: { ko: "한국산업인력공단", en: "Human Resources Development Service of Korea" },
                    date: "2021.03"
                }
            ]
        }
    },
    footer: {
        copyright: {
            ko: "© 2025 홍길동. All Rights Reserved.",
            en: "© 2025 Gil-dong Hong. All Rights Reserved."
        }
    }
};