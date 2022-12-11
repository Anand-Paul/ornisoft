import React from "react";

import frameRight from "../../images/Frame-right.png";
import aboutImage from "../../images/games-village.jpg";

const GamesVillage = () => {
  return (
    <div className="product-detail">
      <img
        className="product-detail__shapes product-detail__shapes_right"
        src={frameRight}
        alt="Right asset"
      />
      <div className="container d-flex flex-column flex-lg-row justify-content-between">
        <div className="product-detail__content">
          <figure className="product-detail__figure mb-3 mb-sm-5 mb-lg-3 flex-shrink-0 flex-grow-0 float-start">
            <img
              className="w-100 h-100 product-detail__img"
              src={aboutImage}
              alt="about"
            />
          </figure>
          <h2 className="product-detail__overtitle mb-0">PRODUCTS</h2>
          <h3 className="product-detail__title">GamesVillage Pro Suite</h3>
          <div className="product-detail__desc">
            <p>
              GamesVillage Pro Suite is a complete tournament management
              software which is available on both Android and IOS platforms. The
              GamesVillage Pro Suite comes with six applications.
            </p>
            <h4>GamesVillage Pro</h4>
            <p>
              GamesVillage Pro is an android/IOS based app which can power up
              smartphones to achieve quick insights into games, accommodation,
              transportation, food details etc. There are seven user groups who
              can use the application- Tournament organizers, Technical
              officials, Team officials, Players, IT, Media and General users.
              The content presentation of the app is varied dynamically based on
              the user group type. The users of the app have chat and mail
              facilities as well. The organizers can upload media to gallery
              albums with the help of GamesVillage CMS. They can also display
              advertisements, run polls, upload sponsor details/banners or
              create posts etc.
            </p>
            <p>
              The Homepage of the app is a powerful social media platform where
              the user can like and share photos/videos. The admins can
              prioritize and pin details/live video of highlighted/important
              matches in the page. To prevent spamming, general users are not
              allowed to create posts. However, they can view, like or share the
              posts available in the timeline.
            </p>
            <h4>MatchController Pro</h4>
            <p>
              MatchController Pro is a points entry and management app primarily
              aimed for tournament game officials including match referees. The
              umpires can use the app which is available in a tab (android
              platform) to control game points. There will be options to.
            </p>
            <h4>GamesVillage CMS</h4>
            <p>
              This is a web-based content management system to manage things
              like referee prerequisites, gallery management, ads management,
              sponsorship management, broadcast notifications etc.
            </p>
            <h4>MealsManager Pro</h4>
            <p>
              MealsManager Pro is a utility app for hotels/food management teams
              to manage the food distribution to the participants of the
              tournament and the delegates. A QR code scanner to scan and verify
              ID cards is the main feature of the app. There will also be an
              option to allocate and issue meal coupons to unexpected guests.
              Statistical views are also displayed in the dashboard for quick
              reference.
            </p>
            <h4>AccoManager Pro</h4>
            <p>
              AccoManager Pro is the app for management of accommodation of the
              participants of the tournament. The hotels can make use of the app
              to allocate rooms, set check-in/check-out times etc.
            </p>
            <h4>DTransportation Pro</h4>
            <p>
              Transportation Pro is the app which is used to manage the
              transportation facilities at the venue of the tournament. Pickup,
              drop of participants/guests from hotels, tournament venues etc.
              can be arranged via the app. Driver management is another feature
              of the app.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamesVillage;
