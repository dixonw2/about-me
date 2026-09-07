import type { ReactNode } from "react";
import styles from "./App.module.css";

const Greeting = () => {
  return (
    <div className={styles.greeting}>
      <h1>Welcome! I'm Wyatt,</h1>
      <p>a software developer with 5 years of experience.</p>
    </div>
  );
};

const Section = ({
  sectionName,
  children,
}: {
  sectionName: string;
  children: ReactNode;
}) => {
  const sectionId = sectionName.toLowerCase();
  return (
    <section aria-labelledby={sectionId}>
      <h3 id={sectionId} className={styles.sectionTitle}>
        {sectionName}
      </h3>
      {children}
    </section>
  );
};

type EntryDate = {
  value: string;
  label: string;
};

const SectionEntry = ({
  title,
  organization,
  startDate,
  endDate,
  children,
}: {
  title: string;
  organization: string;
  startDate: EntryDate;
  endDate: EntryDate;
  children: ReactNode;
}) => {
  return (
    <div className={styles.entry}>
      <header className={styles.entryHeading}>
        <h4 className={styles.entryTitle}>{title}</h4>
        <div className={styles.entryDate}>
          <time dateTime={startDate.value}>{startDate.label}</time>
          {" - "}
          <time dateTime={endDate.value}>{endDate.label}</time>
        </div>
      </header>
      <p className={styles.organization}>{organization}</p>
      {children}
    </div>
  );
};

const Education = () => {
  return (
    <Section sectionName="Education">
      <SectionEntry
        title="Bachelor of Science"
        organization="Northern Kentucky University"
        startDate={{ value: "2015-08", label: "January 2015" }}
        endDate={{ value: "2019-05", label: "May 2019" }}
      >
        <p className={styles.details}>
          Computer Science major, Mathematics minor
        </p>
      </SectionEntry>
    </Section>
  );
};

const Experience = () => {
  return (
    <Section sectionName="Experience">
      <SectionEntry
        title="Software Engineer I"
        organization="Advantage Solutions"
        startDate={{ value: "2022-01", label: "January 2022" }}
        endDate={{ value: "2024-10", label: "October 2024" }}
      >
        <ul className={styles.details}>
          <li>
            Built and maintained ETL pipelines for clients using Python
            (Selenium) and .NET/SQL Server.
          </li>
          <li>
            Led the development of an automated config-driven SLA monitoring
            project that stored metrics from incoming emails using Power
            Automate, read into a DuckDB database with PowerShell, and then
            evaluated to update a SharePoint list Dashboard.
          </li>
        </ul>
      </SectionEntry>
      <SectionEntry
        title="Software Developer"
        organization="Invar Systems"
        startDate={{ value: "2020-05", label: "May 2020" }}
        endDate={{ value: "2021-08", label: "August 2021" }}
      >
        <ul className={styles.details}>
          <li>
            Created Warehouse Management software using .NET, WPF, and SQL
            Server.
          </li>
          <li>
            Traveled to the client's site to perform on-site
            integration/acceptance/end-to-end testing.
          </li>
        </ul>
      </SectionEntry>
      <SectionEntry
        title="Software Engineer"
        organization="TATA Consultancy Services"
        startDate={{ value: "2019-06", label: "June 2019" }}
        endDate={{ value: "2020-05", label: "May 2020" }}
      >
        <ul className={styles.details}>
          <li>
            Supported a client's website using Java, JSP, JavaScript, Oracle
            SQL, and SQL Server.
          </li>
        </ul>
      </SectionEntry>
    </Section>
  );
};

const Skills = () => {
  return (
    <Section sectionName="Skills">
      <div className={styles.entry}>
        <ul className={styles.details}>
          <li>
            <b>Languages:</b>Java, C#, Python, JavaScript, TypeScript
          </li>
          <li>
            <b>Technologies:</b> React, HTML/CSS, RESTful APIs (FastAPI),
            WPF/Avalonia, Selenium, SQL Server, PostgreSQL, Azure, Git, and some
            experience with PowerShell and Power Automate
          </li>
          <li>
            <b>Other:</b> Experience in Agile environments (primarily Kanban),
            Test Driven Development
          </li>
        </ul>
      </div>
    </Section>
  );
};

const ProfDevelopment = () => {
  return (
    <Section sectionName="Professional Development">
      <SectionEntry
        title="The Ultimate React Course 2025: React, Next.js, Redux & More"
        organization="Udemy"
        startDate={{ value: "2026-07", label: "July 2026" }}
        endDate={{ value: "2026", label: "Present" }}
      >
        <ul className={styles.details}>
          <li>Learning modern Full Stack development using React</li>
        </ul>
      </SectionEntry>
    </Section>
  );
};

const Information = () => {
  return (
    <div className={styles.information}>
      <Education />
      <Experience />
      <Skills />
      <ProfDevelopment />
    </div>
  );
};

const Profile = () => {
  return (
    <aside className={styles.side}>
      <img
        className={styles.pic}
        src="https://thumbs.dreamstime.com/b/businessman-outdoor-business-center-background-successful-business-person-portrait-professional-people-formal-wear-red-119656046.jpg"
        alt="Professional pic"
      />
    </aside>
  );
};

const App = () => {
  return (
    <main className={styles.container}>
      <Greeting />
      <Information />
      <Profile />
    </main>
  );
};

export default App;
