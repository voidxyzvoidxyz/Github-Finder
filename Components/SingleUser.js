
import React from 'react'

class SingleUser extends React.Component {
    
   componentDidMount() {   
   this.props.fsingle(this.props.match.params.login)
   console.log(this.props)
   }
    
    render(){
        return(
          <div>
              {this.props.user.login}
              {this.props.user.public_repos}
            
              <h1>Welcome</h1>
          </div>

        )
    }
}
export default SingleUser;
