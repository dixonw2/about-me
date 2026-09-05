import styles from "./App.refined.module.css";

const Greeting = () => {
  return (
    <div className={styles.greeting}>
      <h1>Welcome! I'm Wyatt,</h1>
      <h3>a software developer with 5 years of experience. </h3>
    </div>
  );
};

// const Education = () => {
//   return (
//     <>
//       <h4>Education</h4>
//       <p>
//         <b>Northern Kentucky University (2015 - 2019)</b>
//       </p>
//       <p>Bachelor of Science in Computer Science, Minor in Mathematics</p>
//     </>
//   );
// };

// const Experience = () => {
//   return (
//     <>
//       <h4>Experience</h4>
//       <ul>
//         <li>
//           <b>Software Engineer I</b> at Advantage Solutions (January 2022 -
//           October 2024)
//         </li>
//         <ul>
//           <li>
//             Built and maintained ETL pipelines for clients using Python
//             (Selenium) and .NET/SQL Server.
//           </li>
//           <li>
//             Led the development of an automated config-driven SLA monitoring
//             project that stored metrics from incoming emails in an Excel file
//             daily using Power Automate, read into a DuckDB database with
//             PowerShell, and then evaluated to update a SharePoint list
//             Dashboard.
//           </li>
//         </ul>
//         <li>
//           <b>Software Developer</b> at Invar Systems (May 2020 - August 2021)
//         </li>
//         <ul>
//           <li>
//             Created Warehouse Management software using .NET, WPF, and SQL
//             Server.
//           </li>
//           <li>
//             Traveled to the client's site to perform on-site
//             integration/acceptance/end-to-end testing.
//           </li>
//         </ul>
//         <li>
//           <b>Software Engineer</b> at TATA Consultancy Services (June 2019 - May
//           2020)
//         </li>
//         <ul>
//           <li>
//             Supported a client's website using Java, JSP, JavaScript, Oracle
//             SQL, and SQL Server.
//           </li>
//         </ul>
//       </ul>
//     </>
//   );
// };

// const Skills = () => {
//   return (
//     <>
//       <h4>Skills</h4>
//       <ul>
//         <li>
//           <b>Languages:</b> JavaScript, TypeScript, Java, C#, Python
//         </li>
//         <li>
//           <b>Technologies:</b> React, HTML/CSS, RESTful APIs (FastAPI),
//           WPF/Avalonia, Selenium, SQL Server, PostgreSQL, Azure, Git, and some
//           experience with PowerShell and Power Automate
//         </li>
//         <li>
//           <b>Other:</b> Experience in Agile environments (primarily Kanban),
//           Test Driven Development
//         </li>
//       </ul>
//     </>
//   );
// };

// const ProfDevelopment = () => {
//   return (
//     <>
//       <h4>Professional Development</h4>
//       <ul>
//         <li>
//           <b>
//             The Ultimate React Course 2025: React, Next.js, Redux & More (Udemy)
//           </b>
//         </li>
//       </ul>
//     </>
//   );
// };

const Education = () => {
  return (
    <section aria-labelledby="education-heading">
      <h2 id="education-heading" className={styles.sectionTitle}>
        Education
      </h2>

      <article className={styles.entry}>
        <header className={styles.entryHeader}>
          <div>
            <h3 className={styles.entryTitle}>Bachelor of Science</h3>
            <p className={styles.organization}>Northern Kentucky University</p>
          </div>

          <p className={styles.date}>
            <time dateTime="2015">2015</time>
            {" - "}
            <time dateTime="2019">2019</time>
          </p>
        </header>

        <p className={styles.detail}>
          Computer Science major, Mathematics minor
        </p>
      </article>
    </section>
  );
};

const Experience = () => {
  return (
    <section aria-labelledby="experience-heading">
      <h2 id="experience-heading" className={styles.sectionTitle}>
        Experience
      </h2>

      <article className={styles.entry}>
        <header className={styles.entryHeader}>
          <div>
            <h3 className={styles.entryTitle}>Software Engineer I</h3>
            <p className={styles.organization}>Advantage Solutions</p>
          </div>

          <p className={styles.date}>
            <time dateTime="2022-01">January 2022</time>
            {" - "}
            <time dateTime="2024-10">October 2024</time>
          </p>
        </header>

        <ul className={styles.description}>
          <li>
            Built and maintained ETL pipelines for clients using Python
            (Selenium) and .NET/SQL Server.
          </li>
          <li>
            Led the development of an automated config-driven SLA monitoring
            project that stored metrics from incoming emails in an Excel file
            daily using Power Automate, read into a DuckDB database with
            PowerShell, and then evaluated to update a SharePoint list
            Dashboard.
          </li>
        </ul>
      </article>

      <article className={styles.entry}>
        <header className={styles.entryHeader}>
          <div>
            <h3 className={styles.entryTitle}>Software Developer</h3>
            <p className={styles.organization}>Invar Systems</p>
          </div>

          <p className={styles.date}>
            <time dateTime="2020-05">May 2020</time>
            {" - "}
            <time dateTime="2021-08">August 2021</time>
          </p>
        </header>

        <ul className={styles.description}>
          <li>
            Created Warehouse Management software using .NET, WPF, and SQL
            Server.
          </li>
          <li>
            Traveled to the client's site to perform on-site
            integration/acceptance/end-to-end testing.
          </li>
        </ul>
      </article>

      <article className={styles.entry}>
        <header className={styles.entryHeader}>
          <div>
            <h3 className={styles.entryTitle}>Software Engineer</h3>
            <p className={styles.organization}>TATA Consultancy Services</p>
          </div>

          <p className={styles.date}>
            <time dateTime="2019-06">June 2019</time>
            {" - "}
            <time dateTime="2020-05">May 2020</time>
          </p>
        </header>

        <ul className={styles.description}>
          <li>
            Supported a client's website using Java, JSP, JavaScript, Oracle
            SQL, and SQL Server.
          </li>
        </ul>
      </article>
    </section>
  );
};

const Skills = () => {
  return (
    <section aria-labelledby="skills-heading">
      <h2 id="skills-heading" className={styles.sectionTitle}>
        Skills
      </h2>

      <dl className={styles.skills}>
        <div className={styles.skillGroup}>
          <dt>Languages</dt>
          <dd>List your primary programming languages</dd>
        </div>

        <div className={styles.skillGroup}>
          <dt>Frameworks</dt>
          <dd>List your frameworks and application technologies</dd>
        </div>

        <div className={styles.skillGroup}>
          <dt>Data and Cloud</dt>
          <dd>List your databases, cloud platforms, and data tools</dd>
        </div>

        <div className={styles.skillGroup}>
          <dt>Tools</dt>
          <dd>List your development, automation, and version-control tools</dd>
        </div>

        <div className={styles.skillGroup}>
          <dt>Practices</dt>
          <dd>List your testing methodologies and development processes</dd>
        </div>
      </dl>
    </section>
  );
};

const App = () => {
  return (
    <div className={styles.container}>
      <Greeting />
      {/* <div className={styles.information}>
        <Education />
        <Experience />
        <Skills />
        <ProfDevelopment />
      </div> */}
      <div className={styles.information}>
        <Education />
        <Experience />
        <Skills />
      </div>
      <aside className={styles.side}>
        <img
          className={styles.pic}
          src="https://thumbs.dreamstime.com/b/businessman-outdoor-business-center-background-successful-business-person-portrait-professional-people-formal-wear-red-119656046.jpg"
        />
      </aside>
    </div>
  );
};

export default App;
