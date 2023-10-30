import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/Select";
import DropZone from "../DropZone/dropZone";
import React, { useState } from "react";

interface FormsCriaAcademiaProps {
  setSelectedImage: React.Dispatch<React.SetStateAction<string | null>>;
  setTypedTitle: (title: string) => void;
  setTypedDescription: (title: string) => void;
}

export function FormsCriaAcademia({
  setSelectedImage,
  setTypedTitle,
  setTypedDescription,
}: FormsCriaAcademiaProps) {
  const [inputTitle, setInputTitle] = useState(""); // Estado para o título
  const [inputDescription, setInputDescription] = useState(""); // Estado para a descrição

  const handleInputTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valorDigitado = e.target.value;
    setInputTitle(valorDigitado);
    setTypedTitle(valorDigitado);
    console.log("Valor digitado: ", valorDigitado);
  };

  const handleInputDescriptionChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const valorDigitado = e.target.value;
    setInputDescription(valorDigitado);
    setTypedDescription(valorDigitado);
    console.log("Valor digitado: ", valorDigitado);
  };

  return (
    <Card color="transparent" shadow={false}>
      <Typography variant="h4">Cadastrar Academia</Typography>
      <Typography className="mt-1 font-normal">
        Preencha todas informações para criar nova Academia.
      </Typography>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Título:
          </Typography>
          <Input
            value={inputTitle}
            onChange={handleInputTitleChange}
            size="lg"
            placeholder="Título da academia..."
            className="border border-t border-opacity-50 rounded focus:border-t focus:border-opacity-50 focus:rounded"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Imagem da Academia:
          </Typography>
          <DropZone setSelectedImage={setSelectedImage} />
          <Typography variant="h6" className="-mb-3">
            Descrição:
          </Typography>
          <Input
            value={inputDescription}
            onChange={handleInputDescriptionChange}
            size="lg"
            placeholder="Descrição da academia..."
            className="border border-t border-opacity-50 rounded focus:border-t focus:border-opacity-50 focus:rounded"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
        </div>
        <Button className="mt-6 bg-green-700 text-lg h-11" fullWidth>
          Criar Academia
        </Button>
      </form>
    </Card>
  );
}