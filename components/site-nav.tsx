"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { navigation } from "@/content/site";
import { Arrow } from "./ui";

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  useEffect(() => { setOpen(false); }, [pathname]);
  useEffect(() => {
    if (!open) return;
    menuRef.current?.querySelector<HTMLAnchorElement>("a")?.focus();
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") { setOpen(false); buttonRef.current?.focus(); }
      if (event.key === "Tab") {
        const links = menuRef.current?.querySelectorAll<HTMLAnchorElement>("a");
        if (!links?.length) return;
        if (event.shiftKey && document.activeElement === links[0]) { event.preventDefault(); buttonRef.current?.focus(); }
        else if (!event.shiftKey && document.activeElement === links[links.length - 1]) { event.preventDefault(); buttonRef.current?.focus(); }
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [open]);
  return <nav className="site-nav" aria-label="Main navigation">
    <Link href="/" className="brand" aria-label="UVOLV homepage"><Image src="/assets/uvolv-logo.png" width={46} height={46} alt="" priority /><span>uvolv<span className="brand-period">.</span></span></Link>
    <div className="desktop-nav">{navigation.map(item => <Link key={item.href} href={item.href} aria-current={pathname === item.href ? "page" : undefined}>{item.label}</Link>)}</div>
    <Link href="/contact" className="nav-contact">Let’s talk <Arrow diagonal /></Link>
    <button ref={buttonRef} className="menu-button" aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? "Close navigation" : "Open navigation"} onClick={() => setOpen(value => !value)}><span /> <span /></button>
    {open && <div id="mobile-navigation" className="mobile-nav" ref={menuRef}>{[...navigation, { label: "Contact", href: "/contact" }].map(item => <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}<Arrow diagonal /></Link>)}</div>}
  </nav>;
}
