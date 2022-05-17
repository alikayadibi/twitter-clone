import React from "react";

import "./NavbarBtn.scss";

const NavbarBtn = ({ name, icon }) => {
   return (
      <div className="app__flex app__navbarBtn-container">
         <div className="app__navbarBtn-icon app__flex">{icon}</div>
         <div className="app__flex app__navbarBtn-name">
            <p>{name}</p>
         </div>
      </div>
   );
};

export default NavbarBtn;
