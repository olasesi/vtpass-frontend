import './App.css';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from 'react'
import { Route, Routes} from 'react-router-dom';
import  SendMessage  from './views/sendmessage';

import Media from 'react-media';

//import axios from 'axios';



function App() {


  return (
    <>

     
      <Media query="(max-width:1280px)">
        {
          matches => matches ? (
            <Routes>

           


  <Route path="/"><SendMessage /></Route> 

            </Routes>

          ) : (

            <Routes>

              <Route path="/" element={<SendMessage />}></Route>
             
             


            
            </Routes>
          )
        }


      </Media>

    </>
  );
}

export default App;

