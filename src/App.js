
import './App.css';
import React, { useState } from 'react';
import AddTask from './addTask';
import {library} from '@fortawesome/fontawesome-svg-core';
import{faTrash} from '@fortawesome/free-solid-svg-icons';

library.add(faTrash);

class  App extends React.Component {
    constructor(props){
      super(props);
      this.state={
        items:[],
        context:{
          text:'',
          key:''
        }
      }
      this.handleInput=this.handleInput.bind(this);
      this.addItem=this.addItem.bind(this);
      this.deleteItems=this.deleteItems.bind(this);
      this.setUpdate=this.setUpdate.bind(this);
    }

    handleInput(e){
      this.setState({
        context:{
          text:e.target.value,
          key:Date.now()
        }
      })
    }
    addItem(e){
      e.preventDefault();
      const newItem=this.state.context;
      if (newItem.text !=""){
        const newItems=[...this.state.items,newItem]
      this.setState({
        items:newItems,
        context:{
          text:'',
          key:''
        }
      })
      }
    }
    deleteItems(key){
      const filtredItems=this.state.items.filter(item=>item.key!==key);
      this.setState({
        items:filtredItems
      })
    }
    setUpdate(text,key){
      const items=this.state.items;
      items.map(item=>{
        if(item.key===key){
          item.text=text;
        }
      })
      this.setState({
        items:items
      })
    }

render(){
  return (
    <div className="App">
      <header >
       <form id="to-do-form" onSubmit={this.addItem}>
         <input type="text"  value={this.state.context.text} placeholder="Enter Text" onChange={this.handleInput} />
         <button type="submit"> Add </button>
       </form>
      </header>
  <AddTask items={this.state.items} deleteItems={this.deleteItems} setUpdate={this.setUpdate}></AddTask>
    </div>
  );
}
}

export default App;
