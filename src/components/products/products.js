import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import "./products.scss";
import { Link } from "gatsby";

const Products = () => {
    return (
        <div class="products">
            <div class="container">
                <div class="products__titleWrapper">
                    <h2 class="products__title">PRODUCTS</h2>
                    <h4 class="products__subTitle">Our Products</h4>
                </div>
                <div class="row">
                   
                <div class="col-md-6 col-sm-12 pb-5">
                        <div class="products__card">
                            <StaticImage
                                src="../../images/card-primary.png"
                                alt="banner"
                                className="products__card-image"
                            />
                            <div class="products__card-content">
                            <h6 class="products__card-title">ZCODER</h6>
                            <p class="products__card-description">ZCoder allows a programmer to generate templates for a web based or mobile based application in the language he/she prefer thereby significantly reducng the time taken to complete a project. It not only makes his/her work easy and fast, but also results in error free coding hence, giving the coder confidence to even take on complicated projects that were otherwise beyond his/her realm of expertise.</p>
                            <Link class="products__card-link" to="/">Learn More <span className="ps-2 icon-ic-next-arrow pe-2"></span></Link>
                            </div>
                        </div>
                    </div>
                    

                    <div class="col-md-6 col-sm-12 pb-5">
                        <div class="products__card">
                            <StaticImage
                                src="../../images/card-secondary.png"
                                alt="banner"
                                className="products__card-image"
                            />
                            <div class="products__card-content">
                            <h6 class="products__card-title">FORECASTING</h6>
                            <p class="products__card-description">Forecasting takes up an indispensable role in data analytics these days as it is an important aid to effective and efficient planning. Ornisoft offers a variety of forecasting models for our clients on the basis of their businesses’ past trends and existing conditions and parameters. Whether the forecasts are required several years in advance or a few minutes beforehand and whatever be the circumstance or time</p>
                            <Link class="products__card-link" to="/">Learn More <span className="ps-2 icon-ic-next-arrow pe-2"></span></Link>
                            </div>
                        </div>
                    </div>
                  
                    <div class="col-md-6 col-sm-12 pb-5">
                        <div class="products__card">
                            <StaticImage
                                src="../../images/card-secondary.png"
                                alt="banner"
                                className="products__card-image"
                            />
                            <div class="products__card-content">
                            <h6 class="products__card-title">ZCODER</h6>
                            <p class="products__card-description">ZCoder allows a programmer to generate templates for a web based or mobile based application in the language he/she prefer thereby significantly reducng the time taken to complete a project. It not only makes his/her work easy and fast, but also results in error free coding hence, giving the coder confidence to even take on complicated projects that were otherwise beyond his/her realm of expertise.</p>
                            <Link class="products__card-link" to="/">Learn More <span className="ps-2 icon-ic-next-arrow pe-2"></span></Link>
                            </div>
                        </div>
                    </div>
                    

                    <div class="col-md-6 col-sm-12 pb-5">
                        <div class="products__card">
                            <StaticImage
                                src="../../images/card-primary.png"
                                alt="banner"
                                className="products__card-image"
                            />
                            <div class="products__card-content">
                            <h6 class="products__card-title">FORECASTING</h6>
                            <p class="products__card-description">Forecasting takes up an indispensable role in data analytics these days as it is an important aid to effective and efficient planning. Ornisoft offers a variety of forecasting models for our clients on the basis of their businesses’ past trends and existing conditions and parameters. Whether the forecasts are required several years in advance or a few minutes beforehand and whatever be the circumstance or time</p>
                            <Link class="products__card-link" to="/">Learn More <span className="ps-2 icon-ic-next-arrow pe-2"></span></Link>
                            </div>
                        </div>
                    </div>
                  
                    
                </div>
            </div>
        </div>
    );
}
export default Products;