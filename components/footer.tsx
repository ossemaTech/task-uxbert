import React from "react";

export default function Footer() {
  return (
    <div className="w-100 bg-success">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div className="col-md-4 d-flex align-items-center">
          <a href="/" className="mb-3 me-2 mb-md-0 text-white text-decoration-none lh-1 p-2 ">
            <i className="fa fa-home" aria-hidden="true"></i>
          </a>
          <span className="text-white">© 2021 Company, Inc</span>
        </div>

        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex pl-2 pr-2">
          <li className="ms-3"><a className="text-white" href="#"><i className="fa fa-twitter"></i></a></li>
          <li className="ms-3"><a className="text-white" href="#"><i className="fa fa-google-plus" aria-hidden="true"></i></a></li>
          <li className="ms-3"><a className="text-white" href="#"><i className="fa fa-paper-plane" aria-hidden="true"></i></a></li>
        </ul>
      </footer>
    </div>
  )
}
