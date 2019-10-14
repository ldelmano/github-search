import React, { useEffect, useState } from "react";
import starIcon from "../../assets/star-icon.svg";
import "./styles.scss";

const Repos = ({ reposUrl, onCountStars }) => {
  const [repos, setRepos] = useState([]);
  const [sortRepos, setSortRepos] = useState([]);

  const getTotalStars = repos => {
    const repoStars = repos.map(repo => repo.stargazers_count);

    const reducer = (accumulator, currentValue) => accumulator + currentValue;

    const total = repoStars.reduce(reducer);

    if (!onCountStars) {
      return total;
    }

    onCountStars(total);
  };

  useEffect(() => {
    fetch(reposUrl)
      .then(res => res.json())
      .then(res => {
        setRepos(res);
        getTotalStars(res);
      });
  }, [reposUrl]);

  useEffect(() => {
    const sorted = repos.sort((a, b) => {
      if (a.stargazers_count > b.stargazers_count) {
        return -1;
      }

      if (a.stargazers_count < b.stargazers_count) {
        return 1;
      }

      return 0;
    });

    setSortRepos(sorted);
  }, [repos]);

  return (
    <section className="repos">
      {sortRepos.map((repo, index) => (
        <article key={index} className="repos__item">
          <h4 className="repos__name">{repo.name}</h4>
          <p className="repos__description">{repo.description}</p>
          <div className="repos__stars">
            <img src={starIcon} alt="Repo stars" />
            <span>{repo.stargazers_count}</span>
          </div>
        </article>
      ))}
    </section>
  );
};

export default Repos;
