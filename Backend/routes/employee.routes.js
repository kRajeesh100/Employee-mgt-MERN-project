import {
    CreateEmployee,
    FetchEmployee,
    UpdateEmployee,
    DeleteEmployee
} from "../controller/employee.controller";


import express from "express";
const router = express.Router();


router.post("/create-employee",CreateEmployee);
router.get("/fetch-employee",FetchEmployee);
router.put("/update-employee/:id",UpdateEmployee);
router.delete("/delete-employee/:id",DeleteEmployee);



module.exports = router;