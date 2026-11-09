import { site } from "@/data/site";

export default function Faculty() {
  return <section id="faculty" className="faculty-section" aria-labelledby="faculty-title">
    <div className="container">
      <div className="section-heading"><h2 id="faculty-title">{site.faculty.title}</h2><p>{site.faculty.description}</p></div>
      <p className="margin-note faculty-note">{site.faculty.note}</p>
      <div className="faculty-cards">{site.faculty.items.map(person => <article className="faculty-card" key={person.name}>
        <div className="faculty-card-top">
          <div className="faculty-photo" role="img" aria-label={`${site.faculty.photoLabel}: ${person.name}`}>{site.faculty.photoLabel}</div>
          <div className="faculty-name"><h3>{person.name}</h3><p><span>{person.subject}</span><span className="experience">{person.experience}</span></p></div>
        </div>
        <p className="faculty-bio">{person.bio}</p>
      </article>)}</div>
    </div>
  </section>;
}
