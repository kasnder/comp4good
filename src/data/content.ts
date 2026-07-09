export const content = {
  mission: {
    thesis: ["Technology shapes society.", "We make it answer to society."],
    description:
      "Comp4Good is an interdisciplinary research team at Maastricht University's Law & Tech Lab, working at the intersection of computer science, law, and society. We combine technical, policy, and social methods to test whether the systems that govern our data and our attention — and the laws meant to hold them accountable — actually work in practice, then build the tools and evidence to make them better.",
  },

  themes: [
    {
      id: "ai-regulation",
      eyebrow: "AI & Data Regulation",
      question: "Europe has the world's most ambitious tech laws. Do they work in practice?",
      body: "We study how the GDPR and the EU AI Act actually land on real systems — from AI risk disclosures in corporate filings to watermarking practice in generative AI tools. In RegTech4AI, we build regulatory technology that helps make these laws enforceable rather than aspirational.",
      refs: "RegTech4AI · AiNed Fellowship",
    },
    {
      id: "platform-power",
      eyebrow: "Platform Power & Systemic Risks",
      question: "Dominant platforms shape public discourse. Who gets to check that?",
      body: "Large online platforms pose systemic risks to democracy and public debate that existing oversight struggles to reach. In CoCoDa, we combine technical data-access methods with novel legal approaches under the Digital Services Act to measure these risks and build techno-legal tools for regulators and civil society.",
      refs: "CoCoDa · SNSF, €1.2M",
    },
    {
      id: "digital-wellbeing",
      eyebrow: "Privacy & Digital Wellbeing",
      question: "Should we ban social media — or build technology people control?",
      body: "Rather than waiting for bans, we build tools that put people back in control of their data and their attention. Through the ReDD Focus project, we develop open-source, privacy-first software grounded in a decade of research on digital distraction and app tracking.",
      refs: "ReDD Focus · Reduce Digital Distraction",
    },
  ],

  projects: [
    {
      id: "regtech4ai",
      title: "RegTech4AI",
      subtitle: "Bringing AI Law into Practice",
      description:
        "An NGF-funded project applying technical methods to the law with the aim of making the EU's ambitious AI regulation — particularly the GDPR and AI Act — work in practice. The project focuses on the challenge of implementation: making AI-relevant laws work in real-world scenarios.",
      funder: "NGF / AiNed Fellowship",
      link: "https://regtech4ai.com",
      logo: "/regtech4ai-logo.png",
    },
    {
      id: "cocoda",
      title: "CoCoDa",
      subtitle: "Studying Systemic Risks on Online Platforms",
      description:
        "Motivated by the systemic risks to democracy posed by dominant online platforms, CoCoDa combines technical data-access methods with novel legal approaches (like the DSA) to measure and mitigate these risks. We develop integrated 'techno-legal' tools to support regulators and civil society.",
      funder: "SNSF, €1.2M",
      link: "https://snsf-cocoda.github.io",
      logo: "/cocoda-logo.png",
    },
    {
      id: "redd",
      title: "Centre for Digital Habits",
      subtitle: "Based on 10+ years of Oxford research",
      description:
        "The Centre for Digital Habits develops research-informed interventions to help young people take back control over their digital lives. Grounded in award-winning research & engineering, we provide tools and resources to empower users to manage their digital habits.",
      funder: "ImpactU (UK)",
      link: "https://www.reddfocus.org",
      logo: "/redd-logo.png",
    },
  ],

  team: [
    {
      name: "Konrad Kollnig",
      role: "Project Lead, Assistant Professor CS/Law",
      projects: ["regtech4ai", "cocoda"],
      image: "/team/konrad.jpg",
    },
    {
      name: "Qian Li",
      role: "Postdoctoral Researcher",
      projects: ["regtech4ai"],
      image: "/team/qian.jpg",
    },
    {
      name: "Kamil Szostak",
      role: "PhD Student",
      projects: ["regtech4ai"],
      image: "/team/kamil.jpg",
    },
    {
      name: "Bram Rijsbosch",
      role: "PhD Student",
      projects: ["regtech4ai"],
      image: "/team/bram.jpg",
    },
    {
      name: "Lucas G. Uberti-Bona Marin",
      role: "PhD Student",
      projects: ["regtech4ai"],
      image: "/team/lucas.jpg",
    },
    {
      name: "Ishitaa Narwane",
      role: "PhD Student",
      projects: ["regtech4ai"],
      image: "/team/ishitaa.jpg",
    },
    {
      name: "Henry Tari",
      role: "Researcher",
      projects: ["cocoda"],
      image: "/team/henry.jpg",
    },
  ],

  partners: [
    "Gijs van Dijck (Maastricht University)",
    "Johanna T. Gunawan (Maastricht University)",
    "Marta Kołacz (Maastricht University)",
    "Jerry Spanakis (Maastricht University)",
    "Simon Mayer (University of St. Gallen)",
    "Aurelia Tamò-Larrieux (University of Lausanne)",
    "Elena Simperl (Open Data Institute)",
  ],

  join: {
    intro:
      "We're growing. If you want to work at the intersection of computer science, law, and society, we'd like to hear from you.",
    points: [
      {
        title: "PhD & postdoc positions",
        body: "We periodically open funded PhD and postdoc positions across our projects. No open call at the moment — get in touch to be notified when one comes up.",
      },
      {
        title: "Thesis supervision",
        body: "We supervise undergraduate and graduate theses at Maastricht University on app privacy, platform regulation, AI governance, and digital wellbeing.",
      },
      {
        title: "Collaboration & funding",
        body: "We work with regulators, civil society, and other research groups. If you're exploring a collaboration or funding opportunity, reach out.",
      },
    ],
    contact: {
      label: "Contact a team member",
      href: "#team",
    },
  },
};

// Labels for the publication / team project tags. ReDD Focus is intentionally
// absent: it's a project card, not a publication-producing research project, so
// it never appears as a tag.
export const projectLabels: Record<string, string> = {
  regtech4ai: "RegTech4AI",
  cocoda: "CoCoDa",
};
