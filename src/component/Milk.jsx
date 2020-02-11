import React from "react";
import {useDispatch} from "react-redux";
import { changeView, setMilk } from "../redux/redux";
export default function Milk() {

  const dispatch = useDispatch();

const  clickChange = (parm) => {
  dispatch(setMilk(parm))
  dispatch(changeView("flavour"))
}
return (
  <div>
  Do you want to drink ... ?
    <div className="milk">
      <div onClick={()=> {clickChange(true)}} className="buttons"><p>MILK</p></div>
      <div onClick={()=> {clickChange(false)}} className="buttons"><p>STRAIGHT</p></div>
    </div>
  </div>
  );
}

