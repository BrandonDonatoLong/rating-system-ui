/**
 * Created by Brandon on 7/6/2017.
 */
import React, {Component} from 'react';
import RatingTable from './rating-table';
import createFragment from 'react-addons-create-fragment';

export default class Review extends Component {
    render(){
        return <div className='reviewBoard'>
            <RatingTable className='reviewRatings' {...this.props.ratings}/>
            {Object.keys(this.props.texts).map((language) =>{
                return <div style={{textAlign:'left', margin:'10px'}}>
                    <label ><strong>Language:</strong> {language}</label>
                    <label><strong> Title:</strong> {this.props.titles[language]}</label>
                    <p>
                    {this.props.texts[language]}
                    </p>
                </div>;
            })}
            <div style={{backgroundColor:'#aaaaaa', textAlign:'left'}}>User <strong>{this.props.user}</strong> traveled with <strong>{this.props.traveledWith.toLowerCase()}</strong> on <strong>{createFragment(new Date(this.props.travelDate).toDateString())}</strong> and submitted review at <strong>{createFragment(new Date(this.props.entryDate).toString())}</strong></div>
        </div>
    };
}
