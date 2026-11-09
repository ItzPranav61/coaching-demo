import { site } from "@/data/site";

export default function Results() {
  return <section id="results" className="results-section" aria-labelledby="results-title">
    <div className="container">
      <div className="section-heading"><div><p className="margin-note">{site.results.note}</p><h2 id="results-title">{site.results.title}</h2></div><p>{site.results.description}</p></div>
      <div className="results-sheet"><table><caption>{site.results.caption}</caption>
        <thead><tr>{site.results.headings.map(heading => <th key={heading} scope="col">{heading}</th>)}</tr></thead>
        <tbody>{site.results.rows.map(row => <tr key={row.measure}><th scope="row">{row.measure}</th><td>{row.students}</td><td>{row.context}</td></tr>)}</tbody>
      </table></div>
      <p className="margin-note testimonial-label">{site.results.testimonialLabel}</p>
      <div className="testimonials">{site.results.testimonials.map(item => <figure key={item.name}><blockquote><p>“{item.quote}”</p></blockquote><figcaption><strong>{item.name}</strong><span>{item.context}</span></figcaption></figure>)}</div>
    </div>
  </section>;
}
