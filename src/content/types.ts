export interface Profile {
  name: string;
  role: string;
  tagline: string;
  location: string;
  /** university name — used across metadata, JSON-LD, OG image & education */
  university: string;
  email: string;
  currently: string;
  /** short availability line for the hero meta row */
  availabilityShort: string;
  socials: { github: string; linkedin: string; scholar?: string };
  resumeUrl: string;
}

export interface ExperienceItem {
  role: string;
  org: string;
  location?: string;
  period: string;
  bullets: string[];
  stack?: string[];
}

export interface Certificate {
  name: string;
  issuer: string;
  date: string;
  url?: string;
  credentialId?: string;
}

export interface Thesis {
  label: string;
  title: string;
  institution: string;
  partner?: string;
  period: string;
  status: string;
  summary: string;
  methods: string[];
}

export interface EducationItem {
  credential: string;
  org: string;
  location?: string;
  period: string;
  bullets: string[];
}

export interface ProjectResult {
  metric: string;
  value: string;
  note?: string;
}

export interface ProjectDetail {
  overview: string;
  context: string;
  methodology: { step: string; detail: string }[];
  results: ProjectResult[];
  reflection: string;
  stack: string[];
}

export interface Project {
  slug: string;
  title: string;
  summary: string;
  problem: string;
  approach: string;
  result: string;
  impact: string;
  tags: string[];
  repo?: string;
  demo?: string;
  chart: number[];
  chartLabel: string;
  /** the one project that renders the interactive classification explorer */
  interactive?: boolean;
  detail: ProjectDetail;
}

export interface SkillGroup {
  title: string;
  skills: string[];
}

export interface UIStrings {
  nav: {
    work: string;
    education: string;
    experience: string;
    skills: string;
    about: string;
    contact: string;
    cv: string;
    downloadCv: string;
    menu: string;
    close: string;
  };
  hero: {
    viewWork: string;
    getInTouch: string;
  };
  sections: {
    workIndex: string;
    workTitle: string;
    workLead: string;
    educationIndex: string;
    educationTitle: string;
    educationLead: string;
    experienceIndex: string;
    experienceTitle: string;
    experienceLead: string;
    certificatesTitle: string;
    skillsIndex: string;
    skillsTitle: string;
    skillsLead: string;
    aboutIndex: string;
    aboutTitle: string;
    contactIndex: string;
    contactTitle: string;
    contactLead: string;
  };
  project: {
    problem: string;
    approach: string;
    result: string;
    impact: string;
    code: string;
    liveDemo: string;
    readCaseStudy: string;
    backToAll: string;
    overview: string;
    context: string;
    methodology: string;
    results: string;
    reflection: string;
    stack: string;
    illustrative: string;
  };
  explorer: {
    title: string;
    intro: string;
    threshold: string;
    sensitivity: string;
    specificity: string;
    precision: string;
    flagged: string;
    truePos: string;
    falsePos: string;
    trueNeg: string;
    falseNeg: string;
    tableCaption: string;
    metric: string;
    count: string;
    negatives: string;
    positives: string;
  };
  thesisCard: { institution: string; status: string; methods: string };
  about: { philosophyPull: string; fullCv: string };
  contact: { email: string; linkedin: string; github: string };
  footer: { builtWith: string; backToTop: string };
  thesisNav: string;
  currentBadge: string;
}

export interface Content {
  profile: Profile;
  ui: UIStrings;
  about: { paragraphs: string[] };
  education: EducationItem[];
  experience?: ExperienceItem[];
  certifications?: Certificate[];
  thesis?: Thesis;
  projects: Project[];
  skillGroups: SkillGroup[];
}
