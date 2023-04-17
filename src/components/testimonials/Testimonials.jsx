import React from 'react';
import AVTR1 from '../../assets/avatar1.jpg';
import AVTR2 from '../../assets/avatar2.jpg';
import AVTR3 from '../../assets/avatar3.jpg';
import AVTR4 from '../../assets/avatar4.jpg';
import './testimonials.css';

import { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";


import "swiper/css";
import "swiper/css/pagination";


import { Pagination } from "swiper";



const data =[
    {
        avatar:AVTR1,
        name:'Ritu Khungar',
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quibusdam magni repellendus explicabo aliquam omnis adipisci voluptas nemo nobis perferendis, quod fugit repudiandae natus nulla nesciunt ipsam harum consequuntur rem."
    },
    {
        avatar:AVTR2,
        name:'Piyush Borkar',
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quibusdam magni repellendus explicabo aliquam omnis adipisci voluptas nemo nobis perferendis, quod fugit repudiandae natus nulla nesciunt ipsam harum consequuntur rem."
    },
    {
        avatar:AVTR3,
        name:'Shreni Dubey',
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quibusdam magni repellendus explicabo aliquam omnis adipisci voluptas nemo nobis perferendis, quod fugit repudiandae natus nulla nesciunt ipsam harum consequuntur rem."
    },
    {
        avatar:AVTR4,
        name:'Akshay Gaurkhede',
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quibusdam magni repellendus explicabo aliquam omnis adipisci voluptas nemo nobis perferendis, quod fugit repudiandae natus nulla nesciunt ipsam harum consequuntur rem."
    }

]

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5> Review from clients</h5>
      <h2> Testimonials</h2>
      <Swiper  pagination={true} modules={[Pagination]}  className="container testimonials__container">
        {
            data.map(({avatar,name,review},index)=>{
                return (
                  <SwiperSlide key={index} className="testimonials">
                    <div className="client__avatar">
                      <img src={avatar} alt={name} />
                    </div>
                    <h5 className="client__name">{name}</h5>
                    <small className="client__review">
                     {review}
                    </small>
                  </SwiperSlide>
                );
            })
        }
      </Swiper>
    </section>
  );
}

export default Testimonials