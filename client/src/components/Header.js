import React from "react";
import Link from "next/link";

export const Header = ({ currentUser }) => {
  const links = [
    !currentUser && { label: "Registrar", href: "/auth/registrar" },
    !currentUser && { label: "Ingresar", href: "/auth/ingresar" },
    currentUser && { label: "Vender Tickets", href: "/tickets/nuevo" },
    currentUser && { label: "Mis Ordenes", href: "/ordenes" },
    currentUser && { label: "Salir", href: "/auth/salir" },
  ]
    .filter((linkConfig) => linkConfig)
    .map(({ label, href }) => (
      <li key={href} className="nav-item">
        <Link href={href}>
          <a className="nav-link">{label}</a>
        </Link>
      </li>
    ));

  return (
    <nav className="navbar navbar-light bg-light">
      <Link href="/">
        <a className="navbar-brand">Ticketing</a>
      </Link>

      <div className="d-flex justify-content-end">
        <ul className="nav d-flex align-items-center">{links}</ul>
      </div>
    </nav>
  );
};
