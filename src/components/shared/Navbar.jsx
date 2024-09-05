import logo from "../../assets/logo.svg";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";
import { Button } from "../ui/button";
import { LogOut, User2 } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const user = false;
  return (
    <div className="bg-white p-4">
      <div className="flex items-center justify-between mx-auto max-w-7xl">
        <Link to="/" className="flex items-center gap-4">
          <img src={logo} alt="" width={50} className="shadow-md rounded-[8px]" />
          <h1 className="font-bold font-myriad text-xl">
            Humanize<span className="text-[#0A66C2]">Jobs!</span>
          </h1>
        </Link>
        <div className="flex items-center gap-12">
          <ul className="flex font-medium items-center gap-5">
            <li>Home</li>
            <li>Vagas</li>
            <li>Procurar</li>
          </ul>

          {!user ? (
            <div className="flex items-center gap-2">
              <Link to="/login">
                <Button variant="outline" className="">
                  Fazer login
                </Button>
              </Link>

              <Link to="/signup">
                <Button variant="outline" className="bg-[#0A66C2] hover:bg-[#0f4071] text-white hover:text-white ">
                  Cadastrar
                </Button>
              </Link>
            </div>
          ) : (
            <Popover>
              <PopoverTrigger>
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className="flex gap-4 space-y-2">
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div>
                    <p>Jonh Doe</p>
                    <p className="text-sm text-muted-foreground">Lorem ipsum dolor sit amet.</p>
                  </div>
                </div>{" "}
                <div className="flex text-gray-600 justify-start items-center">
                  <User2 />
                  <Button variant="link" className="pl-2">
                    Ver perfil
                  </Button>
                </div>
                <div className="flex text-gray-600 justify-start items-center">
                  <LogOut />
                  <Button variant="link" className="pl-2">
                    Sair
                  </Button>
                </div>
              </PopoverContent>
            </Popover>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
