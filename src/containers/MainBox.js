import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'


class MainBox extends React.Component {

    state = {
      selectedItem: "profile"
    }

  toggleItem = (event) => {
    this.setState({
      selectedItem: event.target.id
    }, 
    )
  }

  render() {

    /*

    Replace the code below! Depending on what menu item is selected in the menu, I should render either a Profile, Photos, Cocktails, or Pokemon component.Think of a way to track which menu item was selected. Which component should have state? Which component should have methods to control state? Where should these methods be called?

    */

    const detailsToDisplay = () => {
      if (this.state.selectedItem === 'profile') {
        return <Profile />
      } else if (this.state.selectedItem === 'photo'){
        return <Photos />
      } else if (this.state.selectedItem === 'cocktail') {
        return <Cocktails />
      } else {
        return <Pokemon />
      }
    }

    return (
      <div>
        <MenuBar mainboxState={this.state} toggleItem={this.toggleItem}/>
        {detailsToDisplay()}
      </div>
    )
  }

}

export default MainBox
