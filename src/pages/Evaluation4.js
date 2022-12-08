import React from "react";
import Title from "../components/Title";
import numberFour from "../images/numberFour.svg";
import RadioButton from "../components/RadioButton";
import Label from "../components/Label";
import Steps from "../components/StepsBox/Steps";
import CounterWithHeading from "../components/CounterWithHeading";
import BackButton from "../components/BackButton";
import NextButton from "../components/NextButton";

function Evaluation4() {
  return (
    <>
      {/* TOP TITLE */}
      <Title name={"We are almost there!"} />

      <div className="flex justify-between">
        {/* LEFT QUESTIONS SECTION */}
        <div className="w-[38%] pt-8">
          {/* COUNTER - HEADING */}
          <CounterWithHeading
            numberImg={numberFour}
            name={"Recent Health Results"}
          />

          <div className="mb-11 bg-[#00cf5f0a] border-l-[9px] border-greenNormal pt-[30px] px-8 pb-14">
            <form>
              <div className="space-y-4 mb-5">
                {/* RADIO BUTTONS */}
                <div>
                  <Label name={"How is your Cholesterol values?"} />

                  <div className="flex items-start flex-col mt-2">
                    <RadioButton
                      radioButtonFor={"cholesterol"}
                      id={">240"}
                      htmlFor={">240"}
                      name={">240"}
                    />

                    <RadioButton
                      radioButtonFor={"cholesterol"}
                      id={"200-239"}
                      htmlFor={"200-239"}
                      name={"200-239"}
                    />

                    <RadioButton
                      radioButtonFor={"cholesterol"}
                      id={"<200"}
                      htmlFor={"<200"}
                      name={"<200"}
                    />
                  </div>
                </div>

                {/* RADIO BUTTONS */}
                <div>
                  <Label name={"How is your blood pressure values?"} />

                  <div className="flex items-start flex-col mt-2">
                    <RadioButton
                      radioButtonFor={"bloodPressure"}
                      id={">140/90"}
                      htmlFor={">140/90"}
                      name={">140/90"}
                    />

                    <RadioButton
                      radioButtonFor={"bloodPressure"}
                      id={"120-139/80-89"}
                      htmlFor={"120-139/80-89"}
                      name={"120-139/80-89"}
                    />

                    <RadioButton
                      radioButtonFor={"bloodPressure"}
                      id={">120/80"}
                      htmlFor={">120/80"}
                      name={">120/80"}
                    />
                  </div>
                </div>

                {/* RADIO BUTTONS */}
                <div>
                  <Label
                    name={"Is your fasting Blood sugar greater than 100mg/dl?"}
                  />

                  <div className="flex items-start flex-col mt-2">
                    <RadioButton
                      radioButtonFor={"bloodSugar"}
                      id={"Yes, less than 100mg/dl"}
                      htmlFor={"Yes, less than 100mg/dl"}
                      name={"Yes, less than 100mg/dl"}
                    />

                    <RadioButton
                      radioButtonFor={"bloodSugar"}
                      id={"No, more than 100mg/dl"}
                      htmlFor={"No, more than 100mg/dl"}
                      name={"No, more than 100mg/dl"}
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>

          <div className="flex justify-between items-center">
            {/* BACK BUTTON */}
            <BackButton goTo={"/evaluation3"} />

            {/* NEXT BUTTON */}
            <NextButton goTo={"/evaluation5"} />
          </div>
        </div>

        {/* RIGHT STEPS */}
        <Steps
          stepOneColor={"bg-greenNormal"}
          stepTwoColor={"bg-greenNormal"}
          stepThreeColor={"bg-greenNormal"}
          stepFourColor={"bg-greenNormal"}
          stepFiveColor={"bg-[#BDBCBC]"}
          buttonBgColor={"#D9D9D9"}
        />
      </div>
    </>
  );
}

export default Evaluation4;
