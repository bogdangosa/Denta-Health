import React, { useRef } from 'react';
import Button from '../../Components/Buttons/Button';
import CircleLogo from '../../Components/Cards/CircleLogo';
import ServiceCard from '../../Components/Cards/ServiceCard';
import './Home.css';
import { useNavigate } from "react-router-dom";
import SwiperCore, {Autoplay, Navigation, Pagination} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Home = () => {
  const navigationPrevRef = useRef(null)
  const navigationNextRef = useRef(null)
  
  let navigate = useNavigate();


  return (
    <main className="Home">
        <section className='hero-section'>
          <Swiper className='hero-swiper'
           spaceBetween={1}
           slidesPerView={1}
           loop={true}
           autoplay={{
            delay: 3500,
            disableOnInteraction: false,
            }}        
            pagination={{
              clickable: true,
              renderBullet: function (index, className) {
                return '<span class="' + className + '">' + "</span>";
              },
            }}
            modules={[Autoplay,Pagination]}>
            <SwiperSlide>
              <img src='/hero-images/image1.jpg' alt="bg" className='hero-background'></img>
              <div className='hero-overlay overlay-color-1'></div>
            </SwiperSlide>
            <SwiperSlide>
              <img src='/hero-images/image3.jpg' alt="bg" className='hero-background'></img>
              <div className='hero-overlay overlay-color-3'></div>
            </SwiperSlide>
            <SwiperSlide>
              <img src='/hero-images/image2.jpg' alt="bg" className='hero-background'></img>
              <div className='hero-overlay overlay-color-2'></div>
            </SwiperSlide>

            <SwiperSlide>
              <img src='/hero-images/image4.jpg' alt="bg" className='hero-background'></img>
              <div className='hero-overlay overlay-color-4'></div>
            </SwiperSlide>
          </Swiper>
          <h1 className='hero-title'>The Art of<br/>Creating Smiles</h1>
          <p className='hero-subtitle'>We will take care of your dental health</p>
          <Button onClick={()=>navigate("/Contact")}>Book an Appointment</Button>
        </section>
        <section className='why-us-section'>
            <div className='traits-container'>
                <TraitComponent src="/icons/icon-handshake.svg" title="Professional" text="Pellentesque pharetra nunc risus, id lacinia odio aliquet vel."></TraitComponent>
                <TraitComponent src="/icons/icon-building.svg" title="Equipment" text="Pellentesque pharetra nunc risus, id lacinia odio aliquet vel."></TraitComponent>
                <TraitComponent src="/icons/icon-people.svg" title="Communication" text="Pellentesque pharetra nunc risus, id lacinia odio aliquet vel."></TraitComponent>
                <TraitComponent src="/icons/icon-clock.svg" title="Availability" text="Pellentesque pharetra nunc risus, id lacinia odio aliquet vel."></TraitComponent>
            </div>
            <div className='why-us-text-container'>
                <h2>Why Dentahealth?</h2>
                <p className='why-us-text'>Aliquam in ullamcorper risus. Vivamus interdum libero non nunc ornare, non imperdiet velit facilisis. Morbi nec ultrices est, accumsan pretium odio. Suspendisse potenti. Curabitur non volutpat nunc, a facilisis enim. Nam massa orci, mattis sit amet molestie ut, dictum sit amet elit. Mauris a blandit nisi. Etiam ac metus et orci tincidunt scelerisque.</p>
                <Button onClick={()=>navigate("/Team")}>Read More</Button>
                <div className='why-us-image'>
                  <img src='/why_us_image.png'></img>
                  <div className='why-us-image-overlay'></div>
                </div>     
            </div>
        </section>
        <section className='testimonial-section'>
          {/*<img className='testimonial_background' src='/testimonial_background.png' alt='testimonial background'/>*/}
          <div  className='testimonial_gradient'/>
          <h2>WHAT PATIENTS SAY ABOUT US</h2>

          <div className='testimonial-swiper-container'>

            <div className='swiper-previous swiper-navigation-button' ref={navigationPrevRef}><img src="./arrow_icon.svg" alt='arrow'/></div>
            <Swiper
              spaceBetween={48}
              slidesPerView={1}
              loop={true}
              autoplay={{
               delay: 3500,
               disableOnInteraction: false,
               }}  
              navigation={{
                prevEl: navigationPrevRef.current,
                nextEl: navigationNextRef.current,
              }}
              onBeforeInit={(swiper) => {
                setTimeout(() => {
                  // Override prevEl & nextEl now that refs are defined
                  swiper.params.navigation.prevEl = navigationPrevRef.current
                  swiper.params.navigation.nextEl = navigationNextRef.current

                  // Re-init navigation
                  swiper.navigation.destroy()
                  swiper.navigation.init()
                  swiper.navigation.update()
                  });
             }}
             modules={[Autoplay,Navigation]}>
              <SwiperSlide>
                <TestimonialCard name="Thomas Robinson"/>
              </SwiperSlide>
              <SwiperSlide>
                <TestimonialCard name="Bram Kenzie"/>
              </SwiperSlide>
              <SwiperSlide>
                <TestimonialCard name="Martin Leopold"/>
              </SwiperSlide>
            </Swiper>

            <div className='swiper-next swiper-navigation-button' ref={navigationNextRef}><img src="./arrow_icon.svg" alt='arrow'/></div>

          </div>
        </section>
        <section className="services-section">
          <h2>Our Services</h2>
          <div className='services-grid'>
            <ServiceCard title="Implantology">Morbi augue turpis, pretium egestas ante non, dapibus finibus turpis. Quisque dapibus tincidunt elit. Sed tristique.</ServiceCard>
            <ServiceCard title="Orthodontics">Morbi augue turpis, pretium egestas ante non, dapibus finibus turpis. Quisque dapibus tincidunt elit. Sed tristique.</ServiceCard>
            <ServiceCard title="Prosthetic">Morbi augue turpis, pretium egestas ante non, dapibus finibus turpis. Quisque dapibus tincidunt elit. Sed tristique.</ServiceCard>
            <ServiceCard title="Dentistry">Morbi augue turpis, pretium egestas ante non, dapibus finibus turpis. Quisque dapibus tincidunt elit. Sed tristique.</ServiceCard>
            <ServiceCard title="Endodontics">Morbi augue turpis, pretium egestas ante non, dapibus finibus turpis. Quisque dapibus tincidunt elit. Sed tristique.</ServiceCard>
            <ServiceCard title="Prophylaxis">Morbi augue turpis, pretium egestas ante non, dapibus finibus turpis. Quisque dapibus tincidunt elit. Sed tristique.</ServiceCard>
          </div>
          <div className='service-carousel-mobile'>
          <Swiper
              spaceBetween={48}
              slidesPerView={1}
              loop={true}
              autoplay={{
               delay: 3500,
               disableOnInteraction: false,
               }}  
             modules={[Autoplay,Navigation]}>
              <SwiperSlide>
                <ServiceCard title="Implantology">Morbi augue turpis, pretium egestas ante non, dapibus finibus turpis. Quisque dapibus tincidunt elit. Sed tristique.</ServiceCard>
              </SwiperSlide>
              <SwiperSlide>
                <ServiceCard title="Orthodontics">Morbi augue turpis, pretium egestas ante non, dapibus finibus turpis. Quisque dapibus tincidunt elit. Sed tristique.</ServiceCard>
              </SwiperSlide>
              <SwiperSlide>  
                <ServiceCard title="Prosthetic">Morbi augue turpis, pretium egestas ante non, dapibus finibus turpis. Quisque dapibus tincidunt elit. Sed tristique.</ServiceCard>
              </SwiperSlide>
              <SwiperSlide>
                <ServiceCard title="Dentistry">Morbi augue turpis, pretium egestas ante non, dapibus finibus turpis. Quisque dapibus tincidunt elit. Sed tristique.</ServiceCard>
              </SwiperSlide>
              <SwiperSlide>
                <ServiceCard title="Endodontics">Morbi augue turpis, pretium egestas ante non, dapibus finibus turpis. Quisque dapibus tincidunt elit. Sed tristique.</ServiceCard>
              </SwiperSlide>
              <SwiperSlide>
                <ServiceCard title="Prophylaxis">Morbi augue turpis, pretium egestas ante non, dapibus finibus turpis. Quisque dapibus tincidunt elit. Sed tristique.</ServiceCard>
              </SwiperSlide>
              </Swiper>
          </div>
        </section>

        <section className='call-to-action-section'>
          {/*<img className='call-to-action-background' src='/call_to_action_background.png' alt='call to action background'/>*/}
          <div  className='call-to-action-gradient'/>
          <h2>Do you want a consultation?</h2>
          <p className='description'>Integer euismod malesuada ex eleifend mollis. Nam condimentum accumsan mauris quis pharetra. Integer pharetra gravida consectetur.</p>
          <Button className="call-to-action-button" onClick={()=>navigate("/Contact")}>Book an Appointment</Button>
        </section>

    </main>
  );
}


const TraitComponent = (props)=>{
  return (
    <div className='trait'>
        <CircleLogo src={props.src}></CircleLogo>
        <div className='trait-text-container'>
          <p className='trait-title'>{props.title}</p>
          <p className='trait-text'>{props.text}</p>
        </div>
    </div>
  )
}


const TestimonialCard = (props) =>{

  return (
    <div className='testimonial-card'>
      <img src='/testimonial_image.png' className='testimonial_circle_image'/>
      <p className='testimonial_user_name'>{props.name}</p>

      <p className='testimonial_description'>Morbi augue turpis, pretium egestas ante non, dapibus finibus turpis. Quisque dapibus tincidunt elit. Sed tristique, nulla et vulputate placerat, nibh ligula accumsan magna, quis ultricies ex lacus non justo.</p>
    </div>
  )
}



export default Home;
