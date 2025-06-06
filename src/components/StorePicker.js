import React from 'react';
import PropTypes from 'prop-types';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
  static propTypes = {
    history: PropTypes.object
  }
  
  myInput = React.createRef();

  goToStore = (event) => {
  event.preventDefault();
    const storeName = this.myInput.current.value;
    // get the text from that input
    // cambiar la url
    this.props.history.push(`/store/${storeName}`);
  }
  
  render() {
    return (
        <form action="" className="store-selector" onSubmit={this.goToStore}>
          <h2>Please enter a store</h2>
          <input 
            type="text"
            ref={this.myInput}
            required 
            placeholder="Store Name" 
            defaultValue={getFunName()} 
          />
          <button type="submit">Visit Store →</button>
        </form>
      
    );
  }
}

// Export the StorePicker component
export default StorePicker;
