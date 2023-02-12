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
      displayed: true,
      elapsedTime: 0,
    }
  }
  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({elapsedTime: this.state.elapsedTime + 1});
    }, 1000);
  } 
  handleClick = () => {
    this.setState({
      displayed: !this.state.displayed,
      elapsedTime: 0
    })
  }
  render() {
    return(
      <div>
        <button className = 'btn' onClick={this.handleClick}>Show/Hide</button>
        {this.state.displayed && 
          <div className='card'>
            <div>{this.state.elapsedTime}</div>
            <img src={this.state.imgSrc} width = '200px' alt = 'avatar illustration' />
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