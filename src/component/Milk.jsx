import React, { useState, useEffect } from "react";
import {useSelector, useDispatch} from "react-redux";
import { changeView, setMilk } from "../redux/redux";
export default function Milk() {

  const dispatch = useDispatch();
//   const selectedPhoto = useSelector(state => state.selectedPhoto);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     getPhotos();
//   }, []);

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

