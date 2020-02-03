import React, { Component } from 'react';
import { connect } from 'react-redux';

import Instructions from './Instructions';
import { login } from '../../Actions/UserAction';

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

class Login extends Component {
	
	constructor() {
        super();
         this.state = {
                email:"vishnu@gmail.com",
                password:"123",
        };
        this.submitValue = this.submitValue.bind(this); 
    }

    submitValue(event){
		event.preventDefault();
		var loginObj = {
			email:this.state.email,
			password:this.state.password,
		}
		console.log("loginObj........",loginObj)
		this.props.login(loginObj);
    }


    render() {
    	
     return (
		<section className="section section-shaped section-lg">
	            <div className="shape shape-style-1 bg-gradient-default">
	              <span />
	              <span />
	              <span />
	              <span />
	              <span />
	              <span />
	              <span />
	              <span />
	            </div>

	            <Container className="lg-md">
	              <Row className="justify-content-center">
	                <Col lg="5">
	                  <Card className="bg-secondary shadow border-0">
	                    <CardBody className="px-lg-5 py-lg-5">
	                      <div className="text-center text-muted mb-4">
	                        <small>sign in with credentials</small>
	                      </div>
	                      <Form role="form" onSubmit={this.submitValue}>
	                        <FormGroup>
	                          <InputGroup className="input-group-alternative mb-3">
	                            <InputGroupAddon addonType="prepend">
	                              <InputGroupText>
	                                <i className="ni ni-email-83" />
	                              </InputGroupText>
	                            </InputGroupAddon>
	                            <Input placeholder="Email" type="email" defaultValue={this.state.email}  onChange={e => this.setState({ email: e.target.value })}  />
	                          </InputGroup>
	                        </FormGroup>
	                        <FormGroup>
	                          <InputGroup className="input-group-alternative">
	                            <InputGroupAddon addonType="prepend">
	                              <InputGroupText>
	                                <i className="ni ni-lock-circle-open" />
	                              </InputGroupText>
	                            </InputGroupAddon>
	                            <Input
	                              placeholder="Password"
	                              type="password"
	                              autoComplete="off"
	                              defaultValue={this.state.password}  onChange={e => this.setState({ password: e.target.value })} 
	                            />
	                          </InputGroup>
	                        </FormGroup>

	                        <div className="custom-control custom-control-alternative custom-checkbox">
	                          <input
	                            className="custom-control-input"
	                            id=" customCheckLogin"
	                            type="checkbox"
	                          />
	                          <label
	                            className="custom-control-label"
	                            htmlFor=" customCheckLogin"
	                          >
	                            <span>Remember me</span>
	                          </label>
	                        </div>
		                    
		                    <div className="text-center">
	                          <Button
	                            className="my-4"
	                            color="primary"
	                            type="submit"
	                          >
	                            Sign in
	                          </Button>
	                        </div>

	                      </Form>
	                    </CardBody>
	                  </Card>

	                  <Row className="mt-3">
		                <Col xs="6">
		                  <a
		                    className="text-light"
		                    href="#pablo"
		                    onClick={e => e.preventDefault()}
		                  >
		                    <small>Forgot password?</small>
		                  </a>
		                </Col>
		                <Col className="text-right" xs="6">
		                  <a
		                    className="text-light"
		                    href="#pablo"
		                    onClick={e => e.preventDefault()}
		                  >
		                    <small>Create new account</small>
		                  </a>
		                </Col>
		              </Row>

	                </Col>
	              </Row>
            </Container>
		</section>
  		)
    }
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => ({
    login: (data) => dispatch(login(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);

