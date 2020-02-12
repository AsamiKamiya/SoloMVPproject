import React from "react";
import {useSelector, useDispatch} from "react-redux";

import Milk from "./Milk";
import Flavour from "./Flavour"
import Result from "./Result"
import "../css/app.css"
import { changeView } from "../redux/redux";
import logo from '../image/cups.png';
import heart from '../image/hearts.png';

export default function App() {

  const view = useSelector(state => state.view);
  const dispatch = useDispatch();

  const  clickChange = (parm) => {
      dispatch(changeView(parm))
  }
    let body;
    if  (view === "top") {
        body = ( <div className="start circle" onClick={()=>{clickChange("milkSelect")}}><p>START</p></div>)
    } else if (view === "milkSelect"){
        body =  <Milk></Milk>
    } else if (view === "flavour") {
        body = <Flavour></Flavour>
    } else if (view === "loading") {
        body = <div class="loader">Loading...</div>
    } else {
        body = <Result></Result>
    }
  return (
    <div className="app">
    <div className="form">
      <div className="title">Tea Tasting App</div>
      <div className="content">
      {body}
      </div>

      <img src={heart} className="hearts"></img><br></br>
      <img src={logo} onClick={()=>{clickChange("top")}}></img>

</div>
    </div>
  );
}
