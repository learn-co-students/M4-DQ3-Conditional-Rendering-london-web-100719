import React from "react";
import MenuBar from "../components/MenuBar.js";
import { Profile, Photos, Cocktails, Pokemon } from "../components/Pages.js";

class MainBox extends React.Component {
  state = {
    active: "profile"
  };
  showItem = id => {
    this.setState({ active: id });
  };

  detailsToDisplay = () => {
    if (this.state.active === "profile") {
      return <Profile />;
    } else if (this.state.active === "photo") {
      return <Photos />;
    } else if (this.state.active === "cocktail") {
      return <Cocktails />;
    } else if (this.state.active === "pokemon") {
      return <Pokemon />;
    }
    return null;
  };
  render() {
    /*

    Replace the code below! Depending on what menu item is selected in the menu, I should render either a Profile, Photos, Cocktails, or Pokemon component.Think of a way to track which menu item was selected. Which component should have state? Which component should have methods to control state? Where should these methods be called?

    */

    return (
      <div>
        <MenuBar active={this.state.active} showItem={this.showItem} />
        {this.detailsToDisplay()}
      </div>
    );
  }
}

export default MainBox;
