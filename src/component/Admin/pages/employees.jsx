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

  let handleChange = (e) => {
    let { name, value } = e.target;

    setEmpdata({ ...empData, [name]: value });

  };

  

  console.log(empData);


  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Employees</CardTitle>
          <CardDescription> Description</CardDescription>
          <CardAction>
            <Dialog>
              <div className='text-end'>
                <DialogTrigger className="h-10 w-50 border-2 border-white-800 rounded-2xl bg-blue-800 text-white">Add Employee</DialogTrigger>
              </div>
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
                      <button className="w-25 bg-red-500 text-white h-8 rounded-3xl ml-2.5 mr-8.5">Close</button>
                      <button className="w-25 bg-blue-500 text-white h-8 rounded-3xl">Submit</button>
                    </div>


                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </CardAction>
        </CardHeader>
        <CardContent>
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
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border border-gray-300 ...">{empData.EmpID}</td>
                <td class="border border-gray-300 ...">{empData.EmpName}</td>
                <td class="border border-gray-300 ...">{empData.EmpEmail}</td>
                <td class="border border-gray-300 ...">{empData.EmpPhone}</td>
                <td class="border border-gray-300 ...">{empData.EmpDOB}</td>
                <td class="border border-gray-300 ...">{empData.EmpAddress}</td>
                <td class="border border-gray-300 ...">{empData.EmpJoiningDate}</td>
                <td class="border border-gray-300 ...">{empData.EmpDepartment}</td>
                <td class="border border-gray-300 ...">{empData.EmpDesignation}</td>
              </tr>
            </tbody>
          </table>
        </CardContent>
        
      </Card>



    </>

  )
}
