import Layout from "@/components/Layout";
import Image from "next/image";
import Companies from "@/components/companies/Companies";

export default function Home() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center gap-8">
        <h1 className="flex gap-4 text-6xl font-bold text-white">
          Design
          <span className="underline decoration-5 underline-offset-8 decoration-[#C084FC]">
            Faster
          </span>
          <span className="text-Purple">&</span>
          <div className="relative">
            <div className="absolute w-full top-0 h-3 bg-[#C084FC]"></div>
            <span className="relative z-10">Better</span>
          </div>
        </h1>

        <p className="text-white text-[15px] w-[60%]">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          aspernatur quod non ipsum distinctio? Accusamus, voluptas laboriosam.
        </p>

        <div className="flex text-white mb-8 gap-3">
          <button className="cursor-pointer bg-Purple hover:bg-newPurple duration-300 transition-colors px-7 rounded-md py-2.5">
            Join Now
          </button>
          <button className="cursor-pointer border-2 duration-300 transition-colors hover:bg-white/10 border-white px-7 rounded-md py-2.5">
            View Demo
          </button>
        </div>

        <Image
          className="rounded-md size-full"
          src={"/Desktop-App-Placeholder-1.png"}
          alt="Desktop App"
          width={1500}
          height={1500}
        />
      </div>
      <div className="flex flex-col items-center mt-20 justify-center gap-8">
        <h1 className="font-bold text-white text-5xl">
          Join Leading Companies
        </h1>
        <Companies />
      </div>
    </Layout>
  );
}
