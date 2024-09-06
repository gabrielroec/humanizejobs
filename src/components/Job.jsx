import { useState, useRef } from "react";
import useMouse from "@react-hook/mouse-position";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Bookmark } from "lucide-react";

const Job = ({ job }) => {
  const backgroundColors = [
    "rgba(10, 102, 194, 0.1)", // Azul
    "rgba(84, 10, 194, 0.1)", // Roxo
    "rgba(10, 194, 84, 0.1)", // Verde
    "rgba(194, 10, 10, 0.1)", // Vermelho
    "rgba(194, 84, 10, 0.1)", // Laranja
    "rgba(194, 194, 10, 0.1)", // Amarelo
  ];

  const [randomBackgroundColor] = useState(backgroundColors[Math.floor(Math.random() * backgroundColors.length)]);
  const [cursorText, setCursorText] = useState("");
  const [isHoveringBookmark, setIsHoveringBookmark] = useState(false);
  const [cursorVariant, setCursorVariant] = useState("small");
  const [isHoveringButton, setIsHoveringButton] = useState(false); // Estado para detectar hover no botão

  const ref = useRef(null);
  const mouse = useMouse(ref);

  const variants = {
    small: {
      opacity: 1,
      height: 10,
      width: 10,
      backgroundColor: "#1e91d6",
      x: 0, // Canto superior direito
      y: 0,
      transition: {
        type: "spring",
        mass: 0.6,
      },
    },
    follow: {
      opacity: 1,
      height: 80,
      width: 80,
      backgroundColor: isHoveringButton || isHoveringBookmark ? "#1e91d6" : "#fff", // Muda para azul quando hover no botão ou no bookmark
      color: "#000",
      x: mouse.x ? mouse.x - 270 : 0, // Subtrai a metade da largura do círculo
      y: mouse.y ? mouse.y - 70 : 0, // Subtrai a metade da altura do círculo
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 28,
      },
    },
  };

  function projectEnter() {
    setCursorText("View");
    setCursorVariant("follow");
  }

  function projectLeave() {
    setCursorText("");
    setCursorVariant("small");
  }

  return (
    <div
      className="project px-2 pt-2 pb-4 rounded-2xl shadow-xl border border-gray-200 relative overflow-hidden "
      ref={ref}
      onMouseEnter={projectEnter}
      onMouseLeave={projectLeave}
    >
      <AnimatePresence>
        {cursorVariant && (
          <motion.div
            className="absolute rounded-full pointer-events-none flex items-center justify-center shadow-2xl"
            variants={variants}
            animate={cursorVariant}
            style={{
              position: "absolute",
              top: 10,
              right: 10,
              transformOrigin: "center",
            }}
          >
            <span className="cursorText">
              {isHoveringButton ? "😎" : isHoveringBookmark ? <Bookmark className="text-white" /> : cursorText}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
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
          <p>{job.salary}</p>
          <p className="text-sm text-gray-600">{job.salaryTime}</p>
        </div>
        <div className="flex items-center gap-4">
          <Button
            className="rounded-full hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out"
            onMouseEnter={() => setIsHoveringButton(true)} // Detecta hover no botão
            onMouseLeave={() => setIsHoveringButton(false)} // Sai do hover no botão
          >
            Detalhes
          </Button>
          <Button
            variant="outline"
            className="rounded-full"
            size="icon"
            onMouseEnter={() => setIsHoveringBookmark(true)} // Detecta hover no Bookmark
            onMouseLeave={() => setIsHoveringBookmark(false)} // Sai do hover no Bookmark
          >
            <Bookmark />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Job;
