import React,{useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BiArrowFromBottom} from "react-icons/bi"
import App from './App';

function Scroller(){
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll",() =>{
      if(window.scrollY > 300){
        setIsVisible(true);
      }
      else
        setIsVisible(false);
    })
  }, []);

  const scrollToTop = () => window.scroll(0,0);

  return(
    isVisible &&
      <div className="scrollTop" title="Aller en haut de page" onClick={scrollToTop}>
          <BiArrowFromBottom/>
      </div>
  );
}
ReactDOM.render(
  <React.StrictMode>
    <App/>
    <Scroller/>
  </React.StrictMode>,
  document.getElementById('root')
);
