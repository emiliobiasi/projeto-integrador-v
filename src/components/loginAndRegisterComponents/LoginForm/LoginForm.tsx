import { useState } from "react";
import { InputText } from "../Input/Input";
import styles from "./LoginForm.module.css";
import AuthService from "@/services/auth.service";
import { Button } from "@/components/ui/Button/button";
import { useNavigate } from "react-router-dom";

export function LoginForm() {
  const [senha, setSenha] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const navigate = useNavigate();

  const click = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    try {
      const response = await AuthService.login(email, senha);
      const usuarioJson = response.data.usuario;

      console.log(response);

      localStorage.setItem("token", response.data.token);
      localStorage.setItem("usuario", JSON.stringify(usuarioJson));

      navigate("/cursos");
    } catch (error) {
      console.error("Erro durante o login:", error);
      // Lidar com erros de login, se necessário
    }
  };

  return (
    <div className={styles.loginContainer}>
      <form className={styles.loginForm}>
        <h1 className="text-center justify-center flex text-gray-900 font-semibold text-4xl pb-3">
          Entrada
        </h1>

        <InputText
          obrigatorio={true}
          label="E-mail"
          placeholder="Digite seu E-mail"
          valor={email}
          type={"email"}
          aoAlterado={(valorEmail: string) => setEmail(valorEmail)}
        />
        <InputText
          obrigatorio={true}
          label="Senha"
          placeholder="Digite sua Senha"
          valor={senha}
          type={"password"}
          aoAlterado={(valorSenha: string) => setSenha(valorSenha)}
        />
        <Button
          onClick={click}
          className="mt-8 w-full h-12 rounded-lg border-0 bg-blue-500 text-white hover:bg-blue-600"
        >
          Entrar
        </Button>
        <p>
          <a
            href="signup"
            className="text-blue-600 dark:text-blue-500 hover:underline"
          >
            Esqueci Minha Senha
          </a>
        </p>
        <p>
          Não Possui Conta?
          <a
            href="signup"
            className="text-blue-600 dark:text-blue-500 hover:underline"
          >
            Cadastre-se
          </a>
        </p>
      </form>
    </div>
  );
}
