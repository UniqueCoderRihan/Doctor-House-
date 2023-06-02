import { FaLocationArrow, FaPhone } from "react-icons/fa";

const ContactUs = () => {
    return (
        <div className="bg-lime-200 grid grid-cols-1 md:grid-cols-2 container mx-auto my-7 rounded-lg p-5">
            <div>
                <h2 className="font-semibold text-3xl my-2">Contact Us</h2>
                <p className="my-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam blanditiis quam aliquid perferendis a animi.</p>
                <div className="flex space-x-3 text-2xl">
                    <FaPhone></FaPhone>
                    <p>+00845412121</p>
                </div>
                <div className="flex space-x-3 text-2xl ">
                    <FaLocationArrow></FaLocationArrow>
                    <p>Chittagong Bangladesh</p>
                </div>

            </div>
            <div className='text-center my-2  p-4'>
                <div className='grid md:grid-cols-3' >
                    <input className='m-2 p-3 rounded-lg' type="text" placeholder='Frist Name' />
                    <input className='m-2 p-3 rounded-lg' type="text" placeholder='Last Name' />
                    <input className='m-2 p-3 rounded-lg' type="text" placeholder='Email' />
                    <select className='m-2 p-3 rounded-lg' name="Chefs" id="chef">
                        <option value="1People">Chose Reason</option>
                        <option value="2People">Dermatology</option>
                        <option value="3People">Orthopedics</option>
                        <option value="4People">Dermatology</option>
                        <option value="5People">Cardiology</option>
                        <option value="6People">Dermatology</option>
                    </select>
                    <input className='m-2 p-3 rounded-lg' type="date" />
                    <input className='m-2 p-3 rounded-lg' type="time" />
                </div>
                <button type='submit' className='btn btn-outline btn-warning w-50 text-2xl'>Find Available  </button>
            </div>
        </div>
    );
};

export default ContactUs;