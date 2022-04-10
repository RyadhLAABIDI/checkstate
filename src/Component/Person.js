import React , {Component} from 'react';
export class Person extends Component {
    constructor() {
        super();
        this.state={
            counter:0,
            timer:0,
            intervall:null
        }
    }
    componentDidMount() {
        console.log(  'componentDidMount()'  );
        this.setState({
            intervall: setInterval(
                ()=>this.setState({ timer: this.state.timer + 1 }),
                1000
            )
        });
    }
    componentDidUpdate(){
      console.log ( ' update' ) 
      console.log (this.state.counter)
    }
    componentWillUnmount() {
        console.log('You killed me')
        clearInterval(this.state.intervall)
    }
    Increment=()=>{
        this.setState({
            counter: this.state.counter + 1
        })
    }
    Decrement=()=>{
        this.setState({
            counter: this.state.counter - 1
        })
    }
    reset=()=>{
        this.setState({
            counter: 0
        })
    }
    render(){
        return (
            <div>
                <p>Person state class Component</p>
                <button onClick={this.Increment}>plus</button>
                <p> {this.state.counter}</p>
                <button onClick={this.Decrement}>moin</button>
                <button onClick={this.reset}>reset</button>

                <hr/>
                <p>timer</p>
                <p>{this.state.timer}</p>
      
            </div>
        )
    }
}

export default Person;