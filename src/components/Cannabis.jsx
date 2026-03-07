import { useState, useEffect } from "react";
import "../styles/Cannabis.scss";

export default function Cannabis() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(timer);
  }, []);

  const v = visible ? "visible" : "";

  return (
    <div className="cannabis-root">
      <div className="orb orb-1" />
      <div className="orb orb-2" />

      <div className="content">
        <a href="/" className={`back-link ${v}`}>← Jennifer Blakney</a>
        <h1 className={`heading ${v}`}>Cannabis</h1>
        <div className={`divider ${v}`} />
        <p className={`subheading ${v}`}>
          {/* Add your cannabis content here */}
        </p>
      </div>

      <p className={`footer-mark ${v}`}>© Jennifer Blakney</p>
    </div>
  );
}
