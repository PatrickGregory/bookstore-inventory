import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
// import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';
import { FaStar } from 'react-icons/fa6';

function Review() {
    return (
        <div className='my-12 px-4 lg:px-24'>
            <h2 className='text-5xl font-bold text-center mb-10 leading-snug'>Our Customers</h2>
            <div>
                <div>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={10}
                        pagination={{
                            clickable: true,
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 40,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 50,
                            },
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div>
                                <div className='flex text-amber-500'>
                                    <FaStar/>
                                    <FaStar/>
                                    <FaStar/>
                                    <FaStar/>
                                </div>
                                <div>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla 
                                        ex molestiae quidem iure. Voluptatum suscipit distinctio labore eligendi, et 
                                        sunt ipsa consectetur non odio fugit, 
                                        similique incidunt 
                                        exercitationem laborum repudiandae!</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <div className='flex text-amber-500'>
                                    <FaStar/>
                                    <FaStar/>
                                    <FaStar/>
                                    <FaStar/>
                                </div>
                                <div>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla 
                                        ex molestiae quidem iure. Voluptatum suscipit distinctio labore eligendi, et 
                                        sunt ipsa consectetur non odio fugit, 
                                        similique incidunt 
                                        exercitationem laborum repudiandae!</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <div className='flex text-amber-500'>
                                    <FaStar/>
                                    <FaStar/>
                                    <FaStar/>
                                    <FaStar/>
                                </div>
                                <div>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla 
                                        ex molestiae quidem iure. Voluptatum suscipit distinctio labore eligendi, et 
                                        sunt ipsa consectetur non odio fugit, 
                                        similique incidunt 
                                        exercitationem laborum repudiandae!</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default Review;
