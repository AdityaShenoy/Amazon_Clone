import React from "react"
import "./Home.css"
import home_bg from "./img/home_bg.jpg"
import Product from "./Product"
import the_lean_startup from "./img/the_lean_startup.jfif"
import mixer from "./img/mixer.jfif"
import watch from "./img/watch.jfif"
import echo from "./img/echo.jfif"
import ipad from "./img/ipad.jfif"
import monitor from "./img/monitor.jfif"

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img
                    className="home__image"
                    src={home_bg}
                />

                <div className="home__row">
                    <Product
                        id="1"
                        title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
                        price={11.96}
                        image={the_lean_startup}
                        rating={5}
                    />
                    <Product
                        id="2"
                        title="Kenwood KMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater,Dough Hook and Whisk, 5 Litre Glass Bowl"
                        price={239.0}
                        image={mixer}
                        rating={4}
                    />
                </div>

                <div className="home__row">
                    <Product
                        id="3"
                        title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
                        price={199.99}
                        image={watch}
                        rating={3}
                    />
                    <Product
                        id="4"
                        title="Amazon Echo (3rd Generation) | Smart Speaker with Alexa, Charcoal Fabric"
                        price={98.99}
                        image={echo}
                        rating={5}
                    />
                    <Product
                        id="5"
                        title="New Apple iPad Pro (12.9-inch, WiFi, 128GB) - Silver (4th Generation)"
                        price={598.99}
                        image={ipad}
                        rating={4}
                    />
                </div>

                <div className="home__row">
                    <Product
                        id="3"
                        title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
                        price={199.99}
                        image={monitor}
                        rating={3}
                    />
                </div>
            </div>
        </div>
    )
}

export default Home
