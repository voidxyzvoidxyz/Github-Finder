
import React from 'react';
import {Link} from 'react-router-dom';
import SingleUser from './SingleUser';
import { render } from '@testing-library/react';

class List extends React.Component {
  
      


render(){
    return(
      <main>
      <div className = "container">
          <img src = {this.props.cool.avatar_url}></img>
          <h3> { this.props.cool.login}</h3>
          <h3>{this.props.cool.node_id}</h3>
            
          <Link to = {`/SingleUser/${this.props.cool.login}`}>More</Link>    
      </div>
      </main>  
    )
}
}
export default List;
