import { PlusCircle } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";

export function PlusButton() {
  return (
    <div className="flex flex-col items-center ml-36 mt-24">
      <PlusCircle className="h-28 w-28 text-green-700" />
      <Button className="bg-green-700 h-14 w-36 text-lg">Novo Curso</Button>
    </div>
  );
}