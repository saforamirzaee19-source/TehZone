import "../App.css";
import { LordIcon } from "@lordicon/react";

export default function Icons({ icon }) {
  return (
    <div className="icon-group">
      {icon.map((src, index) => (
        <button className="icon-sidbar" key={index} type="button">
          <LordIcon
            src={src}
            trigger="hover"
            target="button"
            aria-hidden="true"
          />
        </button>
      ))}
    </div>
  );
}
