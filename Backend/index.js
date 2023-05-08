import  Express  from "express";
import cors from "cors"
import {getAllMedicine,createMedicine,deleteMedicine,updateMedicine, createCutomer,getAllemployee,getoneemployee} from "../Backend/controller/controller.js"
const app = Express();
const port = 3000;
app.use(Express.json())
app.use(cors())


app.get("/Medicine",getAllMedicine)
app.post("/employee",getoneemployee)
app.get("/Medicine/:id",getAllMedicine)
app.post("/Medicine",createMedicine)
app.post("/Customer",createCutomer)
app.get("/employee",getAllemployee)
app.delete("/Medicine/:id",deleteMedicine)
app.put("/Medicine/:id",updateMedicine)




app.listen(port,console.log("server is running"));