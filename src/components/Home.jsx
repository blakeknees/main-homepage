import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/Home.scss";

export default function JenniferBlakney() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(timer);
  }, []);

  const v = visible ? "visible" : "";

  return (
    <div className="portfolio-root">
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className={`deco-line ${v}`} />

      <div className="content">
        <h1 className={`heading ${v}`}>
          Jennifer
          <span>Blakney</span>
        </h1>

        <div className={`divider ${v}`} />

        <p className={`subheading ${v}`}>
          Which part of me would you like to discover?
        </p>

        <div className={`buttons ${v}`}>
          <Link to="/dev" className="btn"><span>DEV</span></Link>
          <Link to="/cannabis" className="btn btn-alt"><span>CANNABIS</span></Link>
        </div>
      </div>

      <p className={`footer-mark ${v}`}>© Jennifer Blakney</p>
    </div>
  );
}
