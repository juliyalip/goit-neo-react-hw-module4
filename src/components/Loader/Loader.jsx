import { ClipLoader } from "react-spinners";

const override = {
  display: "block",
  margin: "0 auto",
};

export default function Loader(){
    return(
         <ClipLoader  size={150} color="blue"
        aria-label="Loading Spinner" cssOverride={override}/>
        
    )
}