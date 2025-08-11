import React from 'react'
import { motion as Motion } from 'motion/react'
const Contact = () => {
    return (
        <div>
            <Motion.div className="flex flex-col justify-center my-15"
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                    duration: 80,
                    type: "spring",
                    bounce: 0.9,
                    stiffness: 50,
                    // ease: 'easeInOut',
                    damping: 18,
                }}
                viewport={{ once: true, amount: 0.3 }}>
                <h1 className="title text-3xl md:text-4xl lg:text-4xl xl:text-5xl text-center font-bold text-[#092936] tracking-tight leading-[1.5] bg-clip-text text-transparent inline-block bg-[length:300%_300%] mb-3"
                    style={{ fontFamily: "Oswald, monospace" }}
                >Idk what to say</h1>
                <p className="txt text-xl text-center font-medium">Wanna talk? Send me a message...</p>
                <button className="bg-[#08374A] txt text-lg font-medium text-white px-10 py-3 rounded-lg my-4 mx-auto">
                    Contact me
                </button>
            </Motion.div>
        </div>
    )
}

export default Contact