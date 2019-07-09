import React,{ Component } from 'react';
import './App.css';
import Person from './Person/person';

class App extends Component {
//how to initialize the variable using state
state = {
  persons:[
    {
      id:1,
      name:'Manu',
      age:27,
    },
    {
      id:2,
      name:'aravind',
      age:22
    }
  ],
  otherState:"some other value",
  showPersons:false
}

//click to switch name method
switchNameHandler = (newName) => {
this.setState({persons:[
  {
    name:newName,
    age:28,
  }
]
})
}

//two-way data binding method
nameChangeHandler = (event,id) =>{
const personIndex = this.state.persons.findIndex(person=>{
  return person.id === id;
})
const person = {
  ...this.state.persons[personIndex]
};
// const person= Object.assign({},this.state.persons[personIndex])

person.name = event.target.value;

const persons = [...this.state.persons];
persons[personIndex] = person;
console.log(persons)

  this.setState({persons:persons})
}

//delete the lists
deletePersonHandler = (personIndex) =>{
const persons = [...this.state.persons];
persons.splice(personIndex,1)
this.setState({persons:persons})
}

//hide-show method
togglePersonHandler =  () => {
const doesShow = this.state.showPersons;
this.setState(
  {
    showPersons:!doesShow
  }
  )
}

  render(){

//how to apply inlinestyle 
const inlineStyle = {
  backgroundColor:'white',
  font:'inherit',
  border:'1px solid blue',
  padding:'8px',
  cursor:'pointer'
}

//how to use if/else method and looping method in react
let persons = null;
if(this.state.showPersons){
persons = (
  <div>
  {this.state.persons.map((person,index)=>{
    return <Person 
    click = {()=>this.deletePersonHandler(index)}
    name={person.name}
    age={person.age}
    key={person.id}
    changed = {(event)=>this.nameChangeHandler(event,person.id)}/>
  })}
  </div>
);
}
    return (
      <div className="App">
       <h1>hi I am react app</h1>
       <p>this is really working</p>
       <button 
       style ={inlineStyle}
       onClick={this.togglePersonHandler}>Switch Name</button>
       {persons}
      </div>
    );
  }
}

export default App;
