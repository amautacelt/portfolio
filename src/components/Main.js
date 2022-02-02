import { Facebook, Instagram, LinkedIn, Pinterest, Twitter } from '@material-ui/icons';
import React from 'react';
import './styles/Main.css';

const Main = () => {
  return (
    <div className='main'>

        <div className="main__container">

            <div className="text">
                <p>Hey There</p>
                <h1>I am Bob Russer</h1>
                <p>Create Art Director & Designer</p>


            <div className="icons">
                <Twitter />
                <Instagram />
                <Facebook />
                <LinkedIn />
                <Pinterest />
            </div>



            </div>


        </div>

    </div>
  )
}

export default Main;
