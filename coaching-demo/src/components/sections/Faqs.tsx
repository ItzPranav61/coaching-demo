import { site } from "@/data/site";

export default function Faqs() {
  return <section id="faqs" className="faq-section" aria-labelledby="faqs-title"><div className="container">
    <div className="faq-heading"><h2 id="faqs-title">{site.faqs.title}</h2><p className="margin-note">{site.faqs.note}</p></div>
    <div className="faq-list">{site.faqs.items.map((item, index) => <details key={item.question} open={index === 0}><summary>{item.question}<span aria-hidden="true" className="faq-symbol" /></summary><p>{item.answer}</p></details>)}</div>
  </div></section>;
}
