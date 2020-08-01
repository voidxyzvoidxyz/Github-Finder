
import React from 'react';
import Tform from './Tform';
import List from  './List';
import About from './About';
import Alert from './Alert';
import {BrowserRouter as Router ,Route,Link,Switch} from 'react-router-dom';

import  './App.css'
import SingleUser from './SingleUser';

class App extends React.Component {
 constructor(){
     super();
     this.state = {
         udata:[],
         user:{}
         
     };
 }
 fsingle = async(uname)=>{
    const suser = await fetch(`https://api.github.com/users/${uname}`)
     const res = await suser.json()
     console.log(res)
     this.setState({
         user:res
     })
 }
 
 findUsers = async(userName) =>{
    //  e.preventDefault();
     
     
     const user = await fetch(`https://api.github.com/search/users?q=${userName}`)
     const data  = await user.json()
     console.log(data.items)
     this.setState ({
         udata:data.items
     })
     
    }
 
 clearData = ()=> {
     this.setState({
         udata:[]
     })
 }
 
render(){
 
    return(
        <Router>
    <div>
      <nav className = "nav-links">
          <h1>Github Finder</h1>
          <ul>
              <li><Link  to = "/">Home</Link></li>
              <li><Link to = "/About"> About</Link></li>

          </ul>
          </nav>
          
          <Switch>
              <Route exact path ="/" render =
              { (props) => (
                  <>
                     
          <Tform showClear ={this.state.udata.length > 0 ? true : false} findUsers ={this.findUsers}
         clearData ={this.clearData}/>
          {
              this.state.udata.map((ldata)=>(
              <List cool
               ={ldata} />
              )
              )
          }
          </>
          )}
          />
          < Route exact path = "/SingleUser/:login"  render = 
          { (props) => (
               <SingleUser user = {this.state.user} fsingle = {this.fsingle} {...props}/>
          )}
           />
          <Route exact path ="/About" component = {About}/>
         </Switch>
    </div>
    </Router>
    )
}
}

export default App;








