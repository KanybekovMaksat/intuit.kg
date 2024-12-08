import Fancybox from './Fancybox';
import Gerb from '../../../assets/gerb.svg';
import { Typography } from '@mui/material';

export const License = () => {
  return (
    <div className="container mx-auto py-10">
      <Typography
        variant="h3"
        component="h3"
        className="text-[2.5rem] mb-5 font-semibold text-[#333] lg:text-[40px] md:!text-[30px]"
      >
        Документы
      </Typography>
      <Fancybox
        options={{
          Carousel: {
            infinite: false,
          },
        }}
      >
        <div className="flex justify-between gap-4">
          <div className="max-w-md w-full border border-gray rounded-lg bg-white p-6 shadow hover:shadow-lg transition-shadow duration-300 min-h-[200px]">
            <div className="flex flex-col items-center text-center">
              <h3 className="text-xl font-bold text-gray-800">
                Бюджетные места
              </h3>
              <p className="text-sm text-gray-600 mt-4">
                Международный Университет Инновационных Технологий имеет
                государственную лицензию и аккредитацию, поэтому на ряде
                факультетов мы ежегодно выделяем бюджетные места для самых
                талантливых студентов.
              </p>
            </div>
          </div>
          <a
            data-fancybox="gallery"
            href="https://muit.makalabox.com/documents/license.pdf"
            className="block border border-gray rounded-lg bg-white p-6 shadow hover:shadow-lg transition-shadow duration-300 min-h-[200px]"
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 mb-4 bg-blue-500 rounded-full flex items-center justify-center text-white text-xl">
                <img src={Gerb} alt="" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">Лицензия</h3>
              <p className="text-sm text-gray-600 mt-2">
                Нажмите, чтобы посмотреть документ.
              </p>
            </div>
          </a>
          <a
            data-fancybox="gallery"
            href="https://muit.makalabox.com/documents/Svidetelstvo.pdf"
            className="block border border-gray rounded-lg bg-white p-6 shadow hover:shadow-lg transition-shadow duration-300 min-h-[200px]"
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 mb-4 bg-green-500 rounded-full flex items-center justify-center text-white text-xl">
                <img src={Gerb} alt="" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">
                Свидетельство
              </h3>
              <p className="text-sm text-gray-600 mt-2">
                Нажмите, чтобы посмотреть документ.
              </p>
            </div>
          </a>
        </div>
      </Fancybox>
    </div>
  );
};
