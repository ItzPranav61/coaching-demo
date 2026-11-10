import { contactLinks, site } from "@/data/site";

export default function MobileContactBar() {
  return <nav className="mobile-contact" aria-label={site.labels.enquire}>
    <a href={contactLinks.call}>{site.labels.call}</a>
    <a href={contactLinks.whatsapp ?? "#contact"} aria-disabled={!contactLinks.whatsapp}>{site.labels.whatsapp}</a>
    <a className="mobile-enquire" href="#contact">{site.labels.enquire}</a>
  </nav>;
}
