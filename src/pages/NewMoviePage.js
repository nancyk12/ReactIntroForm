//let's use react-router-dom;s context provider
// to pass info to the child routes
import { useNavigate, useOutletContext } from "react-router-dom";


function NewMoviePage(){

    //getting the signupList fromt the router context
    const [signupList ] = useOutletContext();

    const navigate = useNavigate();
    console.log(signupList);
 
return (
    <div className="container">
        <h1>Signups Page</h1>
   
        <select onChange={(e) => {
            navigate(`/signups/${e.target.value}`)
        }}>
            <option></option>
            {signupList.map((signup) => {
                return (<option value={signup.email}>{signup.firstName}</option>)
            })}
        </select>
     </div>
)
}

export default NewMoviePage;