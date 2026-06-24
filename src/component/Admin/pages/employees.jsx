import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useState } from 'react'



export default function Employees() {

  let [empData, setEmpdata] = useState({});
  let [openModal,setOpenModal] = useState(false);
  let [openEditModal,setOpenEditModal] = useState(false);
  let [empFormData,setEmpFormData] = useState({});
  

  let handleChange = (e) => {
    let { name, value } = e.target;
    setEmpdata({ ...empData, [name]: value });
  };

  let handleClick = ()=>{
    setEmpFormData(empData);
    setOpenModal(false);
  };

  // FIXED: was setEmpdata(empdata) — wrong variable name, and never saved to empFormData
  let handleEditClick = ()=>{
    setEmpFormData(empData);
    setOpenEditModal(false);
  };

  console.log(empData);


  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Employees</CardTitle>
          <CardDescription> Description</CardDescription>
          <CardAction>
            <Dialog open={openModal} 
            onOpenChange ={()=>{
              setOpenModal(true)
              }} >
             

              <div className='text-end'>
                <DialogTrigger className="h-10 w-50 border-2 border-white-800 rounded-2xl bg-blue-800 text-white">Add Employee</DialogTrigger>
              </div>
                </Dialog>

                {/*Add EmPloyee Details */}
                <Dialog open={openModal}>
              <DialogContent className="h-150 scroll=smooth overflow-scroll">
                <DialogHeader>
                  <DialogTitle className="text-center">Employee Form</DialogTitle>
                  <DialogDescription>
                    <div >
                      <label className='font-bold text-black'>Emp id</label>
                    </div>
                    <div>
                      <input className="w-full h-8 border-2 border-black rounded-md"
                        type="text"
                        placeholder=' Enter the Employee ID' name="EmpID" onChange={handleChange}></input>
                    </div>
                    <div className='mt-5'>
                      <label className='font-bold text-black'>Emp Name</label>
                    </div>
                    <div>
                      <input className="w-full h-8 border-2 border-black rounded-md"
                        type="text"
                        placeholder=' Enter the Employee Name' name="EmpName" onChange={handleChange}></input>
                    </div>
                    <div className='mt-5'>
                      <label className='font-bold text-black'>Emp email</label>
                    </div>
                    <div>
                      <input className="w-full h-8 border-2 border-black rounded-md"
                        type="email"
                        placeholder=' Enter the Employee Email' name="EmpEmail" onChange={handleChange}></input>
                    </div>
                    <div className='mt-5'>
                      <label className='font-bold text-black'>Emp Phone</label>
                    </div>
                    <div>
                      <input className="w-full h-8 border-2 border-black rounded-md"
                        type="phone"
                        placeholder=' Enter the Employee Phone' name="EmpPhone" onChange={handleChange}></input>
                    </div>
                    <div className='mt-5'>
                      <label className='font-bold text-black'>Emp Address</label>
                    </div>
                    <div>
                      <input className="w-full h-8 border-2 border-black rounded-md"
                        type="text"
                        placeholder=' Enter the Employee Address' name="EmpAddress" onChange={handleChange}></input>
                    </div>
                    <div className='mt-5'>
                      <label className='font-bold text-black'>Emp DOB</label>
                    </div>
                    <div>
                      <input className="w-full h-8 border-2 border-black rounded-md"
                        type="date"
                        placeholder=' Enter the Employee Date of Birth' name="EmpDOB" onChange={handleChange}></input>
                    </div>
                    <div className='mt-5'>
                      <label className='font-bold text-black'>Emp Joining Date</label>
                    </div>
                    <div>
                      <input className="w-full h-8 border-2 border-black rounded-md"
                        type="date"
                        placeholder=' Enter the Joining Date' name="EmpJoiningDate" onChange={handleChange}></input>
                    </div>
                    <div className='mt-5'>
                      <label className='font-bold text-black'>Emp Department</label>
                    </div>
                    <div>
                      <input className="w-full h-8 border-2 border-black rounded-md"
                        type="text"
                        placeholder=' Enter the Employee Department' name="EmpDepartment" onChange={handleChange}></input>
                    </div>
                    <div className='mt-5'>
                      <label className='font-bold text-black'>Emp designation</label>
                    </div>
                    <div>
                      <input className="w-full h-8 border-2 border-black rounded-md"
                        type="text"
                        placeholder=' Enter the Employee designation' name="EmpDesignation" onChange={handleChange}></input>
                    </div>
                    <div className='mt-5'>
                      <button variant="outline" className="h-10 w-25 border-2 bg-red-500 text-white font-bold rounded-2xl" onClick={()=>{setOpenModal(false)}}>Cancel</button>
                      <button className="w-25 bg-blue-500 text-white h-8 rounded-3xl"
                      onClick={handleClick}
                      >Submit</button>
                    </div>


                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </CardAction>
        </CardHeader>
        <CardContent>

           {/*Table JSX*/}

          <table class=" w-full border-collapse border border-gray-400 ...">
            <thead>
              <tr>
                <th class="border border-gray-300 ...">Emp ID</th>
                <th class="border border-gray-300 ...">Emp Name</th>
                <th class="border border-gray-300 ...">Emp Email</th>
                <th class="border border-gray-300 ...">Emp Phone</th>
                <th class="border border-gray-300 ...">Emp Address</th>
                <th class="border border-gray-300 ...">Emp DOB</th>
                <th class="border border-gray-300 ...">Date of Joining </th>
                <th class="border border-gray-300 ...">Department</th>
                <th class="border border-gray-300 ...">Designation</th>
                <th class="border border-gray-300 ...">Action</th>
                
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border border-gray-300 ...">{empFormData.EmpID}</td>
                <td class="border border-gray-300 ...">{empFormData.EmpName}</td>
                <td class="border border-gray-300 ...">{empFormData.EmpEmail}</td>
                <td class="border border-gray-300 ...">{empFormData.EmpPhone}</td>
                <td class="border border-gray-300 ...">{empFormData.EmpDOB}</td>
                <td class="border border-gray-300 ...">{empFormData.EmpAddress}</td>
                <td class="border border-gray-300 ...">{empFormData.EmpJoiningDate}</td>
                <td class="border border-gray-300 ...">{empFormData.EmpDepartment}</td>
                <td class="border border-gray-300 ...">{empFormData.EmpDesignation}</td>
                
                <td>
                  {/* FIXED: was opening openModal with DialogTrigger — now correctly opens openEditModal */}
                  <button
                    className="h-8 w-25 border-2 border-white-400 rounded-2xl bg-blue-800 text-white"
                    onClick={() => {
                      setEmpdata(empFormData);
                      setOpenEditModal(true);
                    }}
                  >
                    Edit
                  </button>
                  <button>Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </CardContent>
        
      </Card>

      {/*Edit Employee Record Modal*/}
      
                <Dialog open={openEditModal}>
              <DialogContent className="h-150 scroll=smooth overflow-scroll">
                <DialogHeader>
                  <DialogTitle className="text-center">Edit Employee Form</DialogTitle>
                  <DialogDescription>
                    <div >
                      <label className='font-bold text-black'>Emp id</label>
                    </div>
                    <div>
                      <input className="w-full h-8 border-2 border-black rounded-md"
                        type="text"
                        placeholder=' Enter the Employee ID' name="EmpID" onChange={handleChange}
                        defaultValue={empFormData.EmpID}
                        ></input>
                    </div>
                    <div className='mt-5'>
                      <label className='font-bold text-black'>Emp Name</label>
                    </div>
                    <div>
                      <input className="w-full h-8 border-2 border-black rounded-md"
                        type="text"
                        placeholder=' Enter the Employee Name' name="EmpName" onChange={handleChange}
                        defaultValue={empFormData.EmpName}
                        ></input>
                    </div>
                    <div className='mt-5'>
                      <label className='font-bold text-black'>Emp email</label>
                    </div>
                    <div>
                      <input className="w-full h-8 border-2 border-black rounded-md"
                        type="email"
                        placeholder=' Enter the Employee Email' name="EmpEmail" onChange={handleChange}
                        defaultValue={empFormData.EmpEmail}
                        ></input>
                    </div>
                    <div className='mt-5'>
                      <label className='font-bold text-black'>Emp Phone</label>
                    </div>
                    <div>
                      <input className="w-full h-8 border-2 border-black rounded-md"
                        type="phone"
                        placeholder=' Enter the Employee Phone' name="EmpPhone" onChange={handleChange}
                        defaultValue={empFormData.EmpPhone}
                        ></input>
                    </div>
                    <div className='mt-5'>
                      <label className='font-bold text-black'>Emp Address</label>
                    </div>
                    <div>
                      <input className="w-full h-8 border-2 border-black rounded-md"
                        type="text"
                        placeholder=' Enter the Employee Address' name="EmpAddress" onChange={handleChange}
                        defaultValue={empFormData.EmpAddress}
                        ></input>
                    </div>
                    <div className='mt-5'>
                      <label className='font-bold text-black'>Emp DOB</label>
                    </div>
                    <div>
                      <input className="w-full h-8 border-2 border-black rounded-md"
                        type="date"
                        placeholder=' Enter the Employee Date of Birth' name="EmpDOB" onChange={handleChange}
                        defaultValue={empFormData.EmpDOB}
                        ></input>
                    </div>
                    <div className='mt-5'>
                      <label className='font-bold text-black'>Emp Joining Date</label>
                    </div>
                    <div>
                      <input className="w-full h-8 border-2 border-black rounded-md"
                        type="date"
                        placeholder=' Enter the Joining Date' name="EmpJoiningDate" onChange={handleChange}
                        defaultValue={empFormData.EmpJoiningDate}
                        ></input>
                    </div>
                    <div className='mt-5'>
                      <label className='font-bold text-black'>Emp Department</label>
                    </div>
                    <div>
                      <input className="w-full h-8 border-2 border-black rounded-md"
                        type="text"
                        placeholder=' Enter the Employee Department' name="EmpDepartment" onChange={handleChange}
                        defaultValue={empFormData.EmpDepartment}
                        ></input>
                    </div>
                    <div className='mt-5'>
                      <label className='font-bold text-black'>Emp designation</label>
                    </div>
                    <div>
                      <input className="w-full h-8 border-2 border-black rounded-md"
                        type="text"
                        placeholder=' Enter the Employee designation' name="EmpDesignation" onChange={handleChange}
                        defaultValue={empFormData.EmpDesignation}
                        ></input>
                    </div>
                    <div className='mt-5'>
                       <button variant="outline" className="h-10 w-25 border-2 bg-red-500 text-white font-bold rounded-2xl" onClick={()=>{setOpenEditModal(false)}}>Cancel</button>
                      <button className="w-25 bg-blue-500 text-white h-8 rounded-3xl" 
                      onClick={handleEditClick}
                      >Submit</button>
                    </div>


                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>  



    </>

  )
}