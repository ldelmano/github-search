import React from "react";
import { useHistory } from "react-router-dom";
import search from "../../assets/search-icon.svg";
import "./styles.scss";

const SearchBar = () => {
  const formRef = React.useRef();
  const [error, setError] = React.useState(false);
  const history = useHistory();

  const validate = e => {
    e.preventDefault();

    const isValid = formRef.current.checkValidity();

    if (!isValid) {
      formRef.current.classList.add("searchbar__container--error");
      setError(true);
    } else {
      formRef.current.classList.remove("searchbar__container--error");
      setError(false);

      handleSubmit();
    }
  };

  const handleSubmit = () => {
    const username = formRef.current.username.value;

    return history.push(`/result/${username}`);
  };

  return (
    <div className="searchbar">
      <form ref={formRef} className="searchbar__container">
        <input
          type="text"
          name="username"
          className="searchbar__input"
          placeholder="Enter username here"
          required
        />
        <button className="searchbar__btn" onClick={validate}>
          <img src={search} alt="Search Github user" />
        </button>
      </form>

      {error && (
        <span className="searchbar__error">
          You need to fill this field with a username :(
        </span>
      )}
    </div>
  );
};

export default SearchBar;
