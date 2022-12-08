import React from "react";
import Title from "../components/Title";
import numberFive from "../images/numberFive.svg";
import RadioButton from "../components/RadioButton";
import Label from "../components/Label";
import Steps from "../components/StepsBox/Steps";
import CounterWithHeading from "../components/CounterWithHeading";
import BackButton from "../components/BackButton";
import NextButton from "../components/NextButton";

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

                  <div className="flex items-start mt-2">
                    <div>
                    <input className="radioCounter" type="radio" name="payment" id="card" />
                    <label className="mylabel" for="card">
                      <span>1</span>
                    </label>
                    </div>
                   <div>
                   <input className="radioCounter" type="radio" name="payment" id="cash" />
                    <label className="mylabel" for="cash">
                      <span>2</span>
                    </label>
                   </div>
                  </div>
                </div>

                {/* RADIO BUTTONS */}
                <div>
                  <Label name={"How is your work-life balance on 1-5 scale?"} />

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

        <Steps
          stepOneColor={"bg-greenNormal"}
          stepTwoColor={"bg-greenNormal"}
          stepThreeColor={"bg-greenNormal"}
          stepFourColor={"bg-greenNormal"}
          stepFiveColor={"bg-[#BDBCBC]"}
        />
      </div>
    </>
  );
}

export default Evaluation5;
