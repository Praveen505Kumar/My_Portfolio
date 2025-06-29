// import { motion } from 'framer-motion';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Briefcase, Code, School } from 'lucide-react';
import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import portfolioConfig from '../config';
import { SectionHeading } from '../components/SectionHeading';

const Experience = () => {
  const { theme } = useContext(ThemeContext);
  const { title, subtitle, description } = portfolioConfig.sections.experiences;

  const experiences = [
    {
      title: 'B.Tech in Computer Science and Engineering',
      company: 'JNTUA College of Engineering, Kalikiri',
      date: '2018 – 2022',
      description:
        'Graduated with 8 CGPA. Focused on Data Structures, OOPs, Programming, and Java development.',
      icon: <School />,
      iconStyle: { background: '#9C27B0', color: '#fff' },
    },
    {
      title: 'Online Student Feedback System',
      company: 'College Project',
      date: 'Feb-June 2022',
      description:
        'My college project, an online feedback system for students to provide feedback on faculty and courses, enhancing the educational experience.',
      icon: <Code />,
      iconStyle: { background: '#2196F3', color: '#fff' },
    },
    {
      title: 'Internship - Cakey Bakey',
      company: 'Wipro',
      date: 'Apr-July 2022',
      description:
        'A full-stack e-commerce application for cakes, featuring user authentication, product management by admin, and a seamless shopping experience.',
      icon: <Code />,
      iconStyle: { background: '#4CAF50', color: '#fff' },
    },
    {
      title: 'Specialist Programmer ',
      company: 'Infosys',
      date: 'Oct 2022 – Present',
      description:
        'Worked on connected vehicle platform serving 10M+ hits/day. Built APIs for vehicle insights, trip history, charge limits, and health reports. Integrated with Redis, MySQL, and CRM systems.',
      icon: <Briefcase />,
      iconStyle: { background: '#FF9800', color: '#fff' },
    },
  ];

  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title={title} subtitle={subtitle} description={description} />

        <VerticalTimeline lineColor={theme === 'dark' ? '#2d2d2d' : '#e5e5e5'}>
          {experiences.map((exp, index) => (
            <VerticalTimelineElement
              key={index}
              contentStyle={{
                background: theme === 'dark' ? 'rgba(236, 234, 234, 0.1)' : '#fff',
                boxShadow:
                  theme === 'dark'
                    ? '0 3px 10px rgba(0, 0, 0, 0.4)'
                    : '0 3px 10px rgba(20, 95, 29, 0.1)',
                borderRadius: '12px',
                borderBlockColor: theme === 'dark' ? '#2d2d2d' : 'rgba(11, 163, 32, 0.8)',
              }}
              date={exp.date}
              dateClassName="text-gray-500 dark:text-gray-400 text-sm"
              iconStyle={exp.iconStyle}
              icon={exp.icon}
            >
              <h3 className="text-lg font-semibold text-gray-600 dark:text-white mb-2">
                {exp.title}
              </h3>
              <h4 className="text-emerald-500 dark:text-emerald-400 text-sm mb-1">{exp.company}</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">{exp.description}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Experience;
