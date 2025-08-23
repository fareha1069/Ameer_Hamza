import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { motion as Motion } from "framer-motion"; // use framer-motion
import { Card, CardContent } from "../../@/components/ui/card";
import { Icon } from "@iconify/react";
import emailjs from "emailjs-com";
// import { toast } from "react-hot-toast";

const Contactdiv = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [isSending, setIsSending] = useState(false);

  const onSubmit = (data) => {
    // send message to you
    setIsSending(true)
    emailjs
      .send(
        "service_zf8rgq9",
        "template_ykinqdh",
        {
          from_name: data.name,
          from_email: data.email,
          company: data.company,
          message: data.msg,
        },
        "5kd7AmFUJ-_TKh5Dt"
      )
      .then((result) => {
        console.log("Message sent to Hamza: ", result.text);
        // toast.success("Message sent successfully!");
        reset(); // clear fields
      })
      .catch((error) => {
        console.log("Error: ", error.text);
        // toast.error("Something went wrong!");
      });

    // send auto reply to user
    emailjs
      .send(
        "service_zf8rgq9",
        "template_rg9mg1x",
        {
          from_name: data.name,
          from_email: data.email,
          company: data.company,
          message: data.msg,
        },
        "5kd7AmFUJ-_TKh5Dt"
      )
      .then((result) => {
        console.log("Auto reply sent: ", result.text);
      })
      .catch((error) => {
        console.log("Auto reply error: ", error.text);
      }).finally(() => setIsSending(false));

  };

  return (
    <Motion.div
      className="flex flex-col items-center justify-center gap-4 relative overflow-hidden py-12"
      initial={{ opacity: 0, y: 150, scale: 0.8 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.8,
        type: "spring",
        bounce: 0.4,
        stiffness: 50,
        damping: 18,
      }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <Motion.h1
        className="title text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.5] bg-clip-text text-transparent inline-block bg-[length:300%_300%] mb-2"
        style={{ fontFamily: "Oswald, monospace" }}
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      >
        CONTACT ME
      </Motion.h1>
      <div className="flex flex-wrap justify-center gap-15 relative overflow-hidden">
        {/* Left side contacts */}
        <div className="flex flex-col text-[#092936] w-[80vw] md:w-[40vw] lg:w-[40vw] ml-5 pl-5">
          <p className="text-lg">
            I help businesses design smarter and more efficient supply chains by
            optimizing procurement, logistics, and operations. My focus is on
            reducing costs, improving supplier relationships, and creating
            sustainable strategies that deliver real results. If you’re looking
            for a supply chain strategist who can bring clarity and measurable
            impact, let’s connect.
          </p>
        <Motion.div
          className="flex flex-col gap-4 mt-2 w-[80vw] md:w-[30vw] lg:w-[30vw]"
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <Icon icon="logos:facebook" width="30" height="30" className="inline-block mr-2" />
            <span>Ameer Hamza</span>
          </a>
          <a href="https://www.instagram.com/ameer_hamza_ilyas/" target="_blank" rel="noreferrer">
            <Icon icon="skill-icons:instagram" width="30" height="30" className="inline-block mr-2" />
            <span>Ameer Hamza</span>
          </a>
          <a href="mailto:hamzamalik246810@gmail.com">
            <Icon icon="logos:google-gmail" width="30" height="30" className="inline-block mr-2" />
            <span>hamzamalik246810@gmail.com</span>
          </a>
          <a href="https://www.linkedin.com/in/ameer-hamza-ilyas/" target="_blank" rel="noreferrer">
            <Icon icon="logos:linkedin-icon" width="30" height="30" className="inline-block mr-2" />
            <span>Ameer Hamza</span>
          </a>
          <a href="tel:+9230000000000" target="_blank" rel="noreferrer">
            <Icon icon="ph:phone" width="30" height="30" className="inline-block mr-2" />
            <span>+92 305540880</span>
          </a>
        </Motion.div>
      </div>

      {/* Right side form */}
      <div className="w-[90vw] md:w-[45vw] lg:w-[42vw] opacity-95">
        <Card className="h-[450px] bg-[#648999] border-b-4 border-b-gray-600">
          <CardContent className="flex flex-col justify-evenly h-full overflow-y-auto">
            <form onSubmit={handleSubmit(onSubmit)}>
              <h2 className="text-white text-lg md:text-xl font-semibold mb-2 rounded-sm">
                Let’s streamline your operations — start the conversation now.
              </h2>

              <div className="flex flex-row w-full justify-between gap-3">
                <div className="flex flex-col w-1/2">
                  <input
                    {...register("name", { required: true })}
                    className="bg-white rounded-sm p-3 shadow-sm w-full"
                    placeholder="Name"
                  />
                  {errors.name && <p className="text-red-600 text-sm mt-1">Name is required</p>}
                </div>

                <div className="flex flex-col w-1/2">
                  <input
                    {...register("company")}
                    className="bg-white rounded-sm p-3 shadow-sm w-full"
                    placeholder="Organization"
                  />
                </div>
              </div>

              <input
                {...register("email", { required: true })}
                className="mt-3 bg-white rounded-sm p-3 shadow-sm w-full"
                placeholder="Email"
              />
              {errors.email && <p className="text-red-600 text-sm">Email is required</p>}

              <textarea
                {...register("msg", { required: true })}
                className="mt-3 bg-white rounded-sm p-3 shadow-sm w-full"
                placeholder="Message"
                rows={4}
              />
              {errors.msg && <p className="text-red-600 text-sm">Message is required</p>}
              <div className="flex justify-center items-center w-full mt-5">
                <Motion.button
                  style={{cursor:'pointer'}}
                  type="submit"
                  className="bg-[#092936] rounded-sm p-3 shadow-sm w-[100%] text-white"
                  whileTap={{ scale: 0.95 }} // click animation
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}

                >
                  {isSending ? "Sending..." : "Send"}
                </Motion.button>
              </div>

            </form>
          </CardContent>
        </Card>
      </div>
      </div>
    </Motion.div>
  );
};

export default Contactdiv;