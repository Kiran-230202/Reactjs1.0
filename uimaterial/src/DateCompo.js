import React, { useState } from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import { DatePicker } from 'antd';
// import moment from 'moment/moment';
// const {RangePicker} =DatePicker;
export default function DateCompo() {

// const[date,setDate]=useState([]);
  return (
    <>


   {/* <RangePicker
   onChange={(e)=>{
    // const value1=moment(e[0]).format('DD-MM-YYYY')
    setDate(e.map(item=>{
      return moment(item).format('DD-MM-YYYY')
    }));
   }}
   /> */}
    <LocalizationProvider dateAdapter={AdapterDayjs}>
     <DatePicker label="heloo"></DatePicker>
  </LocalizationProvider>
    </>
   
  );
}