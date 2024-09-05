import React, { useState, useEffect } from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { AnimatePresence, motion } from "framer-motion";

const LatestJobsCard = ({ job }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showCircle, setShowCircle] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const backgroundColors = [
    "rgba(10, 102, 194, 0.1)", // Azul
    "rgba(84, 10, 194, 0.1)", // Roxo
    "rgba(10, 194, 84, 0.1)", // Verde
    "rgba(194, 10, 10, 0.1)", // Vermelho
    "rgba(194, 84, 10, 0.1)", // Laranja
    "rgba(194, 194, 10, 0.1)", // Amarelo
    "rgba(10, 194, 194, 0.1)", // Ciano
    "rgba(102, 10, 194, 0.1)", // Violeta
    "rgba(194, 10, 102, 0.1)", // Rosa
    "rgba(10, 194, 154, 0.1)", // Verde água
    "rgba(255, 99, 71, 0.1)", // Tomate
    "rgba(255, 165, 0, 0.1)", // Laranja vivo
    "rgba(154, 205, 50, 0.1)", // Verde amarelado
    "rgba(50, 205, 50, 0.1)", // Verde limão
    "rgba(60, 179, 113, 0.1)", // Verde marinho médio
    "rgba(70, 130, 180, 0.1)", // Aço azulado
    "rgba(123, 104, 238, 0.1)", // Azul médio
    "rgba(238, 130, 238, 0.1)", // Violeta claro
    "rgba(244, 164, 96, 0.1)", // Areia dourada
    "rgba(255, 228, 181, 0.1)", // Amêndoa
    "rgba(255, 222, 173, 0.1)", // Rosé
    "rgba(255, 239, 213, 0.1)", // Bege claro
    "rgba(240, 230, 140, 0.1)", // Caqui claro
    "rgba(250, 128, 114, 0.1)", // Salmão
    "rgba(255, 105, 180, 0.1)", // Rosa choque
    "rgba(255, 182, 193, 0.1)", // Rosa claro
    "rgba(255, 192, 203, 0.1)", // Rosa pálido
    "rgba(220, 20, 60, 0.1)", // Carmim
    "rgba(219, 112, 147, 0.1)", // Rosa médio
    "rgba(186, 85, 211, 0.1)", // Ameixa médio
    "rgba(147, 112, 219, 0.1)", // Azul real médio
    "rgba(100, 149, 237, 0.1)", // Azul celeste
    "rgba(0, 255, 255, 0.1)", // Ciano claro
    "rgba(127, 255, 212, 0.1)", // Água-marinha
    "rgba(175, 238, 238, 0.1)", // Turquesa pálido
    "rgba(255, 248, 220, 0.1)", // Milho claro
    "rgba(255, 250, 205, 0.1)", // Limão claro
    "rgba(250, 250, 210, 0.1)", // Amarelo claro
    "rgba(255, 255, 224, 0.1)", // Amarelo esbranquiçado
    "rgba(238, 232, 170, 0.1)", // Amarelo pálido
    "rgba(240, 255, 240, 0.1)", // Verde hortelã
    "rgba(240, 255, 255, 0.1)", // Azul claro
    "rgba(255, 228, 225, 0.1)", // Branco floral
    "rgba(255, 240, 245, 0.1)", // Rosa lavanda
    "rgba(220, 220, 220, 0.1)", // Cinza claro
    "rgba(245, 245, 245, 0.1)", // Cinza pálido
    "rgba(255, 255, 240, 0.1)", // Marfim
    "rgba(253, 245, 230, 0.1)", // Branco antiquado
  ];

  const [randomBackgroundColor] = useState(backgroundColors[Math.floor(Math.random() * backgroundColors.length)]);

  return (
    <div
      className="px-2 pt-2 pb-4 rounded-2xl shadow-xl border border-gray-200 relative"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setShowCircle(true)}
      onMouseLeave={() => setShowCircle(false)}
      style={{ cursor: "none" }}
    >
      <div className="p-5 rounded-2xl" style={{ backgroundColor: randomBackgroundColor }}>
        <div>
          <Badge className={"text-[#0a66c2] font-bold"} variant="secondary">
            Hoje
          </Badge>
          <div className="flex items-center gap-2 mt-2">
            <div className="p-2 border border-gray-200 bg-white rounded-full w-[50px]">
              <img src={job.logo} alt={job.companyName} className="w-full" />
            </div>
            <div>
              <h1 className="font-medium text-lg">{job.companyName}</h1>
              <p className="text-sm text-gray-500">{job.location}</p>
            </div>
          </div>
        </div>
        <div>
          <h1 className="font-bold text-lg my-2">{job.jobTitle}</h1>
          <p className="text-sm text-gray-600">{job.description}</p>
        </div>
        <div className="flex items-center gap-2 mt-4">
          <Badge className={"text-[#0a66c2] font-bold"} variant="ghost">
            {job.vacancies}
          </Badge>
          <Badge className={"text-[#540ac2] font-bold"} variant="ghost">
            {job.jobType}
          </Badge>
        </div>
      </div>
      <div className="flex items-center justify-between mt-4 px-4">
        <div>
          <p> {job.salary}</p>
          <p className="text-sm text-gray-600">{job.salaryTime}</p>
        </div>
        <Button className="rounded-full hover:bg-[#0a66c2]" style={{ cursor: "none" }}>
          Detalhes
        </Button>
      </div>

      <AnimatePresence>
        {showCircle && (
          <motion.div
            className="absolute bg-white rounded-full pointer-events-none"
            style={{
              width: "80px",
              height: "80px",
              top: mousePosition.y - 40,
              left: mousePosition.x - 40,
              mixBlendMode: "difference",
            }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{
              duration: 0.3,
              ease: "easeOut",
              type: "spring",
              stiffness: 200,
              damping: 20,
            }}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default LatestJobsCard;
