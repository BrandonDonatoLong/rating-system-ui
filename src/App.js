import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReviewSummary from './components/review-summary';
import './App.css';
let hotelTitle='The Hoxton';

class App extends Component {

    static contextTypes = {
        router: PropTypes.shape({
            route: PropTypes.shape({
                location: PropTypes.shape({
                    pathname: PropTypes.string.isRequired,
                }).isRequired,
            }).isRequired,
            history: PropTypes.shape({
                listen: PropTypes.func.isRequired,
            }).isRequired,
        }).isRequired,
    };

    componentWillMount() {
        let pathname = this.context.router.route.location.pathname;
        this.context.router.history.listen(() => {
            if (this.context.router.route.location.pathname !== pathname) {
                pathname = this.context.router.route.location.pathname;
                window.scrollTo(0, 0);
            }
        });
    };

    render() {
        return (
            <div className='App'>
                <div className='App-header'>
                    <img src='http://i.imgur.com/A5kXyyq.jpg' className='App-logo' alt='logo' />
                    <h2 className='Header-Title'>{hotelTitle}</h2>
                </div>

                <div className='description'>
                    <p>
                        The Hoxton, Amsterdam<br/><br/>

                        The Hoxton opened its doors on Herengracht in 2015. Made up of 5 canal houses, the building was once home to the Mayor, way back in the 17th century. Now it houses 111 rooms spread across 5 floors with plenty of quirks including some monumental ceilings and lots of canal views – we're lucky enough to have canals on each side of the building. Downstairs, there's the restaurant, Lotti's; Up Top, our mezzanine coffee and cocktail den, lobby bar; and The Apartment, our meeting and event space, which doubles up as a home to Hoxtown.
                    </p>
                </div>
                <ReviewSummary/>

            </div>
        );
    };
}
export default App;
