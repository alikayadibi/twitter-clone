import React from "react";
import { WiStars } from "react-icons/wi";

import "./Feed.scss";

const Feed = () => {
   return (
      <div className="app__feed-container">
         <div className="app__flex app__feed-header">
            {/* <div className="app__feed-header-blur"></div> */}
            <h2>Home</h2>
            <WiStars />
         </div>

         <div className="app__feed-tweetBox app__flex">
            <div className="app__flex app__feed-tweetBox-img">
               <img
                  src="https://pbs.twimg.com/profile_images/1385436589573255168/VPpCEvEc_400x400.jpg"
                  alt="profile-img"
               />
            </div>

            <form className="app__feed-tweetBox-form">
               <input type="text" />

               <div>
                  <div>{/* icons */}</div>

                  <div>
                     <p>Tweet</p>
                  </div>
               </div>
            </form>
         </div>
      </div>
   );
};

export default Feed;
