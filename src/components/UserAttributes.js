import * as utils from './../utilities';
import React from 'react';
import './forms.css';

class UserAttributes extends React.Component {

    state = {
        userId: "",
        firstName: "",
        lastName: "",
        emailAddress: "",
        gender: "male",
        birthday: "",
        country: "",
        homeCity: "",
        phoneNumber: "",
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }
    handleClick= (e, value) => {
        // Call utilities based on submit button id to triage request to braze
        utils.logMethod(e.target.id, value);
        
    }


    render() {
        return (
            <div className="Input-Group">
                <div className='form-group'>

                    <div className="form-line">
                        <label htmlFor="change_user_text" className="Label">User ID</label>
                        <input className="InputElement" id="change_user_text" type="text" name="userId" onChange={this.handleChange} value={this.state.userId} />
                        <button className="btn btn-primary" id="change_user_button" onClick={e=> this.handleClick(e, this.state.userId)}>Submit</button>
                    </div>


                    <div className="form-line">
                        <label htmlFor="fn_text" className="Label">First Name</label>
                        <input className="InputElement" id="fn_text" type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange} />
                        <button className="btn btn-primary" id="fn_button" onClick={e=> this.handleClick(e, this.state.firstName)}>Submit</button>

                    </div>

                    <div className="form-line">
                        <label htmlFor="ln_text" className="Label">Last name</label>
                        <input className="InputElement" id="ln_text" type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange} />
                        <button className="btn btn-primary" id="ln_button" onClick={e=> this.handleClick(e, this.state.lastName)}>Submit</button>
                    </div>

                    <div className="form-line">
                        <label htmlFor="email_text" className="Label">Email Address</label>
                        <input className="InputElement" id="email_text" type="email" name="emailAddress" value={this.state.emailAddress} onChange={this.handleChange} />
                        <button className="btn btn-primary" id="email_button" onClick={e=> this.handleClick(e, this.state.emailAddress)}>Submit</button>
                    </div>

                    <div className="form-line">
                        <label htmlFor="gender" className="Label">Gender</label>
                        <select className="InputElement" id="gender" name="gender" value={this.state.gender} onChange={this.handleChange}>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                            <option value="unknown">Unknown</option>
                            <option value="not applicable">Not Applicable</option>
                            <option value="prefer not to answer">Prefer Not To Answer</option>
                        </select>
                        <button className="btn btn-primary" id="gender_button" onClick={e=> this.handleClick(e, this.state.gender)}>Submit</button>

                    </div>

                    <div className="form-line">
                        <label htmlFor="birthday" className="Label">Birthday</label>
                        <input className="InputElement" id="birthday" type="date" name="birthday" size="20" value={this.state.birthday} onChange={this.handleChange}/>
                        <button className="btn btn-primary" id="birthday_button" onClick={e=> this.handleClick(e, this.state.birthday)}>Submit</button>
                    </div>
                    <div className="form-line">
                        <label htmlFor="country_text" className="Label">Country</label>
                        <input className="InputElement" id="country_text" type="text" name="country" value={this.state.country} onChange={this.handleChange}/>
                        <button className="btn btn-primary" id="country_button" onClick={e=> this.handleClick(e, this.state.country)}>Submit</button>
                    </div>
                    <div className="form-line">
                        <label htmlFor="home_city_text" className="Label">Home City</label>
                        <input className="InputElement" id="home_city_text" type="text" name="homeCity" value={this.state.homeCity} onChange={this.handleChange}/>
                        <button className="btn btn-primary" id="home_city_button" onClick={e=> this.handleClick(e, this.state.homeCity)}>Submit</button>
                    </div>
                    <div className="form-line">
                        <label htmlFor="phone_number_text" className="Label">Phone Number</label>
                        <input className="InputElement" id="phone_number_text" type="text" name="phoneNumber" value={this.state.phoneNumber} onChange={this.handleChange}/>
                        <button className="btn btn-primary" id="phone_number_button" onClick={e=> this.handleClick(e, this.state.phoneNumber)}>Submit</button>
                    </div>
                </div>

            </div>
        )
    }


}
export default UserAttributes;