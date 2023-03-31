import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  marusya,
  eshop,
  klassov,
  tripguide,
  threejs,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'Обо мне',
  },
  {
    id: 'work',
    title: 'Работа',
  },
  {
    id: 'contact',
    title: 'Контакты',
  },
];

const services = [
  {
    title: 'Разработка',
    icon: web,
  },
  {
    title: 'Сайтов',
    icon: mobile,
  },
  {
    title: 'Приложений',
    icon: backend,
  },
  {
    title: 'Веб Дизайн',
    icon: creator,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
];

const experiences = [
  {
    title: 'Web Разработка',
    points: [
      'Разработка и сопровождение веб-приложений с использованием React.js и другие сопутствующие технологии.',
      'Сотрудничество с кросс-функциональными командами, включая дизайнеров, менеджеров по продуктам и других разработчиков, для создания высококачественных продуктов.',
      'Внедрение адаптивного дизайна и обеспечение кроссбраузерной совместимости.',
      'Участие в обзорах кода и предоставление конструктивной обратной связи другим разработчикам.',
    ],
  },
  {
    title: 'Визуальный интерфейс',
    points: [
      'Разработка визуального интерфейса с помощью современных технологий',
      'Gsap - библиотека для реализации анимации любого уровня сложности с помощью JavaScript ',
      'Framer Motion - это новая готовая к работе веб-моушен-библиотека React с открытым исходным кодом. С точки зрения прототипирования, Framer всегда идеально подходил для разработки продвинутых анимаций и жестов.',
      'СSS animation - это предлагаемый модуль для каскадных таблиц стилей, который позволяет анимировать элементы HTML-документа с помощью CSS.',
      'ThreeJs - легковесная кроссбраузерная библиотека JavaScript, используемая для создания и отображения анимированной компьютерной 3D графики при разработке веб-приложений.',
    ],
  },
  {
    title: 'Web Дизайн UI/UX',
    points: [
      'Сотрудничество с людьми имеющими многолетний опыт в Веб Дизайне.',
      'Индивидульный подход к каждому клиенту.',
      'Работа с такими графическими редакторами такие как Figma, PhotoShop',
      'Photoshop — многофункциональный графический редактор, разрабатываемый и распространяемый компанией Adobe Systems. В основном работает с растровыми изображениями, однако имеет некоторые векторные инструменты.',
      'Figma — онлайн сервис для разработки интерфейсов и прототипирования с возможностью организации совместной работы в режиме реального времени.',
    ],
  },
];

const testimonails = [
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
];

const projects = [
  {
    name: 'Landing page',
    description:
      'Веб-сайт для MAKE-UP артиста, в котором описываются все виды деятельности, подробное описание каждой из работ и контактная информация. ',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'emailjs',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: marusya,
    source_code_link: 'https://github.com/vladian95/marusya_look',
  },
  {
    name: 'E-commerce App',
    description:
      'Приложения интернет магазина для он-лайн покупок, с добавлением товара в корзину. При создании приложения по back-end части использовался NodeJS, база данных MongoDB.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongoDB',
        color: 'green-text-gradient',
      },
      {
        name: 'styledComponents',
        color: 'pink-text-gradient',
      },
    ],
    image: eshop,
    source_code_link: 'https://github.com/vladian95/eco-shop-react',
  },
  {
    name: 'Control service',
    description:
      'Этот проект был осуществлен по заказу клиента, который осуществляет удаленный контроль качества продаж для других компаний. ',
    tags: [
      {
        name: 'gulp',
        color: 'blue-text-gradient',
      },
      {
        name: 'emailjs',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: klassov,
    source_code_link: 'https://github.com/vladian95/klassov_Quality',
  },
];

export { services, technologies, experiences, testimonails, projects };
