import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link, Redirect} from "react-router-dom";
import { logout } from "../Actions/UserAction";
import { connect } from 'react-redux';


class Header extends Component {
  constructor() {
      super();
      this.state = {};
  }
  componentDidMount() {
    this.props.getAuth()
  }

  render() {
    var isUserLoggedin =  this.props && this.props.login && this.props.login.loggedIn
     return (

         <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <a className="navbar-brand" href="/">RMS</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarColor03">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                      <Link as={Link}  className="nav-link" to="/login"> <i class="fa fa-home" aria-hidden="true"></i> Home</Link>
                </li>
              </ul>

              <ul className="navbar-nav  navbar-right">
                  
                { !isUserLoggedin &&
                  <li className="nav-item">
                      <Link as={Link}  className="nav-link" to="/login"> <i class="fa fa-user-circle-o" aria-hidden="true"></i> Login</Link>
                  </li>
                }
                { !isUserLoggedin &&
                  <li className="nav-item">
                     <Link as={Link}  className="nav-link" to="/register"> <i class="fa fa-sign-out" aria-hidden="true"></i> Register</Link>
                  </li>
                }
                { isUserLoggedin &&
                   <li className="nav-item">
                     <Link as={Link}  className="nav-link" to="/"  onClick={(e) => {e.preventDefault(); this.props.logoutRequest()}} > <i class="fa fa-sign-out" aria-hidden="true"></i> Logout </Link>
                  </li>
                }
              </ul>
            </div>
          </nav>

      )
   }

}


const mapStateToProps = (state) => {
  return {
    login: state.login,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    logoutRequest: () => dispatch(logout()),
    getAuth: () => dispatch({type:'GET_AUTH'}),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);