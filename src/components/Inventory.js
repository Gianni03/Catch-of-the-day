import React from "react";
import AddFishorm from "./AddFishForm";

class Inventory extends React.Component {
  render() {
    return (
      <div className="inventory">
        <h2>Inventory</h2>
        <AddFishorm addFish={this.props.addFish}/>
      </div>
    );
  }
}

export default Inventory;