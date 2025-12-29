export const siteData = {
  title: "Comp4Good",
  acronym: "Comp4Good",
  description: "Computing for Good: Interdisciplinary research at the intersection of Computer Science and Law, aiming to make technology work for society.",
  affiliation: {
    name: "Law & Tech Lab, Faculty of Law, Maastricht University",
    url: "https://www.maastrichtuniversity.nl/law-tech-lab"
  },
  projects: [
    {
      id: "regtech4ai",
      title: "RegTech4AI",
      subtitle: "Bringing AI Law into Practice",
      description: "An NGF-funded project applying technical methods to the law with the aim of making the EU's ambitious AI regulation – particularly the GDPR and AI Act – work in practice. The project focuses on the challenge of implementation: making AI-relevant laws work in real-world scenarios.",
      link: "https://regtech4ai.com",
      tags: ["AI Regulation", "GDPR", "AI Act", "RegTech"],
      logo: import.meta.env.BASE_URL + "regtech4ai-logo.png"
    },
    {
      id: "cocoda",
      title: "CoCoDa",
      subtitle: "Studying Systemic Risks on Online Platforms",
      description: "Motivated by the systemic risks to democracy posed by dominant online platforms, CoCoDa aims to combine technical data access methods with novel legal approaches (like the DSA) to measure and mitigate these risks. We develop integrated 'techno-legal' tools to support regulators and civil society.",
      link: "https://snsf-cocoda.github.io",
      tags: ["Online Platforms", "Systemic Risks", "DSA", "Techno-Legal"],
      logo: import.meta.env.BASE_URL + "cocoda-logo.png"
    }
  ],
  team: [
    {
      name: "Konrad Kollnig",
      role: "Project Lead, Assistant Professor CS/Law",
      project: ["RegTech4AI", "CoCoDa"],
      image: import.meta.env.BASE_URL + "team/konrad.jpg"
    },
    {
      name: "Qian Li",
      role: "Postdoctoral Researcher",
      project: ["RegTech4AI"],
      image: import.meta.env.BASE_URL + "team/qian.jpg"
    },
    {
      name: "Kamil Szostak",
      role: "PhD Student",
      project: ["RegTech4AI"],
      image: import.meta.env.BASE_URL + "team/kamil.jpg"
    },
    {
      name: "Bram Rijsbosch",
      role: "PhD Student",
      project: ["RegTech4AI"],
      image: import.meta.env.BASE_URL + "team/bram.jpg"
    },
    {
      name: "Lucas Giovanni Uberti-Bona Marin",
      role: "PhD Student",
      project: ["RegTech4AI"],
      image: import.meta.env.BASE_URL + "team/lucas.jpg"
    },
    {
      name: "Ishitaa Narwane",
      role: "PhD Student",
      project: ["RegTech4AI"],
      image: import.meta.env.BASE_URL + "team/ishitaa.jpg"
    },
    {
      name: "Henry Tari",
      role: "Researcher",
      project: ["CoCoDa"],
      image: import.meta.env.BASE_URL + "team/henry.jpg"
    }
  ],
  partners: [
    "Gijs van Dijck (Maastricht University)",
    "Johanna T. Gunawan (Maastricht University)",
    "Marta Kołacz (Maastricht University)",
    "Jerry Spanakis (Maastricht University)",
    "Simon Mayer (University of St. Gallen)",
    "Aurelia Tamò-Larrieux (University of Lausanne)",
    "Elena Simperl (Open Data Institute)"
  ]
};
