import React from "react";
import MenuBar from "../components/MenuBar.js";
import { Profile, Photos, Cocktails, Pokemon } from "../components/Pages.js";

class MainBox extends React.Component {
  state = { activeMenuItemId: "photo" };

  handleMenuSelect = event => {
    event.persist();
    this.setState({ activeMenuItemId: event.target.id });
  };

  stateToPage = {
    profile: <Profile />,
    photo: <Photos />,
    cocktail: <Cocktails />,
    pokemon: <Pokemon />
  };

  render() {
    return (
      <div>
        <MenuBar
          handleMenuSelect={this.handleMenuSelect}
          activeId={this.state.activeMenuItemId}
        />
        {this.stateToPage[this.state.activeMenuItemId]}
      </div>
    );
  }
}

export default MainBox;
