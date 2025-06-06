import React from 'react';

import { formatPrice } from '../helpers';
import PropTypes from 'prop-types';

class Fish extends React.Component {
  static propTypes = {
    details: PropTypes.shape({
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      desc: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired
    }).isRequired,
    addToOrder: PropTypes.func
  }
  render() {
    const { image, name, price, desc, status } = this.props.details;
    const isAvailable = status === 'available';

    return (
      <li className="menu-fish">
        <img src={image} alt={name} />
        <h3 className="fish-name">{name}
          <span className='price'>{formatPrice(price)}</span>
        </h3>
        <p>{desc}</p>
        <button disabled={!isAvailable} onClick={() => this.props.addToOrder(this.props.index)}>{isAvailable ? 'Add To Order' : 'SOLD OUT'}</button>
      </li>
    )
  }
}

export default Fish;