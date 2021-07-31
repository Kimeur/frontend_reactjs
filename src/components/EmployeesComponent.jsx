import react from 'react';
import EmployeesService from '../services/EmployeesService';

class EmployeeComponent extends react.Component {

    constructor(props){
        super(props)
        this.state = {
            employees: []
        }
    }
    
    componentDidMount(){
        EmployeesService.getEmployees().then((response) => {
            this.setState({ employees: response.data})
        });
    }

    render (){
        return (

            <div className="container">
                <div className="row">
                    <div className="col-sm-1">
                    <button id="add_new_employee" className="btn btn-danger">Add New</button>
                    </div>
                    <div className="col-sm-10">
                    <div>
                        <h1 className="text-center">Employees List</h1>
                        <table className ="table table-striped">
                            <thead>
                                <tr>
                                    <td>id</td>
                                    <td>firstname</td>
                                    <td>lastname</td>
                                    <td>description</td>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.employees.map(
                                        emp =>
                                        <tr key = {emp.id}>
                                            <td>{emp.id}</td>
                                            <td>{emp.firstName}</td>
                                            <td>{emp.lastName}</td>
                                            <td>{emp.description}</td>

                                        </tr>
                                    )
                                }
                            </tbody>

                        </table>
                    </div>
                    </div>
                    <div className="col-sm-1"></div>
                </div>
            </div>

            
        )
    }
}

export default EmployeeComponent;