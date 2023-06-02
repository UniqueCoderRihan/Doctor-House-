import { FaClock, FaLocationArrow, FaPhone } from 'react-icons/fa';
const AuthorInfo = () => {
    return (
        <div className='grid grid-cols-3 gap-2 container mx-auto my-2 text-white'>
            <div className='flex p-8 bg-black rounded-lg'>
                <FaClock className='text-3xl my-auto mr-2'></FaClock>
                <div className='my-auto'>
                    <h3 className='text-3xl'>Opening Hours</h3>
                    <p>Open 9.00 Am to 5.00 PM Everyday</p>
                </div>
            </div>
            <div className='flex p-8 bg-rose-400 rounded-lg'>
                <FaLocationArrow className='text-3xl my-auto mr-2'></FaLocationArrow>
                <div className='my-auto'>
                    <h3 className='text-3xl'>Office</h3>
                    <p>Chittagong Bangladesh</p>
                </div>
            </div>
            <div className='flex p-8 bg-black rounded-lg'>
                <FaPhone className='text-3xl my-auto mr-2'></FaPhone>
                <div className='my-auto'>
                    <h3 className='text-3xl'>Opening Hours</h3>
                    <p>Open 9.00 Am to 5.00 PM Everyday</p>
                </div>
            </div>
            
        </div>
    );
};

export default AuthorInfo;