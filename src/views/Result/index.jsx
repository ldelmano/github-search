import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import "./styles.scss";
import NotFound from "../../components/NotFound";
import User from "../../components/User";
import Repos from "../../components/Repos";

const Result = () => {
  const { username } = useParams();
  const [notFound, setNotFound] = useState(false);
  const [user, setUser] = useState({});
  const [stars, setStars] = useState(0);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then(res => res.json())
      .then(res => {
        if (res.message === "Not Found") {
          setNotFound(true);
        } else {
          setNotFound(false);
          setUser(res);
        }
      });
  }, [username]);

  return (
    <div className="result">
      <Header />

      {notFound ? (
        <NotFound />
      ) : (
        <section className="result__container">
          <User user={user} stars={stars} />
          <Repos
            reposUrl={user.repos_url}
            onCountStars={stars => setStars(stars)}
          />
        </section>
      )}
    </div>
  );
};

export default Result;
