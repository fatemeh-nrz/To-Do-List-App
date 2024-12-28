import { Fragment, useContext } from "react"
import { MyContext } from "./mycontext";
import Swal from "sweetalert2";

const TaskItemes = () => {
  const {todoItem,setTodoItem}=useContext(MyContext);
  
  const taskActiveHandeler =(id)=>{

    const tempTodoItem =[...todoItem]
    const selectedId =tempTodoItem.findIndex(t=>t.id==id);
    tempTodoItem[selectedId].active=!tempTodoItem[selectedId].active
    setTodoItem(tempTodoItem);
   

  }
  
  const handleDeleteItem=(id)=>{
    Swal.fire({
      title: 'مطمئنی؟',
      text: "مراقب باش",
      icon:'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText:'منصرف شدم',
      confirmButtonText: 'پاک کردن'
    }).then((result) => {
      if (result.isConfirmed) {
        setTodoItem(todoItem.filter(t=>t.id !=id))
        Swal.fire(
          'پاک شد',
          'Your file has been deleted.',
          'success'
        )
      }
    })
    
    

  }
  if (todoItem.length>0){return (
    <Fragment>
      <ul className="list-group m-0 p-0 mt-2">
    {
        todoItem.map(item =>(
         (   <li className={`list-group-item d-flex justify-content-between ${item.active ?"list-group-item-success":""}`}>
          {item.task}
           <span>
            {item.active ? <i className="me-3 pointer fa fa-check text-success transition_200 text_hover_shadow" onClick={()=>taskActiveHandeler(item.id)}></i> :<i className="me-3 pointer fa fa-times text-warning transition_200 text_hover_shadow" onClick={()=>taskActiveHandeler(item.id)}></i>}
            

             <i className="me-3 pointer fa fa-trash text-danger transition_200 text_hover_shadow" onClick={()=>handleDeleteItem(item.id)}></i>
           </span>
         </li>)
       
       ))
    }
      </ul>
    </Fragment>
  )
}
else{
  return <h4 className="text-center text-danger mt-4">هیچ اطلاعاتی وارد نشده است</h4>
  
}}

  
export default TaskItemes;