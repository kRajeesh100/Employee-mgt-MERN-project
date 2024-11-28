import Employee from "../model/employee.model"



export const CreateEmployee = async (req,res)=>{
   try {
    const{ name } =req.body;
    const existEmployee = await Employee.findOne({name: name});
    if (existEmployee){
        res.status(400).json({message: 'Employee already exist'})
    }else{
        const employeeInfo = new Employee(req.body);
        await employeeInfo.save();
        res.status(200).json(employeeInfo);
    }
   }
    catch (error) {
        res.status(400).json({ message: error.message})
    
   }
}

export const FetchEmployee = async (req,res)=>{
    try {
        const emp_data = await Employee.find();
        if (!emp_data || emp_data.length === 0) {
            res.status(400).json({message: 'Data not found'});
        } 
        res.status(200).json(emp_data);
    }
     catch (error) {
        res.status(400).json({message: error});
    }
}

export const UpdateEmployee = async (req,res)=>{
    try {
        const {name} = req.body;
        const updatedEmp = await Employee.findOneAndUpdate(
           {_id:req.params.id},
           {$set: req.body},
           {new: true, upsert: true, runValidators: true}
        );
        res.status(200).json(updatedEmp)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

export const DeleteEmployee = async(req,res)=>{
    try {
        const id = req.params.id;
        await Employee.findByIdAndDelete({_id: id});
        res.status(200).json({message: 'Deleted', success: true})
    } catch (error) {
        res.status(400).json({message: error.message, success: false});
    }
}