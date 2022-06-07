import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <main className="grid h-[calc(100vh-4rem)] w-full grid-cols-2 gap-[2px]">
      <section className="bg-red-500"></section>
      <section className="bg-blue-500"></section>
    </main>
  );
};

export default Home;
