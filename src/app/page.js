"use client";
import Image from "next/image";
import {delay, motion} from "framer-motion";

export default function Home() {

  // const variants = {
  //   initial: { scale: 0 },
  //   animate: {  scale: 1 },
  //   // transition: {
  //   //   type: "spring",
  //   //   stiffness: 60,
  //   //   damping: 10,
  //   //   duration: 2
  //   // },
  //   transition: {
  //     ease: "easeIn",
  //     duration: 2,
  //     x: { duration: 1 }
  //   },
  //   parent: {
  //     initial: { },
  //     animate: { 
  //       transition: {
  //         // delayChildren: 0.1,
  //         staggerChildren: 0.2
  //       }
  //     },
  //   }
  // }

  
  

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="items-center justify-center font-mono text-sm flex flex-col lg:flex-row">
        <div 
        className="flex justify center lg:justify-start ">
          <Image
            className=" h-auto max-w-full rounded-full drop-shadow-[0_0_1.4rem_#1a53ff40]"
            src="/mike-photo.jpg"
            alt="Next.js Logo"
            width={290}
            height={37}
            priority
          />
        </div>
        <div className="flex flex-col items-center justify-center p-8 space-y-4 text-center lg:space-y-0 lg:pl-20 lg:text-left">
          <h1 className="text-4xl font-bold text-neutral-900 dark:text-neutral-100">
            Mike McDowell, PhD.
          </h1>
          
          <p className="text-lg text-neutral-700 dark:text-neutral-300">
            Job Title, Company
            
          </p>
          </div>

      </div>

      {/* <motion.div 
      initial="initial"
      animate="animate"
      variants={ variants.parent }
      className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <motion.a
          variants={ variants }
          href=""
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Writings{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Some of Mike's Featured Works.
          </p>
        </motion.a>

        <motion.a
          variants={ variants }
          href=""
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            About{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            More about Mike.
          </p>
        </motion.a>

        <motion.a
          variants={ variants }
          href=""
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Music{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Explore some of Mikes's musical endeavors.
          </p>
        </motion.a>

        <motion.a
          variants={ variants }
          href="/Contact"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Contact{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance`}>
            Get in touch.
          </p>
        </motion.a>
      </motion.div> */}
    </main>
  );
}
