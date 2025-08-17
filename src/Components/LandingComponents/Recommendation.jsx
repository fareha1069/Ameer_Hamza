"use client";

import bg from "../../assets/Intro/bg.png";
import { motion as Motion } from "motion/react";
import { useState, useEffect } from "react";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "../../@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../@/components/ui/carousel";

import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

const Recommendation = ({ recommend = [] }) => {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );
  const [modalImage, setModalImage] = useState(null);

  const [pdfWidth, setPdfWidth] = useState(600); // default width

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 420) {
        setPdfWidth(350);
      } else if (width < 500) {
        setPdfWidth(450);
      } else if (width < 580) {
        setPdfWidth(550);
      } else if (width < 786) {
        setPdfWidth(650); // mobile
      } else if (width < 950) {
        setPdfWidth(580);
      } else if (width < 1024) {
        setPdfWidth(700); // tablet
      } else if (width < 1200) {
        setPdfWidth(480);
      } else {
        setPdfWidth(550); // desktop
      }
    };

    handleResize(); // run once
    window.addEventListener("resize", handleResize); // listen to resize

    return () => window.removeEventListener("resize", handleResize);
  }, [pdfWidth]);

  return (
    <Motion.div
      className="flex flex-wrap justify-evenly items-center gap-4 bg-[#648999] relative overflow-hidden py-12"
      style={{ backgroundImage: `url(${bg})` }}
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
      viewport={{ once: true, amount: 0.1 }}
    >
      <Motion.h1
        className="title text-4xl md:text-6xl lg:text-6xl xl:text-8xl text-center font-bold text-[#092936] w-[100vw] lg:w-[45vw] tracking-tight leading-[1.5] bg-clip-text text-transparent inline-block bg-[length:300%_300%] mb-2"
        style={{ fontFamily: "Oswald, monospace" }}
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        TESTIMONIALS
      </Motion.h1>

      <div className="w-[90vw] md:w-[60vw] lg:w-[40vw]">
        <Carousel
          plugins={[plugin.current]}
          className="w-[90vw] md:w-[60vw] lg:w-[40vw]"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {recommend.map((item, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card className="bg-white h-[400px]">
                    <CardContent className="flex flex-col justify-around h-full overflow-y-auto">
                      {item.image && (
                        <div
                          className="cursor-pointer flex justify-center"
                          onClick={() => {
                            if (window.innerWidth >= 1024) {
                              setModalImage(item.image);
                            }
                          }}
                        >
                          <Document
                            file={{url:item.image}}
                            loading="Loading..."
                            onLoadError={console.error}
                            renderMode="canvas"
                          >
                            <Page
                              pageNumber={1}
                              width={pdfWidth}
                              renderTextLayer={false}
                              renderAnnotationLayer={false}
                              className="!h-auto !min-h-0"
                            />
                          </Document>
                        </div>
                      )}

                      {item.text && <p>{item.text}</p>}

                      <div className="">
                        <p className="italic text-right">~{item.name}</p>
                        <p className="text-sm text-gray-400 text-right">
                          {item.date}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="flex flex-row gap-2 justify-end mt-1">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>
      </div>
      {modalImage && (
        <div
          className="fixed inset-0 z-50 bg-[#A1B9C1]/20 flex items-center justify-center"
          onClick={() => setModalImage(null)}
        >
          <div
            className="
            relative bg-[#A1B9C1] p-7 rounded shadow-lg 
            h-auto max-h-[95vh] min-h-[95vh]
            w-auto
            overflow-auto
          "
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              className="absolute top-2 right-3 text-black text-xl font-bold hover:text-red-500"
              onClick={() => setModalImage(null)}
            >
              ×
            </button>

            {/* Image */}
            <Document
              file={modalImage}
              loading="Loading..."
              onLoadError={console.error}
              renderMode="canvas"
              className="m-5"
            >
              <Page
                pageNumber={1}
                width={window.innerWidth <= 1300 ? 650 : 750}
                renderTextLayer={false}
                renderAnnotationLayer={false}
                className="!h-auto !min-h-0"
              />
            </Document>
          </div>
        </div>
      )}
    </Motion.div>
  );
};

export default Recommendation;
