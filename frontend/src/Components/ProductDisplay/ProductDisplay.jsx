import React, { useContext } from "react";
import "./ProductDisplay.css";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from "../../Context/ShopContext";
import { backend_url, currency } from "../../App";

//const [style, setstyle]= useState("12");
//const cat=product;
const ProductDisplay = ({product}) => {

  const {addToCart} = useContext(ShopContext);

  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={backend_url + product.image} alt="img" />
          <img src={backend_url + product.image} alt="img" />
          <img src={backend_url + product.image} alt="img" />
          <img src={backend_url + product.image} alt="img" />
        </div>
        <div className="productdisplay-img">
          <img className="productdisplay-main-img" src={backend_url + product.image} alt="img" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-stars">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">{currency}{product.old_price}</div>
          <div className="productdisplay-right-price-new">{currency}{product.new_price}</div>
        </div>
        <div className="productdisplay-right-description">
        {product.description}
        </div>
        <div className="productdisplay-right-size">
        {product.category === 'laptop' && (
                    <>
                <h1>Style Name</h1>
                        </>
                           )}
          {product.category === 'mobile' && (
                    <>
                <h1>Size</h1>
                        </>
                           )}

          {product.category === 'television' && (
                    <>
                <h1>Size</h1>
                        </>
                           )}            
          <div className="productdisplay-right-sizes">
              {product.category === 'laptop' && (
                    <>
                <div>"14" i3-1215U 8GB</div>
                <div>"14" i5-1235U 16GB</div>
                  <div>"15" 1334U 16GB</div>
                        </>
                           )}
              {product.category === 'mobile' && (
                    <>
                <div>12GB + 256GB</div>
                <div>12GB + 128GB</div>
                  <div>12GB + 512GB</div>
                        </>
                           )}    
              {product.category === 'television' && (
                    <>
                <div>33 inches</div>
                <div>55 inches</div>
                  <div>65 inches</div>
                        </>
                           )}            
              </div>

        </div>
        <button onClick={()=>addToCart(product.id)}>ADD TO CART</button>
        <p className="productdisplay-right-category"><span>Category :</span> Electronics, Accessories</p>
        <p className="productdisplay-right-category"><span>Tags :</span> Modern, Latest</p>
      </div>
    </div>
  );
};

export default ProductDisplay;
