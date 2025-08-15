import React, { useRef } from "react";
import { useState, useEffect } from "react";
import { Card, CardContent } from "../../@/components/ui/card";
import { motion as Motion, useInView } from "motion/react";

const Stats = () => {
  const expRef = useRef(null);
  const isInView = useInView(expRef, { once: true });
  const [exp, setExp] = useState(1);
  useEffect(() => {
    if (!isInView) return;
    let current = 1;
    const interval = setInterval(() => {
      current += 1;
      setExp(current);
      if (current === 4) {
        clearInterval(interval);
      }
    }, 300); // speed: 0.4s per step

    return () => clearInterval(interval);
  }, [isInView]);

  const proRef = useRef(null);
  const proisInView = useInView(proRef, { once: true });
  const [pro, setPro] = useState(1);
  useEffect(() => {
    if (!proisInView) return; 
    let current = 1;
    const interval = setInterval(() => {
      current += 1;
      setPro(current);
      if (current === 20) {
        clearInterval(interval);
      }
    }, 100); // speed: 0.4s per step

    return () => clearInterval(interval);
  }, [proisInView]);

  const recRef = useRef(null);
  const recisInView = useInView(recRef, { once: true });
  const [rec, setRec] = useState(1);
  useEffect(() => {
    if (!recisInView) return; 
    let current = 1;
    const interval = setInterval(() => {
      current += 1;
      setRec(current);
      if (current === 5) {
        clearInterval(interval);
      }
    }, 250); // speed: 0.4s per step

    return () => clearInterval(interval);
  }, [recisInView]);

  return (
    <div className="flex flex-col lg:flex-row justify-evenly gap-4">
      <Card className="bg-[#648999] w-[90vw] h-[170px] lg:w-[30vw] !border-[#08374A] border-b-4">
        <CardContent className="flex flex-col justify-around h-full overflow-y-auto">
          <Motion.h1
            ref={expRef}
            className="title text-3xl md:text-4xl lg:text-4xl xl:text-5xl text-center font-bold text-[#092936] tracking-tight leading-[1.5] bg-clip-text text-transparent inline-block bg-[length:300%_300%] mb-2"
            style={{ fontFamily: "Oswald, monospace" }}
            animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {exp}+
          </Motion.h1>
          <div className="flex flex-col">
            <p className="txt text-base font-medium text-dark text-center">
              years of
            </p>
            <p className="txt text-xl font-medium text-dark px-4 text-center">
              Professional Experience
            </p>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-[#648999] w-[90vw] h-[170px] lg:w-[30vw] !border-[#08374A] border-b-4">
        <CardContent className="flex flex-col justify-around h-full overflow-y-auto">
          <Motion.h1
            ref={proRef}
            className="title text-3xl md:text-4xl lg:text-4xl xl:text-5xl text-center font-bold text-[#092936] tracking-tight leading-[1.5] bg-clip-text text-transparent inline-block bg-[length:300%_300%] mb-2"
            style={{ fontFamily: "Oswald, monospace" }}
            animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {pro}+
          </Motion.h1>
          <p className="txt text-xl font-medium text-dark px-4 pt-4 text-center">
            Amazing Projects
          </p>
        </CardContent>
      </Card>
      <Card className="bg-[#648999] w-[90vw] h-[170px] lg:w-[30vw] !border-[#08374A] border-b-4">
        <CardContent className="flex flex-col justify-around h-full overflow-y-auto">
          <Motion.h1
            ref={recRef}
            className="title text-3xl md:text-4xl lg:text-4xl xl:text-5xl text-center font-bold text-[#092936] tracking-tight leading-[1.5] bg-clip-text text-transparent inline-block bg-[length:300%_300%] mb-2"
            style={{ fontFamily: "Oswald, monospace" }}
            animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {rec}+
          </Motion.h1>
          <p className="txt text-xl font-medium text-dark px-4 pt-4 text-center">
            Recommendations
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Stats;