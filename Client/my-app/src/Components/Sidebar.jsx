import styled from "styled-components"

const Sidebar = styled.div`
    
    display:flex;
    flex-direction:column;
    background-color:#f8f9fa!important;
    width:250px;
    height:100vh;
    margin-right:auto;
    padding:20px;
    color:black;
`

const SideBar  = ()=>
{

   return(
    <Sidebar >
        <h3> Hello There </h3>    
  </Sidebar>
   )
}
export default SideBar