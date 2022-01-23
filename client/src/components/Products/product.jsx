import React from "react";
import "../../App.css";
import DetailsThumb from "./DetailsThumb";

class ProductDetails extends React.Component {
  state = {
    products: [
      {
        _id: "1",
        title: "Nykaa Rock The Line Kajal Eyeliner - Jet Black Set Of 2",
        src: [
          "https://i.ibb.co/6JkYhj1/kajal2.jpg",
          "https://i.ibb.co/CbX75dL/kajal1.jpg",
        ],

        content: "inclusive of all taxes",
        price: "MRP:₹398 | ₹338 |15% Off!",
        count: 1,
      },
    ],
    index: 0,
  };

  myRef = React.createRef();

  handleTab = (index) => {
    this.setState({ index: index });
    const images = this.myRef.current.children;
    for (let i = 0; i < images.length; i++) {
      images[i].className = images[i].className.replace("active", "");
    }
    images[index].className = "active";
  };

  componentDidMount() {
    const { index } = this.state;
    this.myRef.current.children[index].className = "active";
  }

  render() {
    const { products, index } = this.state;
    return (
      <div className="app">
        {products.map((item) => (
          <div className="details" key={item._id}>
            <DetailsThumb
              images={item.src}
              tab={this.handleTab}
              myRef={this.myRef}
            />

            <div className="big-img">
              <img src={item.src[index]} alt="" />
            </div>
            <div className="line"></div>
            <div className="box">
              <div className="row">
                <h1>{item.title}</h1>
              </div>
              <span>${item.price}</span>
              <p>{item.content}</p>

              <button className="cart">Add to cart</button>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default ProductDetails;
