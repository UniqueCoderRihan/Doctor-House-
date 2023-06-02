import BannerImg from '../../../assets/Group 34991.png'

const Banner = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 bg-lime-200 '>
            <div className='mt-30 my-[50px] md:my-auto mx-auto '>
                <h2 className='text-7xl  font-sans'>Your Best Medical <br /> Help Center</h2>
            </div>
            <div className='my-auto'>
                <img className='w-[600px]' src={BannerImg} alt="" />
            </div>
        </div>
    );
};

export default Banner;