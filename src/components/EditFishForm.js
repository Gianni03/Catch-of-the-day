import React from 'react';

class EditFishForm extends React.Component {
  handleChange = (event) => {
    // update that fish
    // 1. Take a copy of the fish
    const updatedFish = {
      ...this.props.fish,
      [event.currentTarget.name]: event.currentTarget.value, // use the name attribute to update the correct property, the [] syntax is used to access the property dynamically
    };
    this.props.updateFish(this.props.index, updatedFish);
  }
  render() {
    return (
      <div className="fish-edit">
        <input
          type="text"
          name="name"
          placeholder="Fish Name"
          onChange={this.handleChange}
          value={this.props.fish.name}
        />
        <input
          type="text"
          name="price"
          placeholder="Fish Price"
          onChange={this.handleChange}
          value={this.props.fish.price}
        />
        <select
          name="status"
          onChange={this.handleChange}
          value={this.props.fish.status}
        >
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea
          name="desc"
          placeholder="Fish Desc"
          onChange={this.handleChange}
          value={this.props.fish.desc}
        ></textarea>
        <input
          type="text"
          name="image"
          placeholder="Fish Image"
          onChange={this.handleChange}
          value={this.props.fish.image}
        />
        <button>Save Fish</button>
      </div>
    );
  }
}

export default EditFishForm;
