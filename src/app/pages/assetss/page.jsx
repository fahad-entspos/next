import { MdOutlineCheckBoxOutlineBlank } from 'react-icons/md';
import { ImCheckboxChecked } from 'react-icons/im';
import { VscGraphLine } from 'react-icons/vsc';
import Assetslinechat from "./assetslinechat/page"
function Assets() {

  
  return <>


  <div className='  flex  w-[85%] flex-row h-screen fixed overflow-y-auto overflow-hidden justify-around flex-wrap bg-[#F5F5F5] mt-[60px] pb-20 '>





  <div className='flex  flex-col  w-[310px] sm:w-[360px]'>

<h1 className='text-gray-900 font-bold text-3xl ml-2 mt-2'>Assets</h1>

<div className='bg-[#438FFE]  flex flex-col rounded-2xl items-center ml-2 mt-4' >
    <div className='flex  gap-16 mt-8 sm:mt-10'>

<div>

<h1 className='text-white font-light'>Fuel Usage</h1>
<h1 className='text-white  text-xl font-semibold'>2903.89 Ltr</h1>
</div>

<div>

<h1 className='text-white font-light'>KM Driven</h1>
<h1 className='text-white text-xl  font-semibold'>2903.89 Ltr</h1>
</div>
    </div>
    <div className='flex  gap-16  mt-4 sm:mt-10'>

<div>

<h1 className='text-white font-light'>Total Cost</h1>
<h1 className='text-white text-xl font-semibold'>$3,00,290.00</h1>
</div>

<div>

<h1 className='text-white font-light'>Top Speed</h1>
<h1 className='text-white text-xl font-semibold'>$5.2K</h1>
</div>
    </div>

    <img className='w-3/4 h-4/5 mt-0 sm:mt-24' src="/dash (1).png" alt="car-top-view-2c7169ad4f3f8ddd6bff13b3de4d09e8 1" />
</div>

  </div>

  <div>

<div className='flex flex-col '>

<Assetslinechat />


<div className='flex flex-row gap-4 mt-4 flex-wrap'>
  
<div className='flex flex-col w-[320px] mx-auto  sm:w-[25vw] p-3 items-center bg-white  rounded-xl'>
<h1 className='font-bold font-serif rounded-xl text-gray-900 text-xl'>
Noties
</h1>
<div id="toast-message-cta" className="w-full max-w-xs p-2 text-gray-500 bg-transparent rounded-lg   dark:text-gray-400" role="alert">
    <div className="flex">
        <img className="w-10 h-10 rounded-full " src="/dash (4).png" alt="Jese Leos image"/>
        <div className="ml-3 text-sm font-normal">
            <span className="mb-1 text-sm font-semibold text-gray-900 dark:text-gray-900">Monday, 6th Apirl 2020</span>
            <div className="mb-2 text-sm  text-gray-500  font-normal">Book for General Service.</div> 
            <a href="#" className="inline-flex px-2.5 py-1.5 text-xs font-medium text-center text-white bg-green-400 rounded-lg  dark:bg-green-400 ">COMPLETED</a>   
        </div>
        
    </div>
</div>


<div id="toast-message-cta" className="w-full max-w-xs p-2 text-gray-500 bg-transparent rounded-lg   dark:text-gray-400" role="alert">
    <div className="flex">
        <img className="w-10 h-10 rounded-full " src="/dash (3).png" alt="Jese Leos image"/>
        <div className="ml-3 text-sm font-normal">
            <span className="mb-1 text-sm font-semibold text-gray-900 dark:text-gray-900">Thursday, 24th October 2021</span>
            <div className="mb-2 text-sm  text-gray-500 font-normal">Vehicle LV 001 has been marked for recall..</div> 
            <a href="#" className="inline-flex px-2.5 py-1.5 text-xs font-medium text-center text-gray-900 rounded-lg  dark:bg-gray-300 ">14:07-21/11/2021</a>   
        </div>
        
    </div>
</div>



<div id="toast-message-cta" className="w-full max-w-xs p-2 text-gray-500 bg-transparent rounded-lg   dark:text-gray-400" role="alert">
    <div className="flex">
        <img className="w-10 h-10 rounded-full " src="/dash (2).png" alt="Jese Leos image"/>
        <div className="ml-3 text-sm font-normal">
            <span className="mb-1 text-sm font-semibold text-gray-900 dark:text-gray-900">Monday, 13th August 2018</span>
            <div className="mb-2 text-sm  text-gray-500 font-normal">Maintenance Completed, Collect</div> 
            <a href="#" className="inline-flex px-2.5 py-1.5 text-xs font-medium text-center text-gray-900 bg-green-400 rounded-lg  dark:bg-gray-300 ">14:07-21/11/2021</a>   
        </div>
        
    </div>
</div>


</div>


<div className='flex flex-col w-[320px] sm:w-[25vw] p-3 mx-auto bg-white  rounded-xl'>
  <div className='flex justify-around '>

<h1 className='font-bold font-serif  text-gray-900 text-2xl'>
Available Sensors</h1>

<h1 className='font-medium  text-gray-400 text-base'>
Assets
</h1>
  </div>

<hr className='mt-5' />

<div className='flex flex-col  mt-5 px-4  '>

<table className=''>
<tr className=' '>

    <td><ImCheckboxChecked className='text-[#D43B3B] ml-1 '/>
</td>
    <td><h1 className='text-[#D43B3B] font-semibold'>
Asset - Fuel Consumed (10

</h1></td>
    <td><VscGraphLine  className='text-[#D43B3B] '/>
</td>
  </tr>


  <tr className='items-center '>
    <td><MdOutlineCheckBoxOutlineBlank className='h-6 w-6  mt-3 '/></td>
    <td><h1 className='text-gray-800 font-semibold mt-2'>
Asset - Odometer (km)</h1></td>
    <td>
    <VscGraphLine  className='text-gray-400 mt-2 '/>
</td>
  </tr>


  <tr className='items-center '>
    <td><MdOutlineCheckBoxOutlineBlank className='h-6 w-6 mt-3'/></td>
    <td><h1 className='text-gray-800 font-semibold mt-2'>
    Asset - Runtime (km)</h1></td>
    <td>
    <VscGraphLine  className='text-gray-400  mt-2'/>
</td>
  </tr>


  
  <tr className='items-center '>
    <td><MdOutlineCheckBoxOutlineBlank className='h-6 w-6  mt-3'/></td>
    <td><h1 className='text-gray-800 font-semibold  mt-2'>
    Asset - Speed (hr)</h1></td>
    <td>
    <VscGraphLine  className='text-gray-400  mt-2 '/>
</td>
  </tr>

  
  <tr className='items-center '>
    <td><MdOutlineCheckBoxOutlineBlank className='h-6 w-6  mt-3'/></td>
    <td><h1 className='text-gray-800 font-semibold  mt-2'>
    Engine Temperature (deg C)</h1></td>
    <td>
    <VscGraphLine  className='text-gray-400   mt-2'/>
</td>
  </tr>

  </table>

  <button className=" w-24 px-2.5 py-2.5 mt-7 text-xs font-medium text-center text-white bg-[#FF6370] rounded-lg  dark:bg-[#FF6370] ">See All</button>   

</div>


</div>

</div>




<div className=' flex flex-col  sm:flex-nowrap w-[320px] sm:w-[52vw] h-auto sm:h-[220px] px-5 py-4  mx-auto     rounded-2xl mt-[1rem] bg-white'>
<div>

<div className='flex items-center justify-between'>
  <h1  className='font-semibold text-gray-900 text-lg'>Reminder</h1>
  <button className=" w-24 px-2.5 py-2.5  text-xs font-medium text-center text-white bg-[#A162F7] rounded-lg  dark:bg-[le
#A162F7] ">+ Add New</button>   

</div>
</div>
<div>

<hr className='mt-3'/>
<div className='flex text-[#72767C]  mt-3 justify-between'>
  <h1  className='font-medium   text-[10px]  sm:text-[16px]'>Description</h1>
  <h1  className='font-medium  text-[10px]  sm:text-[16px]'>Due</h1>
  <h1  className='font-medium  text-[10px]  sm:text-[16px]'>Overdue</h1>
  <h1  className='font-medium  text-[10px]  sm:text-[16px]'>Notify</h1>
  <h1  className='font-medium  text-[10px]  sm:text-[16px]'>Status</h1>
 
</div>
</div>
<div>

<hr className='mt-3'/>
<div className='flex text-[#242731] mt-3 justify-between'>
  <h1  className='font-medium   text-[7px]  sm:text-[16px]'>Urgent Safety Recall</h1>
  <h1  className='font-medium   text-[7px]  sm:text-[16px]'>06/04/2022</h1>
  <h1  className='font-medium   text-[7px]  sm:text-[16px]'>08/04/2022</h1>
  <h1  className='font-medium   text-[7px]  sm:text-[16px]'>David Demo</h1>
  <h1  className='font-medium   text-[7px]  sm:text-[16px]'>Completed</h1>
 
</div>
</div>
<div>

<hr className='mt-3'/>
<div className='flex mt-3 text-[#242731] justify-between'>
  <h1  className='font-medium   text-[7px]  sm:text-[16px]'>Urgent Safety Recall</h1>
  <h1  className='font-medium   text-[7px]  sm:text-[16px]'>06/04/2022</h1>
  <h1  className='font-medium   text-[7px]  sm:text-[16px]'>08/04/2022</h1>
  <h1  className='font-medium   text-[7px]  sm:text-[16px]'>David Demo</h1>
  <h1  className='font-medium   text-[7px]  sm:text-[16px]'>Completed</h1>
 
</div>
</div>




</div>
 

</div>

  </div>



  </div>


  
  
  </>
}

export default Assets