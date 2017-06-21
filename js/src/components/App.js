import React, { Component } from 'react';
import GMaps, { Marker, InfoWindow } from './gMap';

//import Container, {infoWindow}  from './markerClick';
import ChatRoom from './ChatRoom';





export default class App extends Component {

    constructor(props){
        super(props)

        this.state = {
            // pos: {lat: 40.730610, lng: -73.935242 }
        }
    }

    componentDidMount(){
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
          
            this.setState({
                pos: {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                }
            })
        }.bind(this))
      }
    }

    // render() {
    //     return <div>{this.state.pos ? <GMaps {...this.props} apiKey={"AIzaSyATYry8EYxN0doyvmyEDPcfKnz2X6s7hjE"} center={this.state.pos}>
    //         <Marker position={this.state.pos} animation="DROP" />
    //     </GMaps> : null}</div>
    // }


     //<InfoWindow position={this.state.pos} />


    render() {
        return <div>
            <div>{this.state.pos ? <GMaps {...this.props} apiKey={"AIzaSyATYry8EYxN0doyvmyEDPcfKnz2X6s7hjE"} center={this.state.pos}>
                <Marker position={this.state.pos} animation="DROP" onClick={InfoWindow} />

                </GMaps> : null}
            </div>
            <div>
                <ChatRoom />
            </div>
        </div>  

    }





}

