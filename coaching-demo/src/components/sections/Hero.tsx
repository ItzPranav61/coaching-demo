import { site } from "@/data/site";

export default function Hero() {
  const report = site.hero.report;

  return <section id="home" className="hero" aria-labelledby="hero-title">
    <div className="container">
      <div className="hero-grid">
        <div className="hero-copy">
          <p className="margin-note">{site.hero.audience}</p>
          <h1 id="hero-title">{site.hero.title}</h1>
          <p className="hero-description">{site.hero.description}</p>
          <div className="hero-actions"><a className="button primary" href="#contact">{site.primaryCta}</a><a className="inline-link" href="#courses">{site.labels.viewCourses}</a></div>
          <p className="hero-promises">{site.hero.promises}</p>
          <div className="classroom-slot" role="img" aria-label={site.hero.photoLabel}>{site.hero.photoLabel}</div>
        </div>
        <figure className="progress-card">
          <figcaption className="report-top"><span>{report.title}</span><span className="stamp">{site.hero.stamp.map(line => <span key={line}>{line}</span>)}</span></figcaption>
          <div className="student-line"><span>{report.studentLabel}</span><strong>{report.student}</strong></div>
          <p className="report-period">{report.period}</p>
          <table className="progress-table"><thead><tr>{report.headings.map(heading => <th key={heading} scope="col">{heading}</th>)}</tr></thead><tbody>{report.subjects.map(subject => <tr key={subject.name}><th scope="row">{subject.name}</th><td>{subject.before}</td><td>{subject.after}</td></tr>)}</tbody></table>
          <div className="attendance"><span>{report.attendanceLabel}<small>{report.attendanceContext}</small></span><strong>{report.attendance}</strong></div>
          <div className="teacher-note"><p className="margin-note">{report.note}</p><p>{report.teacherNote}</p></div>
        </figure>
      </div>
      <div className="hero-foot"><p>{site.hero.disclaimer}</p><dl>{site.hero.stats.map(stat => <div key={stat.value}><dt>{stat.value}</dt><dd>{stat.context}</dd></div>)}</dl></div>
    </div>
  </section>;
}
