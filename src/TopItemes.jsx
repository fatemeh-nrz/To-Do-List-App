import { Fragment, useContext, useState } from "react"
import { MyContext } from "./mycontext";
import Swal from "sweetalert2";


const TopItemes = () => {
  const [task,settask]=useState('')
  const {todoItem,setTodoItem} =useContext(MyContext);

  const inputAddItemHandeler =(event)=>{
    settask(event.target.value);

  }
  const sendItemHandler =(event)=>{
    if (task==""){
      // alert("لطفا یک کار را وارد نمایید");
      event.preventDefault();
      Swal.fire(
        'لطفا یک کار را وارد نمایید',
        'حواست و جمع کن',
        'یک امتیاز منفی'
      )
      
    }else{ 
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        icon: 'success',
        title: 'کار با موفقیت ثبت شد!'
      })
       event.preventDefault();
      setTodoItem([...todoItem,{
      id:Math.random(),
      task:task,
      active:false
    }]);
    settask('')
    }}
  
  return (
    <Fragment>
      <h4 className="text-center text-info text-shadow">
        اپلیکیشن مدیریت برنامه ها
      </h4>
      <form onSubmit={sendItemHandler}>
        <div className="form-group d-flex">
          <input placeholder="یک مورد را وارد نمایید" type='text' className='form-control' value={task} onChange={inputAddItemHandeler}/>
          <button type='submit' className='btn btn-success me-1'>
            ثبت
          </button>
        </div>
      </form>
    </Fragment>
  )
}

export default TopItemes;