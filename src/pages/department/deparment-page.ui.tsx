import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import Fancybox from '~widgets/diplom-list/Fancybox';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
const documents = [
  {
    title: 'Положение ДОККО',
    urls: [
      {
        url: 'https://muit.makalabox.com/documents/%D0%9F%D0%9E%D0%9B%D0%9E%D0%96%D0%95%D0%9D%D0%98%D0%95_%D0%BE_%D1%80%D0%B5%D0%B9%D1%82%D0%B8%D0%BD%D0%B3%D0%B5_%D0%9F%D0%9F%D0%A1_%D0%9C%D0%A3%D0%98%D0%A2_%D1%81_%D0%B8%D0%B7%D0%BC_2.pdf',
        name: 'Положение о рейтинге профессорско-преподавательского состава МУИТ',
      },
      {
        url: 'https://muit.makalabox.com/documents/%D0%9F%D0%BE%D0%BB%D0%BE%D0%B6%D0%A1%D0%B0%D0%BC%D0%BE%D0%BE%D1%86%D0%9C%D0%A3%D0%98%D0%A2%20(2).pdf',
        name: 'Положение о самооценке в процессе аккредитации образовательной организации',
      },
      {
        url: 'https://muit.makalabox.com/documents/%D0%9F%D0%BE%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5%20%D0%BE%20%D1%80%D0%B5%D0%B9%D1%82%D0%B8%D0%BD%D0%B3%D0%B5%20(1)%20(2).pdf',
        name: 'ПОЛОЖЕНИЕ О ПРОВЕДЕНИИ ОТКРЫТОГО ЭЛЕКТРОННОГО МОНИТОРИНГА ПРОФЕССОРСКО-ПРЕПОДАВАТЕЛЬСКОГО СОСТАВА И СТРУКТУРНЫХ ПОДРАЗДЕЛЕНИЙ МУИТ',
      },
      {
        url: 'https://muit.makalabox.com/documents/%D0%9F%D0%BE%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5%D0%90%D1%83%D0%B4%D0%B8%D1%82%D0%9C%D0%A3%D0%98%D0%A2%20(2).pdf',
        name: 'ПОЛОЖЕНИЕ О СИСТЕМЕ ВНУТРЕННЕГО АУДИТА В МУИТ',
      },
      {
        url: 'https://muit.makalabox.com/documents/%D0%9F%D0%BE%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5%D0%94%D0%9E%D0%9A%D0%9A%D0%9E%20(2).pdf',
        name: 'ПОЛОЖЕНИЕ Департамента обеспечения и контроля качества образования МУИТ',
      },
      {
        url: 'https://muit.makalabox.com/documents/%D0%9F%D0%BE%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5%D0%A3%D0%A2%D0%92%D0%95%D0%A0%D0%96%D0%94%D0%95%D0%9D%D0%9D%D0%AB%D0%99%20%D0%B4%D0%BE%D0%BA%20(2).pdf',
        name: 'ПОЛОЖЕНИЕ О ПРОВЕДЕНИИ ОТКРЫТОГО ЭЛЕКТРОННОГО МОНИТОРИНГА ПРОФЕССОРСКО-ПРЕПОДАВАТЕЛЬСКОГО СОСТАВА ИСТРУКТУРНЫХ ПОДРАЗДЕЛЕНИЙ МуИТ',
      },
    ],
  },
  {
    title: 'Планы ДОККО',
    urls: [
      {
        url: 'https://intuit.kg/media/faculty/images/documents/%D0%94%D0%B8%D0%BF%D0%BB%D0%BE%D0%BC%D0%A1%D0%BF%D0%B5%D1%86%D0%B8%D0%B0%D0%BB%D%D0%9E.png',
        name: 'ДОЛЖНОСТНАЯ ИНСТРУКЦИЯ',
      },
      {
        url: 'https://example.com/another-document.pdf',
        name: 'СИСТЕМА МЕНЕДЖМЕНТА КАЧЕСТВА',
      },
      {
        url: 'https://example.com/another-document.pdf',
        name: 'ПОЛИТИКА МЕЖДУНАРОДНОГО УНИВЕРСИТЕТА ИННОВАЦИОННЫХТЕХНОЛОГИЙ В ОБЛАСТИ ОБЕСПЕЧЕНИЯКАЧЕСТВАОБРАЗОВАНИЯ',
      },
      {
        url: 'https://example.com/another-document.pdf',
        name: 'СИСТЕМА МЕНЕДЖМЕНТА КАЧЕСТВА',
      },
      {
        url: 'https://example.com/another-document.pdf',
        name: 'СТРУКТУРНЫЕ ВЗАИМОДЕЙСТВИЯ ДОККОВ МУИТ. СТРУКТУРА, ВНУТРЕННИЕ И ВНЕШНИЕ НАПРАВЛЕНИЯДЕЯТЕЛЬНОСТИДОККО',
      },
    ],
  },
  {
    title: 'Отчеты ДОККО',
    urls: [
      {
        url: 'https://intuit.kg/media/faculty/images/documents/%D0%94%D0%B8%D0%BF%D0%BB%D0%BE%D0%BC%D0%A1%D0%BF%D0%B5%D1%86%D0%B8%D0%B0%D0%BB%D0%B8%D1%81%D1%82%D0%B0.png',
        name: 'Диплом Специалиста',
      },
    ],
  },
  {
    title: 'Положение МУИТ',
    urls: [
      {
        url: 'https://muit.makalabox.com/documents/%D0%A1%D0%B1%D0%BE%D1%80%D0%BD%D0%B8%D0%BA%20%D0%BF%D0%BE%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D0%B9%20%D0%9C%D0%A3%D0%98%D0%A2_%D0%9A%D0%BD%D0%B8%D0%B3%D0%B0%201.pdf',
        name: 'СБОРНИК ПОЛОЖЕНИЙ, регламентирующих деятельность Международного университета инновационных технологий.Книга 1',
      },
      {
        url: 'https://muit.makalabox.com/documents/%D0%A1%D0%B1%D0%BE%D1%80%D0%BD%D0%B8%D0%BA%20%D0%BF%D0%BE%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D0%B9%20%D0%9C%D0%A3%D0%98%D0%A2_%D0%9A%D0%BD%D0%B8%D0%B3%D0%B0%202.pdf',
        name: 'СБОРНИК ПОЛОЖЕНИЙ, регламентирующих деятельность Международного университета инновационных технологий.Книга 2',
      },
      {
        url: 'https://muit.makalabox.com/documents/%D0%A1%D0%B1%D0%BE%D1%80%D0%BD%D0%B8%D0%BA%20%D0%BF%D0%BE%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D0%B9%20%D0%9C%D0%A3%D0%98%D0%A2_%D0%9A%D0%BD%D0%B8%D0%B3%D0%B0%203.pdf',
        name: 'СБОРНИК ПОЛОЖЕНИЙ, регламентирующих деятельность Международного университета инновационных технологий.Книга 3',
      },
      {
        url: 'https://muit.makalabox.com/documents/%D0%9A%D0%BD%D0%B8%D0%B3%D0%B0%204_%D0%A1%D0%B1%D0%BE%D1%80%D0%BD%D0%B8%D0%BA%20%D0%BF%D0%BE%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D0%B9%20%D0%9C%D0%A3%D0%98%D0%A2.pdf',
        name: 'СБОРНИК ПОЛОЖЕНИЙ, регламентирующих деятельность Международного университета инновационных технологий.Книга 4',
      },
    ],
  },
];

export const DeparmentPage = () => {
  return (
    <Container maxWidth="lg" className="py-10 px-4">
      <Typography
        variant="h4"
        className="font-bold text-center mb-8 text-gray-800"
        style={{ fontSize: 'clamp(1.5rem, 5vw, 2.5rem)' }}
      >
        Департамент качества образования
      </Typography>
      <Typography
        variant="body1"
        className="text-gray-700 mb-10"
        style={{ fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)' }}
      >
        Основной целью Департамента качества образования является координация
        образовательного процесса и организация деятельности структурных
        подразделений, отделов и служб университета по управлению и обеспечению
        качества образования, с целью удовлетворения потребителей
        (работодателей, студентов, родителей, общества и т.д.) и других
        заинтересованных сторон.
      </Typography>
      <Typography
        variant="h5"
        className="font-bold text-gray-800 mb-6"
        style={{ fontSize: 'clamp(1.2rem, 3vw, 1.8rem)' }}
      >
        Миссия Университета
      </Typography>
      <Box className="border border-gray rounded-lg p-6 mb-8 bg-white">
        <Typography
          variant="body1"
          className="text-gray-700"
          style={{ fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)' }}
        >
          Миссия МУИТ - подготовка конкурентоспособных специалистов, отвечающих
          требованиям и ожиданиям заинтересованных сторон, владеющих
          инновационными технологиями, способных эффективно решать инженерные и
          социально-экономические проблемы современного общества.
        </Typography>
      </Box>
      <Typography
        variant="h5"
        className="font-bold text-gray-800 mb-6"
        style={{ fontSize: 'clamp(1.2rem, 3vw, 1.8rem)' }}
      >
        Стратегические цели
      </Typography>
      <Grid container spacing={4}>
        {[
          'Модернизация деятельности учебно-образовательного комплекса через наращивание научного потенциала ППС...',
          'Поддерживать тесное сотрудничество с работодателями на предмет модернизации учебных программ...',
          'Разрабатывать и внедрять актуальные на рынке труда инновационные образовательные программы...',
          'Улучшать материально-техническую базу образовательной и научной деятельности...',
        ].map((goal, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card className="border border-gray  shadow-none rounded-lg h-full bg-white">
              <CardContent>
                <Typography
                  variant="body2"
                  className="text-gray-700"
                  style={{ fontSize: 'clamp(0.9rem, 2.5vw, 1rem)' }}
                >
                  {goal}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Typography
        variant="h5"
        className="font-bold text-gray-800 my-6"
        style={{ fontSize: 'clamp(1.2rem, 3vw, 1.8rem)' }}
      >
        Сведения, обязательные для публикации
      </Typography>
      <Fancybox
        options={{
          Carousel: {
            infinite: false,
          },
        }}
      >
        {documents.map((doc, index) => (
          <Accordion
            key={index}
            className="mb-4 border border-gray shadow-none rounded"
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography className="text-gray-800 font-semibold">
                {doc.title}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <ul className="list-disc pl-5">
                {doc.urls.map((item, urlIndex) => (
                  <li key={urlIndex} className="mb-2">
                    <a
                      data-fancybox="gallery"
                      href={item.url}
                      className="text-blue hover:text-blue-700"
                    >
                      {item.name || `Открыть документ ${urlIndex + 1}`}
                    </a>
                  </li>
                ))}
              </ul>
            </AccordionDetails>
          </Accordion>
        ))}
      </Fancybox>
    </Container>
  );
};
