import React from "react";

const MenuBar = props => {
  /*

  The 'a' tags below are the menu items. Think about the way a menu 
  should work. When you click a menu item, the button typically becomes
  'active' to indicate that it is currently selected. How could we achieve
  programatically? What other behavior do we expect when we click
  on a menu item? Do we need state in component, and if not, how can
  component be made aware of what is currently the active menu item?

  */

  return (
    <div className="ui four item menu">
      <a
        onClick={event => props.showItem(event.target.id)}
        className={"item " + (props.active === "profile" ? "active" : null)}
        id="profile"
      >
        <i className="user large icon" id="profile" />
      </a>

      <a
        onClick={event => props.showItem(event.target.id)}
        className={"item " + (props.active === "photo" ? "active" : null)}
        id="photo"
      >
        <i className="photo large icon" id="photo" />
      </a>

      <a
        onClick={event => props.showItem(event.target.id)}
        className={"item " + (props.active === "cocktail" ? "active" : null)}
        id="cocktail"
      >
        <i className="cocktail large icon" id="cocktail" />
      </a>

      <a
        onClick={event => props.showItem(event.target.id)}
        className={"item " + (props.active === "pokemon" ? "active" : null)}
        id="pokemon"
      >
        <i className=" themeisle large icon" id="pokemon" />
      </a>
    </div>
  );
};

export default MenuBar;
