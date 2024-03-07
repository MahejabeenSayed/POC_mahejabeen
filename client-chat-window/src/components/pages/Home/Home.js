import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MultipleSelectPlaceholder from "../../atoms/IntlDropdown";
import { FormattedMessage } from "react-intl";
import "./home.scss";
import InputBox from "../../atoms/InputBox/InputBox";

const Home = ({ socket }) => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("userName", userName);
    socket.emit("newUser", { userName, socketID: socket.id });
    navigate("/chat");
  };
  return (
    <div className="home_wrapper" data-testid="home">
      <div className="intl-wrapper">
        <MultipleSelectPlaceholder />
      </div>
      <form className="home__container" onSubmit={handleSubmit}>
        <h2 className="home__header">
          <FormattedMessage id="home_title" />
        </h2>
        <label htmlFor="username">
          <FormattedMessage id="username" />
        </label>
        <InputBox
          type="text"
          minLength={6}
          name="username"
          id="username"
          // className="username__input"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <button className="home__cta">
          <FormattedMessage id="sign_in" />
        </button>
      </form>
    </div>
  );
};

export default Home;
