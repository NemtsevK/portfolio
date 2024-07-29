const IMAGE_PATH = 'images/icons';

/**
 *
 * @type {({image: string, name: string, link: string, about: string[], darkTheme: boolean, title: string})[]}
 */
export const skills = [
  {
    name: 'html',
    title: 'Язык разметки HTML',
    image: `${IMAGE_PATH}/html.svg`,
    link: 'https://html.spec.whatwg.org/multipage/',
    darkTheme: true,
    about: [
      'Семантическая вёрстка',
      'Верстка по методологии БЭМ',
      'Адаптивная кроссбраузерная вёрстка',
      'Доступность',
      'SEO',
    ],
  },
  {
    name: 'css',
    title: 'Язык стилей CSS',
    image: `${IMAGE_PATH}/css.svg`,
    link: 'https://www.w3.org/Style/CSS/',
    darkTheme: true,
    about: [
      'Использование Flexbox и Grid в зависимости от задачи',
    ],
  },
  {
    name: 'sass',
    title: 'Препроцессор стилей Sass',
    image: `${IMAGE_PATH}/sass.svg`,
    link: 'https://sass-lang.com/',
    darkTheme: true,
    about: [
      '',
    ],
  },
  {
    name: 'less',
    title: 'Препроцессор стилей LESS',
    image: `${IMAGE_PATH}/less.svg`,
    link: 'https://lesscss.org/',
    darkTheme: false,
    about: [
      '',
    ],
  },
  {
    name: 'javascript',
    title: 'Язык программирования JavaScript',
    image: `${IMAGE_PATH}/js.svg`,
    link: 'https://ecma-international.org/publications-and-standards/standards/ecma-262/',
    darkTheme: false,
    about: [
      'Методы преобразования строк и массивов',
      'Спецификация ES6',
      'Стрелочные функции',
      'Promise',
      'Классы',
    ],
  },
  {
    name: 'typescript',
    title: 'Язык программирования TypeScript',
    image: `${IMAGE_PATH}/ts.svg`,
    link: 'https://www.typescriptlang.org/',
    darkTheme: false,
    about: [
      '',
    ],
  },
  {
    name: 'react',
    title: 'Библиотека React',
    image: `${IMAGE_PATH}/react.svg`,
    link: 'https://react.dev/',
    darkTheme: true,
    about: [
      '',
    ],
  },
  {
    name: 'php',
    title: 'Язык программирования PHP',
    image: `${IMAGE_PATH}/php.svg`,
    link: 'https://www.php.net/',
    darkTheme: false,
    about: [
      '',
    ],
  },
  {
    name: 'mssql',
    title: 'Реляционная СУБД Microsoft SQL Server',
    image: `${IMAGE_PATH}/mssql.svg`,
    link: 'https://www.microsoft.com/en-us/sql-server',
    darkTheme: true,
    about: [
      '',
    ],
  },
  {
    name: 'mysql',
    title: 'Реляционная СУБД MySQL',
    image: `${IMAGE_PATH}/mysql.svg`,
    link: 'https://www.mysql.com/',
    darkTheme: true,
    about: [
      '',
    ],
  },
  {
    name: 'git',
    title: 'Система управления версиями Git',
    image: `${IMAGE_PATH}/git.svg`,
    link: 'https://www.git-scm.com/',
    darkTheme: true,
    about: [
      '',
    ],
  },
  {
    name: 'figma',
    title: 'Инструмент для дизайна интерфейсов Figma',
    image: `${IMAGE_PATH}/figma.svg`,
    link: 'https://www.figma.com/',
    darkTheme: true,
    about: [
      '',
    ],
  },
  {
    name: 'illustrator',
    title: 'Векторный графический редактор Adobe Illustrator',
    image: `${IMAGE_PATH}/illustrator.svg`,
    link: 'https://www.adobe.com/products/illustrator.html',
    darkTheme: false,
    about: [
      '',
    ],
  },
  {
    name: 'photoshop',
    title: 'Растровый графический редактор Adobe Photoshop',
    image: `${IMAGE_PATH}/photoshop.svg`,
    link: 'https://www.adobe.com/products/photoshop.html',
    darkTheme: false,
    about: [
      '',
    ],
  },
];
