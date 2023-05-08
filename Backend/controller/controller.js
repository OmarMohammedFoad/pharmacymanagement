import pool from "../database/database.js";



export const   getAllMedicine = (req,res)=>{

    const q = "SELECT * FROM drug"
    pool.query(q,(err,data)=>{
        if(err) return res.json(err);
        return res.json(data)
    })}


    export const   getAllemployee = (req,res)=>{

        const q = "SELECT * FROM employee"
        pool.query(q,(err,data)=>{
            if(err) return res.json(err);
            return res.json(data)
        })}
     

    export const   getoneemployee = (req,res)=>{

        const q = " SELECT * FROM employee  WHERE Name =?"
        const Name = req.body.Name
        const pass = req.body.pass
        pool.query(q,[Name,pass],(err,data)=>{
            console.log(data[0]);
            if(data[0] === undefined)
            {
            // console.log("s");
            return res.json("data is not found")
        }
        else
        {
                return res.json(data)
            }
        })}

export  const  createMedicine = (req,res)=>{

        const q = "INSERT INTO drug (`Price`,`ProductionDate`, `ExpiryDate` , `Quantity`,`NameDrug`) VALUES(?)";
        const values = [
            req.body.Price,
            req.body.ProductionDate,
            req.body.ExpiryDate,
            req.body.Quantity,
            req.body.NameDrug,
        ]
        pool.query(q,[values],(err,data)=>{
            if(err) return res.json(err);
            return res.json("the data has been inserterted successful")
        })}

export  const  deleteMedicine = (req,res)=>{

        const q = "DELETE FROM `pharmacyms`.`drug` WHERE DrugID = ?";
        const DrugID = req.params.id;

        pool.query(q,[DrugID],(err,data)=>{
            console.log(DrugID);    
            if(err) return res.json(err);
                return res.json("the data has been deleted successful")
            })}

export  const  updateMedicine = (req,res)=>{

    const q = "UPDATE `drug` SET `Price`=? , `ProductionDate` =?,`ExpiryDate`=?,`Quantity` =?,`NameDrug`=?, WHERE `ID` =?";
            const MedicineID = req.params.id;
            const values = [
                req.body.Price,  
                req.body.ProductionDate,
                req.body.ExpiryDate,
                req.body.Quantity,
                req.body.NameDrug,
            ]
            pool.query(q,[...values,DrugID],(err,data)=>{
                    if(err) return res.json(err);
                    return res.json("the data has been updated successful")
                    })}
                    export  const  createCutomer = (req,res)=>{
                        
                        const q ="INSERT INTO customer (`Name`,`Phone`,`Gender`)VALUES(?)";
                        const values = [
                            req.body.Name,
                            req.body.Phone,
                            req.body.Gender,
                        ]
                        pool.query(q,[values],(err,data)=>{
                            if(err) return res.json(err);
                            return res.json("the data has been inserterted successful")
                        })}
    