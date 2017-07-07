/**
 * Created by Brandon on 7/6/2017.
 */
import React, {Component} from 'react';

//todo pass in the style as a prop

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
                <tr style={{backgroundColor:"#005500"}}>
                    <td>General</td><td><strong>{this.props.general.general}</strong></td>
                </tr>
                {Object.keys(this.props.aspects).map((rating) =>{
                    if (this.props.aspects[rating] > 0) {
                        return <tr>
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
