/**
 * Created by Brandon on 7/6/2017.
 */
import React, {Component} from 'react';
import Static from './static-data';
import API from './hotel-api';
import Review from './review';
import RatingTable from './rating-table';
import TraveledWithRatings from './traveled-with-table';

//Review Summary component holds all the data handling with the backend and displays the reviews after the Description.
export default class ReviewSummary extends Component {
    constructor() {
        super();
        API.get('/getReviews', '?sortBy=EntryDate').then(result => {
            return this.setState({reviews:result.reviews});
        });
        API.get('/reviewAverage').then(result => {
            return this.setState({ratings:result});
        });
        API.get('/traveledWithAverage').then((result)=> {
                return this.setState({ratingsByTraveledWith:result.result});
            });

        this.state = {
            sort:'Entry Date',
            ratingsByTraveledWith:Static.ratingsByTraveledWith,
            reviews: Static.reviews,
            ratings: Static.ratings
        };
    }

    // Function to handle the change in the sort drop down.
    handleSortByChange(event){
        this.setState({sort:event.target.value});
        switch(event.target.value){
            case 'Entry Date':
                API.get('/reviewsByContributionDate').then(result => {
                    return this.setState({reviews:result.reviews});
                });
                break;
            case 'Travel Date':
                API.get('/reviewsByTravelDate').then(result => {
                    return this.setState({reviews:result.reviews});
                });
                break;
            default:
                API.get('/getReviews').then(result => {
                    return this.setState({reviews:result.reviews});
                });
                 break;
        }
    }

    // Function to handle a change in the Party Type drop down.
    handlePartyTypeChange(event){
        switch(event.target.value){
            case 'All':
                API.get('/getReviews', '?sortBy=' + this.state.sort.replace(' ', '')).then(totalReviews => {
                    return this.setState({reviews:totalReviews.reviews});
                });
                API.get('/reviewAverage').then(result => {
                    return this.setState({ratings:result});
                });

                break;
            default:
                let traveledWith = event.target.value;
                API.get('/traveledWithAverage').then(result=> {
                        return this.setState({ratings:result.result[traveledWith], ratingsByTraveledWith:result.result});
                    });
                API.get('/reviewsByTraveledWith', '?traveledWith=' + traveledWith + '&sortBy=' + this.state.sort.replace(' ','')).then(result=> {
                        return this.setState({reviews:result.reviews});
                });
                break;
        }
    };

    // React render function to display all the elements and map the specific states to their specific props.
    render() {

        return (
            <div>
                <div style={{width:'85%'}}>
                    <RatingTable {...this.state.ratings}/>
                </div>

                <TraveledWithRatings {...this.state.ratingsByTraveledWith} />
                <div style={{backgroundColor: '#aaaaaa', float:'left', marginLeft:'30px'}}>
                    <label className='App-intro'>Sort by:</label><select className='App-intro' onChange={this.handleSortByChange.bind(this)}>
                        {Static.sortBy.map(sortBy => {
                            return <option value={sortBy}>
                                {sortBy}
                            </option>;
                        })}
                    </select>
                    <label className='App-intro'>Party Type:</label><select className='App-intro' onChange={this.handlePartyTypeChange.bind(this)}>
                        {Static.partyType.map(partyType => {
                            return <option value={partyType}>
                                {partyType}
                            </option>;
                        })}
                    </select>
                </div>
                {this.state.reviews.map((review, i ) => <Review key={i} {...review}/>)}
            </div>
        );
    }
}
