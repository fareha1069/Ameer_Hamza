import React from "react";
import { useForm } from "react-hook-form";
import bg from "../assets/bg.png";
import { motion as Motion } from "motion/react";
import { Card, CardContent } from "../@/components/ui/card";
import { Icon } from "@iconify/react";

const Contactdiv = () => {
  const onSubmit = data => {
    console.log(data);
  };

  const { register, handleSubmit, formState: { errors } } = useForm();
  return (
    <Motion.div
      className="flex flex-wrap justify-evenly gap-4 relative overflow-hidden py-12"
      // style={{ backgroundImage: `url(${bg})` }}
      initial={{ opacity: 0, y: 150, scale: 0.8 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 50,
        type: "spring",
        bounce: 0.9,
        stiffness: 50,
        // ease: 'easeInOut',
        damping: 18,
      }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="flex flex-col text-[#092936] w-[80vw] md:w-[40vw] lg:w-[40vw] ml-5 pl-5">
        <Motion.h1
          className="title text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.5] bg-clip-text text-transparent inline-block bg-[length:300%_300%] mb-2"
          style={{ fontFamily: "Oswald, monospace" }}
          animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          CONTACT ME
        </Motion.h1>
        <Motion.div
          className="flex flex-col gap-4 mt-2  w-[80vw] md:w-[30vw] lg:w-[30vw]"
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <Icon
              icon="logos:facebook"
              width="30"
              height="30"
              className="inline-block mr-2"
            />{" "}
            <span>Ameer Hamza</span>
          </a>
          <a
            href="https://www.instagram.com/ameer_hamza_ilyas/"
            target="_blank"
            rel="noreferrer"
          >
            <Icon
              icon="skill-icons:instagram"
              width="30"
              height="30"
              className="inline-block mr-2"
            />{" "}
            <span>Ameer Hamza</span>
          </a>
          <a href="mailto:your@email.com">
            <Icon
              icon="logos:google-gmail"
              width="30"
              height="30"
              className="inline-block mr-2"
            />{" "}
            <span>abc@gmail.com</span>
          </a>
          <a
            href="https://www.linkedin.com/in/ameer-hamza-ilyas/"
            target="_blank"
            rel="noreferrer"
          >
            <Icon
              icon="logos:linkedin-icon"
              width="30"
              height="30"
              className="inline-block mr-2"
            />{" "}
            <span>Ameer Hamza</span>
          </a>
          <a href="tel:+9230000000000" target="_blank" rel="noreferrer">
            <Icon
              icon="ph:phone"
              width="30"
              height="30"
              className="inline-block mr-2"
            />{" "}
            <span>+92 305540880</span>
          </a>
        </Motion.div>
      </div>

      <div className="w-[90vw] md:w-[45vw] lg:w-[40vw] opacity-95">
        <Card className="h-[400px] bg-[#648999] border-b-4 border-b-gray-600">
          <CardContent className="flex flex-col justify-evenly h-full overflow-y-auto">
            <form onSubmit={handleSubmit(onSubmit)}>
              <h2 className="text-white md:text-xl font-semibold mb-2 rounded-sm">Ready to transform your supply chain? Reach out today</h2>
              <div className="flex flex-row w-full justify-between">
              <input {...register("name", { required: true })} className="bg-white rounded-sm p-3 shadow-sm w-1/2" placeholder="Name" />
              {errors.firstName && <p>Name is required</p>}
              <input {...register("Company")} className="ml-3 bg-white rounded-sm p-3 shadow-sm w-1/2" placeholder="Organization" />
              {errors.Company && <p></p>}
              </div>
              <input {...register("email")} className="mt-3 bg-white rounded-sm p-3 shadow-sm w-full" placeholder="Email" />
              {errors.email && <p>Invalid email</p>}
              <textarea {...register("msg")} className="mt-3 bg-white rounded-sm p-3 shadow-sm w-full" placeholder="Message" rows={4} />
              {errors.msg && <p>Message is required</p>}
              <button type="submit" className="mt-3 bg-[#092936] rounded-sm p-3 shadow-sm w-full text-white">Send</button>
            </form>
          </CardContent>
        </Card>
      </div>
    </Motion.div>
  );
};

export default Contactdiv;
