import React from 'react'
import Hero from '../components/contact/hero'
import Contactform from '../components/contact/contactform'
import Section2 from '../components/contact/section2'
import Faq from '../components/contact/faq'

const Contact = () => {
    return (
        <div className='bg-white text-black'>
            <Hero />
            <Contactform />
            <Section2 />
            <Faq/>
        </div>
    )
}

export default Contact