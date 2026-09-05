import type { Content } from "./types";

/* ------------------------------------------------------------------ */
/*  ENGLISH CONTENT — single source of truth.                          */
/*  Replace any "TODO:" with a real figure, repo link or dataset name. */
/*  Keep de.ts in the same shape.                                      */
/* ------------------------------------------------------------------ */

const UNIVERSITY = "SRH University"; // campus: Fürth

export const en: Content = {
  profile: {
    name: "Jahnnobi Talukdar",
    role: "Digital Health & Data Science",
    tagline: `MSc student in Digital Health & Data Science at ${UNIVERSITY}, Fürth. I turn clinical data and machine learning into dashboards and tools people can actually use.`,
    location: "Nuremberg, Germany",
    university: UNIVERSITY,
    email: "jahnnobit@gmail.com",
    currently:
      "Master's thesis in progress — eligible to work 20 h/week now, open to a full-time start in 2026.",
    availabilityShort: "Open to working-student & full-time roles",
    socials: {
      github: "https://github.com/jahnnobit",
      linkedin: "https://www.linkedin.com/in/jahnnobi-talukdar",
      scholar: "",
    },
    resumeUrl: "/Jahnnobi_resume.pdf",
  },

  ui: {
    nav: {
      work: "Work",
      education: "Education",
      experience: "Experience",
      skills: "Skills",
      about: "About",
      contact: "Contact",
      cv: "CV",
      downloadCv: "Download CV",
      menu: "Open menu",
      close: "Close menu",
    },
    hero: {
      viewWork: "View selected work",
      getInTouch: "Get in touch",
    },
    sections: {
      workIndex: "01 / Work",
      workTitle: "Selected work",
      workLead:
        "Four projects across health analytics, machine learning and data apps — from a diagnostic dashboard to a deployed ML tool. Each links to a full case study.",
      educationIndex: "02 / Education",
      educationTitle: "Education",
      educationLead:
        "Two degrees behind the move into health data — a life-sciences foundation first, then digital health and data science.",
      experienceIndex: "03 / Experience",
      experienceTitle: "Experience",
      experienceLead:
        "Hands-on data work outside the classroom, plus the certifications backing it up.",
      certificatesTitle: "Certificates",
      skillsIndex: "04 / Skills",
      skillsTitle: "What I bring",
      skillsLead:
        "The data-science craft, plus the health-domain and life-sciences background that makes it usable in a clinical setting.",
      aboutIndex: "05 / About",
      aboutTitle: "About",
      contactIndex: "06 / Contact",
      contactTitle: "Let's talk about health data",
      contactLead:
        "If your team works on clinical data, digital health, diagnostics or health analytics — as a working student or a 2026 graduate hire — I'd like to hear about it.",
    },
    project: {
      problem: "Problem",
      approach: "Approach",
      result: "Result",
      impact: "Impact",
      code: "Code",
      liveDemo: "Live demo",
      readCaseStudy: "Read the case study",
      backToAll: "All work",
      overview: "Overview",
      context: "Context",
      methodology: "Methodology",
      results: "Results",
      reflection: "What I took from it",
      stack: "Stack",
      illustrative: "Illustrative — see the case study for real figures",
    },
    explorer: {
      title: "Interactive: the malignant / benign decision threshold",
      intro:
        "A classifier outputs a probability, not a verdict — someone still picks the cut-off that decides which samples are flagged for biopsy. Move the threshold and watch sensitivity trade against specificity on this illustrative set of 1,000 tumour samples.",
      threshold: "Decision threshold",
      sensitivity: "Sensitivity (recall)",
      specificity: "Specificity",
      precision: "Precision (PPV)",
      flagged: "Samples flagged as malignant",
      truePos: "Correctly flagged malignant",
      falsePos: "False alarms (benign flagged)",
      trueNeg: "Correctly cleared benign",
      falseNeg: "Missed malignancies",
      tableCaption: "Confusion matrix at the selected threshold",
      metric: "Outcome",
      count: "Count",
      negatives: "Benign",
      positives: "Malignant",
    },
    thesisCard: {
      institution: "Institution",
      status: "Status",
      methods: "Methods",
    },
    about: {
      philosophyPull: "A model is only useful if someone can act on it.",
      fullCv: "Full CV (PDF)",
    },
    contact: {
      email: "Email",
      linkedin: "LinkedIn",
      github: "GitHub",
    },
    footer: {
      builtWith: "Built with Next.js.",
      backToTop: "Back to top",
    },
    thesisNav: "Thesis",
    currentBadge: "Current",
  },

  about: {
    paragraphs: [
      "Master's student in Digital Health & Data Science with a foundation in biotechnology and healthcare analytics. I work across clinical data analysis, machine learning, and interactive dashboards — with a structured, well-documented working style.",
      "My life-sciences background shapes how I approach health data: I care about what a result means clinically, not only whether a model scores well. My interests are health informatics, digital-health systems, and making analysis usable for the people who act on it.",
    ],
  },

  education: [
    {
      credential: "MSc Digital Health & Data Science",
      org: "SRH University",
      location: "Fürth, Germany",
      period: "Oct 2024 — Present",
      bullets: [
        "Healthcare analytics, AI in healthcare, and digital-health regulation within the German healthcare system.",
        "Hands-on projects in clinical data analysis and dashboard development.",
        "Working knowledge of EHR / EMR systems and data protection (GDPR).",
      ],
    },
    {
      credential: "BSc Biochemistry, Biotechnology & Genetics",
      org: "JAIN (Deemed-to-be University)",
      location: "Bengaluru, India",
      period: "Sep 2021 — Jun 2024",
      bullets: [
        "Life-sciences foundation with hands-on laboratory and diagnostic research.",
        "Clinical microbiology, diagnostic testing, and antimicrobial-resistance studies.",
      ],
    },
  ],

  experience: [
    {
      role: "Data Analyst Intern",
      org: "Brokenedge Sdn Bhd",
      location: "Remote",
      period: "Jan 2025 — Jan 2026",
      bullets: [
        "Collected, cleaned, and preprocessed structured and unstructured datasets using Python (Pandas, NumPy) to support internal reporting and data-driven decision-making; performed exploratory data analysis (EDA) to surface trends, patterns, and anomalies across campaign and operational data.",
        "Designed and built dashboards and visualizations using Matplotlib and Seaborn to communicate key metrics to stakeholders; maintained data accuracy and consistency across reporting pipelines through regular quality checks.",
        "Wrote Python scripts to automate recurring data extraction, transformation, and monthly reporting workflows, reducing manual reporting time.",
        "Analyzed campaign and performance data to generate actionable insights presented to the strategy team; collaborated cross-functionally with marketing and strategy teams to translate business questions into analysis tasks.",
      ],
      stack: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
    },
  ],

  certifications: [
    {
      name: "Hands-on Training on Cancer Cell Culture Techniques",
      issuer: "Protein Design Private Limited",
      date: "Dec 2022",
    },
    {
      name: "Systems Biology Approach to Drug Discovery",
      issuer: "MSME, Government of India",
      date: "Jun 2023",
    },
    {
      name: "Artificial Intelligence and Machine Learning Approaches for Drug and Vaccine Design",
      issuer: "MSME, Government of India",
      date: "Jan 2024",
    },
    {
      name: "Data Science using Python — Internship Completion Certificate",
      issuer: "Soft Nexis Technology",
      date: "Jun 2026",
      credentialId: "SN1000796",
    },
  ],

  // Fill this in once your thesis topic is set — the section renders it automatically.
  // thesis: { label, title, institution, partner, period, status, summary, methods },

  projects: [
    {
      slug: "breast-cancer-dashboard",
      title: "Breast cancer analysis dashboard",
      summary:
        "An interactive Plotly Dash dashboard that separates malignant from benign tumours and makes the model's reasoning inspectable.",
      problem:
        "A classifier that only outputs a label gives a clinician nothing to check. The useful artefact shows which features drove the call and where the model is unsure.",
      approach:
        "Trained a classifier on diagnostic tumour features, then built a Plotly Dash app: feature distributions by class, an adjustable decision threshold, and per-sample explanations.",
      result:
        "A single screen where a reviewer can explore the data, move the malignant/benign cut-off, and see the sensitivity–specificity trade-off it creates.",
      impact:
        "Turns a black-box score into something a quality reviewer can interrogate — the shape a diagnostic support tool needs to be trusted.",
      tags: ["Python", "Plotly Dash", "scikit-learn", "data visualisation"],
      repo: "https://github.com/jahnnobit", // TODO: link the specific repo
      chart: [40, 52, 49, 63, 58, 71, 68, 79, 84, 90],
      chartLabel: "Validation accuracy over training",
      interactive: true,
      detail: {
        overview:
          "A diagnostic dashboard that classifies breast tumours as malignant or benign and, more importantly, lets a reviewer see why — feature by feature — and choose the operating point that matches the clinical cost of a miss.",
        context:
          "In screening, a false negative (a missed malignancy) and a false positive (an unnecessary biopsy) are not equally bad, and the balance is a clinical decision, not a modelling one. A tool that hides the threshold hides the most important choice.",
        methodology: [
          {
            step: "Data & features",
            detail:
              "Used a diagnostic tumour dataset of cell-nucleus measurements from fine-needle aspirate images (TODO: confirm dataset — e.g. Wisconsin Diagnostic Breast Cancer).",
          },
          {
            step: "Model",
            detail:
              "Trained and compared standard classifiers (logistic regression, random forest, SVM) with cross-validation; kept the one that held accuracy without over-fitting.",
          },
          {
            step: "Dashboard",
            detail:
              "Built with Plotly Dash: class-conditioned feature distributions, a live decision-threshold slider, and a confusion-matrix / metrics panel that updates as you move it.",
          },
          {
            step: "Explanation",
            detail:
              "Per-sample feature contributions so a reviewer can see which measurements pushed a given tumour toward malignant.",
          },
        ],
        results: [
          { metric: "Validation accuracy", value: "TODO %" },
          { metric: "Sensitivity at the chosen threshold", value: "TODO %" },
          {
            metric: "Interface",
            value: "One screen, no code needed",
          },
        ],
        reflection:
          "Building the threshold slider changed how I thought about the project. The model was the easy part; the honest question is where you draw the line and who you accept missing — and that belongs to the clinician, not the classifier.",
        stack: ["Python", "pandas", "scikit-learn", "Plotly Dash", "Plotly"],
      },
    },
    {
      slug: "appointment-no-show-eda",
      title: "Medical appointment no-show — EDA",
      summary:
        "An exploratory analysis of why patients miss appointments, and where a patient-management system could intervene.",
      problem:
        "No-shows waste clinical capacity and delay care. Before building a predictor, you need to know which factors actually move the no-show rate.",
      approach:
        "Cleaned a large appointments dataset, engineered features (lead time, prior no-shows, SMS reminder, day of week, age), and analysed no-show rate against each — with clear visualisations and documented caveats.",
      result:
        "A clear picture of the drivers: longer lead times and a history of missed appointments dominate; reminders help but don't erase the effect.",
      impact:
        "Maps the points in the patient journey — booking, reminder, follow-up — where a management system could realistically cut the no-show rate.",
      tags: ["Python", "pandas", "EDA", "data visualisation"],
      repo: "https://github.com/jahnnobit", // TODO
      chart: [30, 44, 40, 55, 60, 52, 66, 70, 74, 80],
      chartLabel: "Features analysed",
      detail: {
        overview:
          "An end-to-end exploratory analysis of appointment no-shows: clean the data, find what correlates with a missed appointment, and translate that into where a patient-management system should act.",
        context:
          "A no-show predictor is only worth building if there is signal and if the drivers are things a clinic can influence. That is an EDA question, and skipping it is how teams end up shipping a model nobody can act on.",
        methodology: [
          {
            step: "Cleaning",
            detail:
              "Handled invalid ages, parsed timestamps, derived the lead time between booking and appointment, and removed leakage columns.",
          },
          {
            step: "Feature analysis",
            detail:
              "No-show rate broken down by lead time, prior no-show history, SMS reminder, age band, weekday, and neighbourhood.",
          },
          {
            step: "Visualisation",
            detail:
              "Each relationship shown as a clear chart with the sample size visible, plus a written note on what is and isn't causal.",
          },
        ],
        results: [
          { metric: "Records analysed", value: "TODO (e.g. ~110k)" },
          {
            metric: "Strongest driver",
            value: "Lead time + prior no-shows",
          },
          { metric: "Reminder effect", value: "Helps, doesn't remove it" },
        ],
        reflection:
          "The most useful output wasn't a chart — it was the list of drivers a clinic can actually change. That framing is what makes an analysis land with a non-technical audience.",
        stack: ["Python", "pandas", "NumPy", "Matplotlib", "seaborn"],
      },
    },
    {
      slug: "skincare-web-app",
      title: "Skincare web application",
      summary:
        "A Flask web app that delivers personalised skincare and digital-health content through a clean, guided interface.",
      problem:
        "Health content is only useful if people engage with it. Generic advice pages don't; a guided, personalised flow does.",
      approach:
        "Built a Flask application with a simple intake flow, rule-based personalisation of the content shown, and an interface designed to keep the user moving through it.",
      result:
        "A working app that takes a few inputs and returns a tailored set of recommendations and explanations.",
      impact:
        "A small study in engagement-first digital-health design — the interface and content strategy matter as much as the logic behind them.",
      tags: ["Python", "Flask", "web application", "UI design"],
      repo: "https://github.com/jahnnobit", // TODO
      demo: "", // TODO: add a deployed URL if there is one
      chart: [20, 35, 45, 42, 58, 64, 60, 72, 78, 85],
      chartLabel: "Build progress",
      detail: {
        overview:
          "A Flask web application that gives users personalised skincare guidance through a short guided flow, built to test how interface and content design affect whether people actually follow health advice.",
        context:
          "Digital-health products live or die on engagement. The interesting work here was less the backend and more the flow: how many questions before it feels worth it, how to present a recommendation so it's trusted and acted on.",
        methodology: [
          {
            step: "Application",
            detail:
              "Flask backend with routing, a templated frontend, and a short structured intake form.",
          },
          {
            step: "Personalisation",
            detail:
              "Rule-based logic mapping the user's inputs to a tailored content set, with each recommendation given a short 'why'.",
          },
          {
            step: "Interface",
            detail:
              "Designed the flow to reduce drop-off — minimal steps, clear progress, plain-language output.",
          },
        ],
        results: [
          { metric: "Stack", value: "Flask, Jinja templates" },
          { metric: "Flow", value: "Intake → personalised output" },
          { metric: "Focus", value: "Engagement and clarity" },
        ],
        reflection:
          "This project made the case that in digital health, the interface is part of the intervention. A correct recommendation that no one reads changes nothing.",
        stack: ["Python", "Flask", "Jinja", "HTML/CSS"],
      },
    },
    {
      slug: "german-real-estate-predictor",
      title: "German real-estate price predictor",
      summary:
        "A full-stack ML app that predicts and compares housing prices across German cities, deployed with Streamlit.",
      problem:
        "Property comparisons across cities are hard to reason about without a model that holds the other variables constant.",
      approach:
        "Built a regression model on housing features, wrapped it in a Streamlit app with interactive city-by-city comparison, and used Git LFS to version the data and model artefacts.",
      result:
        "An interactive tool where a user picks parameters and sees predicted prices and comparisons across cities side by side.",
      impact:
        "An end-to-end proof: data to trained model to a deployed, usable interface — the full path, not just a notebook.",
      tags: ["Python", "scikit-learn", "Streamlit", "Git LFS"],
      repo: "https://github.com/jahnnobit", // TODO
      demo: "", // TODO: Streamlit URL if deployed
      chart: [15, 30, 28, 45, 52, 60, 68, 74, 82, 92],
      chartLabel: "Pipeline completion",
      detail: {
        overview:
          "A full-stack machine-learning application: a price-prediction model trained on German housing data, served through a Streamlit interface that lets a user compare cities interactively.",
        context:
          "Not a health project, but the reason it's here: it's the one where I took a model all the way to something someone else can open and use, including the unglamorous parts — large-file versioning, a deployable app, a clean interface.",
        methodology: [
          {
            step: "Data & model",
            detail:
              "Assembled a housing dataset, engineered location and property features, and trained regression models with scikit-learn.",
          },
          {
            step: "App",
            detail:
              "Streamlit frontend: parameter inputs, predicted price, and a side-by-side city comparison view.",
          },
          {
            step: "Delivery",
            detail:
              "Git LFS for the dataset and model files so the repo stays clonable and the app reproducible.",
          },
        ],
        results: [
          { metric: "Model", value: "Regression (scikit-learn)" },
          { metric: "Interface", value: "Interactive Streamlit app" },
          { metric: "Scope", value: "Data → model → deployed UI" },
        ],
        reflection:
          "The modelling was routine; the deployment taught me the most. Getting from a notebook to something a stranger can run surfaces every assumption you skipped.",
        stack: ["Python", "pandas", "scikit-learn", "Streamlit", "Git LFS"],
      },
    },
  ],

  skillGroups: [
    {
      title: "Programming",
      skills: ["Python (Pandas, NumPy, Matplotlib, Plotly)", "R", "SQL"],
    },
    {
      title: "Data Analysis & Statistics",
      skills: [
        "Data cleaning & preprocessing",
        "Exploratory data analysis (EDA)",
        "Statistical analysis",
        "Biostatistics",
      ],
    },
    {
      title: "Machine Learning",
      skills: ["scikit-learn (regression, classification)", "Model evaluation"],
    },
    {
      title: "Visualization & Dashboards",
      skills: ["Plotly Dash", "Streamlit", "Power BI", "Excel"],
    },
    {
      title: "Databases & Tools",
      skills: ["Git", "Git LFS", "PostgreSQL", "JASP"],
    },
    {
      title: "Healthcare & Domain Knowledge",
      skills: [
        "Clinical & healthcare datasets",
        "Health informatics",
        "Electronic health records (EHR)",
        "Biomedical data standards (HL7/FHIR)",
        "Data privacy & compliance (GDPR/HIPAA basics)",
      ],
    },
    {
      title: "Languages",
      skills: ["English – C1", "German – A2 (B1 in progress)", "Bengali – Native"],
    },
  ],
};
