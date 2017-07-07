/**
 * Created by Brandon on 7/6/2017.
 */
import React, {Component} from 'react';
import API from './static-data';
import Review from "./review";

export default class ReviewSummary extends Component {
    constructor() {
        super();
        this.reviewTable = {width:'100%'};
        this.state = {
            data: null,
        };
    }

    async componentWillMount() {
        // let data = await API.getRecent();
        //
        // this.setState({ data });
    }

    render() {

        return (
            <div>
                <table className="avgRatings">
                    <tr>
                        <th>Ratings</th>
                        <th/>
                    </tr>
                    <tr>
                        <td>General</td><td>{API.ratings.general}</td>
                    </tr>
                    {Object.keys(API.ratings.result).map((rating) =>{
                        if (API.ratings.result[rating] > 0) {
                            return <tr>
                                <td>{rating}</td>
                                <td>{API.ratings.result[rating]}</td>
                            </tr>
                        } else {
                            //return and empty because JSlint doesn't like it when an arrow function returns without a value.
                            return undefined;
                        }
                    })}
                </table>

                <div style={{backgroundColor: "#aaaaaa", float:"left", marginLeft:"30px"}}>
                <label className="App-intro">Sort by:</label><select className="App-intro">
                    {API.sortBy.map(sortBy => {
                        return <option value={sortBy}>
                            {sortBy}
                        </option>;
                    })}
                </select>
                <label className="App-intro">Party Type:</label><select className="App-intro">
                    {API.partyType.map(sortBy => {
                        return <option value={sortBy}>
                            {sortBy}
                        </option>;
                    })}
                </select>
                </div>
                {API.reviews.map((review, i ) => <Review key={i} {...review}/>)}


            </div>
        );
    }
}
