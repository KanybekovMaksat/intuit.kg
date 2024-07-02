import React, { useState } from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import ExpandCircleDownRoundedIcon from '@mui/icons-material/ExpandCircleDownRounded';

export const ProgramAccordion = () => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  const courses = [
    {
      title: '1 Курс',
      details: [
        'Управление потребительским опытом и взаимоотношениями с клиентами в каналах дистрибуции',
        'Современные технологии продвижения и маркетинговых коммуникаций в каналах распределения',
        'Маркетинговые исследования и сквозная аналитика в дистрибуции',
        'Управление товарным ассортиментом и категорийный менеджмент',
        'Маркетинговая Web-аналитика',
      ],
    },
    {
      title: '2 Курс',
      details: [
        'Управление комплексной системой распределения',
        'Data-driven маркетинг',
        'Сбытовая политика в цифровой среде',
        'UX-исследования потребительского опыта',
        'Аналитика и визуализация маркетинговых данных',
        'Инфографика и презентация маркетинговых проектов',
        'Бизнес-аналитика и анализ больших данных',
      ],
    },
    {
      title: '3 Курс',
      details: [
        'Управление комплексной системой распределения',
        'Data-driven маркетинг',
        'Сбытовая политика в цифровой среде',
        'UX-исследования потребительского опыта',
        'Аналитика и визуализация маркетинговых данных',
        'Инфографика и презентация маркетинговых проектов',
        'Бизнес-аналитика и анализ больших данных',
      ],
    },
    {
      title: '4 Курс',
      details: [
        'Управление комплексной системой распределения',
        'Data-driven маркетинг',
        'Сбытовая политика в цифровой среде',
        'UX-исследования потребительского опыта',
        'Аналитика и визуализация маркетинговых данных',
        'Инфографика и презентация маркетинговых проектов',
        'Бизнес-аналитика и анализ больших данных',
      ],
    },
  ];

  return (
    <div className="my-10 flex flex-col rounded-2xl bg-[#ededed] p-10">
      <Typography variant="h3" className="font-semibold mb-4">
        Программа обучения
      </Typography>
      {courses.map((course, index) => (
        <Accordion
          key={index}
          expanded={expanded === `panel${index}`}
          onChange={handleChange(`panel${index}`)}
          className={`shadow-none p-5 m-0 ${
            index === 0 ? 'rounded-t-lg' : index === courses.length - 1 ? 'rounded-b-lg' : ''
          }`}
        >
          <AccordionSummary
            expandIcon={<ExpandCircleDownRoundedIcon className='text-[30px]' />}
            aria-controls={`panel${index}-content`}
            id={`panel${index}-header`}
            className='text-xl font-semibold p-0'
          >
            {course.title}
          </AccordionSummary>
          <AccordionDetails>
            <ul className="list-disc pl-7 font-medium text-lg">
              {course.details.map((detail, detailIndex) => (
                <li key={detailIndex}>{detail}</li>
              ))}
            </ul>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};