import React from "react";
import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;

export default class Layout extends React.Component {
        state = {
            locations: [],
            name: [],
            open: []
        };

    componentDidMount(){
        axios.get("https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=38.033554,-78.507980&radius=1500&type=restaurant&key=" + API_KEY).then(res => {
        console.log(res.data.results)
        this.setState({
            locations: res.data.results
            });
            let resNames = []
            {this.state.locations.map(results => (
                resNames.push(results.name)
            ))}
            this.setState({
                name: resNames
            })

            let openRes = []

            for(let i = 0; i < this.state.locations.length; i++){
                if(this.state.locations[i].opening_hours.open_now === true){
                    openRes.push(this.state.locations[i])
                }
            }

            this.setState({
                open: openRes
            })
            
        })


    }

  render() {
    return (
      <div>
          <ul>
              {this.state.locations.map(resulter => (
                  <li key={resulter.id}>{resulter.name}</li>
              ))}
          </ul>
          <h2>OPEN RESTAURANTS:</h2>
          <ul>
              {this.state.open.map(opened => (
                  <li key={opened.id}>{opened.name}</li>
              ))}
          </ul>
      </div>
    );
  }
}
