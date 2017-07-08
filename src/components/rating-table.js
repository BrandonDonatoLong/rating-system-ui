/**
 * Created by Brandon on 7/6/2017.
 */
import React, {Component} from 'react';

//todo pass in the style as a prop

function getGeneralBackgroundColor(rating){
    if (rating > 7){
        return '#2e8d00';
    } else if (rating <= 7 && rating >= 4) {
        return '#f9be1a';
    }
    else {
        return '#db3a26'
    }
};

export default class RatingTable extends Component {
    // constructor(){
    //     super();
    // };

    render(){
        return <div className="ratingTable">
            <table className="reviewRatings">
                <tr>
                    <th>Ratings</th>
                    <th/>
                </tr>
                <tr style={{backgroundColor:getGeneralBackgroundColor(this.props.general.general)}}>
                    <td>General</td><td><strong>{this.props.general.general}</strong></td>
                </tr>
                {Object.keys(this.props.aspects).map((rating) =>{
                    if (this.props.aspects[rating] > 0) {
                        return <tr style={{backgroundColor:getGeneralBackgroundColor(this.props.aspects[rating])}}>
                            <td>{rating}</td>
                            <td>{this.props.aspects[rating]}</td>
                        </tr>
                    } else {
                        //return and empty because JSlint doesn't like it when an arrow function returns without a value.
                        return undefined;
                    }
                })}
            </table>
        </div>
    };
}
