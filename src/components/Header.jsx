import { LordIcon } from "@lordicon/react";

export default function Header({ notification, message, cart }) {
  return (
    <header className="header">
      <div className="right-side">
        <h1>TechZone - Your Website Store</h1>
        <span>Products</span>
      </div>
      <div className="search-bar">
        <input type="text" placeholder="🔍 Search products..." />
      </div>
      <div className="left-side">
        <button className="buttons" type="button" aria-label="Notifications">
          <LordIcon src={notification} trigger="hover" target="button" aria-hidden="true" />
        </button>
        <button className="buttons" type="button" aria-label="Messages">
          <LordIcon src={message} trigger="hover" target="button" aria-hidden="true" />
        </button>
        <button className="buttons" type="button" aria-label="Shopping cart">
          <LordIcon src={cart} trigger="hover" target="button" aria-hidden="true" />
        </button>
      </div>
    </header>
  );
}
