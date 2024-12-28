import 'bootstrap/dist/css/bootstrap.css';

import task2 from "./task2";
import top2 from "./top2";
import { Fragment, useState } from 'react';


function myapp(){

  const [taskid,settaskid]=useState([
    {
    id:1,
    task:'کار اول',
    active:true,
  },
  {
    id:2,
    task:'کار دوم',
    active:false,
  },
  {
    id:3,
    task:'کار سوم',
    active:true,
  }
  ]
  )


  return(
    <Fragment>
      <div className="container w-100 h-100 p-4">
        <div className="row h-100 justify-content-center align-align-items-start">
          <div className="col-12 col-md-8 col-lg-6 bg-light shadow rounded-3 p-3 h-fit">
             <task2/>
              <top2/>
          </div>
        </div>
      </div>

    </Fragment>
  )
}
