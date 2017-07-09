/**
 * Created by Brandon on 7/8/2017.
 */

import React, {Component} from 'react';

export default class TraveledWithRatings extends Component {
    render(){
        return <table>
            <tr>
                <th>
                    Ratings By Traveled With
                </th>
                <th />
            </tr>
            {Object.keys(this.props).map(traveledWith=>{
                return  <tr>
                    <td>{traveledWith}</td>
                    <td>{this.props[traveledWith]}</td>
                </tr>
            })}
        </table>

    };
}
