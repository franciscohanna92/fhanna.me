import {GithubIcon, LucideLinkedin, TwitterIcon} from "lucide-react";
import Image from "next/image";

const social = [
  {
    name: "GitHub",
    href: "https://github.com/franciscohanna92",
    icon: GithubIcon,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/fhanna92",
    icon: TwitterIcon,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/fhanna92",
    icon: LucideLinkedin,
  },
];

const work = [
  {
    title: "Technical Lead",
    subtitle: "Listo · Full Time",
    date: "Mar 2021 - Present",
    description: `As the Tech Lead at Listo, a communication platform for frontline workers, I’m involved in the process of designing and
    developing features and solutions from start to finish, leading a team of five developers. I’ve been working in the
    project since it’s inception and so far I’ve played a critical role in kicking off the platform and scaling it along its
    userbase.`,
    highlights: [
      "Designed and implemented the original MVP for an early adopter.",
      "Led the engineering effort of the first big refactor, made to take the platform to the next level.",
      "Migrated the original watch application to Wear OS 3, increasing its availability and robustness.",
      "Overcame crucial technical challenges to ensure the deliverability of time-critical push notifications.",
    ],
  },
  {
    title: "Sr. Software Engineer",
    subtitle: "SparkDigital · Full Time",
    date: "Jan 2020 - Mar 2021",
    description: "I worked as a full-stack engineer for two different projects, both for US based companies.",
    highlights: [
      "Developed a tech demo application for Verizon Digital Media Services.",
      "Developed new features for Sapling Learning, an e-learning platform from Macmillan Learning.",
    ],
  },
  {
    title: "Ssr. Software Engineer",
    subtitle: "Plataforma 10 · Full Time",
    date: "Jul 2019 - Dec 2019",
    description: "Led the newly formed TravelPAQ outsourcing team and was part of one of Plataforma 10’s core back-end teams.",
    highlights: [
      "Onboarded and trained new outsourcing team members on Plataforma 10’s tech stack.",
      "As part of Platforma 10’s Buses team, worked on two new service provider integrations, and generated stress test suites.",
      "Prepared profiling reports of an API built with GraphQL.",
      "Carried out maintenance and improvement of core business APIs.",
    ],
  },
  {
    title: "Ssr. Software Engineer",
    subtitle: "MINEXUS · Full Time",
    date: "Oct 2018 - Jun 2019",
    description:
      "Led a three-person team to build a web-based contractor documentation control system, which consisted of three client web apps, a Single Sign-On service built from scratch and a RESTful API.",
    highlights: [
      "Designed the general architecture of the system and the main database schema.",
      "Developed all the client applications.",
      "Developed the Single Sign On service following the Password Grant flow from OAuth 2.0.",
      "Generated the requirements of the RESTful API.",
    ],
  },
  {
    title: "Full-Stack Web Developer",
    subtitle: "TravelPAQ · Full Time",
    date: "Jul 2017 - Nov 2018",
    description: "Developed and improved existing back-office applications for tour package operators and online travel agencies.",
    highlights: [
      "Developed a website whitelabel system for travel agencies to offer and sell tour packages online.",
      "Helped in the migration of the main ETL business process from a monolithic to a microservice-based architecture, exploring serverless solutions.",
    ],
  },
  {
    title: "Full-Stack Web Developer",
    subtitle: "HEAL S.A. · Freelance",
    date: "Aug 2017 - Nov 2017",
    description:
      "Designed, documented and implemented the an inventory control system, using a real-time web app development framework for a construction company.",
  },
  {
    title: "Web Developer Intern",
    subtitle: "Excelencia Soluciones Informaticas · Internship",
    date: "Oct 2018 - Jun 2019",
    description: "Implemented functionalities and provided maintenance of web applications for administration of health care institutions.",
  },
];

const education = [
  {
    title: "Bachelor of Computer Science",
    subtitle: "Universidad Nacional de San Juan",
    date: "2013 - 2021 (Dropout)",
  },
  {
    title: "Technical Degree in Programming",
    subtitle: "Universidad Nacional de San Juan",
    date: "2013 - 2017",
  },
  {
    title: "Cambridge Institute: First (FCE)",
    subtitle: "CPIE San Juan",
    date: "2015",
  },
];

export default function Home() {
  return (
    <main>
      <div className="mx-auto max-w-2xl lg:max-w-5xl">
        <div>
          <img
            src="https://media.licdn.com/dms/image/D4D03AQEXG3cCmokA1g/profile-displayphoto-shrink_800_800/0/1690399429821?e=1709769600&v=beta&t=QyzgLXkn5aUVuTn25lBMp9Hf1xfsd5AQH5AUXde-Gfc"
            alt="Francisco Hanna"
            className="rounded-full w-24 h-24 mb-8 mt-0"
          />
          <h1 className="text-4xl font-extrabold tracking-tighter text-stone-800 mb-2">Francisco Hanna</h1>
          <p className="text-xl text-stone-800 tracking-tight  mt-0">
            Technical Lead at{" "}
            <a href="https://www.getlisto.io/" target="_blank" rel="noopener noreferrer" className="text-stone-800">
              Listo
            </a>
          </p>

          <div className="flex items-center gap-4">
            {social.map((item) => (
              <a
                title={item.name}
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-stone-200 rounded-lg grid place-content-center p-4 h-8 w-8 opacity-100 hover:opacity-75 cursor-pointer transition"
              >
                <item.icon className="text-stone-800" />
              </a>
            ))}
          </div>
        </div>

        {/* About me */}
        <section>
          <h2 className="text-xl uppercase font-bold tracking-tight text-stone-800 mt-8 mb-2">About me</h2>
          <p className="text-base text-stone-800">
            I’m a product-focused software engineer with 7+ years of experience in the IT industry, skilled in various programming languages
            and frameworks. I have successfully developed applications and contributed to projects for different companies. As a team
            player, I enjoy sharing my knowledge and expertise, helping to mentor and support fellow developers.
          </p>
          <p>Tech & Tools: Typescript, React, NodeJS, Express, SQL, AWS.</p>
        </section>

        {/* Work experience */}
        <section>
          <h2 className="text-xl uppercase font-bold tracking-tight text-stone-800 mt-8 mb-6">Work experience</h2>

          <ul className="list-none pl-0 space-y-8">
            {work.map((item) => (
              <li className="pl-0 group relative" key={item.title}>
                <div className="space-y-1 mb-4">
                  <h3 className="text-lg font-bold tracking-tight text-stone-800 mt-0 mb-0">{item.title}</h3>
                  <p className="text-base text-stone-800">{item.subtitle}</p>
                  <p className="text-base text-stone-800 opacity-50">{item.date}</p>
                </div>
                <p className="text-base text-stone-800 mt-2 mb-0">{item.description}</p>
                <ul className="pl-4">
                  {item.highlights?.map((highlight) => (
                    <li className="text-base text-stone-800" key={highlight}>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-xl uppercase font-bold tracking-tight text-stone-800 mt-8 mb-6">Education</h2>

          <ul className="list-none pl-0 space-y-8">
            {education.map((item) => (
              <li className="pl-0 group relative" key={item.title}>
                <div className="space-y-1 mb-4">
                  <h3 className="text-lg font-bold tracking-tight text-stone-800 mt-0 mb-0">{item.title}</h3>
                  <p className="text-base text-stone-800">{item.subtitle}</p>
                  <p className="text-base text-stone-800 opacity-50">{item.date}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
