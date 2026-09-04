import styles from "./App.module.css";

const Greeting = () => {
  return (
    <div className={styles.greeting}>
      <h1>Welcome! I'm Wyatt,</h1>
      <h3>a software developer with 5 years of experience. </h3>
    </div>
  );
};

const Education = () => {
  return (
    <>
      <h4>Education</h4>
      <p>
        <b>Northern Kentucky University (2015 - 2019)</b>
      </p>
      <p>Bachelor of Science in Computer Science, Minor in Mathematics</p>
    </>
  );
};

const Experience = () => {
  return (
    <>
      <h4>Experience</h4>
      <ul>
        <li>
          <b>Software Engineer I</b> at Advantage Solutions (January 2022 -
          October 2024)
        </li>
        <ul>
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
        <li>
          <b>Software Developer</b> at Invar Systems (May 2020 - August 2021)
        </li>
        <ul>
          <li>
            Created Warehouse Management software using .NET, WPF, and SQL
            Server.
          </li>
          <li>
            Traveled to the client's site to perform on-site
            integration/acceptance/end-to-end testing.
          </li>
        </ul>
        <li>
          <b>Software Engineer</b> at TATA Consultancy Services (June 2019 - May
          2020)
        </li>
        <ul>
          <li>
            Supported a client's website using Java, JSP, JavaScript, Oracle
            SQL, and SQL Server.
          </li>
        </ul>
      </ul>
    </>
  );
};

const Skills = () => {
  return (
    <>
      <h4>Skills</h4>
      <ul>
        <li>
          <b>Languages:</b> JavaScript, TypeScript, Java, C#, Python
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
    </>
  );
};

const ProfDevelopment = () => {
  return (
    <>
      <h4>Professional Development</h4>
      <ul>
        <li>
          <b>
            The Ultimate React Course 2025: React, Next.js, Redux & More (Udemy)
          </b>
        </li>
      </ul>
    </>
  );
};

const App = () => {
  return (
    <div className={styles.container}>
      <Greeting />
      <div className={styles.information}>
        <Education />
        <Experience />
        <Skills />
        <ProfDevelopment />
      </div>
      <img
        className={styles.side}
        src="https://thumbs.dreamstime.com/b/businessman-outdoor-business-center-background-successful-business-person-portrait-professional-people-formal-wear-red-119656046.jpg"
      />
    </div>
  );
};

export default App;
