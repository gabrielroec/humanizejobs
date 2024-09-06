import { FilterCard } from "./FilterCard";
import Job from "./Job";
import Navbar from "./shared/Navbar";

const jobListings = [
  {
    companyName: "Google",
    location: "Brasil",
    jobTitle: "Frontend Developer",
    description: "Trabalhe com tecnologias modernas como React e Next.js para construir interfaces de usuário interativas e dinâmicas.",
    vacancies: "12 vagas",
    jobType: "Full Time",
    salary: "R$8.000",
    salaryTime: "por mês",
    logo: "https://logopng.com.br/logos/google-37.png",
  },
  {
    companyName: "Microsoft",
    location: "Brasil",
    jobTitle: "Backend Developer",
    description: "Desenvolva e mantenha APIs escaláveis e seguras com Node.js e bancos de dados NoSQL.",
    vacancies: "8 vagas",
    jobType: "Full Time",
    salary: "R$9.000",
    salaryTime: "por mês",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png",
  },
  {
    companyName: "Amazon",
    location: "Brasil",
    jobTitle: "Cloud Engineer",
    description: "Gerencie e configure a infraestrutura da AWS para aplicações críticas e de alta disponibilidade.",
    vacancies: "10 vagas",
    jobType: "Full Time",
    salary: "R$10.000",
    salaryTime: "por mês",
    logo: "https://logopng.com.br/logos/amazon-2.png",
  },
  {
    companyName: "Facebook",
    location: "Brasil",
    jobTitle: "Data Scientist",
    description: "Analise grandes volumes de dados e forneça insights acionáveis para melhorar as estratégias de negócios.",
    vacancies: "5 vagas",
    jobType: "Full Time",
    salary: "R$12.000",
    salaryTime: "por mês",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/6c/Facebook_Logo_2023.png",
  },
  {
    companyName: "Netflix",
    location: "Brasil",
    jobTitle: "DevOps Engineer",
    description: "Implemente e automatize processos CI/CD e garanta a segurança e escalabilidade dos sistemas.",
    vacancies: "7 vagas",
    jobType: "Full Time",
    salary: "R$11.000",
    salaryTime: "por mês",
    logo: "https://static.vecteezy.com/system/resources/previews/017/396/814/non_2x/netflix-mobile-application-logo-free-png.png",
  },
  {
    companyName: "Spotify",
    location: "Brasil",
    jobTitle: "UI/UX Designer",
    description: "Crie interfaces e experiências de usuário envolventes e funcionais para plataformas web e mobile.",
    vacancies: "4 vagas",
    jobType: "Full Time",
    salary: "R$7.000",
    salaryTime: "por mês",
    logo: "https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Primary_Logo_RGB_Green.png",
  },
];

const Jobs = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto mt-5">
        <div className="flex gap-10">
          <div className="w-fit pr-10 border-r">
            <FilterCard />
          </div>
          {jobListings.length <= 0 ? (
            <span>Job not found</span>
          ) : (
            <div className="flex-1  pb-5 ">
              <div className="grid grid-cols-3 gap-4">
                {jobListings.map((item, index) => (
                  <Job job={item} key={index} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Jobs;
