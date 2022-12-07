import React from "react";
import Title from "../components/Title";
import numberOne from "../images/numberOne.svg";
import user_icon from "../images/user_icon.svg";
import arrow_icon from "../images/arrow_icon.svg";
import RadioButton from "../components/RadioButton";
import Label from "../components/Label";
import Steps from "../components/StepsBox/Steps";
import CounterWithHeading from "../components/CounterWithHeading";
import NextButton from "../components/NextButton";

function Evaluation1() {
  return (
    <>
      {/* TOP TITLE */}
      <Title name={"Let’s get started"} />

      <div className="flex items-center justify-between">
        {/* LEFT QUESTIONS SECTION */}
        <div className="w-[38%]">
          {/* COUNTER - HEADING */}
          <CounterWithHeading numberImg={numberOne} name={"Key Information"}/>

          <div className="mb-11 bg-[#00cf5f0a] border-l-[9px] border-greenNormal pt-[30px] px-8 pb-14">
            <form>
              <div className="space-y-4 mb-5">
                {/* INPUT */}
                <div className="max-w-[237px]">
                  <Label name={"Name"} />
                  <div className="mt-[11px] relative">
                    <img
                      src={user_icon}
                      className="w-[22px] h-[20px] absolute top-1/2 left-[5%] translate-x-0 -translate-y-1/2"
                      alt="user-icon"
                    />
                    <input
                      className="border-[1.5px] border-[#92929257] w-full py-1.5 px-9 placeholder:text-[#8080806b]"
                      placeholder="Name"
                    />
                  </div>
                </div>

                {/* INPUT */}
                <div className="max-w-[237px]">
                  <Label name={"Surname"} />
                  <div className="mt-[11px] relative">
                    <img
                      src={user_icon}
                      className="w-[22px] h-[20px] absolute top-1/2 left-[5%] translate-x-0 -translate-y-1/2"
                      alt="user-icon"
                    />
                    <input
                      className="border-[1.5px] border-[#92929257] w-full py-1.5 px-9 placeholder:text-[#8080806b]"
                      placeholder="Surname"
                    />
                  </div>
                </div>

                {/* INPUT */}
                <div className="max-w-[237px]">
                  <Label name={"Age"} />
                  <div className="mt-[11px] relative">
                    <img
                      src={user_icon}
                      className="w-[22px] h-[20px] absolute top-1/2 left-[5%] translate-x-0 -translate-y-1/2"
                      alt="user-icon"
                    />
                    <input
                      className="border-[1.5px] border-[#92929257] w-full py-1.5 px-9 placeholder:text-[#8080806b]"
                      placeholder="Age"
                    />
                  </div>
                </div>
              </div>

              {/* GENDER */}
              <div className="mb-8">
                <div className="flex justify-between items-center">
                  <Label name={"Gender"} />

                  <span className="text-[#4884FA] text-[12px] leading-[12px] cursor-pointer">
                    Why do we need your gender?
                  </span>
                </div>

                <div className="flex items-center">
                  <RadioButton
                    radioButtonFor={"gender"}
                    id={"Female"}
                    htmlFor={"Female"}
                    name={"Female"}
                  />

                  <div className="ml-7">
                    <RadioButton
                      radioButtonFor={"gender"}
                      id={"Male"}
                      htmlFor={"Male"}
                      name={"Male"}
                    />
                  </div>
                </div>
              </div>

              {/* PRIVACY POLICY */}
              <div className="mt-7">
                <Label name={"Privacy Policy"} />

                <div className="mt-2.5 flex items-center">
                  <input
                    name="radio-button"
                    id="PrivacyPolicy"
                    type="checkbox"
                    value=""
                    className="w-[1.05rem] h-[0.95rem] text-black bg-white rounded-[3px] border border-[#92929257] focus:ring-[#faf4ed]"
                    style={{ border: "1.5px solid #92929257" }}
                  />
                  <label
                    htmlFor="PrivacyPolicy"
                    className="ml-3 text-blueLight text-[12px] leading-[18px] font-normal"
                  >
                    I have read accepy Soya’s Privacy Policy and User Agreement
                  </label>
                </div>
              </div>
            </form>
          </div>

          {/* NEXT BUTTON */}
          <NextButton goTo={"/evaluation2"}/>
        </div>

        {/* RIGHT STEPS */}
        {/* <div className="bg-[#16195e0a] rounded-[10px] w-[50%] pt-[33px] px-12 pb-11">
          <div className="space-y-2.5 mb-32">
           
            <div className="flex items-start">
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center bg-greenNormal w-[42px] h-[42px] rounded-full">
                  <img src={numberOne} alt="numberOne-img" />
                </div>
                <div className="mt-3">
                  <img src={dashed_line} alt="dashed_line" />
                </div>
              </div>
              <div className="ml-5 pt-1.5">
                <h4 className="font-bold text-[16px] leading-[28px] text-black">
                  Key Information
                </h4>
                <p className="font-bold text-[16px] leading-[28px] text-[#929292]">
                  We are happy to get to know you better for your first Soya
                  assessment.
                </p>
              </div>
            </div>

           
            <div className="flex items-start">
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center bg-[#BDBCBC] w-[42px] h-[42px] rounded-full">
                  <img src={numberTwo} alt="numberTwo-img" />
                </div>
                <div className="mt-3">
                  <img src={dashed_line} alt="dashed_line" />
                </div>
              </div>
              <div className="ml-5 pt-1.5">
                <h4 className="font-bold text-[16px] leading-[28px] text-black">
                  Health Literacy
                </h4>
                <p className="font-bold text-[16px] leading-[28px] text-[#929292]">
                  Here we will start with some general questions. Then on the
                  next steps, we will require more detailed measurements.
                </p>
              </div>
            </div>

           
            <div className="flex items-start">
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center bg-[#BDBCBC] w-[42px] h-[42px] rounded-full">
                  <img src={numberTwo} alt="numberTwo-img" />
                </div>
                <div className="mt-3">
                  <img src={dashed_line} alt="dashed_line" />
                </div>
              </div>
              <div className="ml-5 pt-1.5">
                <h4 className="font-bold text-[16px] leading-[28px] text-black">
                  Health Literacy
                </h4>
                <p className="font-bold text-[16px] leading-[28px] text-[#929292]">
                  Here we will start with some general questions. Then on the
                  next steps, we will require more detailed measurements.
                </p>
              </div>
            </div>

           
            <div className="flex items-start">
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center bg-[#BDBCBC] w-[42px] h-[42px] rounded-full">
                  <img src={numberTwo} alt="numberTwo-img" />
                </div>
                <div className="mt-3">
                  <img src={dashed_line} alt="dashed_line" />
                </div>
              </div>
              <div className="ml-5 pt-1.5">
                <h4 className="font-bold text-[16px] leading-[28px] text-black">
                  Health Literacy
                </h4>
                <p className="font-bold text-[16px] leading-[28px] text-[#929292]">
                  Here we will start with some general questions. Then on the
                  next steps, we will require more detailed measurements.
                </p>
              </div>
            </div>

           
            <div className="flex items-start">
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center bg-[#BDBCBC] w-[42px] h-[42px] rounded-full">
                  <img src={numberTwo} alt="numberTwo-img" />
                </div>
              </div>
              <div className="ml-5 pt-1.5">
                <h4 className="font-bold text-[16px] leading-[28px] text-black">
                  Health Literacy
                </h4>
                <p className="font-bold text-[16px] leading-[28px] text-[#929292]">
                  Here we will start with some general questions. Then on the
                  next steps, we will require more detailed measurements.
                </p>
              </div>
            </div>
          </div>
          <div className="px-6">
            <button className="py-1.5 w-full bg-[#D9D9D9] rounded-[10px] font-semibold text-[20px] text-white leading-[25px]">
              Take me to my Dashboard
            </button>
          </div>{" "}
        </div> */}

        <Steps
          stepOneColor={"bg-greenNormal"}
          stepTwoColor={"bg-[#BDBCBC]"}
          stepThreeColor={"bg-[#BDBCBC]"}
          stepFourColor={"bg-[#BDBCBC]"}
          stepFiveColor={"bg-[#BDBCBC]"}
        />
      </div>
    </>
  );
}

export default Evaluation1;
