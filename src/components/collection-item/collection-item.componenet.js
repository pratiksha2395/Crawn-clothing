import React from 'react'
import {AddItem} from '../../redux/cart/cart.actions'
import {connect} from 'react-redux'
import './collection-item.styles.scss'
import CustomButton from '../custom-button/customButton.componenet'
import { useParams } from 'react-router-dom'
const CollectionItem = ({item, addItem})=>{
    console.log("hello")
    const { name, price, imageUrl} = item
    
    return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton onClick={() => addItem(item)} inverted>
        Add to Cart
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(AddItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
