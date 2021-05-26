import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
class Products extends Component {
  render() {
    return (
      <section className="product-card card-phuKien">
        <div className="title">
          <span className="title-product">Những mẫu Phụ Kiện Bán Chạy</span>
          <div className="descrip">
            <img
              className="img-title-mobile"
              src="http://pngimg.com/uploads/iphone_12/small/iphone_12_PNG23.png"
              alt="product__01"
            />
            {/* <span className="descrip-product">WinDow</span>
            <span className="descrip-product">Macbook</span>
            <span className="descrip-product">Linux</span> */}
          </div>
        </div>
        <div className="container-fluid product-card">
          <div className="row">
            <div className="card col-2">
              <div className="card__imgBx">
                <img
                  src="http://pngimg.com/uploads/iphone/small/iphone_PNG5736.png"
                  alt="product__01"
                />
                <h2 className="h2">Macbook Pro i2-16G</h2>
              </div>
              <div className="card__content">
                <div className="card__ram">
                  <span>4GB</span>
                  <span>8GB</span>
                  <span>16GB</span>
                  <span>32GB</span>
                </div>
                <div className="card__color">
                  <h3>Color :</h3>
                  <span />
                  <span />
                  <span />
                </div>
                <a href className="card__buy">
                  Buy Now
                </a>
                <a href className="card__cart">
                  ADD TO CART
                </a>
              </div>
            </div>
            <div className="card col-2">
              <div className="card__imgBx">
                <img
                  src="http://pngimg.com/uploads/iphone/small/iphone_PNG5724.png"
                  alt="product__01"
                />
                <h2 className="h2">Macbook Pro i2-16G</h2>
              </div>
              <div className="card__content">
                <div className="card__ram">
                  <span>4GB</span>
                  <span>8GB</span>
                  <span>16GB</span>
                  <span>32GB</span>
                </div>
                <div className="card__color">
                  <h3>Color :</h3>
                  <span />
                  <span />
                  <span />
                </div>
                <a href className="card__buy">
                  Buy Now
                </a>
              </div>
            </div>
            <div className="card col-2">
              <div className="card__imgBx">
                <img
                  src="http://pngimg.com/uploads/iphone_12/small/iphone_12_PNG5.png"
                  alt="product__01"
                />
                <h2 className="h2">Macbook Pro i2-16G</h2>
              </div>
              <div className="card__content">
                <div className="card__ram">
                  <span>4GB</span>
                  <span>8GB</span>
                  <span>16GB</span>
                  <span>32GB</span>
                </div>
                <div className="card__color">
                  <h3>Color :</h3>
                  <span />
                  <span />
                  <span />
                </div>
                <a href className="card__buy">
                  Buy Now
                </a>
              </div>
            </div>
            <div className="card col-2">
              <div className="card__imgBx">
                <img
                  src="http://pngimg.com/uploads/iphone_12/small/iphone_12_PNG36.png"
                  alt="product__01"
                />
                <h2 className="h2">Macbook Pro i2-16G</h2>
              </div>
              <div className="card__content">
                <div className="card__ram">
                  <span>4GB</span>
                  <span>8GB</span>
                  <span>16GB</span>
                  <span>32GB</span>
                </div>
                <div className="card__color">
                  <h3>Color :</h3>
                  <span />
                  <span />
                  <span />
                </div>
                <a href className="card__buy">
                  Buy Now
                </a>
              </div>
            </div>
            <div className="card col-2">
              <div className="card__imgBx">
                <img
                  src="http://pngimg.com/uploads/iphone_12/small/iphone_12_PNG30.png"
                  alt="product__01"
                />
                <h2 className="h2">Macbook Pro i2-16G</h2>
              </div>
              <div className="card__content">
                <div className="card__ram">
                  <span>4GB</span>
                  <span>8GB</span>
                  <span>16GB</span>
                  <span>32GB</span>
                </div>
                <div className="card__color">
                  <h3>Color :</h3>
                  <span />
                  <span />
                  <span />
                </div>
                <a href className="card__buy">
                  Buy Now
                </a>
              </div>
            </div>
            <div className="card col-2">
              <div className="card__imgBx">
                <img
                  src="http://pngimg.com/uploads/iphone_12/small/iphone_12_PNG20.png"
                  alt="product__01"
                />
                <h2 className="h2">Macbook Pro i2-16G</h2>
              </div>
              <div className="card__content">
                <div className="card__ram">
                  <span>4GB</span>
                  <span>8GB</span>
                  <span>16GB</span>
                  <span>32GB</span>
                </div>
                <div className="card__color">
                  <h3>Color :</h3>
                  <span />
                  <span />
                  <span />
                </div>
                <a href className="card__buy">
                  Buy Now
                </a>
              </div>
            </div>
            <div className="card col-2">
              <div className="card__imgBx">
                <img
                  src="http://pngimg.com/uploads/iphone_12/small/iphone_12_PNG13.png"
                  alt="product__01"
                />
                <h2 className="h2">Macbook Pro i2-16G</h2>
              </div>
              <div className="card__content">
                <div className="card__ram">
                  <span>4GB</span>
                  <span>8GB</span>
                  <span>16GB</span>
                  <span>32GB</span>
                </div>
                <div className="card__color">
                  <h3>Color :</h3>
                  <span />
                  <span />
                  <span />
                </div>
                <a href className="card__buy">
                  Buy Now
                </a>
              </div>
            </div>
            <div className="card col-2">
              <div className="card__imgBx">
                <img
                  src="http://pngimg.com/uploads/iphone_12/small/iphone_12_PNG15.png"
                  alt="product__01"
                />
                <h2 className="h2">Macbook Pro i2-16G</h2>
              </div>
              <div className="card__content">
                <div className="card__ram">
                  <span>4GB</span>
                  <span>8GB</span>
                  <span>16GB</span>
                  <span>32GB</span>
                </div>
                <div className="card__color">
                  <h3>Color :</h3>
                  <span />
                  <span />
                  <span />
                </div>
                <a href className="card__buy">
                  Buy Now
                </a>
              </div>
            </div>
            <div className="card col-2">
              <div className="card__imgBx">
                <img
                  src="http://pngimg.com/uploads/iphone_12/small/iphone_12_PNG1.png"
                  alt="product__01"
                />
                <h2 className="h2">Macbook Pro i2-16G</h2>
              </div>
              <div className="card__content">
                <div className="card__ram">
                  <span>4GB</span>
                  <span>8GB</span>
                  <span>16GB</span>
                  <span>32GB</span>
                </div>
                <div className="card__color">
                  <h3>Color :</h3>
                  <span />
                  <span />
                  <span />
                </div>
                <a href className="card__buy">
                  Buy Now
                </a>
              </div>
            </div>
            <div className="card col-2">
              <div className="card__imgBx">
                <img
                  src="http://pngimg.com/uploads/iphone_12/small/iphone_12_PNG21.png"
                  alt="product__01"
                />
                <h2 className="h2">Macbook Pro i2-16G</h2>
              </div>
              <div className="card__content">
                <div className="card__ram">
                  <span>4GB</span>
                  <span>8GB</span>
                  <span>16GB</span>
                  <span>32GB</span>
                </div>
                <div className="card__color">
                  <h3>Color :</h3>
                  <span />
                  <span />
                  <span />
                </div>
                <a href className="card__buy">
                  Buy Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

Products.propTypes = {};

export default Products;
