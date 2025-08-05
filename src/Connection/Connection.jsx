import React from 'react'
import HeroSection from '../HeroSection/HeroSection'
import ServiceCards from '../ServiceCards/ServiceCards'
import SkillsSection from '../SkillsSection/SkillsSection'
import AdvertisementSection from '../AdvertisementSection/AdvertisementSection'
import Testimonials from '../Testimonials/Testimonials'
import ContactForm from '../ContactForm/ContactForm'
import VideoSection from '../VideoSection/VideoSection'

function Connection() {
  return (
    <div>
      <HeroSection/>
      <VideoSection/>
      <SkillsSection/>
      <ServiceCards/>
      <AdvertisementSection/>
      <Testimonials/>
      <ContactForm/>
    </div>
  )
}

export default Connection
