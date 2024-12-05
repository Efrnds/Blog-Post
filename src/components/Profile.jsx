import Image from "next/image";
import { Card, CardTitle } from "./ui/card";

export default function Profile() {
  return (
    <Card>
      <CardTitle className="flex pl-2">
        <Image
          className="justify-center w-12 my-auto rounded-full h-fit"
          src="/images/homidascarca.jpg"
          width={100}
          height={100}
          alt={"zap"}
        />
        <div className="flex flex-col p-4 h-fit">
          <h1 className="font-semibold">Duardin</h1>
          <p className="text-xs text-slate-600">Leitor</p>
        </div>
      </CardTitle>
    </Card>
  );
}
