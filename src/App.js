import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import { Link } from 'react-router-dom';
let hotelTitle='The Hoxton';

let reviews=[
    'top5',
    'bottom5',
    'mostRecent'
];

let ratings ={
    "result": {
        "location": "7.903",
        "service": "0.000",
        "priceQuality": "7.831",
        "food": "0.000",
        "room": "0.000",
        "childFriendly": "7.745",
        "interior": "0.000",
        "size": "0.000",
        "activities": "0.000",
        "restaurants": "5.571",
        "sanitaryState": "3.086",
        "accessibility": "0.000",
        "nightlife": "0.000",
        "culture": "0.000",
        "surrounding": "0.000",
        "atmosphere": "0.000",
        "noviceSkiArea": "0.000",
        "advancedSkiArea": "0.000",
        "apresSki": "0.000",
        "beach": "0.000",
        "entertainment": "0.000",
        "environmental": "0.000",
        "pool": "1.227",
        "terrace": "0.000"
    },
    "general": 8.471
};

const reviewTable = {width:'100%'};

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
    }
  render() {
    return (
          <div className="App">
            <div className="App-header">
              <img src="http://i.imgur.com/A5kXyyq.jpg" className="App-logo" alt="logo" />
              <h2 className="Header-Title">{hotelTitle}</h2>
            </div>
              <nav className="App-intro">
                  {reviews.map(review => {
                      return <Link key={review} to={`/athlete/${review}`} activeClassName="active">
                          {review}
                      </Link>;
                  })}
              </nav>
              <div className="description">
                  <p>
                      The Hoxton, Amsterdam<br/><br/>

                      The Hoxton opened its doors on Herengracht in 2015. Made up of 5 canal houses, the building was once home to the Mayor, way back in the 17th century. Now it houses 111 rooms spread across 5 floors with plenty of quirks including some monumental ceilings and lots of canal views – we're lucky enough to have canals on each side of the building. Downstairs, there's the restaurant, Lotti's; Up Top, our mezzanine coffee and cocktail den, lobby bar; and The Apartment, our meeting and event space, which doubles up as a home to Hoxtown.
                  </p>
              </div>
              <div>
                  <table className="avgRatings">
                      <tr>
                          <th>Ratings</th>
                          <th/>
                      </tr>
                      <tr>
                          <td>General</td><td>{ratings.general}</td>
                      </tr>
                      {Object.keys(ratings.result).map((rating) =>{
                          if (ratings.result[rating] > 0) {
                              return <tr>
                                  <td>{rating}</td>
                                  <td>{ratings.result[rating]}</td>
                              </tr>
                          } else {
                              //return and empty because JSlint doesn't like it when an arrow function returns without a value.
                              return undefined;
                          }
                      })}
                  </table>
                  <div className="reviewBoard">
                      <table style={reviewTable}>
                          <tr>
                              <th>Most Recent</th>
                          </tr>
                          <tr>
                              <td>
                                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                              </td>
                              <td>
                                  8
                              </td>
                              <td>
                                  <Link key={'1'} to={`/review?id=12354`}>
                                      See More
                                  </Link>
                              </td>
                          </tr>
                          <tr>
                              <td>
                                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                              </td>
                              <td>
                                  8
                              </td>
                              <td>
                                  <Link key={'1'} to={`/review?id=12354`}>
                                      See More
                                  </Link>
                              </td>
                          </tr>
                          <tr>
                              <td>
                                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                              </td>
                              <td>
                                  8
                              </td>
                              <td>
                                  <Link key={'1'} to={`/review?id=12354`}>
                                      See More
                                  </Link>
                              </td>
                          </tr>


                      </table>
                  </div>
              </div>
          </div>
    );
  }
}

export default App;
