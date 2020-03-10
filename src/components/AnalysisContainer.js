import React, { Component } from 'react';
import {connect} from 'react-redux'
import AnalysisList from './AnalysisList'

class AnalysisContainer extends Component {

    render() { 
        // console.log(this.props)
        return (
            <div className="analysispage">
                <AnalysisList sentiments={this.props.sentiments} emotions={this.props.emotions} comments={this.props.comments}/>
            </div>
          );
    }
}

const mapStateToProps=(state) => {
    return{
        sentiments:state.sentiments.sentiments,
        emotions:state.emotions.emotions,
        comments:state.comments.allcomments
    }
    
}
export default connect(mapStateToProps)(AnalysisContainer);