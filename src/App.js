import React, { Component } from 'react'
import Person from './Component/Person'


export class App extends Component {
  constructor() {
    super();
    this.state={
      Show:false,
      FullName:"Ryadh Laabidi",
      bio:"Hello My name is Ryadh",
      Profession:"Dev Web"
      

    }
  }
  toggle=()=>{
    this.setState({Show: !this.State.Show })
  }
  render() {
    return (
      <div>
        <h1>state classe Component</h1>
        <button onClick={()=>this.toggle()} >Show/Hide</button>
        <h1>{this.state.FullName}</h1>
        <h1>{this.state.bio}</h1>
        <h1>{this.state.Profession}</h1>
        
        <hr/>
        <p>Partie Person</p>
        <Person/>
        { this.state.Show && <Person/> }
                        
      </div>
    )
  }
}

export default App
