"use client"

import Link from "next/link"
import { Facebook, Instagram, Youtube, Twitter } from "lucide-react"

export function Footer() {
  const quickLinks = [
    { label: "About School", href: "#about" },
    { label: "Principal's Message", href: "#principal" },
    { label: "Admissions", href: "#admissions" },
    { label: "Fee Structure", href: "/fee-structure" },
  ]

  const resources = [
    { label: "Gallery", href: "#gallery" },
    { label: "Events", href: "#events" },
    { label: "Book List", href: "/book-list" },
    { label: "Mandatory Disclosure", href: "/mandatory-disclosure" },
  ]

  const davLinks = [
    { label: "About DAVCMC", href: "https://davcmc.net.in/", external: true },
    { label: "Arya Samaj", href: "http://appsabha.org/", external: true },
    { label: "DAVCMC Videos", href: "https://www.youtube.com/user/DAVCMCVIDEOS", external: true },
  ]

  return (
    <footer className="relative border-t border-border/50 bg-card/30 backdrop-blur">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">JPV DAV Public School</h3>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
              Delivering excellence in education since 1998. Shaping future leaders with values, knowledge, and
              character.
            </p>
            <div className="flex gap-3">
              <Link
                href="https://www.facebook.com"
                target="_blank"
                className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <Facebook className="h-4 w-4 text-primary" />
              </Link>
              <Link
                href="https://www.instagram.com"
                target="_blank"
                className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <Instagram className="h-4 w-4 text-primary" />
              </Link>
              <Link
                href="https://www.youtube.com"
                target="_blank"
                className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <Youtube className="h-4 w-4 text-primary" />
              </Link>
              <Link
                href="https://www.twitter.com"
                target="_blank"
                className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <Twitter className="h-4 w-4 text-primary" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Resources</h3>
            <ul className="space-y-2">
              {resources.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* DAV Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">DAV Network</h3>
            <ul className="space-y-2">
              {davLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/50 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} JPV DAV Public School, Katni. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
