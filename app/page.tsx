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
    description: `As the Tech Lead at Listo, a communication platform for frontline workers, I've designed and implemented the MVP, led major refactors for scalability, migrated an smartwatch app to Wear OS 3, and tackled technical challenges for reliable push notifications. I lead a team of five developers in developing features from inception to delivery.`,
  },
  {
    title: "Sr. Software Engineer",
    subtitle: "SparkDigital · Full Time",
    date: "Jan 2020 - Mar 2021",
    description:
      "As a full-stack engineer, I developed a tech demo application for Verizon and new features for Sapling Learning's e-learning platform.",
  },
  {
    title: "Ssr. Software Engineer",
    subtitle: "Plataforma 10 · Full Time",
    date: "Jul 2019 - Dec 2019",
    description:
      "I led the TravelPAQ outsourcing team and contributed to Plataforma 10’s core back-end teams, focusing on service provider integrations, stress test suites, and API maintenance.",
  },
  {
    title: "Ssr. Software Engineer",
    subtitle: "MINEXUS · Full Time",
    date: "Oct 2018 - Jun 2019",
    description:
      "Led a team to build a contractor documentation control system, including client web apps, a Single Sign-On service, and a RESTful API. I was responsible for the architecture, development, and API requirements.",
  },
  {
    title: "Full-Stack Web Developer",
    subtitle: "TravelPAQ · Full Time",
    date: "Jul 2017 - Nov 2018",
    description:
      "Developed back-office applications and a website whitelabel system for travel agencies. Assisted in migrating ETL processes to a microservice-based architecture.",
  },
  {
    title: "Full-Stack Web Developer",
    subtitle: "HEAL S.A. · Freelance",
    date: "Aug 2017 - Nov 2017",
    description: "Designed, documented, and implemented a real-time web app based inventory control system for a construction company.",
  },
  {
    title: "Web Developer Intern",
    subtitle: "Excelencia Soluciones Informaticas · Internship",
    date: "Oct 2015 - Apr 2016",
    description: "Implemented features and provided maintenance for web applications managing health care institutions.",
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
      <div className="mx-auto max-w-2xl lg:max-w-5xl prose text-stone-800">
        <div>
          <img
            src="https://media.licdn.com/dms/image/D4D03AQEXG3cCmokA1g/profile-displayphoto-shrink_800_800/0/1690399429821?e=1709769600&v=beta&t=QyzgLXkn5aUVuTn25lBMp9Hf1xfsd5AQH5AUXde-Gfc"
            alt="Francisco Hanna"
            className="rounded-full w-24 h-24 mb-8 mt-0"
          />
          <h1 className="font-extrabold tracking-tighter  mb-2">Francisco Hanna</h1>
          <p className=" font-normal tracking-tight mt-0">
            Technical Lead at{" "}
            <a href="https://www.getlisto.io/" target="_blank" rel="noopener noreferrer">
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
                <item.icon className="" />
              </a>
            ))}
          </div>
        </div>

        {/* About me */}
        <section className="">
          <h2 className="font-bold tracking-tight mt-8 mb-2">About me</h2>
          <p>
            I’m a product-focused software engineer with 7+ years of experience in the IT industry, skilled in various programming languages
            and frameworks. I have successfully developed applications and contributed to projects for different companies. As a team
            player, I enjoy sharing my knowledge and expertise, helping to mentor and support fellow developers. <br />
          </p>
          <p>Tech & Tools: Typescript, React, NodeJS, Express, SQL, AWS.</p>
        </section>

        {/* Work experience */}

        <section>
          <h2 className="font-bold tracking-tight  mt-8 mb-6">Work Experience</h2>

          <ul role="list" className="list-none p-0 space-y-8 -ml-1">
            {work.map((item, index) => (
              <li key={index} className="relative flex gap-x-4 p-0 m-0">
                {/* line */}
                {index === work.length - 1 ? null : (
                  <div className="absolute left-0 top-2 flex w-6 justify-center -bottom-10">
                    <div className="w-px bg-stone-200"></div>
                  </div>
                )}
                {/* dot */}
                <div className="relative flex h-6 w-6 flex-none items-center justify-center bg-transparent">
                  <div className="h-1.5 w-1.5 rounded-full bg-stone-200 ring-1 ring-stone-300"></div>
                </div>
                {/* content */}
                <div className="w-full">
                  <div className="space-y-1 mb-4 relative">
                    <h3 className="font-bold tracking-tight  mt-0 mb-0">{item.title}</h3>
                    <p className="">{item.subtitle}</p>
                    <p className="sm:absolute top-0 right-0 flex-none py-0.5 ml-auto leading-5 text-stone-500">{item.date}</p>
                  </div>
                  <p className=" mt-2 mb-0">{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="font-bold tracking-tight  mt-8 mb-6">Education</h2>

          <ul className="list-none pl-0 space-y-8">
            {education.map((item) => (
              <li className="pl-0 group relative" key={item.title}>
                <div className="space-y-1 mb-4">
                  <h3 className="font-bold tracking-tight mt-0 mb-0">{item.title}</h3>
                  <p>{item.subtitle}</p>
                  <p className="text-stone-500">{item.date}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
