import BannerImg from '../../../assets/Group 34991.png'

const Banner = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 bg-lime-200 '>
            <div className='mt-30 my-[50px] md:my-auto mx-auto md:mx-auto '>
                <h2 className='text-7xl  font-sans'>Your Best Medical <br /> Help Center</h2>
                <p className='text-2xl my-2'> We Provide World Class Services.  </p>
                <button className='btn btn-outline btn-warning"'>All Services</button>
            </div>
            <div className='my-auto'>
                <img className='w-[600px]' src={BannerImg} alt="" />
            </div>
        </div>
    );
};

export default Banner;