import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';
import { github, telegram } from '../assets';

const Contact = () => {
  const handleClick = () => {
    navigator.vibrate(100);
  };

  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        'service_3ag8w8t',
        'template_s8l9y7k',
        {
          from_name: form.name,
          to_name: 'Vlad',
          from_email: form.email,
          to_email: 'kvankvan1995@gmail.com',
          message: form.message,
        },
        '0wsWru7IKiJD08sgf'
      )
      .then(
        () => {
          setLoading(false);
          alert('Спасибо Вам! Я скоро с вами свяжусь =)');

          setForm({
            name: '',
            email: '',
            message: '',
          });
        },
        (error) => {
          setLoading(false);

          console.error(error);

          alert('Что-то пошло не так =(');
        }
      );
  };

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn('left', 'tween', 0.5, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Отправьте информацию</p>
        <h3 className={styles.sectionHeadText}>Контакты</h3>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Ваше Имя</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Введите ваше имя:"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Ваш Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Введите ваш email:"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Ваше Сообщения</span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Введите ваше сообщения:"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>
          <button
            onClick={handleClick}
            type="submit"
            className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl hover:scale-[1.1] transition-all ease-in-out"
          >
            {loading ? 'sending...' : 'ОТПРАВИТЬ'}
          </button>
        </form>
        <div className="flex justify-between items-center mt-6">
          <a href="tel:+79786400847">+7-978-640-08-47</a>
          <div className="flex items-center">
            <a
              href="https://t.me/vladian95"
              target="_blank"
              className="h-8 w-8 mr-6 hover:scale-[1.4] transition-all ease-in-out"
            >
              <img src={telegram} alt="telegram" />
            </a>
            <a
              href="https://github.com/vladian95"
              target="_blank"
              className="h-9 w-9 hover:scale-[1.4] transition-all ease-in-out"
            >
              <img src={github} alt="github" />
            </a>
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, 'contact');
