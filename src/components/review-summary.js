/**
 * Created by Brandon on 7/6/2017.
 */
import React, {Component} from 'react';
import Static from './static-data';
import API from './hotel-api';
import Review from './review';
import RatingTable from './rating-table';
import TraveledWithRatings from './traveled-with-table';

export default class ReviewSummary extends Component {
    constructor() {
        super();
        API.get('/getReviews').then((result => {
            API.get('/reviewsByContributionDate').then((result => {
                return this.setState({reviews:result.reviews});
            }));
        }));
        API.get('/reviewAverage').then((result => {
            return this.setState({ratings:result});
        }));
        API.get('/traveledWithAverage')
            .then((result)=> {

                return this.setState({ratingsByTraveledWith:result.result});
            });

        this.state = {
            sort:'Entry Date',
            ratingsByTraveledWith:Static.ratingsByTraveledWith,
            reviews: Static.reviews,
            ratings: Static.ratings
        };
    }

    handleSortByChange(event){
        this.setState({sort:event.target.value});
        switch(event.target.value){
            case 'Entry Date':
                API.get('/reviewsByContributionDate').then((result => {
                    return this.setState({reviews:result.reviews});
                }));
                break;
            case 'Travel Date':

                API.get('/reviewsByTravelDate').then((result => {
                    return this.setState({reviews:result.reviews});
                }));
                break;
            default:
                API.get('/getReviews').then((result => {
                    return this.setState({reviews:result.reviews});
                }));
                 break;
        }
    }
    handlePartyTypeChange(event){
        switch(event.target.value){
            case 'All':
                API.get('/getReviews').then((totalReviews) => {
                    if (this.state.sort === 'Travel Date'){
                        API.get('/reviewsByTravelDate').then((result)=> {
                            return this.setState({reviews:result.reviews});
                        });
                    }
                    else {
                        API.get('/reviewsByContributionDate').then((result)=> {
                            return this.setState({reviews:result.reviews});
                        });
                    }
                });
                API.get('/traveled')
                API.get('/reviewAverage').then((result => {
                    return this.setState({ratings:result});
                }));

                break;

            default:
                // this.setState({ratings:Static.averageReviews[event.target.value]});
                let traveledWith = event.target.value;
                API.get('/traveledWithAverage')
                    .then((result)=> {

                        return this.setState({ratings:result.result[traveledWith], ratingsByTraveledWith:result});
                    });
                API.get('/reviewsByTraveledWith', '?traveledWith=' + traveledWith).then((result)=> {
                    if (this.state.sort === 'Travel Date'){
                        API.get('/reviewsByTravelDate').then((result)=> {
                            return this.setState({reviews:result.reviews});
                        });
                    }
                    else {
                        API.get('/reviewsByContributionDate').then((result)=> {
                            return this.setState({reviews:result.reviews});
                        });
                    }
                });
                break;
        }
    };

    render() {

        return (
            <div>
                <div style={{width:'85%'}}>
                    <RatingTable {...this.state.ratings}/>
                </div>
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
                <TraveledWithRatings {...this.state.ratingsByTraveledWith} />
                {this.state.reviews.map((review, i ) => <Review key={i} {...review}/>)}
            </div>
        );
    }
}
