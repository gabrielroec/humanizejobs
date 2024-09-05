import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import logo from "@/assets/logo.svg";
import LoginVideo from "@/assets/video-login.mp4";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";
import { RadioGroup } from "@/components/ui/radio-group";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Login = () => {
  const [api, setApi] = useState(null);
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <>
      <div className="flex items-center justify-center max-w-full gap-10 flex-row-reverse max-lg:flex-col">
        <div className="h-screen w-1/2 relative flex items-start p-10 flex-col justify-start gap-10 max-lg:w-full">
          <Link to="/">
            <img src={logo} alt="" width={50} className="shadow-md rounded-[8px] relative z-10" />
          </Link>
          <h1 className="relative z-10 text-4xl font-bold text-white">
            A Humanize<span className="text-[#0A66C2]">Jobs!</span> veio para fornecer candidaturas e recrutamentos para humanos de forma
            humanizada.
          </h1>
          <div className="absolute z-10 w-4/5 bottom-0 right-1/2 translate-x-1/2 cursor-grab">
            <Carousel
              plugins={[
                Autoplay({
                  delay: 5000,
                }),
              ]}
              setApi={setApi}
            >
              <CarouselContent>
                <CarouselItem>
                  <Card className="bg-white/5 shadow-xl backdrop-blur-lg border-0">
                    <CardHeader>
                      <div></div>
                      <div>
                        <CardTitle className="text-white">Uma experiência única de recrutamento</CardTitle>
                        <CardDescription className="text-white">Mariana Lopes - Analista de Marketing Digital</CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent className="text-white">
                      A HumanizeJobs foi um divisor de águas na minha carreira. O processo foi rápido, claro e, o mais importante, humano.
                      Me senti ouvida e valorizada como profissional, o que fez toda a diferença na minha decisão final.
                    </CardContent>
                  </Card>
                </CarouselItem>

                <CarouselItem>
                  <Card className="bg-white/5 shadow-xl backdrop-blur-lg border-0">
                    <CardHeader>
                      <div></div>
                      <div>
                        <CardTitle className="text-white">Recrutamento humanizado de verdade</CardTitle>
                        <CardDescription className="text-white">Rafael Oliveira - Engenheiro de Software</CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent className="text-white">
                      Fiquei impressionado com a forma como a HumanizeJobs tratou cada etapa do processo seletivo. Ao invés de ser apenas
                      mais um número, percebi que minha experiência e valores estavam sendo levados em consideração.
                    </CardContent>
                  </Card>
                </CarouselItem>

                <CarouselItem>
                  <Card className="bg-white/5 shadow-xl backdrop-blur-lg border-0">
                    <CardHeader>
                      <div></div>
                      <div>
                        <CardTitle className="text-white">Transparência e suporte durante todo o processo</CardTitle>
                        <CardDescription className="text-white">Camila Santos - Designer UX/UI</CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent className="text-white">
                      Nunca imaginei que uma plataforma de recrutamento pudesse ser tão acolhedora. A HumanizeJobs me deu suporte em cada
                      passo e me conectou com empresas que realmente se alinham com meus princípios.
                    </CardContent>
                  </Card>
                </CarouselItem>

                <CarouselItem>
                  <Card className="bg-white/5 shadow-xl backdrop-blur-lg border-0">
                    <CardHeader>
                      <div></div>
                      <div>
                        <CardTitle className="text-white">Encontrei o emprego dos meus sonhos!</CardTitle>
                        <CardDescription className="text-white">João Costa - Desenvolvedor Full Stack</CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent className="text-white">
                      Graças à HumanizeJobs, finalmente consegui uma vaga em uma empresa que valoriza o equilíbrio entre vida pessoal e
                      profissional. O processo foi rápido e me senti parte de algo maior.
                    </CardContent>
                  </Card>
                </CarouselItem>

                <CarouselItem>
                  <Card className="bg-white/5 shadow-xl backdrop-blur-lg border-0">
                    <CardHeader>
                      <div></div>
                      <div>
                        <CardTitle className="text-white">Melhor ferramenta para encontrar talentos</CardTitle>
                        <CardDescription className="text-white">Pedro Ferreira - Gerente de Recrutamento</CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent className="text-white">
                      A HumanizeJobs nos ajudou a encontrar profissionais que se encaixam perfeitamente na nossa cultura. A plataforma
                      trouxe uma visão mais humanizada do processo seletivo, o que é fundamental para o sucesso da nossa equipe.
                    </CardContent>
                  </Card>
                </CarouselItem>

                <CarouselItem>
                  <Card className="bg-white/5 shadow-xl backdrop-blur-lg border-0">
                    <CardHeader>
                      <div></div>
                      <div>
                        <CardTitle className="text-white">Revolucionando o recrutamento</CardTitle>
                        <CardDescription className="text-white">Carla Nunes - Coordenadora de RH</CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent className="text-white">
                      HumanizeJobs revolucionou a maneira como recrutamos. Não é só sobre encontrar candidatos, mas também sobre identificar
                      pessoas que compartilham dos mesmos valores que nossa empresa. Um verdadeiro game changer!
                    </CardContent>
                  </Card>
                </CarouselItem>

                <CarouselItem>
                  <Card className="bg-white/5 shadow-xl backdrop-blur-lg border-0">
                    <CardHeader>
                      <div></div>
                      <div>
                        <CardTitle className="text-white">Mais eficiência e melhores resultados</CardTitle>
                        <CardDescription className="text-white">Felipe Martins - Recrutador Sênior</CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent className="text-white">
                      Desde que começamos a usar a HumanizeJobs, conseguimos reduzir o tempo de contratação e aumentar a satisfação dos
                      candidatos. É uma plataforma que valoriza a experiência de todos os envolvidos no processo.
                    </CardContent>
                  </Card>
                </CarouselItem>
              </CarouselContent>
              <div className="py-2 text-center text-sm text-muted-foreground">
                Slide {current} de {count}
              </div>
            </Carousel>
          </div>
          <div className="absolute w-full h-full object-cover inset-0 z-[1] bg-[#000000ab]"></div>
          <video src={LoginVideo} autoPlay loop muted className="absolute w-full h-full object-cover inset-0 z-0"></video>
        </div>
        <div className="w-1/2 pr-10 max-lg:w-full">
          <form className="w-3/4 mx-auto max-lg:w-full max-lg:px-10">
            <p className="font-bold text-xl mb-10">Crie a sua conta!</p>

            <div className="my-2">
              <Label className="font-bold">Email</Label>
              <Input type="email" placeholder="gabrielroecc@gmail.com" />
            </div>

            <div className="my-2">
              <Label className="font-bold">Senha</Label>
              <Input type="password" placeholder="**********" />
            </div>
            <div className="flex items-center justify-between flex-wrap">
              <RadioGroup className="flex items-center gap-4 my-5">
                <div className="flex items-center space-x-2">
                  <Input type="radio" name="role" value="profissional" className="w-[14px]" />
                  <Label className="font-bold" htmlFor="option-one">
                    {" "}
                    Profissional
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Input type="radio" name="role" value="recrutador" className="w-[14px]" />
                  <Label className="font-bold" htmlFor="option-two">
                    {" "}
                    Recrutador
                  </Label>
                </div>
              </RadioGroup>
            </div>
            <Button type="submit" className="bg-[#0A66C2] hover:bg-[#0f4071] text-white hover:text-white w-full my-4">
              Fazer login
            </Button>
            <span className="text-sm w-fit mx-auto flex gap-1">
              Não tem conta?{""}
              <Link to="/signup" className="text-[#0A66C2]">
                Fazer cadastro
              </Link>
            </span>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
