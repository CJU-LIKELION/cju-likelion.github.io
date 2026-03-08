export type SectionId =
  | "intro"
  | "vision"
  | "about"
  | "class"
  | "curriculum"
  | "roadmap"
  | "apply";

export type NavigationItem = {
  id: SectionId;
  label: string;
};

export type VisionPillarLabel = "Connection" | "Exploration" | "Synergy" | "Creation";

type IntroContent = {
  badge: string;
  titleTop: string;
  titleAccent: string;
  descriptionTop: string;
  descriptionBottom: string;
  backgroundImage: string;
  primaryCta: {
    label: string;
    targetId: SectionId;
  };
};

type VisionContent = {
  label: string;
  titleTop: string;
  titleAccent: string;
  pillars: Array<{
    label: VisionPillarLabel;
    desc: string;
  }>;
};

type AboutContent = {
  label: string;
  titleTop: string;
  titleAccent: string;
  imageUrl: string;
  imageAlt: string;
  paragraphs: string[];
  stats: Array<{
    value: string;
    label: string;
  }>;
};

type CurriculumContent = {
  label: string;
  titleTop: string;
  titleAccent: string;
  groups: Array<{
    name: string;
    subtitle: string;
    items: Array<{
      title: string;
      desc: string;
    }>;
  }>;
};

type RoadmapContent = {
  label: string;
  titleTop: string;
  titleAccent: string;
  items: Array<{
    period: string;
    title: string;
    color: string;
    items: string[];
  }>;
};

type CupToLionContent = {
  label: string;
  titleTop: string;
  titleAccent: string;
  descriptionTop: string;
  descriptionBottom: string;
  steps: Array<{
    step: string;
    title: string;
    desc: string;
    color: string;
    icon: "search" | "shuffle" | "package";
  }>;
};

type ApplyContent = {
  recruitLabel: string;
  titleTop: string;
  titleAccent: string;
  ctaLabel: string;
  ctaHref: string;
  period: string;
};

type SocialLink = {
  label: string;
  href: string;
};

export const navigationItems: NavigationItem[] = [
  { id: "intro", label: "Home" },
  { id: "vision", label: "Vision" },
  { id: "about", label: "About" },
  { id: "class", label: "Class" },
  { id: "curriculum", label: "Curriculum" },
  { id: "roadmap", label: "Schedule" },
  { id: "apply", label: "Apply" },
];

export const sectionOrder: SectionId[] = [
  "intro",
  "vision",
  "about",
  "class",
  "curriculum",
  "roadmap",
  "apply",
];

export const introContent: IntroContent = {
  badge: "LIKELION 14TH GENERATION WITH CJU",
  titleTop: "BUILD YOUR",
  titleAccent: "OWN UNIVERSE",
  descriptionTop: "\"당신의 상상, 세상 밖으로!\"",
  descriptionBottom: "전국 80여개 대학이 함께하는 국내 최대 규모 IT 창업 동아리",
  backgroundImage:
    `${import.meta.env.BASE_URL}images/hackathon_12th_3.png`,
  primaryCta: {
    label: "지금 신청하기",
    targetId: "apply" as SectionId,
  },
};

export const visionContent: VisionContent = {
  label: "Our Vision",
  titleTop: "소통으로 하나 되어,",
  titleAccent: "함께 만들어가는 가능성",
  pillars: [
    { label: "Connection", desc: "다양한 전공과 배경을 가진 아기사자들이 만나 서로의 생각과 경험을 나누며 새로운 가능성을 발견하는 연결의 장을 만듭니다." },
    { label: "Exploration", desc: "기존 서비스 분석과 아이디어 탐색 활동을 통해 다양한 문제를 바라보고 새로운 관점과 해결 방식을 탐구합니다." },
    { label: "Synergy", desc: "서로 다른 생각과 능력이 만나 혼자서는 만들 수 없는 새로운 결과를 만들어냅니다." },
    { label: "Creation", desc: "아이디어를 실제 프로덕트로 구현해보는 과정을 통해 실행 중심의 경험을 쌓고 해커톤과 프로젝트에 도전할 수 있는 기반을 만듭니다." },
  ],
};

export const aboutContent: AboutContent = {
  label: "About Us",
  titleTop: "청주대학교",
  titleAccent: "멋쟁이사자처럼",
  imageUrl: `${import.meta.env.BASE_URL}images/cju_likelion_group_photo.jpg`,
  imageAlt: "Team Collaboration",
  paragraphs: [
    "\"머리 속 상상을 현실로 만들어내는 경험\"을 돕는 것이 청대멋사의 목표입니다.",
    "14기에서는 프론트엔드, 백엔드, 기획/디자인 트랙으로 나뉘어 체계적인 스터디를 진행하며, 중앙 해커톤, 아이디어톤, 연합 해커톤 등 다양한 활동에 참여합니다.",
    "청대멋사만의 활동인 \"Cup To Lion\"으로 아기사자들의 성장을 돕습니다.",
  ],
  stats: [
    { value: "80+", label: "전국 참여 대학" },
    { value: "2,000+", label: "전국 활동 멤버" },
    { value: "13", label: "역대 기수" },
    { value: "∞", label: "무한한 가능성" },
  ],
};

export const curriculumContent: CurriculumContent = {
  label: "Original Class",
  titleTop: "CJU",
  titleAccent: "CURRICULUM",
  groups: [
    {
      name: "프론트엔드",
      subtitle: "Frontend Track",
      items: [
        {
          title: "HTML/CSS & JS",
          desc: "웹의 기초가 되는 마크업 언어와 스타일링, 그리고 자바스크립트 핵심 개념을 학습합니다.",
        },
        {
          title: "React & Frontend",
          desc: "컴포넌트 기반 UI 개발, 상태 관리, SPA 구축 등 현대적인 프론트엔드 기술을 익힙니다.",
        },
      ],
    },
    {
      name: "백엔드",
      subtitle: "Backend Track",
      items: [
        {
          title: "Spring Boot",
          desc: "Java와 Spring Boot를 활용한 서버 개발을 학습합니다. API 설계, 데이터베이스, JPA까지 백엔드 전반을 학습합니다.",
        },
        {
          title: "Database & API",
          desc: "데이터 모델링, RESTful API 설계 및 연동을 통해 데이터 흐름을 이해합니다.",
        },
      ],
    },
    {
      name: "기획/디자인",
      subtitle: "Product Design Track",
      items: [
        {
          title: "UI/UX Design",
          desc: "사용자 경험을 고려한 인터페이스 설계와 Figma를 활용한 프로토타이핑을 진행합니다.",
        },
        {
          title: "AI Convergence",
          desc: "ChatGPT API 등 생성형 AI 기술을 프로젝트에 접목하여 혁신적인 서비스를 개발합니다.",
        },
      ],
    },
  ],
};

export const roadmapContent: RoadmapContent = {
  label: "Annual Schedule",
  titleTop: "14TH",
  titleAccent: "ROADMAP",
  items: [
    {
      period: "2월 ~ 3월",
      title: "The Beginning",
      color: "#4ADE80",
      items: [
        "14기 아기사자 모집 및 선발",
        "오리엔테이션 (OT) & 리더십 트레이닝",
        "PBL 스터디 자료 배포",
      ],
    },
    {
      period: "3월 ~ 6월",
      title: "Growth",
      color: "#60A5FA",
      items: [
        "학교별 트랙 스터디 진행",
        "Front-end / Back-end / 기획 / 디자인",
        "기초 역량 강화 및 미니 프로젝트",
      ],
    },
    {
      period: "5월",
      title: "Ideathon",
      color: "#FBBF24",
      items: ["아이디어 해커톤", "팀 빌딩 및 아이디어 구체화", "현직자 멘토링"],
    },
    {
      period: "7월 ~ 8월",
      title: "Hackathon",
      color: "#FF4D00",
      items: ["무박 2일 중앙 해커톤", "여름방학 집중 개발 기간", "실전 서비스 배포 경험"],
    },
    {
      period: "9월 ~ 12월",
      title: "Expansion",
      color: "#A78BFA",
      items: ["권역별 해커톤 (충청권)", "최종 성과 공유회 (Demoday)"],
    },
  ],
};

export const cupToLionContent: CupToLionContent = {
  label: "Original Curriculum",
  titleTop: "CUP TO",
  titleAccent: "LION",
  descriptionTop: "총 3가지의 Step으로 이루어진 청주대학교 멋쟁이사자처럼만의 자체 커리큘럼입니다.",
  descriptionBottom:
    "분석부터 아이디어 구조화, 미니 프로덕트 구현까지 단계적으로 경험하며 해커톤을 준비하는 청주대학교 멋쟁이사자처럼만의 성장 커리큘럼입니다.",
  steps: [
    {
      step: "Step 1",
      title: "실제 앱 분석 및 연구",
      desc: "출시된 앱들을 다양한 관점으로 분석하고 공유합니다.",
      color: "#4ADE80",
      icon: "search",
    },
    {
      step: "Step 2",
      title: "랜덤 아이디어 구조화",
      desc: "랜덤으로 주어진 주제에 맞게 아이디어를 구조화합니다.",
      color: "#60A5FA",
      icon: "shuffle",
    },
    {
      step: "Step 3",
      title: "미니 Product 구현",
      desc: "Step 1, Step 2를 기반으로 미니 Product를 구현합니다.",
      color: "#FF8C00",
      icon: "package",
    },
  ],
};

export const applyContent: ApplyContent = {
  recruitLabel: "Now Recruiting",
  titleTop: "JOIN",
  titleAccent: "US",
  ctaLabel: "14기 지원하러 가기",
  ctaHref: "https://forms.gle/7M8Dfxv63tGuSEJ56",
  period: "모집 기간: 2026.03.02 ~ 2026.03.14",
};

export const socialLinks: SocialLink[] = [
  { label: "Instagram", href: "https://www.instagram.com/likelion_cju/" },
  { label: "Github", href: "https://github.com/CJU-LIKELION" },
];
