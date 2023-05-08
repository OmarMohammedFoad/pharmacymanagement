import { useState } from "react";
import axios from "axios";





const AddMedicine =()=>
{

    const [ProductionDate,setProductionDate] = useState("")
    const [NameDrug,setNameDrug] = useState("")
    const [Quantity,setQuantity] = useState(0)
    const [price,setPrice] = useState(0)
    const [ExpiryDate,setExpiryDate] = useState("")
    
    const formsubmit = (e)=>{
        e.preventDefault();
        axios.post("http://localhost:3000/Medicine/",{
            ProductionDate:ProductionDate,
            NameDrug:NameDrug,
            Price:price,
            Quantity:Quantity,
            ExpiryDate:ExpiryDate
        }).then((Response)=>console.log(Response))
    }
    return(

<div>

<div className="mb-3">
  <label htmlFor="Manufacturer" className="form-label">ProductionDate</label>
  <input type="text" className="form-control" id="Manufature" placeholder="ProductionDate..." onChange={e=>setProductionDate(e.target.value)}/>
</div>
<div className="mb-3">
  <label htmlFor="NameDrug" className="form-label">NameDrug</label>
  <input type="text" className="form-control" id="NameDrug" placeholder="NameDrug..." onChange={e=>setNameDrug(e.target.value)}/>
</div>
<div className="mb-3">
  <label htmlFor="Price" className="form-label">Price</label>
  <input type="number" className="form-control" id="Price" placeholder="Price..." onChange={e=>setPrice(e.target.value)}/>
</div>
<div className="mb-3">
  <label htmlFor="Quantity" className="form-label">Quantity</label>
  <input type="number" className="form-control" id="Quanitity" placeholder="Quantity..." onChange={e=>setQuantity(e.target.value)}/>
</div>
<div className="mb-3">
  <label htmlFor="ExpiryDate" className="form-label">ExpiryDate</label>
  <input type="text" className="form-control" id="Date" placeholder="Date..."  onChange={e=>setExpiryDate(e.target.value)}/>
</div>
<div>
<button type="button" className="btn btn-success" onClick={formsubmit}>Add Medicine</button>

</div>
</div>


    )
}
export default AddMedicine;