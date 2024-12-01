import StaffList from '~widgets/staff-list/staff-list.ui'
import StaffButtonsSwiper from './ui/StaffCategory.ui'
import { SwiperIntro } from '~widgets/swiper-intro'
import { EnrollForm } from '~widgets/enroll-form'
import { DiplomList } from '~widgets/diplom-list'
import { SpeakerVideoList } from '~widgets/speaker-list'
import { PartnersList } from '~widgets/partners-list'
import { OpportunitiesList } from '~widgets/opportunities-list'
import { DegreeCategory } from './ui/DegreeCategory.ui'
import { ProgramCategory } from './ui/ProgramCategory'
import { AboutBlock } from './ui/AboutBlock.ui'
import { ArticleList } from '~widgets/article-list/article-list.ui'
import { Typography } from '@mui/material'

export function HomePage() {
  return (
    <div>
      <h1 className="my-5 font-medium">
        <SwiperIntro />
      </h1>
      <DegreeCategory />
      <ProgramCategory />
      <OpportunitiesList />
      <AboutBlock />
      <div className="my-20">
        <DiplomList />
      </div>
      <div>
      <Typography variant="h3" component="div" className="font-semibold">
       Преподавательский состав
      </Typography>
        {/* <StaffButtonsSwiper /> */}
        <StaffList filterByRanks={["professor", "doctor"]} />
      </div>
      <ArticleList />
      <PartnersList />
      <EnrollForm />
      <SpeakerVideoList />
    </div>
  )
}
