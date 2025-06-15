import { Linkedin, Mail } from 'lucide-react';
import { Social } from '../types/types';
import { SiGithub } from '@icons-pack/react-simple-icons';

export const socials: Social[] = [
  {
    name: 'GitHub',
    icon: <SiGithub size={20} />,
    url: 'https://github.com/Praveen505Kumar',
    color: '#6e7681',
  },
  {
    name: 'LinkedIn',
    icon: <Linkedin size={20} />,
    url: 'https://www.linkedin.com/in/praveenkumar505/',
    color: '#0077B5',
  },
  {
    name: 'Email',
    icon: <Mail size={20} />,
    url: 'mailto:pravenkumar505987@gmail.com',
    color: '#D44638',
  },
  // {
  //   name: 'Twitter',
  //   icon: <Twitter size={20} />,
  //   url: 'https://www.x.com/praveengongada',
  //   color: '#1DA1F2',
  // },
];
