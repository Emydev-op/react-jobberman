import { useLoaderData } from "react-router-dom";

const CareerDetails = () => {
    const career = useLoaderData();

    return ( 
        <div className="career-details">
            <h2>Career Details for {career.title}</h2>
            <p>Starting Salary: {career.salary}</p>
            <p>Location: {career.location}</p>
            <div className="details">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius cum 
                repellendus perferendis ducimus omnis animi facere voluptates facilis laboriosam quam, 
                assumenda fugit qui eligendi ut quis aperiam soluta quasi alias.</p>
            </div>
        </div>
     );
}

// data loader
export const careerDetailLoader = async ({params}) => {
    const { id } = params;
    const res = await fetch(`http://localhost:4000/careers/` + id);

    if (!res.ok) {
        throw Error('Could not find job details');
    }
  
    return res.json()
  }
 
export default CareerDetails;