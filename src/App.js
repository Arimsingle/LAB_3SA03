import React from 'react';
import Event from './Event';
import './App.css';
import _ from 'lodash';
import profile from './profile.jpg'


let message = 'Hello'

const prepareStateFromWord = (given_word) => {
  let word = given_word.toUpperCase()
  let chars = _.shuffle(Array.from(word))
  return {
    word,
    chars,
    counter: 1,
    guess: [],
    completed: false,
    check: 0
  }

}
class App extends React.Component {
  state = prepareStateFromWord(message);
  click = (value) => {
    let guess = [...this.state.guess, value]
    this.setState({ guess })
    if (guess.length === this.state.chars.length) {
      if (guess.join('').toString() === this.state.word) {
        this.setState({ guess: [], completed: true })
      } else {
        this.setState({ guess: [], counter: this.state.counter + 1 })
      }
    }
  }
  reset = () => {
    this.setState({ check: this.state.check + 1, completed: false })
  }
  render() {
    let check = this.state.completed === false ? '' : <button className="button" onClick={this.reset}><h1>Play Again</h1></button>;
    let checks = this.state.completed === false ? '' : <h1 className="win">You Win</h1>;
    let count_end = this.state.counter > 5 ? "Game Over" : "Counter : " + this.state.counter;
    return (
      <div className="first">
        <div className="second">
          <div className="profile-area"><img className="profile" src={profile}></img></div>
          <div><h1 className="text">LAB:3SA03 > 6035512059</h1></div>
          <div>
            {
              Array.from(this.state.chars).map((x, y) => (
                <Event
                  value={x}
                  key={y}
                  click={this.click}
                  number={this.state.counter}
                  check={this.state.check}
                />
              ))
            }
            <div className="box">
              <h1 className="text">Choose</h1>
              <h1 className="text">You can play 5 Round</h1>
              {
                Array.from(this.state.guess).map((item, index) => (
                  <Event
                    value={item}
                    key={index}
                    click={this.click}
                  />
                ))
              }
              <div>
                <h1 className="text">{count_end}</h1>
              </div>
              <div className="button-area">
                {check}
                {checks}
              </div>
            </div>

          </div>

        </div>

      </div>
    )
  }
}
export default App;
