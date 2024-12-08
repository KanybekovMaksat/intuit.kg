import { Typography, Card, CardContent } from "@mui/material";

const topics = [
  {
    title: "Frontend",
    subjects: ["HTML & CSS", "JavaScript", "React", "Tailwind CSS"],
  },
  {
    title: "Backend",
    subjects: ["Node.js", "Express.js", "Databases (PostgreSQL)", "API Development"],
  },
  {
    title: "Проектная работа",
    subjects: ["Создание полного веб-приложения", "Работа в команде", "Деплой проекта"],
  },
];

export default function ProgramBlocks() {
  return (
    <div className="my-10">
      <Typography
          variant="h3"
          component="h3"
          className="text-[2.5rem] font-semibold text-[#333] lg:text-[40px] md:!text-[30px] my-5"
        >
                Что вы будете изучать
        </Typography>
      <div className="flex justify-between ">
        {topics.map((topic, index) => (
          <Card
            key={index}
            className="min-w-[350px] max-w-[350px] hover:shadow-2xl transition-shadow duration-300 border border-gray"
          >
            <CardContent>
              <Typography variant="h5" className="font-bold mb-4">
                {topic.title}
              </Typography>
              <ul className="list-disc ml-5 space-y-2">
                {topic.subjects.map((subject, i) => (
                  <li key={i} className="text-gray-700">
                    {subject}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
