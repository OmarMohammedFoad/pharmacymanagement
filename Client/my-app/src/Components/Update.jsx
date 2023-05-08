import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";



const Udpate  = ()=>
{
   const param = useParams()
   
   console.log(param);
   const [Name,setName] = useState("")
   const [Manufacturer,setManufacturer] = useState("")
   const [Quantity,setQuantity] = useState(0)
   const [price,setPrice] = useState(0)
   const [ExpiryDate,setExpiryDate] = useState("")


   const formsubmit = (e)=>{
      e.preventDefault();
      axios.put(`http://localhost:3000/Medicine/${param.ID}`,{
          MedicineName:Name,
          Manufacturer:Manufacturer,
          Price:price,
          Quantity:Quantity,
          ExpiryDate:ExpiryDate
      }).then((Response)=>console.log(Response))
  }



   return(
    <div className="form">
<div>
<div className="mb-3">
  <label htmlFor="MedicineName" className="form-label">MedicineName</label>
  <input type="text" className="form-control" id="Name" placeholder="Name..."  onChange={e=>setName(e.target.value)}  />
</div>
<div className="mb-3">
  <label htmlFor="Manufacturer" className="form-label">Manufacturer</label>
  <input type="text" className="form-control" id="Manufature" placeholder="Manufacture..." onChange={e=>setManufacturer(e.target.value)}/>
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
    
  </div>
   )
}

export default Udpate;