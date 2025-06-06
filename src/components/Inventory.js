import React from "react";
import AddFishorm from "./AddFishForm";
import EditFishForm from "./EditFishForm";
import PropTypes from "prop-types";
/* import Login from "./Login"; */
/* import firebase from "firebase";
import base, { firebaseApp } from "../base"; */

class Inventory extends React.Component {
  static propTypes = {
    fishes: PropTypes.object.isRequired,
    addFish: PropTypes.func.isRequired,
    updateFish: PropTypes.func.isRequired,
    deleteFish: PropTypes.func.isRequired,
    loadSampleFishes: PropTypes.func.isRequired
  }

/*   state = {
    uid: null,
    owner: null
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user) {
        this.authHandler({ user });
      }
    });
  }

  authHandler = async (authData) => {
    // 1 look up the current store in the firebase database
    const store = await base.fetch(this.props.storeId, { context: this });
    // 2 claim it if there is no owner
    if (!store.owner) {
      // save it as our own
      await base.post(`${this.props.storeId}/owner`, {
        data: authData.user.uid
      });
    }
    // 3 set the state of the inventory component to reflect the current user
    this.setState({
      uid: authData.user.uid,
      owner: store.owner || authData.user.uid
    });
  }
  authenticate = (provider) => {
    const authProvider = new firebase.auth[`${provider}AuthProvider`]();
    firebase.auth().signInWithPopup(authProvider)
      .then(this.authHandler)
      .catch(error => {
        console.error('Error during authentication:', error);
      });
  } */
 /*  logout = async () => {
    await firebase.auth().signOut();
    this.setState({ uid: null });
  } */
  render() {
    /* const logout = <button onClick={this.logout}>Log Out</button>; */

    /*  // 1 check if they are logged in
     if (!this.state.uid) {
       return <Login authenticate={this.authenticate} />;
     }
     // 2 check if they are not the owner of the store
     if (this.state.uid !== this.state.owner) {
       return (
         <div>
           <p>Sorry, you are not the owner of this store.</p>
           {logout}
         </div>
       );
     } */
    // 3 they must be the owner, show the inventory
    return (
      <div className="inventory">
        <h2>Inventory</h2>
        {/* {logout} */}
        {Object.keys(this.props.fishes).map(key => <EditFishForm key={key} index={key} fish={this.props.fishes[key]} updateFish={this.props.updateFish} deleteFish={this.props.deleteFish} />)}
        <AddFishorm addFish={this.props.addFish} />
        <button onClick={this.props.loadSampleFishes}>Load Sample Fishes</button>
      </div>
    );
  }
}

export default Inventory;