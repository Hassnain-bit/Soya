import React from "react";
import Title from "../components/Title";
import numberFive from "../images/numberFive.svg";
import RadioButton from "../components/RadioButton";
import Label from "../components/Label";
import Steps from "../components/StepsBox/Steps";
import CounterWithHeading from "../components/CounterWithHeading";
import BackButton from "../components/BackButton";
import NextButton from "../components/NextButton";
import CounterRadioButton from "../components/CounterRadioButton";

function Evaluation5() {
  return (
    <>
      {/* TOP TITLE */}
      <Title name={"Finally!"} />

      <div className="flex justify-between">
        {/* LEFT QUESTIONS SECTION */}
        <div className="w-[38%] pt-8">
          {/* COUNTER - HEADING */}
          <CounterWithHeading
            numberImg={numberFive}
            name={"Additional Information"}
          />

          <div className="mb-11 bg-[#00cf5f0a] border-l-[9px] border-greenNormal pt-[30px] px-8 pb-14">
            <form>
              <div className="space-y-4 mb-5">
                {/* RADIO BUTTONS */}
                <div>
                  <Label
                    name={"Do you have any other non-communicable diseases?"}
                  />

                  <div className="flex items-start flex-col mt-2">
                    <RadioButton
                      radioButtonFor={"nonCommunicable"}
                      id={"Cardio Vascular Disease"}
                      htmlFor={"Cardio Vascular Disease"}
                      name={"Cardio Vascular Disease"}
                    />

                    <RadioButton
                      radioButtonFor={"nonCommunicable"}
                      id={"Respiratory disease"}
                      htmlFor={"Respiratory disease"}
                      name={"Respiratory disease"}
                    />

                    <RadioButton
                      radioButtonFor={"nonCommunicable"}
                      id={"Diabetes"}
                      htmlFor={"Diabetes"}
                      name={"Diabetes"}
                    />

                    <RadioButton
                      radioButtonFor={"nonCommunicable"}
                      id={"Cancer"}
                      htmlFor={"Cancer"}
                      name={"Cancer"}
                    />
                  </div>
                </div>

                {/* RADIO BUTTONS */}
                <div>
                  <Label name={"How is your stress level on 1-5 scale?"} />

                  <div className="flex items-start mt-2 space-x-1">
                    <CounterRadioButton
                      radioButtonFor={"stressLevel"}
                      id={"1"}
                      htmlFor={"1"}
                      number={"1"}
                    />

                    <CounterRadioButton
                      radioButtonFor={"stressLevel"}
                      id={"2"}
                      htmlFor={"2"}
                      number={"2"}
                    />

                    <CounterRadioButton
                      radioButtonFor={"stressLevel"}
                      id={"3"}
                      htmlFor={"3"}
                      number={"3"}
                    />

                    <CounterRadioButton
                      radioButtonFor={"stressLevel"}
                      id={"4"}
                      htmlFor={"4"}
                      number={"4"}
                    />

                    <CounterRadioButton
                      radioButtonFor={"stressLevel"}
                      id={"5"}
                      htmlFor={"5"}
                      number={"5"}
                    />
                  </div>
                </div>

                {/* RADIO BUTTONS */}
                <div>
                  <Label name={"How is your work-life balance on 1-5 scale?"} />

                  <div className="flex items-start mt-2 space-x-1">
                    {/* COUNTER RADIO BUTTON */}
                    <CounterRadioButton
                      radioButtonFor={"workLife"}
                      id={"1"}
                      htmlFor={"1"}
                      number={"1"}
                    />

                    {/* COUNTER RADIO BUTTON */}
                    <CounterRadioButton
                      radioButtonFor={"workLife"}
                      id={"2"}
                      htmlFor={"2"}
                      number={"2"}
                    />

                    {/* COUNTER RADIO BUTTON */}
                    <CounterRadioButton
                      radioButtonFor={"workLife"}
                      id={"3"}
                      htmlFor={"3"}
                      number={"3"}
                    />

                    {/* COUNTER RADIO BUTTON */}
                    <CounterRadioButton
                      radioButtonFor={"workLife"}
                      id={"4"}
                      htmlFor={"4"}
                      number={"4"}
                    />

                    {/* COUNTER RADIO BUTTON */}
                    <CounterRadioButton
                      radioButtonFor={"workLife"}
                      id={"5"}
                      htmlFor={"5"}
                      number={"5"}
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>

          <div className="flex justify-between items-center">
            {/* BACK BUTTON */}
            <BackButton goTo={"/evaluation4"} />

            {/* NEXT BUTTON */}
            <NextButton goTo={""} />
          </div>
        </div>

        {/* RIGHT STEPS */}
        <Steps
          stepOneColor={"bg-greenNormal"}
          stepTwoColor={"bg-greenNormal"}
          stepThreeColor={"bg-greenNormal"}
          stepFourColor={"bg-greenNormal"}
          stepFiveColor={"bg-greenNormal"}
          buttonBgColor={"#00CF5F"}
        />
      </div>
    </>
  );
}

export default Evaluation5;
