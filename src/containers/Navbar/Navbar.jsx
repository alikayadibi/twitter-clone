import React from "react";
import { RiHome7Fill, RiFileList2Line } from "react-icons/ri";
import { FiMail, FiMoreHorizontal } from "react-icons/fi";
import { CgMoreO } from "react-icons/cg";
import { BsBookmark, BsPerson, BsTwitter } from "react-icons/bs";
import { BiHash, BiBell } from "react-icons/bi";

import "./Navbar.scss";
import { NavbarBtn } from "../../components";

const navbarBtnData = [
   {
      name: "Home",
      icon: <RiHome7Fill />,
   },
   {
      name: "Explore",
      icon: <BiHash />,
   },
   {
      name: "Notifications",
      icon: <BiBell />,
   },
   {
      name: "Messages",
      icon: <FiMail />,
   },
   {
      name: "Bookmarks",
      icon: <BsBookmark />,
   },
   {
      name: "Lists",
      icon: <RiFileList2Line />,
   },
   {
      name: "Profile",
      icon: <BsPerson />,
   },
   {
      name: "More",
      icon: <CgMoreO />,
   },
];

const Navbar = () => {
   return (
      <div className="app__navbar-container">
         <div className="app__flex app__navbar">
            <div className="twitter-logo">
               <BsTwitter />
            </div>

            <div className="app__flex app__navbar-btns">
               {navbarBtnData.map(({ name, icon }, i) => (
                  <div>
                     <NavbarBtn key={i} name={name} icon={icon} />
                  </div>
               ))}
            </div>

            <div className="app__flex app__navbar-tweetBtn">
               <a className="app__flex" href="/tweet">
                  Tweet
               </a>
            </div>

            <div className="app__navbar-miniProfile-container app__flex">
               <div className="app__navbar-miniProfile app__flex">
                  <div className="app__navbar-miniProfile-img">
                     <img
                        src="https://pbs.twimg.com/profile_images/1385436589573255168/VPpCEvEc_400x400.jpg"
                        alt="profile-img"
                     />
                  </div>

                  <div className="app__flex app__navbar-miniProfile-name">
                     <h5>Ali KAYADIBI</h5>
                     <p>@A_Kayadibi</p>
                  </div>

                  <div className="app__flex app__navbar-miniProfile-svg">
                     <FiMoreHorizontal />
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Navbar;
