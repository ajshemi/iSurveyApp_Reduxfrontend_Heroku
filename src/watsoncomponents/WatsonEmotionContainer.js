import React, { Component } from 'react';
import {connect} from 'react-redux'
import {addEmotionToState} from '../Redux/actions'

class WatsonEmotionContainer extends Component {
    handleClick=() => {
    console.log(this.props.user)
    console.log(this.props.user.id)
    fetch(`http://localhost:3000/${this.props.user.id}/emotion`)
        .then(r => r.json())
        .then((emotion) => {
            console.log(emotion) 
            this.props.addEmotionToState(emotion);
            // localStorage.setItem("token", resp.t oken)
        })




    }
    render() { 
        return (<div>
            Hello from WatsonEmotionContainer
<button onClick={this.handleClick}>UserEmotion</button>
        </div>  );
    }
}
const mapStateToProps=(state) => {
    return{
        // comments:state.comments.allcomments,
        user:state.user.user
    }
}

export default connect(mapStateToProps,{addEmotionToState})(WatsonEmotionContainer);