import react, { useState } from "react";
import "./Header.css"

export default function Headers({
    brand = {text: "space", href: "/"},
    links = [
        { label: "Головна", href: "#" },
        { label: "Продукти", href: "#" },
        { label: "Про нас", href: "#" },
        { label: "Контакти", href: "#" },
      ],
}){
    const [open, setOpen] = useState(false);
    
    return (
        <header className="hdr">
          <a className="hdr__logo" href={brand.href}>{brand.text}</a>
    
          <button
            className="hdr__burger"
            aria-label="Перемкнути меню"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
    
          <nav className={`hdr__nav ${open ? "is-open" : ""}`}>
            {links.map((l) => (
              <a key={l.label} className="hdr__link" href={l.href}>
                {l.label}
              </a>
            ))}
          </nav>
        </header>
      );
}