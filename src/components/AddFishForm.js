import React from "react";
import PropTypes from "prop-types";

class AddFishorm extends React.Component {

  nameRef = React.createRef();
  priceRef = React.createRef();
  statusRef = React.createRef();
  descRef = React.createRef();
  imageRef = React.createRef();

  static propTypes = {
    addFish: PropTypes.func.isRequired
  }

  createFish = (event) => {
    // 1. Stop the form from submitting
    event.preventDefault();
    // 2. Create a fish object from the form data
    const fish = {
      name: this.nameRef.current.value,
      price: parseFloat(this.priceRef.current.value),
      status: this.statusRef.current.value,
      desc: this.descRef.current.value,
      image: this.imageRef.current.value,
    }
    this.props.addFish(fish);
    // 3. Refresh the form
    event.currentTarget.reset();
  }
  render() {
    return (
      <form action="" className="fish-edit" onSubmit={this.createFish}>
        <input name="name" ref={this.nameRef} type="text" placeholder="Name"/>
        <input name="price" ref={this.priceRef}  type="text" placeholder="Price"/>
        <select name="status" ref={this.statusRef}  >
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea name="desc" ref={this.descRef}  placeholder="Desc"></textarea>
        <input name="image" type="text" ref={this.imageRef}  placeholder="Image"/>  
        <button type="submit">+ Add Fish</button>
      </form>
    );
  }
}

export default AddFishorm;