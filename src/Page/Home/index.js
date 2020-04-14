import React from 'react';
import image from './image.jpg';
import "./style.css";

function Home() {
    return (
        <div className="container">
            <h2>About me</h2>
            <hr/>
            <br/>
            <div className="all">

                <img src={image} className="image" />
                <p>I am 30 years old live in Hayward California from more than a year

                befor that I been in Spokane Washhington State,I like to watch soccer

                games,my favorite team is Real Madrid, I love Real Madrid from awhile i watched

                almost the games they played,Ibeen mad when Real Madrid lose, I hope Real Madrid

                gonna win all games,i like also sleeping and eating,I did diet last 5 months

and I lost 40 pounds </p>
            </div>



        </div>
    );

}
export default Home;