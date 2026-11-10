"use client";

import { FormEvent, useEffect, useState } from "react";
import { contactLinks, createWhatsAppUrl, hasWhatsAppNumber, site } from "@/data/site";

type Props = {
  classValue: string;
  batchValue: string;
  onClassChange: (value: string) => void;
  onBatchChange: (value: string) => void;
};

type FieldName = "name" | "phone" | "class" | "batch";
type FieldErrors = Partial<Record<FieldName, string>>;

const fieldIds: Record<FieldName, string> = {
  name: "student-name",
  phone: "parent-phone",
  class: "student-class",
  batch: "preferred-batch",
};

function normaliseIndianMobile(value: string) {
  const digits = value.replace(/\D/g, "");
  const mobile = digits.length === 12 && digits.startsWith("91") ? digits.slice(2) : digits;

  return /^[6-9]\d{9}$/.test(mobile) ? mobile : null;
}

function createBookingMessage(name: string, classGroup: string, batch: string, phone: string) {
  return site.contact.form.messageTemplate
    .replace("{name}", name)
    .replace("{classGroup}", classGroup)
    .replace("{batch}", batch)
    .replace("{phone}", phone);
}

export default function Contact({ classValue, batchValue, onClassChange, onBatchChange }: Props) {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<FieldErrors>({});
  const content = site.contact;

  useEffect(() => {
    if (!hasWhatsAppNumber && process.env.NODE_ENV === "development") {
      console.warn(content.form.numberNotConfiguredWarning);
    }
  }, [content.form.numberNotConfiguredWarning]);

  function clearError(field: FieldName) {
    setSubmitted(false);
    setErrors(current => {
      if (!current[field]) return current;
      const next = { ...current };
      delete next[field];
      return next;
    });
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("studentName") ?? "").trim();
    const phone = normaliseIndianMobile(String(form.get("parentPhone") ?? ""));
    const classGroup = String(form.get("class") ?? "");
    const batch = String(form.get("batch") ?? "");
    const nextErrors: FieldErrors = {};

    if (!name) nextErrors.name = content.form.errors.name;
    if (!phone) nextErrors.phone = content.form.errors.phone;
    if (!classGroup) nextErrors.class = content.form.errors.class;
    if (!batch) nextErrors.batch = content.form.errors.batch;

    const firstError = (Object.keys(fieldIds) as FieldName[]).find(field => nextErrors[field]);
    if (firstError) {
      setSubmitted(false);
      setErrors(nextErrors);
      requestAnimationFrame(() => document.getElementById(fieldIds[firstError])?.focus());
      return;
    }

    if (!phone) return;

    const url = createWhatsAppUrl(createBookingMessage(name, classGroup, batch, phone));
    if (!url) return;

    window.open(url, "_blank", "noopener,noreferrer");
    setErrors({});
    setSubmitted(true);
  }

  return <section id="contact" className="contact-section" aria-labelledby="contact-title">
    <div className="container contact-grid">
      <div className="contact-copy"><h2 id="contact-title">{content.title}</h2><p className="intro">{content.description}</p>
        <div className="coordinator"><span className="initials" aria-hidden="true">{content.coordinator.initials}</span><div><h3>{content.coordinator.name}</h3><p className="small-note">{content.coordinator.role}</p></div></div>
        <p className="coordinator-message">{content.coordinator.message}</p><a className="button" href={contactLinks.whatsapp ?? "#contact"} aria-disabled={!contactLinks.whatsapp}>{content.coordinator.cta}</a>
        <dl className="contact-details">
          <div><dt>{content.detailsLabels.address}</dt><dd>{content.address}</dd></div>
          <div><dt>{content.detailsLabels.timings}</dt><dd>{content.timings}</dd></div>
          <div><dt>{content.detailsLabels.email}</dt><dd><a href={`mailto:${content.email}`}>{content.email}</a></dd></div>
        </dl>
        <a className="inline-link phone-link" href={contactLinks.call}>{site.labels.call} {content.phone}</a><p className="small-note contact-disclaimer">{content.placeholderNote}</p>
      </div>
      <div className="admission-slip">
        <div className="slip-heading"><p className="margin-note">{content.form.reference}</p><h3>{content.form.title}</h3></div>
        <form onSubmit={handleSubmit} noValidate>
          <div className="form-fields">
            <label className="field" htmlFor={fieldIds.name}>{content.form.name}<input id={fieldIds.name} name="studentName" autoComplete="name" maxLength={100} aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? `${fieldIds.name}-error` : undefined} onChange={() => clearError("name")} />{errors.name && <span id={`${fieldIds.name}-error`} className="field-error" role="alert">{errors.name}</span>}</label>
            <label className="field" htmlFor={fieldIds.phone}>{content.form.phone}<input id={fieldIds.phone} name="parentPhone" type="tel" inputMode="tel" autoComplete="tel" maxLength={20} aria-invalid={Boolean(errors.phone)} aria-describedby={errors.phone ? `${fieldIds.phone}-error` : undefined} onChange={() => clearError("phone")} />{errors.phone && <span id={`${fieldIds.phone}-error`} className="field-error" role="alert">{errors.phone}</span>}</label>
            <label className="field" htmlFor={fieldIds.class}>{content.form.class}<select id={fieldIds.class} name="class" value={classValue} onChange={event => { onClassChange(event.target.value); clearError("class"); }} aria-invalid={Boolean(errors.class)} aria-describedby={errors.class ? `${fieldIds.class}-error` : undefined}><option value="" disabled>{content.form.chooseClass}</option>{content.form.classes.map(item => <option key={item}>{item}</option>)}</select>{errors.class && <span id={`${fieldIds.class}-error`} className="field-error" role="alert">{errors.class}</span>}</label>
            <label className="field" htmlFor={fieldIds.batch}>{content.form.batch}<select id={fieldIds.batch} name="batch" value={batchValue} onChange={event => { onBatchChange(event.target.value); clearError("batch"); }} aria-invalid={Boolean(errors.batch)} aria-describedby={errors.batch ? `${fieldIds.batch}-error` : undefined}><option value="" disabled>{content.form.chooseBatch}</option>{content.form.batches.map(item => <option key={item}>{item}</option>)}</select>{errors.batch && <span id={`${fieldIds.batch}-error`} className="field-error" role="alert">{errors.batch}</span>}</label>
          </div>
          <p id="form-notice" className="small-note">{content.form.notice}</p>
          {!hasWhatsAppNumber && <p className="number-not-configured" role="status">{content.form.numberNotConfigured}</p>}
          <button type="submit" aria-describedby="form-notice" className="button primary submit-button">{content.form.submit}</button>
        </form>
        <div role="status" aria-live="polite" aria-atomic="true">{submitted && <div className="next-panel">
          <p className="status-confirmation">{content.form.confirmation}</p><h4>{content.form.nextTitle}</h4>
          <ol>{content.form.steps.map(step => <li key={step.title}><strong>{step.title}</strong><p>{step.description}</p></li>)}</ol><p className="small-note">{content.form.nextNote}</p>
        </div>}</div>
      </div>
    </div>
  </section>;
}
