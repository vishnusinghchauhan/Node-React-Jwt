import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUserData } from '../../Actions/UserAction';



class Dashboard extends Component {
  constructor() {
      super();
      this.state = {};
  }
  componentDidMount() {
  	this.props.fetchUserData();
  }
  render() {
     return (
     	<div className="jumbotron">
		  <h1 className="display-3">aaaaaaaa!</h1>
		</div>
     	)
    }
}


const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => ({
    fetchUserData: () => dispatch(fetchUserData())    
})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);




