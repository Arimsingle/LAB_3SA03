import React from 'react';

class Check extends React.Component{
    render(){
        let count_end = this.props.check_count > 5 ? "Game Over" : "Counter : " + this.props.check_count;
        return(
            <div className="area">
                <h1 className="text">{count_end}</h1> 
            </div>
            
        )
    }
}


export default Check;