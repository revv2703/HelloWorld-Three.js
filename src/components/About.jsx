import React from 'react'
import Tilt from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../style'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'


const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div variants={fadeIn("right", "spring", 0.5 * index, 1)} className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
        <div
          options={{
            max: 45, scale: 1, speed: 500
          }} className='bg-tertiary rounded-[20px] py-5 px-10 min-h-[250px] flex justify-evenly items-center flex-col'>
          <img src={icon} alt={title} className='w-16 h-16 object-contain' />
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>

    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p variants={fadeIn("", "", 0.1, 1)} className="mt-4 text-secondary text-[19px] max-w-3xl leading-[30px]">
        I am a passionate developer with a diverse skill set and a penchant for innovation. With a background in web development, I've created captivating websites that seamlessly blend design and functionality. My fascination with artificial intelligence led me to explore the world of conditional GANs, where I've crafted unique and imaginative digital artworks. In the realm of AIML (Artificial Intelligence and Machine Learning), I've tackled complex problems, honing my analytical skills. As a gamer at heart, I've also ventured into game development, bringing immersive experiences to life.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}

      </div>
    </>
  )
}

export default SectionWrapper(About, "about")