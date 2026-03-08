export type SectionId =
  | "intro"
  | "vision"
  | "about"
  | "team"
  | "curriculum"
  | "roadmap"
  | "apply";

export type NavigationItem = {
  id: SectionId;
  label: string;
};

type IntroContent = {
  badge: string;
  titleTop: string;
  titleAccent: string;
  descriptionTop: string;
  descriptionStrong: string;
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
    label: string;
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

type TeamContent = {
  label: string;
  titleTop: string;
  titleAccent: string;
  subtitle: string;
  leaders: Array<{
    name: string;
    role: string;
    desc: string;
  }>;
  departments: Array<{
    name: string;
    members: Array<{
      name: string;
      desc: string;
    }>;
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
  { id: "team", label: "Team" },
  { id: "curriculum", label: "Class" },
  { id: "roadmap", label: "Schedule" },
  { id: "apply", label: "Apply" },
];

export const sectionOrder: SectionId[] = navigationItems.map((item) => item.id);

export const introContent: IntroContent = {
  badge: "LIKELION 14TH GENERATION @ CJU",
  titleTop: "BUILD YOUR",
  titleAccent: "OWN UNIVERSE",
  descriptionTop: "가능성을 현실로, 13기를 넘어 14기로.",
  descriptionStrong: "청주대학교 멋쟁이사자처럼",
  descriptionBottom: "이 14기 아기사자를 기다립니다.",
  backgroundImage:
    "https://images.unsplash.com/photo-1738255654134-1877cb984a8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwY29kaW5nJTIwbGFwdG9wJTIwc2NyZWVuJTIwcHJvZ3JhbW1pbmd8ZW58MXx8fHwxNzcyMjk3NDU0fDA&ixlib=rb-4.1.0&q=80&w=1080",
  primaryCta: {
    label: "Apply Now",
    targetId: "apply" as SectionId,
  },
};

export const visionContent: VisionContent = {
  label: "Our Vision",
  titleTop: "함께 자라나는 즐거움,",
  titleAccent: "실패를 두려워하지 않는 도전",
  pillars: [
    { label: "Discover", desc: "나만의 가능성을\n발견하세요" },
    { label: "Learn", desc: "체계적인 커리큘럼으로\n성장하세요" },
    { label: "Share", desc: "지식과 경험을\n공유하세요" },
    { label: "Build", desc: "아이디어를\n현실로 만드세요" },
    { label: "Impact", desc: "세상을 바꾸는\n임팩트를 만드세요" },
  ],
};

export const aboutContent: AboutContent = {
  label: "About Us",
  titleTop: "청주대학교",
  titleAccent: "멋쟁이사자처럼",
  imageUrl:
    "https://images.unsplash.com/photo-1646579886741-12b59840c63f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwc3R1ZGVudHMlMjB0ZWFtJTIwY29sbGFib3JhdGlvbiUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NzIyOTc0NTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
  imageAlt: "Team Collaboration",
  paragraphs: [
    "멋쟁이사자처럼 대학은 전국 70개 대학이 함께하는 AI/IT 연합 동아리입니다.",
    "IT와 AI에 대한 관심을 나누고, 함께 소통하며 성장합니다. 코딩이 처음인 분도, 이미 경험이 있는 분도 모두 환영합니다. 우리는 함께 배우고, 함께 만들고, 함께 성장하는 커뮤니티입니다.",
    "14기에서는 프론트엔드, 백엔드, 기획/디자인 트랙으로 나뉘어 체계적인 스터디를 진행하며, 중앙 해커톤, 아이디어톤, 연합 해커톤 등 다양한 활동에 참여합니다.",
  ],
  stats: [
    { value: "70+", label: "전국 참여 대학" },
    { value: "5,000+", label: "전국 활동 멤버" },
    { value: "13", label: "역대 기수" },
    { value: "∞", label: "무한한 가능성" },
  ],
};

export const teamContent: TeamContent = {
  label: "Operating Staff",
  titleTop: "14TH",
  titleAccent: "CREW",
  subtitle: "청주대학교 멋쟁이사자처럼 14기를 이끌어갈 운영진을 소개합니다.",
  leaders: [
    { name: "김재영", role: "대표", desc: "14기 방향성 제시 및 전체 운영 총괄" },
    { name: "문태희", role: "부대표", desc: "각 부서 활동 관리 및 내부 운영 지원" },
  ],
  departments: [
    {
      name: "학술부",
      members: [
        { name: "조완수", desc: "정기 세션 및 커리큘럼 로드맵 관리·아기사자 학습 자료 검토" },
        { name: "고성노", desc: "정기 세션 및 공식 GitHub 운영, 과제 관리·기술 멘토링 총괄" },
      ],
    },
    {
      name: "기획부",
      members: [
        { name: "박세령", desc: "동아리 행사 및 프로젝트 전략 기획•운영 총괄" },
        { name: "홍지우", desc: "동아리 핵심 행사 기획 총괄 및 프로젝트 기획 리드" },
      ],
    },
    {
      name: "홍보부",
      members: [
        { name: "서우진", desc: "홍보 콘텐츠 기획 및 제작 총괄" },
        { name: "전예원", desc: "홍보 콘텐츠 기획 및 SNS 채널 운영" },
      ],
    },
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
          title: "Python & Django",
          desc: "파이썬 기초부터 장고 프레임워크를 활용한 백엔드 서버 구축 과정을 다룹니다.",
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
      items: ["무박 2일 아이디어 해커톤", "팀 빌딩 및 아이디어 구체화", "현직자 멘토링"],
    },
    {
      period: "7월 ~ 8월",
      title: "Hackathon",
      color: "#FF4D00",
      items: ["중앙 해커톤", "여름방학 집중 개발 기간", "실전 서비스 배포 경험"],
    },
    {
      period: "9월 ~ 12월",
      title: "Expansion",
      color: "#A78BFA",
      items: ["연합 해커톤 (충청권)", "기업 연계 프로젝트", "최종 성과 공유회 (Demoday)"],
    },
  ],
};

export const applyContent: ApplyContent = {
  recruitLabel: "Now Recruiting",
  titleTop: "JOIN",
  titleAccent: "US",
  ctaLabel: "14기 지원하러 가기",
  ctaHref: "https://forms.gle/7M8Dfxv63tGuSEJ56",
  period: "모집 기간: 2026.03.02 ~ 2026.03.09",
};

export const socialLinks: SocialLink[] = [
  { label: "Instagram", href: "#" },
  { label: "Globe", href: "#" },
  { label: "Github", href: "#" },
];
