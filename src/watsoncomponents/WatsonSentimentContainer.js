import React, { Component } from 'react';
import {connect} from 'react-redux'
import {addSentimentToState} from '../Redux/actions'

class WatsonSentimentContainer extends Component {
    handleClick=() => {
    console.log(this.props.user)
    console.log(this.props.user.id)
    fetch(`http://localhost:3000/${this.props.user.id}/sentiment`)
        .then(r => r.json())
        .then((sentiment) => {
             console.log(sentiment)
            this.props.addSentimentToState(sentiment);
            // localStorage.setItem("token", resp.token)
        })




        // this.props.addSentimentToState()
    }
    render() { 
        return (<div>
            Hello from WatsonSentimentContainer
<button onClick={this.handleClick}>UserSentiment</button>
        </div>  );
    }
}
const mapStateToProps=(state) => {
    return{
        // comments:state.comments.allcomments,
        user:state.user.user
    }
}

export default connect(mapStateToProps,{addSentimentToState})(WatsonSentimentContainer);