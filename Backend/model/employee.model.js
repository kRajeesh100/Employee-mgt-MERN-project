import mongoose from "mongoose";

const EmployeeSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, "Name is required"]
    },
    salary: {
        type: String,
        required: [true,"Salary is required"]
    },
    contact: {
        type: Number,
        required: [true,"Contact is required"]
    },
    dob: {
        type: String,
        required: [true,"DOB is required"]
    },
    joiningDate: {
        type: String,
        required: [true,"JoiningDate is required"]
    },
    relivingDate: {
        type: String,
        required: [true,"relivingDate is required"]
    },
    status: {
        type: String,
        enum: ["active" , "inactive"],
        default:"active"
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
 
    
})

export default mongoose.model("Employee",EmployeeSchema);