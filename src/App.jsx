import {BrowserRouter,Routes,Route} from "react-router-dom";
import Panel from "./component/Admin/Panel";
import Login from "./component/LoginPage/login" 
import Signup from "./component/SignUpPage/Signup";
import Dashboard from "./component/Admin/dashboard";
import Employees from "./component/Admin/pages/employees";
import Attendance from "./component/Admin/pages/Attendance";
import Performance from  "./component/Admin/pages/Performance";
import LeavesReq from  "./component/Admin/pages/LeavesReq";
import Payroll from "./component/Admin/pages/Payroll";
import Reports from "./component/Admin/pages/Reports";
import Settings from "./component/Admin/pages/Settings";


function App(){

  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/Login" element={<Login/>} />
      <Route path="/Signup" element={<Signup/>} />
      <Route path="/admin" element={<Panel/>} > 
      <Route index element={<Dashboard/>}/>
      <Route index path="dashboard" element={<Dashboard/>}/>
      <Route path="employees" element={<Employees />} />
      <Route path="attendance" element={<Attendance />} />
      <Route path="leave/requests" element={<LeavesReq />} />
      <Route path="pay/roll" element={<Payroll />} />
      <Route path="Performance" element={<Performance />} />
      <Route path="Reports" element={<Reports />} />
      <Route path="settings" element={<Settings />} />
       
      </Route>

      </Routes>
      </BrowserRouter> 
      
    </>
  );
}

export default App;



