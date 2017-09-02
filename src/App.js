import React, { Component } from 'react';
import Bar from './components/Bar'
import Square from './components/Square'
import { connect } from 'react-redux';
import { itemsFetchData } from './actions';


class App extends Component {

  componentDidMount() {
  	this.props.fetchData("https://prismapi-dev.herokuapp.com/api/v1/apps");
  }

  render() {
    return (
     	<div>
	    	<Bar status={this.props.status}/>
	    	<Square status={this.props.status} data={this.props.items}/>
	    </div>
      );
  }
}


const mapStateToProps = (state) => {
    return {
        items: state.data,
        status: state.status,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(itemsFetchData(url))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);