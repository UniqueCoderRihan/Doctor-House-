import { FaDollarSign, FaLocationArrow, FaShoppingBag } from "react-icons/fa";

const Doctor = ({doctor}) => {
    const {name,ratings,location,img,specialist,rate} = doctor;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>BTP {specialist}</p>
                <p>{ratings} ****</p>
                <div>
                    <div className="flex">
                        <FaLocationArrow className="text-xl my-auto pr-2"></FaLocationArrow>
                        <p className="text-xl my-auto">{location}</p>
                    </div>
                    <div className="flex">
                        <FaShoppingBag className="text-xl my-auto pr-2"></FaShoppingBag>
                        <p className="text-xl my-auto">Availble 24 Hours every Day</p>
                    </div>
                    <div className="flex">
                        <FaDollarSign className="text-xl my-auto pr-2"></FaDollarSign>
                        <p className="text-xl my-auto">Per One {rate}</p>
                    </div>
                    <button className="mt-5 btn btn-outline btn-warning btn-sm w-full">View Doctor Profile</button>
                </div>
            </div>
        </div>
    );
};

export default Doctor;