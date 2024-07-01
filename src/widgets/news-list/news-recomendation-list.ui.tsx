import { Box } from '@mui/material'
import { NewsRecomendationCard } from '~entities/news'

const news = [
  {
    id: 1,
    title:
      'В «Синергии» прошло итоговое заседание Студенческой корпорации вуза',
    date: '28.06.2024',
  },
  {
    id: 2,
    title:
      'Студент факультета дизайна и рекламы принял участие в проекте Media Direction Group',
    date: '28.06.2024',
  },
  {
    id: 3,
    title:
      '«Синергия» и юридическая компания «Лучший выбор» разработают проекты по повышению правовой культуры в России',
    date: '28.06.2024',
  },
  {
    id: 4,
    title:
      'Читать подробнее «Синергия» и «Росконгресс» сформируют юридический блок бизнес-форума «Мир возможностей»',
    date: '28.06.2024',
  },
  {
    id: 5,
    title: 'Университет «Синергия» представлен на ПМЮФ-2024',
    date: '28.06.2024',
  },
]



export const NewsRecomendationList = () => {
  return (
    <Box className="flex flex-col gap-10 mt-10 ">
      {news &&
        news.map((news) => {
          return (
            <NewsRecomendationCard
              key={news.id}
              {...news}
            ></NewsRecomendationCard>
          )
        })}
    </Box>
  )
}
