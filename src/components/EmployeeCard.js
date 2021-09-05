import './EmployeeCard.sass';

export default function EmployeeCard({ employee }) {

    return (
        <div className="card">
            <img className="card-image" src={employee.PicUrl} alt=""></img>
            <div className="card-body">
                <h4 className="card-name">{employee.Name}</h4>
                <p>{employee.Profession}</p>
            </div>
        </div>
    );

}