import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "react-feather";
import { useRouter } from "next/router";
import MediaQuery from "react-responsive";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog"}
];

const Navigation = () => {
  const { pathname } = useRouter();
  const [mobileMenuHidden, setMobileMenuHidden] = useState(true);
  return (
    <nav>
      <style jsx>{`
        ul {
          display: flex;
          justify-content: space-between;
        }
        nav > ul {
          padding: 0px;
        }
        li {
          display: flex;
          padding: 10px 10px;
        }
        li.active {
          border-bottom: 3px ridge currentColor;
        }
        a {
          color: white;
          font-size: 20px;
          font-weight: bold;
          text-decoration: none;
        }
        button {
          background-color: Transparent;
          border: none;
          color: #fff;
          outline: none;
          height: 50px;
          width: 60%;
        }
        .dropdown {
          background-color: var(--darkblue);
          height: 100%;
          width: 100%;
          position: fixed;
          z-index: 1;
          left: 0;
          top: 0;
          overflow: auto;
          animation: fadeIn ease 0.5s;
        }
        @keyframes fadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
        .flexmid {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
        }
        .logo {
          width: 40%;
          height: 50px;
          object-fit: contain;
          float: left;
          top: 50%;
        }
        img {
          height: 100%;
        }
      `}</style>
      <div className="container">
        {/* Desktop Display */}
        <MediaQuery minDeviceWidth={768}>
          <ul className="container">
            {links.map(({ href, label }) => (
              <li
                key={href}
                className={pathname === href ? "active" : undefined}
              >
                <Link href={href}>
                  <a>{label}</a>
                </Link>
              </li>
            ))}
          </ul>
        </MediaQuery>
        {/* Phone Display */}
        <MediaQuery maxDeviceWidth={767}>
          <button
            onClick={() => {
              setMobileMenuHidden(false);
            }}
          >
            <Menu />
          </button>
          <div className="dropdown" hidden={mobileMenuHidden}>
            <div className="container flexmid">
              <button
                style={{ marginBottom: "16vh", paddingLeft: "90%", width: "100%" }}
                onClick={() => {
                  setMobileMenuHidden(true);
                }}
              >
                <X />
              </button>
              {links.map(({ href, label }) => (
                <li
                  style={{ margin: "15px" }}
                  key={href}
                  className={pathname === href ? "active" : undefined}
                >
                  <Link href={href}>
                    <a>{label}</a>
                  </Link>
                </li>
              ))}
            </div>
          </div>
        </MediaQuery>
      </div>
    </nav>
  );
};

export default Navigation;
