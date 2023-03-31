import React from 'react';
// import Tilt from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
  const handleClick = () => {
    navigator.vibrate(100);
  };

  return (
    <motion.div
      onClick={handleClick}
      variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
      className="xs:w-[250px] w-full cursor-pointer w-full  shadow-card rounded-[20px] "
    >
      <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] border-[2px]  flex justify-evenly items-center flex-col hover:scale-[1.1] transition-all ease-in-out">
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Обо мне.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Я разработчик интерфейсов с опытом работы в HTML5, CSS3, JavaScript, а
        также работаю с таким фреймворкам, как React. Я быстро учусь и тесно
        сотрудничаю с клиентами для создания эффективных, масштабируемых и
        удобных в использовании решений. Люблю делать красивые и удобные
        интерфейсы с различным визуалом, функционалом и анимацией. Давайте
        работать вместе, чтобы воплотить ваши идеи в жизнь!
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10 justify-center">
        {services.map((services, index) => (
          <ServiceCard key={services.title} index={index} {...services} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, 'about');
