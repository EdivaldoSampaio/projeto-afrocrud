import { Routes, Route} from 'react-router-dom';

import { EmployeeCreate } from '../pages/EmployeeCreate';
import { EmployeeList } from '../pages/EmployeeList';

export function Router(){

return (
    <Routes>
        <Route path="/" element={<EmployeeList/>} />
        <Route path="/create" element={<EmployeeCreate/>} />
        <Route path="/update" element={<EmployeeCreate/>} />
    </Routes>
);

}