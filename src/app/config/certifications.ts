import { Certification } from '../types/types';
import { getAssetPath } from '../utils';

export const certifications: Certification[] = [
  {
    id: 1,
    title: 'Infosys Certified Generative AI Professional - Intermediate',
    issuer: 'Infosys',
    date: 'Jan-2025',
    image: getAssetPath('/certifications/Infosys Certified Generative AI Professional.jpg'),
    link: getAssetPath('/certifications/Infosys Certified Generative AI Professional.jpg'),
  },
  {
    id: 2,
    title: 'Neo4j Certified Professional',
    issuer: 'Neo4j',
    date: 'Dec-2024',
    image: getAssetPath('/certifications/Neo4j Certificate.png'),
    link: 'https://graphacademy.neo4j.com/c/b3b9e41b-d5ee-44a7-b31b-0fcc3710722c/',
  },
  {
    id: 3,
    title: 'Generative AI Learning Plan - Technical Professionals (Partner)',
    issuer: 'AWS',
    date: 'Oct-2024',
    image: getAssetPath('/certifications/AWS Learning Plan Master.jpg'),
    link: getAssetPath('/certifications/AWS Learning Plan Master.jpg'),
  },
  {
    id: 4,
    title: 'StackRoute Javascript Full Stack (MERN)',
    issuer: 'StackRoute',
    date: 'Aug-2022',
    image: getAssetPath('/certifications/StackRoute.jpeg'),
    link: 'https://verifyawards.stackroute.in/verify?url=https://awards.stackroute.in/public/assertions/WqbAdZYtRHqPf-FPXMzkDA.json?v=2',
  },
];
