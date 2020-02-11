import React, { useState, useEffect } from "react";
import {useSelector, useDispatch} from "react-redux";
import {Radar} from 'react-chartjs-2';

export default function Result() {

const results = useSelector(state => state.resultData);
const inputData = useSelector(state => state.inputData);
let tempResults = [];
let viewResult = "";

for (const index in results) {
  tempResults.push(0);
  if (results[index].aroma == inputData.aroma) {
    tempResults[index]++;
  }
  if (results[index].body == inputData.body) {
    tempResults[index]++;
  }
  if (results[index].sweet == inputData.sweet) {
    tempResults[index]++;
  }
  if (results[index].bitter == inputData.bitter) {
    tempResults[index]++;
  }
  if (results[index].color == inputData.color) {
    tempResults[index]++;
  }
}
for (const index in tempResults) {
  if (tempResults[index] === 5) {
    viewResult = results[index];
  } else if (tempResults[index] === 4) {
    viewResult = results[index];
  } else if (tempResults[index] === 3) {
    viewResult = results[index];
  } else if (tempResults[index] === 2) {
    viewResult = results[index];
  } else if (tempResults[index] === 1) {
    viewResult = results[index];
  } else {
    viewResult = results[0];
  }
}

const data = {
  labels: ['AROMA', 'BODY', 'SWEET', 'BITTER', 'COLOR'],
  datasets: [
    {
      label: "flavour",
      fill: true,
      lineTension: 0.1,
      backgroundColor: 'pink',
      borderColor: 'pink',
      borderCapStyle: 'round',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'square',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#eee',
      pointBorderWidth: 0,
      pointHoverRadius: 0,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 0,
      pointRadius: 0,
      pointHitRadius: 0,
      data: [viewResult.aroma, viewResult.body, viewResult.sweet, viewResult.bitter, viewResult.color]
    }
  ]
};

  return (
    <div className="result">
      <div className="resultNode">my recommendation</div>
      <div className="teaName">{viewResult.name}</div>
      <div>Season : {viewResult.season}</div>
      <div>Kinds : {viewResult.kind}</div>
      <div className="forRadar">
        <Radar data={data} />
      </div>
    </div>
  );
}
