
import React from 'react';

class Alert extends React.Component{


    render(){
        return(
            <div>
                {this.props.msg !== null && (
                    <div className ={this.props.msg.type}>
                        <h3>{this.props.msg.msg}</h3>
                        </div>
                )}
            </div>
        )
    }
}
export default Alert;
