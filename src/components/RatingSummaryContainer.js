import React, { Component } from 'react';
import { connect } from 'react-redux';
import {addoneRatingSummary,addallRatingsSummary} from '../Redux/actions'
import Chart from './Chart'


class RatingSummaryContainer extends Component {
    handleRatingFetch=(e) => {
        // fetch('https://cookiesurveywebapp.herokuapp.com/allrating')
        fetch('http://localhost:3000/allrating')

        .then(resp=>resp.json())
        .then(allratings=>this.props.addallRatingsSummary(allratings))

        // fetch(`https://cookiesurveywebapp.herokuapp.com/rating/${this.props.user.id}`)
        fetch(`http://localhost:3000/rating/${this.props.user.id}`)

        .then(resp=>resp.json())
        .then(onerating=>this.props.addoneRatingSummary(onerating.rating))
    }

    render() {

        // let chartdata=arrayOfEmotionsData.map((array,index)=>{
            //     return {label:`User ${index}`,data:array,backgroundColor:`rgba(${255-(Math.floor(Math.random() * 50) + 1)}, ${159-(Math.floor(Math.random() * 100) + 1)}, ${64+(Math.floor(Math.random()*5)+1)})`}}
            // let chartData={labels:['sadness','joy','fear','anger','disgust'],datasets:chartdata} 
            // console.log(this.props.onerating[0])
            // dataset1=this.props.onerating.map(rating=>{return {label:"your rating",data:})
            
        let data1=this.props.onerating.map(rating=>rating.rating)
        let data2=this.props.allratings.map(rating=>rating.rating)
        // let data3=this.props.onerating.map(rating=>rating.name)
        // let data4=this.props.allratings.map(rating=>rating.name)

        let chartData={labels:['chocolate chip','macadamia nut','oatmeal raisin'],datasets:[{label:"your rating ", data:data1,backgroundColor:'rgba(255, 255, 64)'},{label:"overall survey rating", data:data2,backgroundColor:'rgba(0, 99, 132, 0.6)'}]}
        // console.log(data1)
        // console.log(data2)
        // console.log(data3)
        // console.log(data4)

        return (
        <div className="ratingsummary">
            {/* Just One Chart */}
            <button onClick={this.handleRatingFetch}>Rating Summary</button>
            <Chart chartData={chartData} legendPosition="top"/>
        </div>  
        );
    }
}

const mapStateToProps = (state) => {
    return {
      products: state.products.products,
      user: state.user.user,
      onerating:state.ratings.onerating,
      allratings:state.ratings.allratings
    }
  }
export default connect(mapStateToProps,{addoneRatingSummary,addallRatingsSummary})(RatingSummaryContainer);


