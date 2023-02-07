import './App.css';
import React, {Component} from 'react';
import avatar from './avatar.jpg'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: 'Wassim Barhoumi',
      bio: 'lectus nulla at volutpat diam ut venenatis tellus in metus vulputate eu scelerisque felis imperdiet proin fermentum leo vel orci porta non pulvinar neque laoreet suspendisse interdum consectetur libero id',
      imgSrc: avatar,
      profession: 'Web developer',
      displayed: true
    }
  }
  handleClick = () => {
    this.setState({
      displayed: !this.state.displayed
      
    })
  }
  render() {
    return(
      <div>
        <button onClick={this.handleClick}>Show/Hide</button>
        {this.state.displayed && 
          <div>
            <img src={this.state.imgSrc} width = '300px' alt = 'avatar illustration' />
            <h2>{this.state.fullName}</h2>
            <h4>{this.state.profession}</h4>
            <p>{this.state.bio}</p>
          </div>
        }
      </div>
    )
  }
}

export default App;
