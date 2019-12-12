import React from "react";

const MenuBar = props => {
  const setClassNameFor = id => {
    return props.activeId === id ? "item active" : "item";
  };

  return (
    <div className="ui four item menu" onClick={e => props.handleMenuSelect(e)}>
      <a className={setClassNameFor("profile")} id="profile">
        <i className="user large icon" id="profile" />
      </a>

      <a className={setClassNameFor("photo")} id="photo">
        <i className="photo large icon" id="photo" />
      </a>

      <a className={setClassNameFor("cocktail")} id="cocktail">
        <i className="cocktail large icon" id="cocktail" />
      </a>

      <a className={setClassNameFor("pokemon")} id="pokemon">
        <i className=" themeisle large icon" id="pokemon" />
      </a>
    </div>
  );
};

export default MenuBar;
