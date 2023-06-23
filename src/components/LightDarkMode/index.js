import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {backgroundMode: true}

  onClick = () => {
    this.setState(prevState => ({backgroundMode: !prevState.backgroundMode}))
  }

  render() {
    const {backgroundMode} = this.state
    const bgMode = backgroundMode ? 'dark-mode' : 'light-mode'
    const buttonText = backgroundMode ? 'Light Mode' : 'Dark Mode'

    return (
      <div className="app-container">
        <div className={`container ${bgMode}`}>
          <h1 className="heading">Click To Change Mode</h1>
          <button className="button" onClick={this.onClick}>
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
