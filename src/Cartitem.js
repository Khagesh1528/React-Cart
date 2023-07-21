import React from "react";


class CartItem extends React.Component{
  
    constructor () {
        super();
        this.state = {
           price:999,
           title:"Mobile Phone",
           Qty:1,
           img:''

        }
    }
    increaseQuantity =()=>{
      console.log('this',this.state);
    }
    render(){
        const{price,title,Qty} = this.state;
        return(
        <div className="cart-item">
                <div className="left-block">
                <img style={Styles.image} />
                </div>
                <div className="right-block">
                    <div style={{fontSize:25}}>{title}</div>
                    <div style={{ color:'#777' }}>Rs {price}</div>
                    <div style={{ color:'#777' }}>QTY: {Qty}</div>
                </div>
                <div className="cart-item-actions">

                    <img alt="increase" onClick={this.increaseQuantity}
                    className="action-icons" 
                    src="https://cdn-icons-png.flaticon.com/128/3303/3303893.png" 
                    />

                    <img alt="decrease" 
                    className="action-icons" 
                    src="https://cdn-icons-png.flaticon.com/128/1828/1828906.png"
                    />
                    
                    <img alt="delete" 
                    className="action-icons" 
                    src="https://cdn-icons-png.flaticon.com/128/484/484611.png" 
                    />

                </div>
        </div>
        );
    }
}

const Styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius:4,
        background:'#ccc'
 
    }
}

export default CartItem;