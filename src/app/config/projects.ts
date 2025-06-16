import { Project } from '../types/types';

export const projects: Project[] = [
  {
    id: 1,
    title: 'Online Student Feedback System',
    description:
      'My college project, an online feedback system for students to provide feedback on faculty and courses, enhancing the educational experience.',
    tags: ['PHP', 'MySQL'],
    githubLink: 'https://github.com/Praveen505Kumar/online-feedback-system',
    // liveLink: 'https://shortly-go.vercel.app/',
    type: 'Full Stack',
    thumbnail: '/OnlineStudentFeedbackSystem.png',
    // carouselImages: [
    //   'https://raw.githubusercontent.com/PraveenGongada/Shortly/refs/heads/main/frontend/docs/images/register.png',
    //   'https://raw.githubusercontent.com/PraveenGongada/Shortly/refs/heads/main/frontend/docs/images/dashboard.png',
    //   'https://raw.githubusercontent.com/PraveenGongada/Shortly/refs/heads/main/frontend/docs/images/create.png',
    //   'https://raw.githubusercontent.com/PraveenGongada/Shortly/refs/heads/main/frontend/docs/images/delete.png',
    // ],
    // carouselConfig: {
    //   interval: 2000,
    //   infinite: true,
    // },
  },
  {
    id: 2,
    title: 'Cakey Bakey',
    description:
      'A full-stack e-commerce application for cakes, featuring user authentication, product management by admin, and a seamless shopping experience.',
    tags: ['React', 'Node.js', 'MongoDB'],
    githubLink: 'https://github.com/Praveen505Kumar/Cakey-Bakey',
    liveLink: '',
    type: 'Full Stack',
    thumbnail: '/CakeyBakey.png',
    // gifUrl:
    //   'https://raw.githubusercontent.com/PraveenGongada/Catalyst/refs/heads/main/docs/images/catalyst-demo.gif',
  },
  // {
  //   id: 3,
  //   title: 'MovieDB',
  //   description:
  //     'A cinema app featuring intuitive browsing and comprehensive movie details with seamless user experience.',
  //   tags: ['Flutter', 'Dart'],
  //   githubLink: 'https://github.com/PraveenGongada/MovieDB',
  //   type: 'App',
  //   thumbnail:
  //     'https://raw.githubusercontent.com/PraveenGongada/MovieDB/refs/heads/main/docs/images/thumbnail.png',
  //   carouselImages: [
  //     'https://raw.githubusercontent.com/PraveenGongada/MovieDB/refs/heads/main/docs/images/home.png',
  //     'https://raw.githubusercontent.com/PraveenGongada/MovieDB/refs/heads/main/docs/images/movie.png',
  //   ],
  //   carouselConfig: {
  //     interval: 2000,
  //     infinite: true,
  //   },
  // },
];
