const IMAGE_PATH = 'images/content';

export const works = [
  {
    id: 'cat-energy',
    title: 'Кэт энерджи',
    description: 'Магазин функционального питания для котов.',
    about: [
      'Создана разметка по методологии БЭМ, семантическая и адаптивная вёрстка (Mobile First).',
      'Написан CSS-код на препроцессоре Sass (SCSS)',
      'Использована система сборки на Node.js и подготовлена автоматизация сборки проекта с помощью Gulp.',
      'Минификация CSS и JS файлов.',
      'Оптимизация растровых изображений.',
      'Сборка и минификация SVG-спрайта.',
    ],
    image: `${IMAGE_PATH}/cat-energy.jpg`,
    site: 'https://nemtsevk.github.io/cat-energy/',
    source: 'https://github.com/NemtsevK/cat-energy/',
    technologies: ['HTML', 'Sass', 'JS', 'Gulp'],
    visible: true,
  },
  {
    id: 'sedona',
    title: 'Седона',
    description: 'Поиск гостиниц в небольшом городке.',
    about: [
      'Создана разметка по методологии БЭМ, семантическая и адаптивная вёрстка (Mobile First).',
      'Написан CSS-код на препроцессоре Sass (SCSS)',
      'Использована система сборки на Node.js и подготовлена автоматизация сборки проекта с помощью Gulp.',
      'Минификация CSS и JS файлов.',
      'Оптимизация растровых изображений.',
      'Сборка и минификация SVG-спрайта.',
      'Использование шаблонизатора Nunjucks.',
    ],
    image: `${IMAGE_PATH}/sedona.jpg`,
    site: 'https://nemtsevk.github.io/sedona/',
    source: 'https://github.com/NemtsevK/sedona/',
    technologies: ['HTML', 'Sass', 'JS', 'Gulp', 'Nunjucks'],
    visible: true,
  },
  {
    id: 'kekstagram',
    title: 'Кексаграм',
    description: 'Сервис просмотра изображений.',
    about: [
      'Описание',
    ],
    image: `${IMAGE_PATH}/kekstagram.jpg`,
    site: 'https://nemtsevk.github.io/kekstagram/',
    source: 'https://github.com/NemtsevK/kekstagram/',
    technologies: ['JS', 'ES Modules', 'Vite'],
    visible: true,
  },
  {
    id: 'big-trip',
    title: 'Большое путешествие',
    description: 'Сервис для путешественников.',
    about: [
      'Описание',
    ],
    image: `${IMAGE_PATH}/big-trip.jpg`,
    site: 'https://nemtsevk.github.io/big-trip/',
    source: 'https://github.com/NemtsevK/big-trip/',
    technologies: ['JS', 'SPA', 'MVP', 'Webpack'],
    visible: true,
  },
  {
    id: 'six-cities',
    title: 'Шесть городов',
    description: 'Сервис для путешественников.',
    about: [
      'Описание',
    ],
    image: `${IMAGE_PATH}/six-cities.jpg`,
    site: 'https://nemtsevk.github.io/six-cities/',
    source: 'https://github.com/NemtsevK/six-cities/',
    technologies: ['TypeScript', 'React', 'Redux', 'Vite'],
    visible: true,
  },
  {
    id: 'polyhedrons',
    title: 'Многогранники',
    description: 'Визуализация множества трёхмерных тел.',
    about: [
      'Описание',
    ],
    image: `${IMAGE_PATH}/polyhedrons.jpg`,
    site: 'https://nemtsevk.github.io/polyhedrons/',
    source: 'https://github.com/NemtsevK/polyhedrons/',
    technologies: ['HTML', 'Sass', 'JS', 'Gulp'],
    visible: true,
  },
  {
    id: 'barbershop',
    title: 'Барбершоп',
    description: 'Сайт мужской парикмахерской.',
    about: [
      'Создана разметка по методологии БЭМ, семантическая и адаптивная вёрстка (Mobile First).',
      'Написан CSS-код на препроцессоре Sass (SCSS).',
      'Использована система сборки на Node.js и подготовлена автоматизация сборки проекта с помощью Gulp.',
      'Минификация CSS и JS файлов.',
      'Оптимизация растровых изображений.',
      'Сборка и минификация SVG-спрайта.',
      'Использование шаблонизатора Nunjucks.',
    ],
    image: `${IMAGE_PATH}/barbershop.jpg`,
    site: 'https://nemtsevk.github.io/barbershop/',
    source: 'https://github.com/NemtsevK/barbershop/',
    technologies: ['HTML', 'Sass', 'JS', 'Gulp', 'Nunjucks'],
    visible: false,
  },
  {
    id: 'mishka',
    title: 'Мишка',
    description: 'Магазин милых вещиц ручной работы.',
    about: [
      'Создана разметка по методологии БЭМ, семантическая и адаптивная вёрстка (Mobile First).',
      'Написан CSS-код на препроцессоре Sass (SCSS)',
      'Использована система сборки на Node.js и подготовлена автоматизация сборки проекта с помощью Gulp.',
      'Минификация CSS и JS файлов.',
      'Оптимизация растровых изображений.',
      'Сборка и минификация SVG-спрайта.',
      'Использование шаблонизатора Nunjucks.',
    ],
    image: `${IMAGE_PATH}/mishka.jpg`,
    site: 'https://nemtsevk.github.io/mishka/',
    source: 'https://github.com/NemtsevK/mishka/',
    technologies: ['HTML', 'Sass', 'JS', 'Gulp', 'Nunjucks'],
    visible: false,
  },
  {
    id: 'pink',
    title: 'Пинк',
    description: 'Реклама мобильного приложения.',
    image: `${IMAGE_PATH}/pink.jpg`,
    site: 'https://nemtsevk.github.io/pink/',
    source: 'https://github.com/NemtsevK/pink/',
    technologies: ['HTML', 'Less', 'JS', 'Gulp'],
    visible: false,
    about: [
      'Создана разметка по методологии БЭМ, семантическая и адаптивная вёрстка (Mobile First).',
      'Написан CSS-код на препроцессоре Less',
      'Использована система сборки на Node.js и подготовлена автоматизация сборки проекта с помощью Gulp.',
      'Минификация CSS и JS файлов.',
      'Оптимизация растровых изображений.',
      'Сборка и минификация SVG-спрайта.',
    ],
  },
  {
    id: 'nerds',
    title: 'Нёрдс',
    description: 'Сайт дизайн-студии.',
    image: `${IMAGE_PATH}/nerds.jpg`,
    site: 'https://nemtsevk.github.io/nerds/',
    source: 'https://github.com/NemtsevK/nerds/',
    technologies: ['HTML', 'Less', 'JS', 'Gulp'],
    visible: false,
    about: [
      'Создана разметка по методологии БЭМ.',
      'Написан CSS-код на препроцессоре Less',
      'Использована система сборки на Node.js и подготовлена автоматизация сборки проекта с помощью Gulp.',
      'Минификация CSS и JS файлов.',
      'Оптимизация растровых изображений.',
      'Сборка и минификация SVG-спрайта.',
    ],
  },
  {
    id: 'device',
    title: 'Девайс',
    description: 'Магазин гаджетов.',
    image: `${IMAGE_PATH}/device.jpg`,
    site: 'https://nemtsevk.github.io/device/',
    source: 'https://github.com/NemtsevK/device/',
    technologies: ['HTML', 'CSS'],
    visible: false,
    about: [
      'Семантическая вёрстка.',
    ],
  },
  {
    id: 'gllacy',
    title: 'Глейси',
    description: 'Магазин мороженого.',
    image: `${IMAGE_PATH}/gllacy.jpg`,
    site: 'https://nemtsevk.github.io/gllacy/',
    source: 'https://github.com/NemtsevK/gllacy/',
    technologies: ['HTML', 'CSS'],
    visible: false,
    about: [
      'Семантическая вёрстка.',
    ],
  },
  {
    id: 'technomart',
    title: 'Техномарт',
    description: 'Магазин строительных материалов.',
    image: `${IMAGE_PATH}/technomart.jpg`,
    site: 'https://nemtsevk.github.io/technomart/',
    source: 'https://github.com/NemtsevK/technomart/',
    technologies: ['HTML', 'CSS'],
    visible: false,
    about: [
      'Семантическая вёрстка.',
    ],
  },
];
