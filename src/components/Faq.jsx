import React, { useState } from "react";
import LinkArrow from "./LinkArrow";
import faqArrowDown from '../assets/faqArrowDown.png'
import { objFaq } from "../utils/objFaq";

const Faq = () => {
  const [isOpenIndex, setIsOpenIndex] = useState({
    uno : false,
    dos : false,
    tres : false
  });



  return (
    <div className="flex flex-col items-center gap-[1.5em] bg-[#2a5b45] py-[3em]">
      <h2 className="text-[1.5em] not-italic font-medium text-[#fff]">
        Preguntas frecuentes
      </h2>
      <section></section>
      {objFaq.map((element, i) => {
        const palabra = i == 0 ? 'uno' : i == 1 ? 'dos' : 'tres'
        return (
          <div
            key={i}
            onClick={() => setIsOpenIndex(prev => {
              const holdPrev = {...prev}
              holdPrev[palabra] = !holdPrev[palabra]
              return holdPrev
          })} 
            className={`flex flex-col p-[1.5em] gap-[0.4em]  bg-white rounded-[0.6em] w-[41.7em] cursor-pointer $`}
          >
            <article className="flex justify-between items-center ">
              <h3 className="text-[1.1em] not-italic font-semibold">
                {element?.question}
              </h3>
              <button
                className={`${isOpenIndex[palabra] ? "rotate-180 transition duration-1200" : "transition duration-1200"}`}
                
              >
                <img src={faqArrowDown} alt="" />
              </button>
            </article>
            {/* {isOpenIndex[palabra] && (
              <article className=''>
                <div className="my-[1em] bg-[#E3DED7] min-w-full h-[1px] "></div>
                <p className="text-[0.75em] not-italic font-normal">
                  {element?.answer}
                </p>
              </article>
            )} */}
            {isOpenIndex[palabra]? 
              <article className='transition-[opacity]  duration-[1200ms] opacity-100'>
                <div className="my-[1em] bg-[#E3DED7] min-w-full h-[1px] "></div>
                <p className="transition-all duration-[1200ms] ease-in-out text-[0.75em] not-italic font-normal h-[70px] ">
                  {element.answer}
                </p>
              </article>
            :<article className='transition-[opacity] duration-[1200ms]  opacity-0  '>
            <p className="transition-[height] duration-[1200ms] ease-in-out opacity-0 text-[0.75em] not-italic font-normal  h-0">
              {element.answer}
            </p>
          </article>}
          </div>
        );
      })}
      <div className="flex items-center gap-[1em]">
        <LinkArrow
          colorArrow={"white"}
          text={"Resolvemos tus dudas"}
          colorText={"white"}
          ruta={"resolvemos"}
        />
      </div>
    </div>
  );
};

export default Faq;
