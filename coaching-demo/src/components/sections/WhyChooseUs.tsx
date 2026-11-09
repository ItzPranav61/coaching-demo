import { site } from "@/data/site";

export default function WhyChooseUs() {
  const preview = site.why.preview;

  return <section id="why-us" className="why-section" aria-labelledby="why-title">
    <div className="container why-grid">
      <div><h2 id="why-title">{site.why.title}</h2><p className="intro">{site.why.description}</p>
        <div className="method-list">{site.why.items.map(item => <article key={item.title}><h3>{item.title}</h3><p>{item.description}</p></article>)}</div>
      </div>
      <figure className="parent-preview">
        <figcaption>{preview.title}</figcaption><p className="margin-note">{preview.label}</p><p className="preview-period">{preview.period}</p>
        <dl>{preview.rows.map(row => <div key={row.label}><dt>{row.label}</dt><dd>{row.value}</dd></div>)}</dl>
        <div className="parent-note"><p className="margin-note">{preview.noteLabel}</p><p>{preview.note}</p></div>
        <p className="preview-caption">{preview.caption}</p>
      </figure>
    </div>
  </section>;
}
