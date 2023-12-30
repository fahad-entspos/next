"use client"
import React from 'react'
import { useEffect  } from 'react';

import {Chart,initTE,} from "tw-elements";initTE({ Chart });

export default function Assetslinechat() {
  useEffect(()=>{
    // Chart
  const dataLine = {
    type: 'line',
    data: {
      labels: ['Monday', 'Tuesday' , 'Wednesday' , 'Thursday' , 'Friday' , 'Saturday' , 'Sunday '],
      datasets: [
        {
          label: 'Traffic',
          data: [2112, 2343, 2545, 3423, 2365, 1985, 987],
        },
      ],
    },
  };
  
  new Chart(document.getElementById('line-chart'), dataLine);
   },[])
  return <>

  <div className="mx-auto w-[310px] sm:w-[52vw] py-4 px-4  rounded-2xl mt-[1rem] sm:mt-[4rem] bg-white overflow-hidden">
  <canvas id="line-chart"></canvas>
</div>



  
  
  
  </>
}
