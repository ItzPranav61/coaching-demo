"use client";

import { useState } from "react";
import { contactLinks, site } from "@/data/site";

type Props = {
  classValue: string;
  batchValue: string;
  onClassChange: (value: string) => void;
  onBatchChange: (value: string) => void;
};

export default function Contact({ classValue, batchValue, onClassChange, onBatchChange }: Props) {
  const [submitted, setSubmitted] = useState(false);
  const content = site.contact;

  return <section id="contact" className="contact-section" aria-labelledby="contact-title">
    <div className="container contact-grid">
      <div className="contact-copy"><h2 id="contact-title">{content.title}</h2><p className="intro">{content.description}</p>
        <div className="coordinator"><span className="initials" aria-hidden="true">{content.coordinator.initials}</span><div><h3>{content.coordinator.name}</h3><p className="small-note">{content.coordinator.role}</p></div></div>
        <p className="coordinator-message">{content.coordinator.message}</p><a className="button" href={contactLinks.whatsapp}>{content.coordinator.cta}</a>
        <dl className="contact-details">
          <div><dt>{content.detailsLabels.address}</dt><dd>{content.address}</dd></div>
          <div><dt>{content.detailsLabels.timings}</dt><dd>{content.timings}</dd></div>
          <div><dt>{content.detailsLabels.email}</dt><dd><a href={`mailto:${content.email}`}>{content.email}</a></dd></div>
        </dl>
        <a className="inline-link phone-link" href={contactLinks.call}>{site.labels.call} {content.phone}</a><p className="small-note contact-disclaimer">{content.placeholderNote}</p>
      </div>
      <div className="admission-slip">
        <div className="slip-heading"><p className="margin-note">{content.form.reference}</p><h3>{content.form.title}</h3></div>
        <form onSubmit={event => { event.preventDefault(); setSubmitted(true); }} onChange={() => setSubmitted(false)}>
          <div className="form-fields">
            <label className="field" htmlFor="student-name">{content.form.name}<input id="student-name" name="studentName" autoComplete="name" required maxLength={100} /></label>
            <label className="field" htmlFor="parent-phone">{content.form.phone}<input id="parent-phone" name="parentPhone" type="tel" inputMode="tel" autoComplete="tel" required minLength={10} maxLength={20} pattern="[+]?[0-9][0-9 ]{8,18}[0-9]" /></label>
            <label className="field" htmlFor="student-class">{content.form.class}<select id="student-class" name="class" value={classValue} onChange={event => onClassChange(event.target.value)} required><option value="" disabled>{content.form.chooseClass}</option>{content.form.classes.map(item => <option key={item}>{item}</option>)}</select></label>
            <label className="field" htmlFor="preferred-batch">{content.form.batch}<select id="preferred-batch" name="batch" value={batchValue} onChange={event => onBatchChange(event.target.value)} required><option value="" disabled>{content.form.chooseBatch}</option>{content.form.batches.map(item => <option key={item}>{item}</option>)}</select></label>
          </div>
          <p id="form-notice" className="small-note">{content.form.notice}</p><button type="submit" aria-describedby="form-notice" className="button primary submit-button">{content.form.submit}</button>
        </form>
        <div role="status" aria-live="polite" aria-atomic="true">{submitted && <div className="next-panel">
          <p className="status-confirmation">{content.form.confirmation}</p><h4>{content.form.nextTitle}</h4>
          <ol>{content.form.steps.map(step => <li key={step.title}><strong>{step.title}</strong><p>{step.description}</p></li>)}</ol><p className="small-note">{content.form.nextNote}</p>
        </div>}</div>
      </div>
    </div>
  </section>;
}
