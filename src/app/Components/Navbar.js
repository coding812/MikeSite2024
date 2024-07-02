"use client";
import React from 'react';
import { motion } from "framer-motion";

function Navbar() {
    const variants = {
        initial: { scale: 0 },
        animate: { scale: 1 },
        // transition: {
        //   type: "spring",
        //   stiffness: 60,
        //   damping: 10,
        //   duration: 2
        // },
        transition: {
            ease: "easeIn",
            duration: 1,
            x: { duration: 1 }
        },
        parent: {
            initial: {},
            animate: {
                transition: {
                    // delayChildren: 0.1,
                    staggerChildren: 0.2
                }
            },
        }
    }
    return (
            
                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={variants.parent}
                    className="flex justify-center p-8 w-full ">
                    <motion.a
                        variants={variants}
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
                        <p className={`m-0 max-w-[20ch] text-sm opacity-50`}>
                            Some of Mike's Featured Works.
                        </p>
                    </motion.a>

                    <motion.a
                        variants={variants}
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
                        <p className={`m-0 max-w-[20ch] text-sm opacity-50`}>
                            More about Mike.
                        </p>
                    </motion.a>

                    <motion.a
                        variants={variants}
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
                        <p className={`m-0 max-w-[20ch] text-sm opacity-50`}>
                            Explore some of Mikes's musical endeavors.
                        </p>
                    </motion.a>

                    <motion.a
                        variants={variants}
                        href="/Contact"
                        className="group rounded-lg border border-transparent px-2 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"

                        rel="noopener noreferrer"
                    >
                        <h2 className={`mb-3 text-2xl font-semibold`}>
                            Contact{" "}
                            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                                -&gt;
                            </span>
                        </h2>
                        <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance`}>
                            Get in touch
                        </p>
                    </motion.a>
                </motion.div>
    );
}

export default Navbar;