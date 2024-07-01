import { Box, Typography } from "@mui/material"
import { FeedbackVideo } from "~entities/feedback"

const modalData = [
  {
    name: 'Арина Полищук',
    description: 'Факультет гостиничного и ресторанного бизнеса',
    img: 'https://sys3.ru/synergy-ru/content/otzivi/vertikal/arina_polishhuk.webp',
    url: 'https://www.youtube.com/watch?v=XZzI4N61r80&list=RDYAuhPU29PuM&index=15',
  },
  {
    name: 'Арина Полищук',
    description: 'Факультет гостиничного и ресторанного бизнеса',
    img: 'https://sys3.ru/synergy-ru/content/otzivi/vertikal/arina_polishhuk.webp',
    url: 'https://www.youtube.com/watch?v=XZzI4N61r80&list=RDYAuhPU29PuM&index=15',
  },
  {
    name: 'Арина Полищук',
    description: 'Факультет гостиничного и ресторанного бизнеса',
    img: 'https://sys3.ru/synergy-ru/content/otzivi/vertikal/arina_polishhuk.webp',
    url: 'https://www.youtube.com/watch?v=XZzI4N61r80&list=RDYAuhPU29PuM&index=15',
  },
  {
    name: 'Арина Полищук',
    description: 'Факультет гостиничного и ресторанного бизнеса',
    img: 'https://sys3.ru/synergy-ru/content/otzivi/vertikal/arina_polishhuk.webp',
    url: 'https://www.youtube.com/watch?v=XZzI4N61r80&list=RDYAuhPU29PuM&index=15',
  },
  {
    name: 'Арина Полищук',
    description: 'Факультет гостиничного и ресторанного бизнеса',
    img: 'https://sys3.ru/synergy-ru/content/otzivi/vertikal/arina_polishhuk.webp',
    url: 'https://www.youtube.com/watch?v=XZzI4N61r80&list=RDYAuhPU29PuM&index=15',
  },
  {
    name: 'Арина Полищук',
    description: 'Факультет гостиничного и ресторанного бизнеса',
    img: 'https://sys3.ru/synergy-ru/content/otzivi/vertikal/arina_polishhuk.webp',
    url: 'https://www.youtube.com/watch?v=XZzI4N61r80&list=RDYAuhPU29PuM&index=15',
  },
]
export const FeedbackVideoList = () => {
  return (
    <>
      <Typography variant="h2">Отзывы</Typography>

      <Box className="p-10 cursor-pointer grid grid-cols-4 gap-5">
        {modalData &&
          modalData.map((item, i) => {
            if (i <= 3) {
              return (
                <div className="flex justify-center ">
                  <FeedbackVideo key={i} {...item}></FeedbackVideo>
                </div>
              )
            }
          })}
      </Box>
    </>
  )
}
