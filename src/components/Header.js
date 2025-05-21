import React from "react";

const Header = props => (
    <header className="top">
      <h1>Catch
        <span className="ofThe">
          <span className="of">of</span>
          <span className="the">the</span>
        </span>
        Day</h1>
      <h3 className="tagline">
        <span>{props.tagline}</span>
      </h3>
    </header>
  );


// Export the Header component
export default Header;