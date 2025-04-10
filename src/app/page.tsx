"use client";

import Layout from "@/components/Layout";
import Image from "next/image";
import Companies from "@/components/companies/Companies";
import { ArrowRight } from "@phosphor-icons/react";

export default function Home() {
  return (
    <Layout>
      <section className="flex flex-col items-center justify-center gap-8">
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

        <div className="relative size-full">
          <div className="absolute size-full z-10"></div>
        <Image
          className="rounded-md select-none pointer-events-none object-cover size-full"
          src={"/Desktop-App-Placeholder-1.png"}
          alt="Desktop App"
          width={1500}
          height={1500}
        />
        </div>
      </section>

      <section className="flex flex-col items-center mt-20 justify-center gap-8">
        <h1 className="font-bold text-white text-5xl">
          Join Leading Companies
        </h1>
        <Companies />
      </section>

      <section className="text-white w-full flex md:flex-row flex-col mt-20 flex-wrap items-center justify-center h-160">
        <div className="flex flex-col flex-1/2 gap-8 justify-center items-center">
          <div className="text-start self-start">
            <h2 className="uppercase font-semibold tracking-widest">
              Discover
            </h2>
            <h1 className="flex flex-col text-nowrap self-start items-start gap-2 text-6xl font-bold">
              <div className="flex gap-4">
                <span className="text-[#C084FC]">Unlimited</span>
                <span className="relative size-full before:absolute before:text-nowrap text-nowrap before:-z-1 before:h-full before:w-[90%] before:-left-2 before:border-4 before:border-[#C2410C]">
                  ideas
                </span>
                <span>for your</span>
              </div>

              <span className="text-6xl font-bold">next great projects</span>
            </h1>
          </div>

          <p className="w-[60%] self-start text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            laoreet tincidunt ex at iaculis. Pellentesque malesuada lacus nec
            mauris egestas lacinia.
          </p>

          <button className="flex self-start items-center cursor-pointer select-none text-white">
            <span className="flex items-center group font-semibold gap-3">
              Discover Ideas <ArrowRight weight="bold" className="group-hover:translate-x-1 transition-transform duration-300" size={18} />
            </span>
          </button>
        </div>
        <div className="flex-1/2 relative flex items-center h-full w-full justify-center">
          <div className="absolute size-full z-10"></div>
          <Image
            src={"/Shapes.png"}
            alt="Shapes"
            width={300}
            height={300}
            className="object-cover select-none pointer-events-none size-95"
          />
        </div>
      </section>
    </Layout>
  );
}
