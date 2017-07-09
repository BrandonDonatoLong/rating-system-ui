/**
 * Created by Brandon on 7/8/2017.
 */
import React, {Component} from 'react';

// TraveledWithRatings is a very simple component that displays the average general rating for each Party type.
export default class TraveledWithRatings extends Component {
    render(){
        return <div>
            {Object.keys(this.props).map(traveledWith=>{
                console.log(traveledWith, this.props[traveledWith]);
                return <div className="travelWithRating" key={traveledWith}><label>{traveledWith}: </label>
                    <label>{this.props[traveledWith].general.general}</label></div>
            })}
        </div>
    };
}
