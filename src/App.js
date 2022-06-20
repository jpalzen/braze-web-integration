import logo from './logo.svg';
import './App.css';
import UserAttributes from './components/UserAttributes';
import CustomEvents from './components/CustomEvents';
import CustomAttributes from './components/CustomAttributes';
import Purchases from './components/Purchases';
import React from 'react';

class App extends React.Component {

  state = {
    showUserA: false,
    showCustomA: false,
    showCustomE: false,
    showPurchases: false,
  }

  handleUserAClick = (e) => {
    this.setState({ showUserA: !this.state.showUserA,
      showCustomA: false,
      showCustomE: false,
      showPurchases: false, });
  }
  handleCustomAClick = (e) => {
    this.setState({ showCustomA: !this.state.showCustomA,
      showUserA: false,
      showCustomE: false,
      showPurchases: false, });
  }
  handleCustomEClick = (e) => {
    
    this.setState({ showCustomE: !this.state.showCustomE,
      showCustomA: false,
      showUserA: false,
      showPurchases: false, });
  }
  handlePurchaseClick = (e) => {
   
    this.setState({ showPurchases: !this.state.showPurchases,
      showCustomA: false,
      showCustomE: false,
      showUserA: false, });
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <h1>Braze Web SDK Tutorial Site</h1>

          <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
            Read Me!
          </button>
        </header>
        {/*
         <a href="https://js.appboycdn.com/web-sdk/latest/doc/module-appboy.html" target="_blank">Link to Web SDK Documentation (Main ClassName Methods)</a>
        <a href="https://js.appboycdn.com/web-sdk/latest/doc/ab.User.html" target="_blank">Link to Web SDK Documentation (getUser() SubclassName Methods)</a>
        <a href="https://sweeney.braze.com/users/user_search/5cf92ce4fbe76a0c3c861e6a" target="_blank">Link to Braze Dashboard</a>


    */}
       
        <div className="App-body">

            <button className="specialButton" onClick={this.handleUserAClick}>Set User Attributes</button>
            
            <button className="specialButton" onClick={this.handleCustomAClick}>Set Custom Attributes</button>
        
            <button className="specialButton" onClick={this.handleCustomEClick}>Log Custom Events</button>
            
            <button className="specialButton" onClick={this.handlePurchaseClick}>Log Purchases</button>
          
          <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">Hey There!</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  Welcome to my Braze Web SDK Integration Tutorial.


                  Get started by integrating methods into the JavaScript file in this folder titled script.js (PAY CLOSE ATTENTION TO THE COMMENTS).


                  -If you get stuck, there is an answer key file in the folder.


                  The documentation for the methods, as well as the real-time user search dashboard, are linked on this page.


                  When using the actual HTML site, make sure to submit a User ID (inside user attributes) before you do anything else!

                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>
          
        </div>
        <div className="Input-forms">
        {this.state.showUserA ? <UserAttributes display={this.state.showUserA} /> : ""}
        {this.state.showCustomA ? <CustomAttributes display={this.state.showUserA} /> : ""}
        {this.state.showCustomE ? <CustomEvents display={this.state.showUserA} /> : ""}
        {this.state.showPurchases ? <Purchases display={this.state.showUserA} /> : ""}

        </div>
        
      </div>

    )
  };

}

export default App;
