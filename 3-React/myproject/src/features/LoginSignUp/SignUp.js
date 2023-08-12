import React from "react";
import { Form } from 'reactstrap';

export const Signup = (props) => {
    return (
    <> 
    <div id="signupModal" className="justify-content-center modal fade" role="dialog">
        <div className="modal-dialog" role="document">
            <div className="modal-content">
                <header className="modal-header">
                    <h3 className="modal-title text-center">Sign up</h3>
                    <a className="close" type="button" data-target="#loginModal" data-toggle="modal"
                        data-dismiss="modal">Log In!</a>
                </header>
                <article className="card-body">
                    <Form>
                        <div className="form-row">
                            <div className="col form-group">
                                <label>First name </label>
                                <input type="text" className="form-control" placeholder="" />
                            </div>
                            <div className="col form-group">
                                <label>Last name</label>
                                <input type="text" className="form-control" placeholder=" " />
                            </div>
                        </div>
                        <div className="form-group">
                            <label>Email address</label>
                            <input type="email" className="form-control" placeholder="" />
                                <small className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div className="form-group">
                            <label className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="gender" value="option1" />
                                    <span className="form-check-label"> Male </span>
                            </label>
                            <label className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="gender" value="option2" />
                                    <span className="form-check-label"> Female</span>
                            </label>
                            <label className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="gender" value="option2" />
                                    <span className="form-check-label"> Other</span>
                            </label>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label>City</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="form-group col-md-6">
                                <label>Country</label>
                                <select id="inputState" className="form-control">
                                    <option> Choose...</option>
                                    <option>Israel</option>
                                    <option>Russia</option>
                                    <option>Ukraine</option>
                                    <option selected="">United States</option>
                                    <option>India</option>
                                    <option>Canada</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-group">
                            <label>Create password</label>
                            <input className="form-control" type="password"/>
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary btn-block"> Register </button>
                        </div>
                        <small className="text-muted">By clicking the 'Sign Up' button, you confirm that you accept our <br/>
                            Terms of use and Privacy Policy.</small>
                    </Form>
                </article>
                <div className="border-top card-body text-center">Have an account? <a className="close"
                    data-target="#loginModal" data-toggle="modal" data-dismiss="modal">Log In</a></div>
            </div>
        </div>

    </div></>);
}