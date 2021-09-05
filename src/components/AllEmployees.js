import { useState, useEffect } from "react";
import EmployeeCard from "./EmployeeCard";
import './AllEmployees.sass';

export default function AllEmployees() {

    const [employees, setEmployees] = useState([]);

    const isCurrentlyWorkingHere = employee =>
        employee.Profession !== 'Unemployed' &&
        employee.Profession !== 'Unknown';

    useEffect(() => {
        fetch('https://futuramaapi.herokuapp.com/api/v2/characters')
            .then(response => response.json())
            .then(data => setEmployees(data.filter(isCurrentlyWorkingHere).slice(0, 8)));
    }, []);

    return (
        <div id="employees">
            <h2>Nuestro equipo</h2>
            <div className="card-list">
            {
                employees.map(employee => 
                     <EmployeeCard key={employee.Name} employee={employee} />
                )
            }
            </div>
        </div>
    )
}

