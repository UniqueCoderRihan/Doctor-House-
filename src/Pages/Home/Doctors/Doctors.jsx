import { useEffect, useState } from 'react';
import Doctor from './Doctor';

const Doctors = () => {
    const [doctors,setDoctors] = useState([]);
    
    useEffect(()=>{
        fetch('doctors.json')
        .then(res=>res.json())
        .then(data=>setDoctors(data))
    },[])
    return (
        <div className='mt-4'>
            <h2 className='text-3xl font-bold text-center'>Our Expert Doctors</h2>
            <p className='text-center'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque <br /> laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
            <div className='grid grid-cols-1 md:grid-cols-3 sm:items-center sm:mx-auto'>
                {
                    doctors.map(doctor=> <Doctor doctor={doctor} key={doctor.id}></Doctor>)
                }
            </div>
        </div>
    );
};

export default Doctors;