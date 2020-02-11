import React from "react";
import {useSelector, useDispatch} from "react-redux";
import { changeView, findByMilk, setResult, setFlavour } from "../redux/redux";

export default function Flavour() {

  const inputData = useSelector(state => state.inputData);
  const dispatch = useDispatch();

const  clickChange = async (parm) => {
  dispatch(await changeView("loading"))
  setTimeout(async ()=>{
  dispatch(setResult(await findByMilk(inputData.milk)))
  dispatch(await changeView(parm))
  }, 2000);
}
const rangeChange = async (name, parm) => {
  dispatch(setFlavour(name, parm))
}


  return (
    <div className="flavour">
      Which flavour do you like ... ?
      <div>aroma <br/><input className="ranges" type="range" onChange={(e)=> {rangeChange("aroma",e.target.value)}} max={5} min={0} defaultValue={2}></input></div>
      <div>body<br/> <input className="ranges"type="range" onChange={(e)=> {rangeChange("body",e.target.value)}} max={5} min={0} defaultValue={2}></input></div>
      <div>sweet <br/><input className="ranges"type="range" onChange={(e)=> {rangeChange("sweet",e.target.value)}} max={5} min={0} defaultValue={2}></input></div>
      <div>bitter <br/><input className="ranges"type="range" onChange={(e)=> {rangeChange("bitter",e.target.value)}} max={5} min={0} defaultValue={2}></input></div>
      <div>color<br/> <input className="ranges"type="range" onChange={(e)=> {rangeChange("color",e.target.value)}} max={5} min={0} defaultValue={2}></input></div>

      <div className="check" onClick={()=>{clickChange("result")}}>CHECK!</div>
    </div>
  );
}
