import { useState, useEffect } from 'react';


import { useNavigate } from 'react-router-dom';
import './styles.scss';

import { Shape } from '../../components/Shape';
import { Button } from '../../components/Form/Button';
import { Status } from '../../components/Table/Status';


export function EmployeeList() {

    const navigate =useNavigate();

    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        const localEmployees = JSON.parse(localStorage.getItem('@afrocrud:employees')) || [];

        setEmployees(localEmployees);

    }, []);


    function handleShowEmployee(employee) {

        navigate('update', {state:employee});
   
    }

    return (
        <Shape className="shape-list">
            <div className="title-area">
            <h2>Funcionários</h2>
            <Button onClick={()=>navigate('create')} title="Criar novo" icon="plus" />
            </div>

            <table>

                <thead>
                    <tr>
                        <th>
                            Funcionários
                        </th>
                        <th>
                            Departamento
                        </th>
                        <th>
                            Salário
                        </th>
                        <th>
                            Telefone
                        </th>
                        <th>
                            Status
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map(employee => (
                    <tr key={employee.id} onClick={() => handleShowEmployee(employee)}>
                        <td>
                        <p>{employee.name}</p>
                        <span>{employee.cpf}</span>
                        </td>
                        <td>{employee.department}</td>
                        <td>{employee.salary}</td>
                        <td>{employee.phoneNumber}</td>
                        <td><Status isActive={employee.status} /></td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </Shape>
    )          

}