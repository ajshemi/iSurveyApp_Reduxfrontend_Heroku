import React, { Component } from 'react';
import CommentAnalysis from './CommentAnalysis'


class AnalysisList extends Component {

  render() {
    // console.log(this.props.comments.id)
    let arrayOfEmotions=this.props?.emotions.slice(this.props.emotions.length-10,this.props.emotions.length).map(emotion=><CommentAnalysis key={emotion.id} emotion={emotion} comment={this.props.comments.find(comment=>comment.id===emotion.comment_id)} sentiment={this.props.sentiments.find(sentiment=>sentiment.comment_id===emotion.comment_id)}/>)
    return (
      <>
        <h2 className='commentlist'>Ten Most Recently Entered Comments</h2>
        <table className="ui celled padded table">
            <thead className="">
                <tr className="">
                <th className="">Comments</th>
                <th className="">Sentiments</th>
                <th className="single line">Sadness</th>
                <th className="">Joy</th>
                <th className="">Fear</th>
                </tr>
            </thead>
            <tbody className="">
                {arrayOfEmotions}
            </tbody>
        </table>
      </>
    );
  }
}

export default AnalysisList;