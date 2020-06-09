import React , {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import ListItems from './ListItems/ListItems';

class App  extends Component{
  state={
    items:[],
    list:{
      text:'',
      key:''
    },
    edit:false
  }

onChangeHandler=(event)=>{
  this.setState({list:{
    text:event.target.value , key:Date.now()
  }})
  
  
}

onAddHandler=(e)=>{
  e.preventDefault();
  let newItem=this.state.list;
  if(newItem.text!==""){
    let newItems=[...this.state.items,newItem]
    this.setState({edit:false, items:newItems , list:{
      text:'',
      key:''
    }})
  console.log(this.state.items);


  }
  
  
}

onDeleteHandler=(key)=>{
  let filteredItem= this.state.items.filter(item=>{
   return item.key!==key
  })
  this.setState({items:filteredItem})
  

}

onEditHandler=(key)=>{
   let newItem = this.state.items.filter(item=>{
    return item.key!==key
  })
  this.setState({items:newItem})
  let selecteditem = this.state.items.find(item=>item.key===key)
  
  console.log(selecteditem.text);

  this.setState({ edit:true ,list:{text:selecteditem.text , key:selecteditem.key} })
}



  render(){
    return (
      <div className="App">
        <h2>Todo App</h2>
        <header className="header">
          <form className="todo">
          <input type="text"  name="text"  value={this.state.list.text} onChange={this.onChangeHandler} placeholder="Enter Text"  spellCheck="false"/>
          <button type="submit"  onClick={this.onAddHandler} className="btn" >{this.state.edit ? "Edit":"Add"}</button>
          </form>
          <ListItems items={this.state.items} deleteItem={this.onDeleteHandler} editItem={this.onEditHandler} />

  
  
        </header>
      </div>
    );

  }
  
}

export default App;
