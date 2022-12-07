import React from "react";
import Title from "../components/Title";
import numberTwo from "../images/numberTwo.svg";
import RadioButton from "../components/RadioButton";
import Label from "../components/Label";
import Steps from "../components/StepsBox/Steps";
import CounterWithHeading from "../components/CounterWithHeading";
import BackButton from "../components/BackButton";
import NextButton from "../components/NextButton";

function Evaluation2() {
  return (
    <>
      {/* TOP TITLE */}
      <Title name={"Next step"} />

      <div className="flex items-center justify-between">
        {/* LEFT QUESTIONS SECTION */}
        <div className="w-[38%]">
          {/* COUNTER - HEADING */}
          <CounterWithHeading numberImg={numberTwo} name={"Health Literacy"} />

          <div className="mb-11 bg-[#00cf5f0a] border-l-[9px] border-greenNormal pt-[30px] px-8 pb-14">
            <form>
              <div className="space-y-4 mb-5">
                {/* RADIO BUTTONS */}
                <div>
                  <Label name={"Have you had a previous Stroke?"} />

                  <div className="flex items-center mt-2">
                    <RadioButton
                      radioButtonFor={"previousStroke"}
                      id={"Yes"}
                      htmlFor={"Yes"}
                      name={"Yes"}
                    />

                    <div className="ml-7">
                      <RadioButton
                        radioButtonFor={"previousStroke"}
                        id={"No"}
                        htmlFor={"No"}
                        name={"No"}
                      />
                    </div>
                  </div>
                </div>

                {/* RADIO BUTTONS */}
                <div>
                  <Label name={"Do you have a family history of Stroke?"} />

                  <div className="flex items-center mt-2">
                    <RadioButton
                      radioButtonFor={"historyOfStroke"}
                      id={"Yes"}
                      htmlFor={"Yes"}
                      name={"Yes"}
                    />

                    <div className="ml-7">
                      <RadioButton
                        radioButtonFor={"historyOfStroke"}
                        id={"No"}
                        htmlFor={"No"}
                        name={"No"}
                      />
                    </div>
                  </div>
                </div>

                {/* RADIO BUTTONS */}
                <div>
                  <Label name={"Do you have a heart disease?"} />

                  <div className="flex items-center mt-2">
                    <RadioButton
                      radioButtonFor={"heartDisease"}
                      id={"Yes"}
                      htmlFor={"Yes"}
                      name={"Yes"}
                    />

                    <div className="ml-7">
                      <RadioButton
                        radioButtonFor={"heartDisease"}
                        id={"No"}
                        htmlFor={"No"}
                        name={"No"}
                      />
                    </div>
                  </div>
                </div>

                {/* RADIO BUTTONS */}
                <div>
                  <Label name={"Are you overweight?"} />

                  <div className="flex items-center mt-2">
                    <RadioButton
                      radioButtonFor={"overweight"}
                      id={"Yes"}
                      htmlFor={"Yes"}
                      name={"Yes"}
                    />

                    <div className="ml-7">
                      <RadioButton
                        radioButtonFor={"overweight"}
                        id={"No"}
                        htmlFor={"No"}
                        name={"No"}
                      />
                    </div>
                  </div>
                </div>

                {/* RADIO BUTTONS */}
                <div>
                  <Label name={"Do you smoke?"} />

                  <div className="flex items-center mt-2">
                    <RadioButton
                      radioButtonFor={"smoke"}
                      id={"Yes"}
                      htmlFor={"Yes"}
                      name={"Yes"}
                    />

                    <div className="ml-7">
                      <RadioButton
                        radioButtonFor={"smoke"}
                        id={"No"}
                        htmlFor={"No"}
                        name={"No"}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>

          <div className="flex justify-between items-center">
            {/* BACK BUTTON */}
            <BackButton goTo={"/"}/>

            {/* NEXT BUTTON */}
            <NextButton goTo={"/evaluation3"}/>
          </div>
        </div>

        <Steps
          stepOneColor={"bg-greenNormal"}
          stepTwoColor={"bg-greenNormal"}
          stepThreeColor={"bg-[#BDBCBC]"}
          stepFourColor={"bg-[#BDBCBC]"}
          stepFiveColor={"bg-[#BDBCBC]"}
        />
      </div>
    </>
  );
}

export default Evaluation2;
