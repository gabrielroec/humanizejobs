import { Button } from "./ui/button";
import { Carousel, CarouselContent, CarouselPrevious, CarouselNext } from "./ui/carousel";
import { motion } from "framer-motion";

const category = [
  "Desenvolvimento Frontend",
  "Desenvolvimento Backend",
  "UxUi Design",
  "Desenvolvimento Full Stack",
  "Mobile Development",
  "Desenvolvimento de Jogos",
  "Inteligência Artificial",
  "Análise de Dados",
  "Marketing Digital",
  "Desenvolvimento de APIs",
  "Blockchain",
  "Automação de Testes",
  "Banco de Dados",
  "Desenvolvimento de E-commerce",
];
const CategoryCarousel = () => {
  return (
    <div className="relative w-fit m-auto">
      <div className="absolute inset-y-0 left-0 w-28 bg-gradient-to-r from-white to-transparent pointer-events-none z-10"></div>
      <div className="absolute inset-y-0 right-0 w-28 bg-gradient-to-l from-white to-transparent pointer-events-none z-10"></div>

      <Carousel className="w-full max-w-5xl mx-auto my-20">
        <CarouselContent>
          {category.map((item, index) => (
            <motion.div
              key={index}
              className="md:basis-1/2 lg:basis-1/3 bg-[#0a66c2] mx-2 text-center rounded-full"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 60,
                damping: 20,
                duration: 1,
              }}
            >
              <Button className="bg-transparent hover:bg-transparent text-white w-full">{item}</Button>
            </motion.div>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default CategoryCarousel;
