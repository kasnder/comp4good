export const content = {
  mission: {
    thesis: ["Technology is never just technical.", "We ask who shapes it — and whom it serves."],
    description:
      "Computing for Good is an interdisciplinary research team at Maastricht University's Law & Tech Lab. We investigate apps, AI systems, and online platforms in the real world, and build tools and evidence for more accountable technology.",
  },

  themes: [
    {
      id: "ai-regulation",
      eyebrow: "AI & Data Regulation",
      question: "What would it take to make AI regulation work in practice?",
      body: "We examine the gap between legal obligations and technical practice — from AI risk disclosures in corporate filings to watermarking in generative AI systems. Our aim is to identify where compliance can be measured and enforcement strengthened.",
    },
    {
      id: "platform-power",
      eyebrow: "Platform Power & Systemic Risks",
      question: "How can outsiders scrutinise the platforms that shape public life?",
      body: "We study how researchers, regulators, and civil society can gain meaningful access to platform data and assess systemic risks to democracy and public debate under the Digital Services Act.",
    },
    {
      id: "digital-wellbeing",
      eyebrow: "Privacy & Digital Wellbeing",
      question: "How can people reshape technology around their own goals?",
      body: "We study how design and data practices shape attention and autonomy, and develop privacy-first interventions that let people adapt technology around their own goals.",
    },
  ],

  projects: [
    {
      id: "regtech4ai",
      title: "RegTech4AI",
      subtitle: "Bringing AI Law into Practice",
      description:
        "RegTech4AI uses technical methods to test how the GDPR and EU AI Act operate in real settings. We develop regulatory tools that make compliance easier to assess and enforcement more practical.",
      funder: "NGF / AiNed Fellowship",
      link: "https://regtech4ai.com",
      logo: "/regtech4ai-logo.png",
    },
    {
      id: "regulaire",
      title: "REGULAIRE",
      subtitle: "Regulatory Learning for the Governance of Transformative Technologies",
      description:
        "REGULAIRE trains fifteen doctoral fellows across ten European universities to study how public authorities can keep pace with technological change — how they detect emerging issues, design interventions, and share what they learn. Comp4Good contributes expertise on regulatory technologies, legal AI audits, and links with public authorities, including the Dutch ACM and AP, the French CNIL, the OECD, and UNESCO.",
      funder: "EU Horizon MSCA Doctoral Network, €4.7M",
    },
    {
      id: "cocoda",
      title: "CoCoDa",
      subtitle: "Studying Systemic Risks on Online Platforms",
      description:
        "CoCoDa develops technical and legal methods for accessing platform data and measuring systemic risks under the Digital Services Act. Its tools are designed for researchers, regulators, and civil-society organisations.",
      funder: "SNSF, €1.2M",
      link: "https://snsf-cocoda.github.io",
      logo: "/cocoda-logo.png",
    },
    {
      id: "redd",
      title: "Centre for Digital Habits",
      subtitle: "Based on 10+ years of Oxford research",
      description:
        "The Centre develops privacy-first tools and evidence-based interventions that help young people manage their digital habits. It builds on more than a decade of Oxford research through the Reduce Digital Distraction programme.",
      funder: "ImpactU (UK)",
      link: "https://digitalhabits.org",
      logo: "/redd-logo.png",
    },
  ],

  teamIntro:
    "Based at Maastricht University's Law & Tech Lab, Comp4Good brings together computer scientists and legal scholars working across our projects.",

  team: [
    {
      name: "Konrad Kollnig",
      role: "Project Lead, Assistant Professor CS/Law",
      projects: ["regtech4ai", "cocoda"],
      image: "/team/konrad.jpg",
      link: "https://kollnig.net",
    },
    {
      name: "Qian Li",
      role: "Postdoctoral Researcher",
      projects: ["regtech4ai"],
      image: "/team/qian.jpg",
      link: "https://www.maastrichtuniversity.nl/q-li",
    },
    {
      name: "Kamil Szostak",
      role: "PhD Student",
      projects: ["regtech4ai"],
      image: "/team/kamil.jpg",
      link: "https://www.maastrichtuniversity.nl/kk-szostak",
    },
    {
      name: "Bram Rijsbosch",
      role: "PhD Student",
      projects: ["regtech4ai"],
      image: "/team/bram.jpg",
      link: "https://www.maastrichtuniversity.nl/bu-rijsbosch",
    },
    {
      name: "Lucas G. Uberti-Bona Marin",
      role: "PhD Student",
      projects: ["regtech4ai"],
      image: "/team/lucas.jpg",
      link: "https://lucas-ubm.github.io/",
    },
    {
      name: "Ishitaa Narwane",
      role: "PhD Student",
      projects: ["regtech4ai"],
      image: "/team/ishitaa.jpg",
      link: "https://www.maastrichtuniversity.nl/narwane",
    },
    {
      name: "Henry Tari",
      role: "Researcher",
      projects: ["cocoda"],
      image: "/team/henry.jpg",
      link: "https://scholar.google.com/citations?user=2Q5Am-sAAAAJ",
    },
    {
      name: "Defne Halil",
      role: "External PhD Student",
      projects: ["regulaire"],
      image: "/team/defne.jpg",
    },
    {
      name: "Dick Blankvoort",
      role: "External PhD Student · St. Gallen",
      projects: [],
      image: "/team/dick.jpg",
    },
  ],

  partners: [
    "Gijs van Dijck (Maastricht University)",
    "Johanna T. Gunawan (Maastricht University)",
    "Marta Kołacz (Maastricht University)",
    "Jerry Spanakis (Maastricht University)",
    "Simon Mayer (University of St. Gallen)",
    "Aurelia Tamò-Larrieux (University of St. Gallen)",
    "Elena Simperl (Open Data Institute)",
  ],

  join: {
    intro:
      "We welcome people who want to investigate and reshape digital systems across disciplinary boundaries.",
    points: [
      {
        title: "Work with us",
        body: "We collaborate with researchers, regulators, and civil-society organisations on shared questions, methods, and tools.",
      },
      {
        title: "Study with us",
        body: "We supervise undergraduate and graduate theses at Maastricht University on app privacy, platform regulation, AI governance, and digital wellbeing.",
      },
      {
        title: "Join the team",
        body: "We periodically recruit PhD candidates, postdoctoral researchers, and research assistants across our projects.",
      },
    ],
    contact: {
      label: "Start a conversation",
      href: "mailto:konrad@comp4good.com",
    },
  },
};

// Labels for the publication / team project tags. ReDD Focus is intentionally
// absent: it's a project card, not a publication-producing research project, so
// it never appears as a tag.
export const projectLabels: Record<string, string> = {
  regtech4ai: "RegTech4AI",
  regulaire: "REGULAIRE",
  cocoda: "CoCoDa",
};
