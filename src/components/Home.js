import React from "react";
import '../styles/Home.css';
import Product from "./Product";

function Home() {
  return (
    <div className="home">
        <div className="home__container">
            <img 
            className="home__image"
            src="https://m.media-amazon.com/images/I/71GL5vAyEQL._SX3000_.jpg" 
            alt="front page" 
            />

            <div className="home__row">
                <Product
                id='35654654654'
                title='A startup enxuta: Como usar a inovação contínua para criar negócios radicalmente bem-sucedidos'
                price={79.99}
                image='https://m.media-amazon.com/images/I/71KJRfm0pGL._AC_UL400_.jpg'
                rating={5}
                />
                <Product
                id='345345345'
                title='O Senhor dos Anéis: alguma coisa2'
                price={13.99}
                image='https://m.media-amazon.com/images/I/81hCVEC0ExL._AC_UL400_.jpg'
                rating={5}
                />
            </div>

            <div className="home__row">
                <Product
                id='345345345353'
                title='O Senhor dos Anéis: A Sociedade do Anel'
                price={79.99}
                image='https://m.media-amazon.com/images/I/81hCVEC0ExL._AC_UL400_.jpg'
                rating={5}
                />
                <Product
                id='4534534534'
                title='O Senhor dos Anéis: A Sociedade do Anel'
                price={79.99}
                image='https://m.media-amazon.com/images/I/81hCVEC0ExL._AC_UL400_.jpg'
                rating={5}
                />
                <Product
                id='345345345'
                title='O Senhor dos Anéis: A Sociedade do Anel'
                price={79.99}
                image='https://m.media-amazon.com/images/I/81hCVEC0ExL._AC_UL400_.jpg'
                rating={5}
                />
            </div>

            <div className="home_row">
            <Product
                id='5464564564'
                title='O Senhor dos Anéis: A Sociedade do Anel'
                price={79.99}
                image='https://m.media-amazon.com/images/I/81hCVEC0ExL._AC_UL400_.jpg'
                rating={5}
                />
            </div>

        </div>
    </div>
    );
}

export default Home;
