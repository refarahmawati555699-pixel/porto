import Image from "next/image";
export default function Home() {
  return (
    <main className="p-10 text-center">
      <h1 className="text-4xl font-bold">Welcome to my Portofolio </h1>
      <p className="mt-4 text-gray-600">HI! Im Refa Rahmawati</p>

      <div className="mt-6 flex justify-center">
        <Image
          src="/Refa.jpg"  
          alt="Foto Refa Rahmawati"
          width={200}
          height={200}
          className="rounded-full shadow-lg"
        />
      </div>
    </main>
  );
}