import React, { useState } from "react";
import { Sidebar } from "@/components/ui/Sidebar";
import { Navbar } from "@/components/ui/Navbar";
import { FullContent } from "@/components/viewCourseComponents/FullContent/fullContent";
import { CaretLeft, CaretRight } from "phosphor-react";

const VisualizacaoCurso: React.FC = () => {
  const [index, setIndex] = useState(0);

  const curso = {
    id: "031cccd8-0a96-44e6-b8ee-d5247de06767",
    titulo: "Curso de Python",
    descricao: "Descrição Python",
    data_nascimento: "11/11/2023",
    academia: "Academia A",
    capa: "https://www.interviewbit.com/blog/wp-content/uploads/2023/05/Artboard-1-copy-2.jpg",
    listaDeSlides: [
      {
        id: "a",
        tipo: "multipla escolha",
        posicao: 0,
        texto: "Questão multipla escolha:",
        alternativas: ["Angular", "React", "Svelte", "Vue"],
        feedbacks: [
          "Você acertou! React é a ferramenta que utiliza...",
          "Você errou, a resposta correta é React, pois...",
        ],
        resposta: [1],
        points: 10,
      },
      {
        id: "b",
        tipo: "verdadeiro ou falso",
        posicao: 1,
        texto: "Questão verdadeiro ou falso:",
        alternativas: ["Google", "Apple", "Netflix", "Facebook"],
        feedbacks: [
          "Você acertou! React é a ferramenta que utiliza...",
          "Você errou, a resposta correta é React, pois...",
        ],
        resposta: [1, 2],
        points: 10,
      },
      {
        id: "c",
        tipo: "multipla escolha com midia",
        posicao: 2,
        midia:
          "https://blog-static.petlove.com.br/wp-content/uploads/2019/06/shutterstock_632318627.jpg",
        texto: "Questão multipla escolha:",
        alternativas: ["Components", "Blocks", "Elements", "Effects"],
        feedbacks: [
          "Você acertou! React é a ferramenta que utiliza...",
          "Você errou, a resposta correta é React, pois...",
        ],
        resposta: [0],
        points: 10,
      },
      {
        id: "d",
        tipo: "verdadeiro ou falso com midia",
        posicao: 3,
        midia:
          "https://blog-static.petlove.com.br/wp-content/uploads/2019/06/shutterstock_632318627.jpg",
        texto: "Questão verdadeiro ou falso:",
        alternativas: ["FBJ", "Babel", "JSX", "ES2015"],
        feedbacks: [
          "Você acertou! React é a ferramenta que utiliza...",
          "Você errou, a resposta correta é React, pois...",
        ],
        resposta: [2],
        points: 10,
      },
      {
        id: "e",
        tipo: "somente midia",
        posicao: 4,
        midia:
          "https://blog-static.petlove.com.br/wp-content/uploads/2019/06/shutterstock_632318627.jpg",
      },
      {
        id: "f",
        tipo: "feedback ao usuario",
        posicao: 5,
        texto: "How to pass data into a child component?",
      },
    ],
  };

  function proximoSlide() {
    setIndex(index + 1);
  }

  function voltarSlide() {
    setIndex(index - 1);
  }

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col flex-1 ml-80">
        <Navbar />
        <div className="flex flex-wrap justify-center my-8">
          <div className="w-full h-full m-10 bg-zinc-300 border border-gray-400 rounded-lg flex items-center justify-center">
            <FullContent id={curso.id} slide={curso.listaDeSlides[index]} />
          </div>
          {index != 0 ? <CaretLeft size={32} onClick={voltarSlide} /> : ""}
          {index != curso.listaDeSlides.length - 1 ? (
            <CaretRight size={32} onClick={proximoSlide} />
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default VisualizacaoCurso;
