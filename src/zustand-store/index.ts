import { create } from "zustand";
import {
  Wrench,
  Buildings,
  ChalkboardTeacher,
  ClockClockwise,
  Student,
} from "phosphor-react";
import { Video } from "@phosphor-icons/react";
import { Usuario } from "@/models/usuario";
import { UsuarioTipo } from "@/enums/usuario_tipo";
import { Curso } from "@/models/curso";

export interface PlayerState {
  iconsToShow: {
    icon: React.ElementType;
    title: string;
    path: string;
  }[];
  userType: string;
  curso: Curso;
  idAssistir: number;

  verifySideBar: () => void;
  namingRole: () => void;
  saveInformations: (curso: Curso) => void;
  assistirCurso: (idAssistir: number) => void;
}

export const useStore = create<PlayerState>((set) => {
  return {
    iconsToShow: [], // Inicialmente, nenhum ícone é mostrado
    userType: "",
    curso: {} as Curso,
    usuario: {} as Usuario,
    idAssistir: 0,

    assistirCurso: (novoId) => {
      console.log("Salvando informações:", novoId);
      set(() => ({ idAssistir: novoId }));
    },

    saveInformations: (novoCurso) => {
      console.log("Salvando informações:", novoCurso);
      set((state) => ({ curso: novoCurso }));
    },

    namingRole: () => {

      const usuario = Usuario.fromJson(JSON.parse(localStorage.getItem("usuario")!))

      let newUserType;
      if (usuario.cargo == UsuarioTipo.aluno) {
        newUserType = "Aluno";
      } else if (usuario.cargo == UsuarioTipo.instrutor) {
        newUserType = "Instrutor";
      } else if (usuario.cargo == UsuarioTipo.administrador) {
        newUserType = "Admin";
      }
      set({ userType: newUserType });
    },
    
    verifySideBar: () => {
      const usuario = Usuario.fromJson(JSON.parse(localStorage.getItem("usuario")!))
      let newIconsToShow: {
        icon: React.ElementType;
        title: string;
        path: string;
      }[] = [];
      if (usuario.cargo == UsuarioTipo.aluno) {
        newIconsToShow = [
          { icon: Student, title: "Meu Aprendizado", path: "/meu-aprendizado" },
          { icon: Video, title: "Cursos", path: "/cursos" },
        ];
      } else if (usuario.cargo === UsuarioTipo.instrutor) {
        newIconsToShow = [
          {
            icon: ChalkboardTeacher,
            title: "Minhas Aulas",
            path: "/minhas-aulas",
          },
          { icon: Student, title: "Meu Aprendizado", path: "/meu-aprendizado" },
          { icon: Wrench, title: "Oficina Curso", path: "/oficina-curso" },
          { icon: Video, title: "Cursos", path: "/cursos" },
        ];
      } else if (usuario.cargo == UsuarioTipo.administrador) {
        newIconsToShow = [
          {
            icon: ClockClockwise,
            title: "Cursos Pendentes",
            path: "/cursos-pendentes",
          },
          {
            icon: ChalkboardTeacher,
            title: "Minhas Aulas",
            path: "/minhas-aulas",
          },
          { icon: Student, title: "Meu Aprendizado", path: "/meu-aprendizado" },
          { icon: Wrench, title: "Oficina Curso", path: "/oficina-curso" },
          {
            icon: Wrench,
            title: "Oficina Academia",
            path: "/oficina-academia",
          },
          { icon: Buildings, title: "Academias", path: "/academias" },
          { icon: Video, title: "Cursos", path: "/cursos" },
          { icon: Student, title: "Gerenciar Cargos", path: "/promocao-cargo" },
        ];
      }

      set({ iconsToShow: newIconsToShow });
    },
  };
});