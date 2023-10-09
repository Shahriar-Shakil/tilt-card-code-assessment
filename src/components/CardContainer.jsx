import React from "react";
import img1 from "../assets/image/1.svg";
import img2 from "../assets/image/2.svg";
import img3 from "../assets/image/3.svg";
import TiltContainer from "./TiltContainer";
import Button from "./Button";

export default function CardContainer() {
  return (
    <section className=" relative z-50 my-10 ">
      <div className="max-w-6xl mx-auto">
        <div className="container px-4">
          <h2 className="text-4xl font-bold text-white text-center py-10">
            Data Automators
          </h2>
        </div>
        <div className="flex flex-col md:flex-row gap-5 px-10 md:px-0">
          <TiltContainer>
            <div className=" px-10 py-10 space-y-10 bg-gray-100 flex flex-col">
              <div className="max-h-64 h-52 space-y-10">
                <h2 className="text-[22px] font-semibold">
                  🚀 Use our readymade solutions
                </h2>
                <p className="flex-1">
                  No need to waste your time using other complex and expensive
                  solutions. Use our readymade API that will just do the job for
                  you. Completely free to self host without any pain.
                </p>
              </div>

              <div>
                <img className="h-64" src={img1} alt="" />
              </div>
              <Button color="primary">
                Introducing <br />
                ScraperLix
              </Button>
            </div>
          </TiltContainer>
          <TiltContainer>
            <div className=" px-10 py-10 space-y-10 bg-gray-100 flex flex-col">
              <div className="max-h-64 h-52 space-y-10">
                <h2 className="text-[22px] font-semibold">
                  ⚡️ Learn to build with us
                </h2>
                <p className="flex-1">
                  Wanna know how to do it? Join our live classes, workshops and
                  courses. We will do it together, step by step. You just have
                  to spend some quality time with us.
                </p>
              </div>

              <div>
                <img className="h-64" src={img2} alt="" />
              </div>

              <Button color="purple">Check out Code Eating Ants</Button>
            </div>
          </TiltContainer>
          <TiltContainer>
            <div className=" px-10 py-10 space-y-10 bg-gray-100 flex flex-col">
              <div className="max-h-64 h-52 space-y-10">
                <h2 className="text-[22px] font-semibold">
                  👩‍🎨 Let us build for you
                </h2>
                <p className="flex-1">
                  Don't have time to use readymade solutions or even learn it
                  yourself? We got you covered! Tell us what you need and we
                  will work together on the right solution for you.
                </p>
              </div>

              <div>
                <img className="h-64" src={img3} alt="" />
              </div>

              <Button color="green">
                Visit <br /> SoftwareSheba
              </Button>
            </div>
          </TiltContainer>
        </div>
      </div>
    </section>
  );
}
