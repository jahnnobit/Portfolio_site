import { notFound } from "next/navigation";
import { isLocale } from "@/i18n/config";
import { getContent } from "@/content";
import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { Education } from "@/components/education";
import { Experience } from "@/components/experience";
import { Skills } from "@/components/skills";
import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default async function Home(props: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await props.params;
  if (!isLocale(locale)) notFound();

  const c = getContent(locale);
  const { profile, ui } = c;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: "Digital Health & Data Science MSc student",
    email: `mailto:${profile.email}`,
    address: { "@type": "PostalAddress", addressLocality: profile.location },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: profile.university,
    },
    knowsAbout: [
      "Digital Health",
      "Data Science",
      "Machine Learning",
      "Healthcare Analytics",
      "Health Informatics",
      "Biotechnology",
    ],
    sameAs: [profile.socials.github, profile.socials.linkedin].filter(Boolean),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Nav
        locale={locale}
        t={ui}
        name={profile.name}
        resumeUrl={profile.resumeUrl}
      />
      <main id="main">
        <Hero profile={profile} t={ui} />
        <Projects projects={c.projects} locale={locale} t={ui} />
        <Education education={c.education} thesis={c.thesis} t={ui} />
        <Experience
          experience={c.experience}
          certifications={c.certifications}
          t={ui}
        />
        <Skills skillGroups={c.skillGroups} t={ui} />
        <About
          about={c.about}
          education={c.education}
          resumeUrl={profile.resumeUrl}
          t={ui}
        />
        <Contact profile={profile} t={ui} />
      </main>
      <Footer name={profile.name} t={ui} />
    </>
  );
}
