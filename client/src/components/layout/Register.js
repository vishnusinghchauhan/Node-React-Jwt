import React, { Component } from 'react';
import { connect } from 'react-redux';

import Instructions from './Instructions';
import { register } from '../../Actions/UserAction';

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


class Register extends Component {
	
	constructor() {
        super();
         this.state = {
                name: "test",
                email:"vishnu@gmail.com",
                password:"123",
                cpassword:"123"
        };
        this.submitValue = this.submitValue.bind(this); 
    }

    submitValue(event){
		event.preventDefault();
		var registerObj = {
			name: this.state.name,
			email:this.state.email,
			password:this.state.password,
			cpassword:this.state.cpassword
		}
		console.log("saving........",registerObj)
		this.props.register(registerObj);
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
	                        <small>Sign up with credentials</small>
	                      </div>
	                      <Form role="form" onSubmit={this.submitValue}>
	                        <FormGroup>
	                          <InputGroup className="input-group-alternative mb-3">
	                            <InputGroupAddon addonType="prepend">
	                              <InputGroupText>
	                                <i className="ni ni-hat-3" />
	                              </InputGroupText>
	                            </InputGroupAddon>
	                            <Input placeholder="Name" type="text" defaultValue={this.state.name}  onChange={e => this.setState({ name: e.target.value })}  />
	                          </InputGroup>
	                        </FormGroup>
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
	                              defaultValue={this.state.cpassword}  onChange={e => this.setState({ cpassword: e.target.value })} 
	                            />
	                          </InputGroup>
	                        </FormGroup>
	                        
	                        <Row className="my-4">
	                          <Col xs="12">
	                            <div className="custom-control custom-control-alternative custom-checkbox">
	                              <input
	                                className="custom-control-input"
	                                id="customCheckRegister"
	                                type="checkbox"
	                              />
	                              <label
	                                className="custom-control-label"
	                                htmlFor="customCheckRegister"
	                              >
	                                <span>
	                                  I agree with the
	                                  <a  href="#pablo"  onClick={e => e.preventDefault()}  >
	                                    Privacy Policy
	                                  </a>
	                                </span>
	                              </label>
	                            </div>
	                          </Col>
	                        </Row>
	                        <div className="text-center">
	                          <Button
	                            className="mt-4"
	                            color="primary"
	                            type="submit"
	                          >
	                            Create account
	                          </Button>
	                        </div>
	                      </Form>
	                    </CardBody>
	                  </Card>
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
    register: (data) => dispatch(register(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Register);

