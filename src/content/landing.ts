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

type VisionPillar = {
  title: string;
  description: string;
};

type AboutStat = {
  label: string;
  value: string;
};

type TeamMember = {
  role: string;
  name: string;
  part: string;
};

type CurriculumTrack = {
  title: string;
  description: string;
  skills: string[];
};

type RoadmapItem = {
  month: string;
  title: string;
  detail: string;
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

export const introContent = {
  badge: "LIKELION 14TH GENERATION @ CJU",
  titleTop: "BUILD YOUR",
  titleAccent: "OWN UNIVERSE",
  description:
    "청주대학교 멋쟁이사자처럼 14기에서 실전 중심으로 기획-디자인-개발을 경험하고, 팀 프로젝트로 결과를 만드는 한 학기를 시작하세요.",
  primaryCta: {
    label: "14기 지원하러 가기",
    href: "https://forms.gle/7M8Dfxv63tGuSEJ56",
  },
  secondaryCta: {
    label: "커리큘럼 보기",
    targetId: "curriculum" as SectionId,
  },
};

export const visionContent: {
  title: string;
  subtitle: string;
  pillars: VisionPillar[];
} = {
  title: "Our Vision",
  subtitle: "아이디어를 실제 서비스로 만드는 인재를 육성합니다.",
  pillars: [
    {
      title: "Problem Solving",
      description: "문제를 정의하고 사용자 관점에서 해결책을 설계합니다.",
    },
    {
      title: "Collaboration",
      description: "기획-디자인-개발이 한 팀으로 협업하는 방식을 익힙니다.",
    },
    {
      title: "Execution",
      description: "짧은 주기로 만들고 검증하며 제품 완성도를 높입니다.",
    },
    {
      title: "Growth",
      description: "코드리뷰와 회고를 통해 개인과 팀의 성장을 추적합니다.",
    },
    {
      title: "Impact",
      description: "캠퍼스와 지역사회에 실제로 쓰이는 프로젝트를 만듭니다.",
    },
  ],
};

export const aboutContent: {
  title: string;
  description: string;
  imageUrl: string;
  stats: AboutStat[];
} = {
  title: "About LIKELION CJU",
  description:
    "청주대학교 멋쟁이사자처럼은 웹/앱 개발과 제품 사고를 중심으로 학습하는 학생 개발 커뮤니티입니다. 세션, 스터디, 프로젝트 데이를 통해 실무형 경험을 제공합니다.",
  imageUrl:
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
  stats: [
    { label: "Active Members", value: "40+" },
    { label: "Team Projects", value: "10+" },
    { label: "Weekly Sessions", value: "12" },
  ],
};

export const teamContent: {
  title: string;
  description: string;
  members: TeamMember[];
} = {
  title: "Operating Team",
  description: "14기의 운영을 함께 만드는 파트 리더와 운영진입니다.",
  members: [
    { role: "대표", name: "김은성", part: "Overall" },
    { role: "운영", name: "김정우", part: "Operation" },
    { role: "프론트", name: "박서연", part: "Frontend" },
    { role: "백엔드", name: "이도현", part: "Backend" },
    { role: "기획/디자인", name: "정유진", part: "Product" },
    { role: "브랜딩", name: "최민지", part: "Brand" },
  ],
};

export const curriculumContent: {
  title: string;
  tracks: CurriculumTrack[];
} = {
  title: "Curriculum",
  tracks: [
    {
      title: "Web Foundation",
      description: "HTML/CSS/JavaScript와 반응형 UI 기본기",
      skills: ["Semantic HTML", "Tailwind", "Accessibility"],
    },
    {
      title: "Frontend Development",
      description: "React 기반 컴포넌트 설계와 상태 관리",
      skills: ["React", "TypeScript", "State Flow"],
    },
    {
      title: "Backend Development",
      description: "API 설계, 데이터 모델링, 인증 기본",
      skills: ["REST API", "DB Modeling", "Auth"],
    },
    {
      title: "Product Thinking",
      description: "문제 정의부터 검증까지 제품 중심 접근",
      skills: ["User Story", "MVP", "Experiment"],
    },
    {
      title: "Deployment",
      description: "배포 파이프라인과 협업 워크플로우",
      skills: ["CI/CD", "GitHub", "Monitoring"],
    },
    {
      title: "Team Project",
      description: "팀 단위로 서비스 기획/구현/발표",
      skills: ["Sprint", "Code Review", "Demo Day"],
    },
  ],
};

export const roadmapContent: {
  title: string;
  items: RoadmapItem[];
} = {
  title: "Roadmap",
  items: [
    { month: "03", title: "Recruiting", detail: "지원서 접수 및 인터뷰" },
    { month: "04", title: "Bootcamp", detail: "기초 세션 및 스터디 시작" },
    { month: "05", title: "Build", detail: "트랙별 실습 및 미니 프로젝트" },
    { month: "06", title: "Team Sprint", detail: "팀 프로젝트 스프린트" },
    { month: "07", title: "Demo Day", detail: "최종 발표 및 회고" },
  ],
};

export const applyContent = {
  title: "Apply Now",
  description:
    "14기 모집은 제한 인원으로 진행됩니다. 아래 버튼에서 지원서를 제출해주세요.",
  period: "모집 기간: 2026.03.04 - 2026.03.17",
  ctaLabel: "14기 지원하러 가기",
  ctaHref: "https://forms.gle/7M8Dfxv63tGuSEJ56",
};

export const socialLinks: SocialLink[] = [
  { label: "Instagram", href: "#" },
  { label: "GitHub", href: "#" },
  { label: "Notion", href: "#" },
];
