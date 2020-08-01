
import React from 'react';
import Alert from './Alert'

class Tform extends React.Component{
   constructor(){
       super();
       this.state ={
           text :"",
           alert:null,
       }
   }

 handleChange =(e) => {
     this.setState({
         text:e.target.value
     })
    //  console.log(e.target.value)
     e.preventDefault();
 }
 onSubmit = (e) => {
    if(this.state.text === ""){
        this.checkAlert("Please enter a value","failure")
    }else {
     this.props.findUsers(this.state.text)
     this.setState({
         text :""
     })
     this.setState({text : ""})
     this.checkAlert("Successfully fetched","success")
    }
     e.preventDefault();
 } 
 checkAlert = (msg,type)=>{
    this.setState({alert :{msg,type}});
    setTimeout(()=>{
        this.setState({alert:null})
    },3000)
}

render(){
    return(
        <div>
            <form onSubmit = {this.onSubmit}>

                <input type = "text" value = {this.state.text} onChange = {this.handleChange} class = "inp"/>
                <input type = "submit" value ="Search" />
               {this.props.showClear ? <input type = "button" value = "Clear" onClick={this.props.clearData}></input> :""}

                

            </form>
            <Alert msg ={this.state.alert}/>
        </div>
    )
}


}
export default Tform;
