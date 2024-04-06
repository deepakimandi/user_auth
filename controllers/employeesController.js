const Employee = require('../model/Employee');

const getAllEmployees = async (req, res) => {
    try {
        const employees = await Employee.find();
        res.json(employees);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const createNewEmployee = async (req, res) => {
    const newEmployee = new Employee({
        firstname: req.body.firstname,
        lastname: req.body.lastname
    });

    try {
        const savedEmployee = await newEmployee.save();
        res.status(201).json(savedEmployee);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

const updateEmployee = async (req, res) => {
    try {
        const employee = await Employee.findById(req.body.id);
        if (!employee) {
            return res.status(404).json({ message: `Employee ID ${req.body.id} not found` });
        }

        if (req.body.firstname) employee.firstname = req.body.firstname;
        if (req.body.lastname) employee.lastname = req.body.lastname;

        const updatedEmployee = await employee.save();
        res.json(updatedEmployee);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

const deleteEmployee = async (req, res) => {
    try {
        const employee = await Employee.findById(req.body.id);
        if (!employee) {
            return res.status(404).json({ message: `Employee ID ${req.body.id} not found` });
        }

        await employee.remove();
        res.json({ message: 'Employee deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const getEmployee = async (req, res) => {
    try {
        const employee = await Employee.findById(req.params.id);
        if (!employee) {
            return res.status(404).json({ message: `Employee ID ${req.params.id} not found` });
        }
        res.json(employee);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

module.exports = {
    getAllEmployees,
    createNewEmployee,
    updateEmployee,
    deleteEmployee,
    getEmployee
}
