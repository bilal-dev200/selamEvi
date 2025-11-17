import React from 'react'
import Hero from '../components/contact/hero'
import Contactform from '../components/contact/contactform'
import Section2 from '../components/contact/section2'
import FAQSection from '../components/home/components/FAQSection'

const Contact = () => {
    return (
        <div className='bg-white text-black  space-y-40'>
            <Hero />
            <Contactform />
            <Section2 />
            <FAQSection/>
        </div>
    )
}

export default Contact