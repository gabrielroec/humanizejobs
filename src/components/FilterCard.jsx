import { RadioGroup } from "./ui/radio-group";

const filterData = [
  {
    label: "Tipo de Contrato",
    options: ["Full Time", "Part Time", "Freelance", "Estágio"],
  },
  {
    label: "Localização",
    options: ["Remoto", "Brasil", "Estados Unidos", "Europa", "Ásia"],
  },
  {
    label: "Área de Atuação",
    options: ["Desenvolvimento Web", "Design", "Marketing", "DevOps", "Dados"],
  },
  {
    label: "Salário",
    options: ["R$5.000 - R$7.000", "R$7.000 - R$10.000", "R$10.000+", "A combinar"],
  },
];

export const FilterCard = () => {
  return (
    <div>
      <p className="text-2xl">Filtros</p>

      <RadioGroup className="mt-4 flex flex-col gap-8">
        {filterData.map(({ label, options }) => (
          <div className="flex flex-col gap-2" key={label}>
            <p className="text-sm text-gray-400 font-bold">{label}</p>
            <ul className="flex flex-col gap-2">
              {options.map((option) => (
                <li className="flex items-center gap-4" key={option}>
                  <input className="w-[20px] h-[20px]" type="radio" id={option} name={label} />
                  <label htmlFor={option}>{option}</label>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};
