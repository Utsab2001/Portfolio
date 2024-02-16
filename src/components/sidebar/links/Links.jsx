import React from 'react'
// import {Link} from 'react-router-dom'

function Links() {
  const items = ["Home", "About", "Services", "Portfolio", "Contact"];
  // const variants
  return (
    <div className="link">
      {items.map((item) => (
        <a href={`#${item}`} key={item}>
          {item}
        </a>
      ))}
    </div>
  );
}

export default Links