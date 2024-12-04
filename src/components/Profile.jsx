import Image from "next/image";

export default function Profile() {
  return (
    <div className="flex">
      <Image
        className="justify-center w-16 my-auto rounded-full"
        src="/images/homidascarca.jpg"
        width={100}
        height={100}
        alt={"zap"}
      />
      <div className="flex flex-col gap-2 p-4">
        <h1>Duardin</h1>
      </div>
    </div>
  );
}
