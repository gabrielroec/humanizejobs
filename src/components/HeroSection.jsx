import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Search } from "lucide-react";

const HeroSection = () => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;

      const x = clientX / innerWidth;
      const y = clientY / innerHeight;

      setRotateX((y - 0.5) * 60);
      setRotateY((x - 0.5) * -30);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="text-center">
      <div className="flex flex-col gap-5 my-10">
        <motion.h2
          className="px-4 py-2 rounded-full bg-[#0A66C2] text-white font-medium w-fit m-auto"
          style={{
            perspective: "1000px",
            transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
            transition: "transform 0.1s ease-out",
          }}
        >
          Conecte-se e encontre vagas e talentos.
        </motion.h2>
        <p className="text-5xl font-bold w-1/2 mx-auto">
          Procure, aplique e conquiste o seu <strong className="text-[#0A66C2]"> trabalho dos sonhos.</strong>
        </p>
        <p className="text-base w-1/2 mx-auto">
          Somos a única plataforma de recrutamento que prioriza o bem-estar e o desenvolvimento humano. Aqui, cada candidatura é tratada com
          empatia e cada vaga é preenchida com propósito. Simplifique seu processo de contratação ou candidatura com um toque
          verdadeiramente humano.
        </p>
        <div className="flex w-[40%]  items-center gap-4 mx-auto">
          <input
            type="text"
            placeholder="Encontre o trabalho ideal"
            className="outline-none w-full py-4 px-7 shadow-lg border border-gray-200  rounded-full"
          />
          <Button className="outline-none bg-[#0A66C2] p-4 shadow-lg border border-gray-200  rounded-full h-[58px] hover:bg-[#0f4071]">
            <Search className="text-white" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
