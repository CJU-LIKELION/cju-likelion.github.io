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
