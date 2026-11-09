"use client";

import { useState } from "react";
import { site } from "@/data/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return <header className="site-header">
    <div className="container header-inner">
      <a href="#home" className="brand" onClick={() => setOpen(false)}>
        <span className="brand-mark" aria-hidden="true">{site.monogram}</span>
        <span>{site.brand}</span>
      </a>
      <button className="menu-toggle" type="button" aria-expanded={open} aria-controls="main-navigation" onClick={() => setOpen(!open)}>
        {site.labels.menu} <span aria-hidden="true">{open ? "−" : "+"}</span>
      </button>
      <nav id="main-navigation" aria-label={site.labels.navigation} className={`main-navigation ${open ? "is-open" : ""}`} onKeyDown={event => { if (event.key === "Escape") setOpen(false); }}>
        {site.nav.map(link => <a key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}</a>)}
      </nav>
      <a className="button primary header-cta" href="#contact">{site.primaryCta}</a>
    </div>
  </header>;
}
