import { FaGithubAlt } from "react-icons/fa";

import Logo from "../assets/activities.png";

const Footer = () => {
  return (
    <div>
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div className="col-md-4 d-flex align-items-center">
          <a
            href="/"
            className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1"
          >
            <img src={Logo} width="30" height="24" />
          </a>
          <span className="mb-3 mb-md-0 text-body-secondary">
            &copy; 2024 Company, Inc
          </span>
        </div>

        <ul className="nav col-md-4 justify-content-end d-flex">
          <li className="ms-3">
            <a className="text-body-secondary" href="#">
              <FaGithubAlt />
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
