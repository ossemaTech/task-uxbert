import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Navbar</a>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <span className="nav-link">
                <Link href={"/"} >
                  Home
                </Link>
              </span>
            </li>
            <li className="nav-item">
              <span className="nav-link">
                <Link href={"/favorites"}>
                  Liked
                </Link>
              </span>
            </li>
          </ul>
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  )
}
