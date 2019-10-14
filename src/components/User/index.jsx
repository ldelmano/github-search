import React from "react";
import companyIcon from "../../assets/company-icon.svg";
import localIcon from "../../assets/location-icon.svg";
import starIcon from "../../assets/star-icon.svg";
import repoIcon from "../../assets/repo-icon.svg";
import followersIcon from "../../assets/followers-icon.svg";
import "./styles.scss";

const User = ({ user, stars }) => {
  return (
    <article className="user">
      <figure className="user__img">
        <img src={user.avatar_url} alt="User avatar" />
      </figure>

      <h4 className="user__name">{user.name}</h4>

      <h5 className="user__login">{user.login}</h5>

      <ul className="user__info">
        {user.bio && <li>{user.bio}</li>}
        {user.company && (
          <li>
            <img src={companyIcon} alt="User Company" />
            <p>{user.company}</p>
          </li>
        )}
        {user.location && (
          <li>
            <img src={localIcon} alt="User Location" />
            <p>{user.location}</p>
          </li>
        )}
        <li>
          <img src={starIcon} alt="User Stars" />
          <p>{stars}</p>
        </li>
        {user.public_repos && (
          <li>
            <img src={repoIcon} alt="User Repos" />
            <p>{user.public_repos}</p>
          </li>
        )}
        <li>
          <img src={followersIcon} alt="User Followers" />
          <p>
            Followers: {user.followers} / Following: {user.following}
          </p>
        </li>
      </ul>
    </article>
  );
};

export default User;
