import React, { useState, useContext, useEffect } from "react";
import classnames from "classnames";
import { Link } from "react-router-dom";
import { AppContext } from "app";
import logo from "assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./header.styles.scss";

export const HeaderComponent = () => {
  const [activeRoute, setActiveRouter] = useState("/");
  const [state, setState] = useContext(AppContext);

  // Handle reloads in different urls
  useEffect(() => {
    setActiveRouter(window.location.pathname);
  }, []);

  const handleFilterChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, filterQuery: ev.target.value });
  };

  const renderMenu = () => {
    const handleRouteClick = (route: string) => setActiveRouter(route);
    const menuClass = (route: string) =>
      classnames("bb-header__menu-item", {
        "bb-header__menu-item--is-active": activeRoute === route
      });
    return (
      <div className="bb-header__menu">
        <div className={menuClass("/")}>
          <Link onClick={() => handleRouteClick("/")} to="/">
            Personagens
          </Link>
        </div>
        <div className={menuClass("/episodes/")}>
          <Link onClick={() => handleRouteClick("/episodes/")} to="/episodes/">
            Episódios
          </Link>
        </div>
        <div className={menuClass("/suggestions/")}>
          <Link
            onClick={() => handleRouteClick("/suggestions/")}
            to="/suggestions/"
          >
            Sugestões
          </Link>
        </div>
      </div>
    );
  };

  const renderLogo = () => (
    <div className="bb-header__logo">
      <img src={logo} alt="Logo Breaking Bad" />
    </div>
  );

  const renderInput = () => (
    <div className="bb-header__search-input">
      <input
        placeholder="Pesquise os personagens"
        onChange={handleFilterChange}
      />
      <FontAwesomeIcon icon={faSearch} color="#5d5d5d" size="xs" />
    </div>
  );

  return (
    <div className="bb-header">
      {renderLogo()}
      {renderMenu()}
      {renderInput()}
    </div>
  );
};
