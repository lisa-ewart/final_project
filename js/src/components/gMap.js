import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ChatRoom from './ChatRoom';

const generateRandomFunc = (functionRoot, cb = function(){}) => {
	const functionName = `${functionRoot}_${Date.now()}`;
	window[functionName] = (overrideCb = null) => {
		delete window[functionName];
		if (overrideCb) {
			overrideCb();
			return;
		}
		cb();
	}
	return functionName;
};

const paramify = params => Object.keys(params)
	.map(key => [key, params[key]].join('='))
	.join('&');

const loadGMapScript = (url, params) => {
	return new Promise((resolve, reject) => {
		const functionName = generateRandomFunc('gmapsCallback', () => {
			resolve(true)
		});

		params = Object.assign({}, params, {
			callback: functionName
		});

		const script = document.createElement('script');
		script.onload = () => window[functionName];
		script.onerror = (e) => window[functionName](() => {
			reject(e);
		});
		script.type = 'text/javascript';
	    script.src = url + '?' + paramify(params);
	    document.body.appendChild( script );  
	});
}

const loadMap = (domNode, options = {}) => new google.maps.Map(domNode, Object.assign({
	zoom: 14,
	scrollwheel: false,
}, options));

export default class GMaps extends Component {
	state = {
		mapLoaded: false,
		mapUrl: 'https://maps.googleapis.com/maps/api/js',
	}
	_wrapStyle = {
		position: 'relative',
		width : "80%",
        height : "600px",
	}
	_shimStyle = {
		position: 'absolute',
        height: '100%',
        width: '100%',
        top: 0,
        left: 0,
        zIndex: 2,
        cursor: 'wait',
	}

	_loadMap() {
		const {mapUrl} = this.state;
		const {center, apiKey} = this.props;
		loadGMapScript(mapUrl, {key: apiKey})
			.then(_ => this.map = loadMap(this.refs.map, {
				center,
			}))
			.then(_ => this.setState({
				mapLoaded: true,
			}))
	}

	_initShimLogic() {
        const root = ReactDOM.findDOMNode(this.refs.root);
        const node = ReactDOM.findDOMNode(this.refs.shim);
        let timeout = null;
        root.addEventListener('mouseenter', () => {
        	clearTimeout(timeout)
            timeout = setTimeout(() => {
                node.style.zIndex = -1;
                node.style.cursor = 'initial';
            }, 2000)
        });
        root.addEventListener('mouseleave', () => {
        	clearTimeout(timeout)
            node.style.zIndex = 2;
            node.style.cursor = 'wait';
        });		
	}

	componentDidMount() {
		this._loadMap();
		this._initShimLogic();
	}


	render() {
		const {_wrapStyle, _shimStyle} = this;
		return (<div ref="root" style={_wrapStyle}>
            <div ref="shim" style={_shimStyle}></div>
            <div id="droneMap" ref="map" style={_wrapStyle}></div>
            {this.renderMarkers()}
        </div>);
	}

	renderMarkers() {
		const {mapLoaded} = this.state;
		if (!mapLoaded) return null;

		const {children} = this.props;
		const {Children, cloneElement} = React;
		return Children.map(children, (child) => cloneElement(child, {
			mapLoaded: true,
			map: this.map,
		}))
	}
}



export class Marker extends Component {
	marker = null
	_loadMarker(props) {
		const {position, map, animation} = props;
		if (!map) return;
		this.marker = new google.maps.Marker({
            position,
            map,
            animation: google.maps.Animation[animation]
        });

          const contentString = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">LisaNicole</h1>'+
            '<h2 class="firstHeading">License #: N/A</h2>'+
            '<div id="bodyContent">'+
            '<p><b>LisaNicole </b>is a web app developer  '+
            '<button class = "instMessageBtn">Instant message LisaNicole</button>'+
            '<p>LisaNicole ratings: </p>'+
            '-She was allright...Eh...'+
             '<p>-Could be worse.</p>'+
              '<p></p>'+
            
            '</div>'+
            '</div>';

       		 this.marker.addListener('click', function() {
             // console.log("clicked map");
             	this.infowindow = new google.maps.InfoWindow({
		            position,
		            map,
		            content: contentString,
		        });
             });

	}
	componentDidMount() {
		this._loadMarker(this.props);
	}
	componentWillReceiveProps(nextProps) {
		this._loadMarker(nextProps)
	}
	render() {
		return null;
	}
}


 // google.maps.event.addListener(marker, 'click', function() {
 //    //<code to go to user's profile page>
 //  });

		






export class InfoWindow extends Component {
	infowindow = null


	_loadWindow(props) {
		const {position, map, title, content} = props;
		if (!map) return;
		this.infowindow = new google.maps.InfoWindow({
            position,
            map,
            title,
            content,
        });
	}
	componentDidMount() {
		this._loadWindow(this.props);
	}
	componentWillReceiveProps(nextProps) {
		this._loadWindow(nextProps)
	}
	render() {
		return null;
	}
}