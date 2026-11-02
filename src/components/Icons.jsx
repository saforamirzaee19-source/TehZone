import "../App.css";
import { LordIcon } from "@lordicon/react";

export default function Icons({ icon }) {
  return (
    <div className="icon-group">
      {icon.map(({ src, label }) => (
        <button
          className="icon-sidbar"
          key={label}
          type="button"
          title={label}
          aria-label={label}
        >
          <LordIcon src={src} trigger="hover" target="button" aria-hidden="true" />
        </button>
      ))}
    </div>
  );
}
