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
                title='Apple Watch Ultra GPS + Cellular, Caixa de titânio de 49 mm com pulseira Loop Trail preta/cinza M/G - Até 36 horas de tempo de bateria'
                price={299}
                image='https://m.media-amazon.com/images/I/61j0VPzuVnL._AC_SX679_.jpg'
                rating={5}
                />
                <Product
                id='345345345'
                title='AirPods Max Cinzento Sideral Sobre a orelha Wireless - Apple'
                price={899}
                image='https://m.media-amazon.com/images/I/71TVWs2MYxL._AC_SX679_.jpg'
                rating={5}
                />
            </div>

            <div className="home__row">
                <Product
                id='345345345353'
                title='PlayStation®5 + God of War Ragnarök GDDR6 16GB 825GB SSD Ultra HD Blu-ray, até 100GB/disco'
                price={459}
                image='https://m.media-amazon.com/images/I/61hJ40qZKKL._AC_SX466_.jpg'
                rating={5}
                />
                <Product
                id='4534534534'
                title='Console PlayStation 4 Mega Pack 18 - Ghost of Tsushima, God of War e Ratchet & Clank'
                price={299}
                image='https://m.media-amazon.com/images/I/619Kosxok1S._AC_SX466_.jpg'
                rating={4}
                />
                <Product
                id='345345345'
                title='Controle Dualsense Wireless - Midnight Black Controle sem fio DualSense Black™'
                price={346}
                image='https://m.media-amazon.com/images/I/51DF-14iHzL._AC_SX679_.jpg'
                rating={4}
                />
            </div>

            <div className="home_row">
                <Product
                id='5464564564'
                title='Monitor Gamer Curvo Samsung Odyssey 34, WQHD, 165Hz, 1ms, tela ultrawide, HDMI, Display Port, Freesync Premium, preto, série G5'
                price={499}
                image='https://m.media-amazon.com/images/I/81wfdDTIjHS._AC_SX450_.jpg'
                rating={5}
                />
            </div>

        </div>
    </div>
    );
}

export default Home;
