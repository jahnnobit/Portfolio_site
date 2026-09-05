import type { Content } from "./types";

/* ------------------------------------------------------------------ */
/*  DEUTSCHE INHALTE.                                                  */
/*  Erststand der Übersetzung — bitte von einer Person mit Deutsch     */
/*  als Muttersprache prüfen lassen. Struktur wie en.ts halten.        */
/* ------------------------------------------------------------------ */

const HOCHSCHULE = "SRH Hochschule"; // Campus: Fürth

export const de: Content = {
  profile: {
    name: "Jahnnobi Talukdar",
    role: "Digital Health & Data Science",
    tagline: `Masterstudentin Digital Health & Data Science an der ${HOCHSCHULE} in Fürth. Ich mache aus klinischen Daten und maschinellem Lernen Dashboards und Werkzeuge, mit denen Menschen wirklich arbeiten können.`,
    location: "Nürnberg, Deutschland",
    university: HOCHSCHULE,
    email: "jahnnobit@gmail.com",
    currently:
      "Masterarbeit in Arbeit — aktuell 20 Std./Woche möglich, Vollzeit-Einstieg ab 2026.",
    availabilityShort: "Offen für Werkstudenten- & Vollzeitstellen",
    socials: {
      github: "https://github.com/jahnnobit",
      linkedin: "https://www.linkedin.com/in/jahnnobi-talukdar",
      scholar: "",
    },
    resumeUrl: "/Jahnnobi_resume.pdf",
  },

  ui: {
    nav: {
      work: "Projekte",
      education: "Ausbildung",
      experience: "Erfahrung",
      skills: "Kompetenzen",
      about: "Über mich",
      contact: "Kontakt",
      cv: "Lebenslauf",
      downloadCv: "Lebenslauf herunterladen",
      menu: "Menü öffnen",
      close: "Menü schließen",
    },
    hero: {
      viewWork: "Ausgewählte Projekte ansehen",
      getInTouch: "Kontakt aufnehmen",
    },
    sections: {
      workIndex: "01 / Projekte",
      workTitle: "Ausgewählte Projekte",
      workLead:
        "Vier Projekte aus Gesundheitsanalytik, maschinellem Lernen und Daten-Apps — vom Diagnose-Dashboard bis zur ausgelieferten ML-Anwendung. Jedes verlinkt eine ausführliche Fallstudie.",
      educationIndex: "02 / Ausbildung",
      educationTitle: "Ausbildung",
      educationLead:
        "Zwei Abschlüsse hinter dem Wechsel in die Gesundheitsdaten — zuerst eine Grundlage in den Life Sciences, dann Digital Health und Data Science.",
      experienceIndex: "03 / Erfahrung",
      experienceTitle: "Erfahrung",
      experienceLead:
        "Praktische Datenarbeit außerhalb des Studiums, plus die Zertifikate, die das untermauern.",
      certificatesTitle: "Zertifikate",
      skillsIndex: "04 / Kompetenzen",
      skillsTitle: "Was ich mitbringe",
      skillsLead:
        "Das datenwissenschaftliche Handwerk plus der Hintergrund in Gesundheitsdomäne und Life Sciences, der es im klinischen Kontext nutzbar macht.",
      aboutIndex: "05 / Über mich",
      aboutTitle: "Über mich",
      contactIndex: "06 / Kontakt",
      contactTitle: "Sprechen wir über Gesundheitsdaten",
      contactLead:
        "Wenn Ihr Team an klinischen Daten, Digital Health, Diagnostik oder Gesundheitsanalytik arbeitet — als Werkstudentin oder als Absolventin ab 2026 — würde ich gerne davon hören.",
    },
    project: {
      problem: "Problem",
      approach: "Vorgehen",
      result: "Ergebnis",
      impact: "Wirkung",
      code: "Code",
      liveDemo: "Live-Demo",
      readCaseStudy: "Fallstudie lesen",
      backToAll: "Alle Projekte",
      overview: "Überblick",
      context: "Kontext",
      methodology: "Methodik",
      results: "Ergebnisse",
      reflection: "Was ich daraus mitgenommen habe",
      stack: "Technologien",
      illustrative: "Beispielhaft — echte Werte in der Fallstudie",
    },
    explorer: {
      title: "Interaktiv: der Schwellenwert maligne / benigne",
      intro:
        "Ein Klassifikator gibt eine Wahrscheinlichkeit aus, kein Urteil — jemand muss trotzdem den Grenzwert festlegen, der entscheidet, welche Proben zur Biopsie markiert werden. Verschieben Sie den Schwellenwert und beobachten Sie, wie Sensitivität und Spezifität an diesem beispielhaften Datensatz von 1.000 Tumorproben gegeneinander abgewogen werden.",
      threshold: "Entscheidungsschwellenwert",
      sensitivity: "Sensitivität (Recall)",
      specificity: "Spezifität",
      precision: "Präzision (PPV)",
      flagged: "Als maligne markierte Proben",
      truePos: "Korrekt als maligne markiert",
      falsePos: "Fehlalarme (benigne markiert)",
      trueNeg: "Korrekt als benigne erkannt",
      falseNeg: "Übersehene Malignome",
      tableCaption: "Wahrheitsmatrix beim gewählten Schwellenwert",
      metric: "Ergebnis",
      count: "Anzahl",
      negatives: "Benigne",
      positives: "Maligne",
    },
    thesisCard: {
      institution: "Hochschule",
      status: "Status",
      methods: "Methoden",
    },
    about: {
      philosophyPull:
        "Ein Modell ist nur nützlich, wenn jemand danach handeln kann.",
      fullCv: "Vollständiger Lebenslauf (PDF)",
    },
    contact: {
      email: "E-Mail",
      linkedin: "LinkedIn",
      github: "GitHub",
    },
    footer: {
      builtWith: "Erstellt mit Next.js.",
      backToTop: "Nach oben",
    },
    thesisNav: "Masterarbeit",
    currentBadge: "Aktuell",
  },

  about: {
    paragraphs: [
      "Masterstudentin Digital Health & Data Science mit einer Grundlage in Biotechnologie und Gesundheitsanalytik. Ich arbeite an klinischer Datenanalyse, maschinellem Lernen und interaktiven Dashboards — mit einer strukturierten, gut dokumentierten Arbeitsweise.",
      "Mein Hintergrund in den Life Sciences prägt, wie ich an Gesundheitsdaten herangehe: Mich interessiert, was ein Ergebnis klinisch bedeutet, nicht nur, ob ein Modell gut abschneidet. Meine Schwerpunkte sind Health Informatics, Digital-Health-Systeme und Analysen, die für die Menschen nutzbar sind, die danach handeln.",
    ],
  },

  education: [
    {
      credential: "M.Sc. Digital Health & Data Science",
      org: "SRH Hochschule",
      location: "Fürth, Deutschland",
      period: "Okt 2024 — heute",
      bullets: [
        "Gesundheitsanalytik, KI im Gesundheitswesen und Digital-Health-Regulierung im deutschen Gesundheitssystem.",
        "Praxisprojekte in klinischer Datenanalyse und Dashboard-Entwicklung.",
        "Kenntnisse zu EHR-/EMR-Systemen und Datenschutz (DSGVO).",
      ],
    },
    {
      credential: "B.Sc. Biochemie, Biotechnologie & Genetik",
      org: "JAIN (Deemed-to-be University)",
      location: "Bengaluru, Indien",
      period: "Sep 2021 — Jun 2024",
      bullets: [
        "Life-Sciences-Grundlage mit praktischer Labor- und Diagnostikforschung.",
        "Klinische Mikrobiologie, Diagnostik und Studien zu antimikrobieller Resistenz.",
      ],
    },
  ],

  experience: [
    {
      role: "Data Analyst Praktikantin",
      org: "Brokenedge Sdn Bhd",
      location: "Remote",
      period: "Jan 2025 — Jan 2026",
      bullets: [
        "Sammlung, Bereinigung und Vorverarbeitung strukturierter und unstrukturierter Datensätze mit Python (Pandas, NumPy) zur Unterstützung interner Berichte und datengetriebener Entscheidungen; explorative Datenanalyse (EDA) zur Aufdeckung von Trends, Mustern und Anomalien in Kampagnen- und Betriebsdaten.",
        "Entwicklung von Dashboards und Visualisierungen mit Matplotlib und Seaborn zur Kommunikation zentraler Kennzahlen an Stakeholder; Sicherstellung von Datengenauigkeit und -konsistenz in den Reporting-Pipelines durch regelmäßige Qualitätskontrollen.",
        "Python-Skripte zur Automatisierung wiederkehrender Datenextraktion, -transformation und monatlicher Reporting-Workflows, wodurch der manuelle Berichtsaufwand reduziert wurde.",
        "Analyse von Kampagnen- und Performance-Daten zur Ableitung umsetzbarer Erkenntnisse für das Strategie-Team; funktionsübergreifende Zusammenarbeit mit Marketing- und Strategie-Teams zur Übersetzung von Geschäftsfragen in Analyseaufgaben.",
      ],
      stack: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
    },
  ],

  certifications: [
    {
      name: "Praxistraining zu Krebszell-Kulturtechniken",
      issuer: "Protein Design Private Limited",
      date: "Dez 2022",
    },
    {
      name: "Systembiologischer Ansatz zur Wirkstoffforschung",
      issuer: "MSME, Regierung von Indien",
      date: "Jun 2023",
    },
    {
      name: "Künstliche Intelligenz und maschinelles Lernen für Wirkstoff- und Impfstoffdesign",
      issuer: "MSME, Regierung von Indien",
      date: "Jan 2024",
    },
    {
      name: "Data Science mit Python — Praktikumsabschlusszertifikat",
      issuer: "Soft Nexis Technology",
      date: "Jun 2026",
      credentialId: "SN1000796",
    },
  ],

  projects: [
    {
      slug: "breast-cancer-dashboard",
      title: "Dashboard zur Brustkrebs-Analyse",
      summary:
        "Ein interaktives Plotly-Dash-Dashboard, das maligne von benignen Tumoren trennt und die Entscheidung des Modells nachvollziehbar macht.",
      problem:
        "Ein Klassifikator, der nur ein Label ausgibt, gibt einer Ärztin nichts zum Prüfen. Nützlich ist die Darstellung, welche Merkmale die Entscheidung trieben und wo das Modell unsicher ist.",
      approach:
        "Einen Klassifikator auf diagnostischen Tumormerkmalen trainiert, dann eine Plotly-Dash-App gebaut: Merkmalsverteilungen je Klasse, ein verstellbarer Entscheidungsschwellenwert und Erklärungen je Probe.",
      result:
        "Ein einziger Bildschirm, auf dem eine prüfende Person die Daten erkunden, den Grenzwert maligne/benigne verschieben und den daraus folgenden Zielkonflikt zwischen Sensitivität und Spezifität sehen kann.",
      impact:
        "Macht aus einem Black-Box-Score etwas, das eine Qualitätsprüfung hinterfragen kann — die Form, die ein diagnostisches Hilfsmittel braucht, um Vertrauen zu verdienen.",
      tags: ["Python", "Plotly Dash", "scikit-learn", "Datenvisualisierung"],
      repo: "https://github.com/jahnnobit", // TODO
      chart: [40, 52, 49, 63, 58, 71, 68, 79, 84, 90],
      chartLabel: "Validierungsgenauigkeit über das Training",
      interactive: true,
      detail: {
        overview:
          "Ein Diagnose-Dashboard, das Brusttumoren als maligne oder benigne klassifiziert und — wichtiger — einer prüfenden Person Merkmal für Merkmal zeigt, warum, und den Arbeitspunkt wählen lässt, der den klinischen Kosten eines Fehlers entspricht.",
        context:
          "Beim Screening sind ein falsch Negativer (ein übersehenes Malignom) und ein falsch Positiver (eine unnötige Biopsie) nicht gleich schlimm, und die Abwägung ist eine klinische Entscheidung, keine Modellierungsfrage. Ein Werkzeug, das den Schwellenwert verbirgt, verbirgt die wichtigste Wahl.",
        methodology: [
          {
            step: "Daten & Merkmale",
            detail:
              "Ein diagnostischer Tumordatensatz mit Zellkern-Messungen aus Feinnadelaspirat-Bildern (TODO: Datensatz bestätigen — z. B. Wisconsin Diagnostic Breast Cancer).",
          },
          {
            step: "Modell",
            detail:
              "Standard-Klassifikatoren (logistische Regression, Random Forest, SVM) mit Kreuzvalidierung trainiert und verglichen; das Modell behalten, das ohne Overfitting Genauigkeit hielt.",
          },
          {
            step: "Dashboard",
            detail:
              "Mit Plotly Dash gebaut: klassenbedingte Merkmalsverteilungen, ein Live-Schieberegler für den Schwellenwert und ein Panel mit Wahrheitsmatrix / Kennzahlen, das sich beim Verschieben aktualisiert.",
          },
          {
            step: "Erklärung",
            detail:
              "Merkmalsbeiträge je Probe, damit eine prüfende Person sieht, welche Messungen einen Tumor Richtung maligne schoben.",
          },
        ],
        results: [
          { metric: "Validierungsgenauigkeit", value: "TODO %" },
          { metric: "Sensitivität beim gewählten Schwellenwert", value: "TODO %" },
          { metric: "Oberfläche", value: "Ein Bildschirm, kein Code nötig" },
        ],
        reflection:
          "Den Schwellenwert-Schieberegler zu bauen, hat meine Sicht auf das Projekt verändert. Das Modell war der einfache Teil; die ehrliche Frage ist, wo man die Grenze zieht und wen man in Kauf nimmt zu übersehen — und das gehört der Ärztin, nicht dem Klassifikator.",
        stack: ["Python", "pandas", "scikit-learn", "Plotly Dash", "Plotly"],
      },
    },
    {
      slug: "appointment-no-show-eda",
      title: "Nicht wahrgenommene Termine — EDA",
      summary:
        "Eine explorative Analyse, warum Patientinnen Termine verpassen und wo ein Patientenmanagementsystem eingreifen könnte.",
      problem:
        "Nicht wahrgenommene Termine verschwenden klinische Kapazität und verzögern Versorgung. Vor einem Vorhersagemodell muss man wissen, welche Faktoren die No-Show-Rate tatsächlich bewegen.",
      approach:
        "Einen großen Termindatensatz bereinigt, Merkmale erzeugt (Vorlaufzeit, frühere No-Shows, SMS-Erinnerung, Wochentag, Alter) und die No-Show-Rate gegen jedes davon analysiert — mit klaren Visualisierungen und dokumentierten Einschränkungen.",
      result:
        "Ein klares Bild der Treiber: längere Vorlaufzeiten und eine Vorgeschichte verpasster Termine dominieren; Erinnerungen helfen, heben den Effekt aber nicht auf.",
      impact:
        "Zeigt die Punkte im Patientenweg — Buchung, Erinnerung, Nachverfolgung —, an denen ein Managementsystem die No-Show-Rate realistisch senken könnte.",
      tags: ["Python", "pandas", "EDA", "Datenvisualisierung"],
      repo: "https://github.com/jahnnobit", // TODO
      chart: [30, 44, 40, 55, 60, 52, 66, 70, 74, 80],
      chartLabel: "Analysierte Merkmale",
      detail: {
        overview:
          "Eine durchgängige explorative Analyse nicht wahrgenommener Termine: Daten bereinigen, herausfinden, was mit einem verpassten Termin korreliert, und das übersetzen in die Frage, wo ein Patientenmanagementsystem ansetzen sollte.",
        context:
          "Ein No-Show-Vorhersagemodell lohnt sich nur, wenn es Signal gibt und die Treiber Dinge sind, die eine Praxis beeinflussen kann. Das ist eine EDA-Frage, und sie zu überspringen führt dazu, dass Teams ein Modell ausliefern, mit dem niemand handeln kann.",
        methodology: [
          {
            step: "Bereinigung",
            detail:
              "Ungültige Altersangaben behandelt, Zeitstempel geparst, die Vorlaufzeit zwischen Buchung und Termin abgeleitet und Leakage-Spalten entfernt.",
          },
          {
            step: "Merkmalsanalyse",
            detail:
              "No-Show-Rate aufgeschlüsselt nach Vorlaufzeit, früheren No-Shows, SMS-Erinnerung, Altersgruppe, Wochentag und Stadtteil.",
          },
          {
            step: "Visualisierung",
            detail:
              "Jeder Zusammenhang als klare Grafik mit sichtbarer Stichprobengröße, plus eine schriftliche Notiz dazu, was kausal ist und was nicht.",
          },
        ],
        results: [
          { metric: "Analysierte Datensätze", value: "TODO (z. B. ~110k)" },
          { metric: "Stärkster Treiber", value: "Vorlaufzeit + frühere No-Shows" },
          { metric: "Erinnerungs-Effekt", value: "Hilft, hebt ihn nicht auf" },
        ],
        reflection:
          "Das nützlichste Ergebnis war keine Grafik — es war die Liste der Treiber, die eine Praxis tatsächlich ändern kann. Diese Rahmung bringt eine Analyse bei einem nicht-technischen Publikum an.",
        stack: ["Python", "pandas", "NumPy", "Matplotlib", "seaborn"],
      },
    },
    {
      slug: "skincare-web-app",
      title: "Skincare-Webanwendung",
      summary:
        "Eine Flask-Webanwendung, die personalisierte Hautpflege- und Digital-Health-Inhalte über eine klare, geführte Oberfläche liefert.",
      problem:
        "Gesundheitsinhalte nützen nur, wenn Menschen sich damit befassen. Generische Ratgeberseiten schaffen das nicht; ein geführter, personalisierter Ablauf schon.",
      approach:
        "Eine Flask-Anwendung mit einem einfachen Eingabefluss gebaut, regelbasierte Personalisierung der gezeigten Inhalte und eine Oberfläche, die die Nutzerin durch den Ablauf führt.",
      result:
        "Eine funktionierende App, die aus wenigen Eingaben einen zugeschnittenen Satz an Empfehlungen und Erklärungen erzeugt.",
      impact:
        "Eine kleine Studie in engagement-orientiertem Digital-Health-Design — Oberfläche und Inhaltsstrategie zählen so viel wie die Logik dahinter.",
      tags: ["Python", "Flask", "Webanwendung", "UI-Design"],
      repo: "https://github.com/jahnnobit", // TODO
      demo: "", // TODO
      chart: [20, 35, 45, 42, 58, 64, 60, 72, 78, 85],
      chartLabel: "Baufortschritt",
      detail: {
        overview:
          "Eine Flask-Webanwendung, die Nutzerinnen über einen kurzen geführten Ablauf personalisierte Hautpflege-Hinweise gibt — gebaut, um zu testen, wie Oberfläche und Inhaltsgestaltung beeinflussen, ob Menschen Gesundheitsempfehlungen tatsächlich folgen.",
        context:
          "Digital-Health-Produkte stehen und fallen mit Engagement. Die interessante Arbeit war weniger das Backend als der Ablauf: wie viele Fragen, bevor es sich lohnt, wie man eine Empfehlung so darstellt, dass ihr vertraut und nach ihr gehandelt wird.",
        methodology: [
          {
            step: "Anwendung",
            detail:
              "Flask-Backend mit Routing, ein Template-Frontend und ein kurzes strukturiertes Eingabeformular.",
          },
          {
            step: "Personalisierung",
            detail:
              "Regelbasierte Logik, die die Eingaben der Nutzerin auf einen zugeschnittenen Inhaltssatz abbildet, mit einem kurzen „Warum“ je Empfehlung.",
          },
          {
            step: "Oberfläche",
            detail:
              "Den Ablauf so gestaltet, dass Abbrüche sinken — minimale Schritte, klarer Fortschritt, verständliche Ausgabe.",
          },
        ],
        results: [
          { metric: "Stack", value: "Flask, Jinja-Templates" },
          { metric: "Ablauf", value: "Eingabe → personalisierte Ausgabe" },
          { metric: "Fokus", value: "Engagement und Klarheit" },
        ],
        reflection:
          "Dieses Projekt hat gezeigt: In Digital Health ist die Oberfläche Teil der Intervention. Eine korrekte Empfehlung, die niemand liest, ändert nichts.",
        stack: ["Python", "Flask", "Jinja", "HTML/CSS"],
      },
    },
    {
      slug: "german-real-estate-predictor",
      title: "Immobilienpreis-Vorhersage Deutschland",
      summary:
        "Eine Full-Stack-ML-App, die Immobilienpreise über deutsche Städte vorhersagt und vergleicht, ausgeliefert mit Streamlit.",
      problem:
        "Immobilienvergleiche zwischen Städten sind schwer zu beurteilen ohne ein Modell, das die übrigen Variablen konstant hält.",
      approach:
        "Ein Regressionsmodell auf Immobilienmerkmalen gebaut, in eine Streamlit-App mit interaktivem Städtevergleich verpackt und Git LFS genutzt, um Daten und Modell-Artefakte zu versionieren.",
      result:
        "Ein interaktives Werkzeug, in dem eine Nutzerin Parameter wählt und vorhergesagte Preise sowie Vergleiche zwischen Städten nebeneinander sieht.",
      impact:
        "Ein durchgängiger Nachweis: von den Daten über das trainierte Modell bis zu einer ausgelieferten, nutzbaren Oberfläche — der ganze Weg, nicht nur ein Notebook.",
      tags: ["Python", "scikit-learn", "Streamlit", "Git LFS"],
      repo: "https://github.com/jahnnobit", // TODO
      demo: "", // TODO
      chart: [15, 30, 28, 45, 52, 60, 68, 74, 82, 92],
      chartLabel: "Pipeline-Fortschritt",
      detail: {
        overview:
          "Eine Full-Stack-Machine-Learning-Anwendung: ein Preisvorhersagemodell, trainiert auf deutschen Immobiliendaten, bereitgestellt über eine Streamlit-Oberfläche, die einen interaktiven Städtevergleich erlaubt.",
        context:
          "Kein Gesundheitsprojekt, aber der Grund, warum es hier steht: Es ist das eine, bei dem ich ein Modell bis zu etwas gebracht habe, das jemand anderes öffnen und nutzen kann — inklusive der unspektakulären Teile: Versionierung großer Dateien, eine bereitstellbare App, eine saubere Oberfläche.",
        methodology: [
          {
            step: "Daten & Modell",
            detail:
              "Einen Immobiliendatensatz zusammengestellt, Standort- und Objektmerkmale erzeugt und Regressionsmodelle mit scikit-learn trainiert.",
          },
          {
            step: "App",
            detail:
              "Streamlit-Frontend: Parametereingaben, vorhergesagter Preis und eine Städtevergleichsansicht nebeneinander.",
          },
          {
            step: "Auslieferung",
            detail:
              "Git LFS für Datensatz und Modelldateien, damit das Repo klonbar und die App reproduzierbar bleibt.",
          },
        ],
        results: [
          { metric: "Modell", value: "Regression (scikit-learn)" },
          { metric: "Oberfläche", value: "Interaktive Streamlit-App" },
          { metric: "Umfang", value: "Daten → Modell → ausgelieferte UI" },
        ],
        reflection:
          "Die Modellierung war Routine; die Auslieferung hat mich am meisten gelehrt. Von einem Notebook zu etwas zu kommen, das eine fremde Person ausführen kann, bringt jede übersprungene Annahme ans Licht.",
        stack: ["Python", "pandas", "scikit-learn", "Streamlit", "Git LFS"],
      },
    },
  ],

  skillGroups: [
    {
      title: "Programmierung",
      skills: ["Python (Pandas, NumPy, Matplotlib, Plotly)", "R", "SQL"],
    },
    {
      title: "Datenanalyse & Statistik",
      skills: [
        "Datenbereinigung & -aufbereitung",
        "Explorative Datenanalyse (EDA)",
        "Statistische Analyse",
        "Biostatistik",
      ],
    },
    {
      title: "Maschinelles Lernen",
      skills: ["scikit-learn (Regression, Klassifikation)", "Modellbewertung"],
    },
    {
      title: "Visualisierung & Dashboards",
      skills: ["Plotly Dash", "Streamlit", "Power BI", "Excel"],
    },
    {
      title: "Datenbanken & Tools",
      skills: ["Git", "Git LFS", "PostgreSQL", "JASP"],
    },
    {
      title: "Gesundheitswesen & Fachwissen",
      skills: [
        "Klinische & Gesundheitsdatensätze",
        "Health Informatics",
        "Elektronische Gesundheitsakten (EHR)",
        "Biomedizinische Datenstandards (HL7/FHIR)",
        "Datenschutz & Compliance (DSGVO/HIPAA-Grundlagen)",
      ],
    },
    {
      title: "Sprachen",
      skills: ["Englisch – C1", "Deutsch – A2 (B1 in Vorbereitung)", "Bengalisch – Muttersprache"],
    },
  ],
};
