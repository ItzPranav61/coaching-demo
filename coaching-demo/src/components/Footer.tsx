import { site } from "@/data/site";

export default function Footer() {
  return <footer className="site-footer">
    <div className="container">
      <div className="footer-top">
        <div><a className="brand" href="#home">{site.brand}</a><p>{site.footer.blurb}</p></div>
        <nav aria-label={site.footer.linksLabel}>{site.nav.map(link => <a href={link.href} key={link.href}>{link.label}</a>)}</nav>
      </div>
      <div className="footer-bottom"><p>© {site.footer.year} {site.footer.copyright}</p><p>{site.footer.note}</p></div>
    </div>
  </footer>;
}
