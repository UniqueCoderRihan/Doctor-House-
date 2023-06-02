import quote from '../../../assets/Quote_1_.png'
import pic1 from '../../../assets/Ellipse 2.png'


const MainReviews = () => {
    return (
        <div>
            <h2 className="text-center font-bold text-4xl my-2">What Our Patients Says</h2>
            <p className="text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio debitis eaque recusandae a sed voluptatum est perspiciatis! <br /> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime illum molestias vero?</p>
            {/* Sweeper  */}
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <div className='flex space-x-3 grid grid-cols-1 md:grid-cols-2 grid grid-cols-1 md:grid-cols-2 grid grid-cols-1 md:grid-cols-2'>
                        <div className='flex items-center'>
                            <img className='pl-[60px] mr-2' src={pic1} alt="" />
                            <div className='flex'>
                                <div className=''>
                                    <p className='text-3xl font-semibold'>Raihan Sharif</p>
                                    <p className='text-1xl'>Web Dev</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In aliquid temporibus  repudiandae aspernatur vero laudantium.</p>
                                </div>
                                <div className='justify-end'>
                                    <img className='w-[40px]' src={quote} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center'>
                            <img className='pl-[60px] mr-2' src={pic1} alt="" />
                            <div className='flex'>
                                <div className=''>
                                    <p className='text-3xl font-semibold'>Raihan Sharif</p>
                                    <p className='text-1xl'>Web Dev</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In aliquid temporibus  repudiandae aspernatur vero laudantium.</p>
                                </div>
                                <div className='justify-end'>
                                    <img className='w-[40px]' src={quote} alt="" />
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <div className='flex space-x-3 grid grid-cols-1 md:grid-cols-2 grid grid-cols-1 md:grid-cols-2 grid grid-cols-1 md:grid-cols-2 grid grid-cols-1 md:grid-cols-2'>
                        <div className='flex items-center border-amber-700'>
                            <img className='pl-[60px] mr-2' src={pic1} alt="" />
                            <div className='flex'>
                                <div className=''>
                                    <p className='text-3xl font-semibold'>Raihan Sharif</p>
                                    <p className='text-1xl'>Web Dev</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In aliquid temporibus  repudiandae aspernatur vero laudantium.</p>
                                </div>
                                <div className='justify-end'>
                                    <img className='w-[40px]' src={quote} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center '>
                            <img className='pl-[60px] mr-2' src={pic1} alt="" />
                            <div className='flex'>
                                <div className=''>
                                    <p className='text-3xl font-semibold'>Raihan Sharif</p>
                                    <p className='text-1xl'>Web Dev</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In aliquid temporibus  repudiandae aspernatur vero laudantium.</p>
                                </div>
                                <div className='justify-end'>
                                    <img className='w-[40px]' src={quote} alt="" />
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <div className='flex space-x-3 grid grid-cols-1 md:grid-cols-2 grid grid-cols-1 md:grid-cols-2 grid grid-cols-1 md:grid-cols-2 grid grid-cols-1 md:grid-cols-2'>
                        <div className='flex items-center'>
                            <img className='pl-[60px] mr-2' src={pic1} alt="" />
                            <div className='flex'>
                                <div className=''>
                                    <p className='text-3xl font-semibold'>Raihan Sharif</p>
                                    <p className='text-1xl'>Web Dev</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In aliquid temporibus  repudiandae aspernatur vero laudantium.</p>
                                </div>
                                <div className='justify-end'>
                                    <img className='w-[40px]' src={quote} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center'>
                            <img className='pl-[60px] mr-2' src={pic1} alt="" />
                            <div className='flex'>
                                <div className=''>
                                    <p className='text-3xl font-semibold'>Raihan Sharif</p>
                                    <p className='text-1xl'>Web Dev</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In aliquid temporibus  repudiandae aspernatur vero laudantium.</p>
                                </div>
                                <div className='justify-end'>
                                    <img className='w-[40px]' src={quote} alt="" />
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <div className='flex space-x-3 grid grid-cols-1 md:grid-cols-2 grid grid-cols-1 md:grid-cols-2 grid grid-cols-1 md:grid-cols-2 grid grid-cols-1 md:grid-cols-2'>
                        <div className='flex items-center'>
                            <img className='pl-[60px] mr-2' src={pic1} alt="" />
                            <div className='flex'>
                                <div className=''>
                                    <p className='text-3xl font-semibold'>Raihan Sharif</p>
                                    <p className='text-1xl'>Web Dev</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In aliquid temporibus  repudiandae aspernatur vero laudantium.</p>
                                </div>
                                <div className='justify-end'>
                                    <img className='w-[40px]' src={quote} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center'>
                            <img className='pl-[60px] mr-2' src={pic1} alt="" />
                            <div className='flex'>
                                <div className=''>
                                    <p className='text-3xl font-semibold'>Raihan Sharif</p>
                                    <p className='text-1xl'>Web Dev</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In aliquid temporibus  repudiandae aspernatur vero laudantium.</p>
                                </div>
                                <div className='justify-end'>
                                    <img className='w-[40px]' src={quote} alt="" />
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainReviews;