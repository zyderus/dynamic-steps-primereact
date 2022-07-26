import React from "react";
import { useDispatch } from "react-redux";
import { actions } from "../app/steps/slice";
import { Button } from "primereact/button";
import Stepper from "../components/stepper";
import Toggles from "../components/toggles";

const MultistepContainer = () => {
  const dispatch = useDispatch();
  return (
    <div className='flex flex-column gap-4'>
      <h1>Primereact Steps</h1>
      <Button
        className='w-20rem justify-content-center align-self-center'
        onClick={() => dispatch(actions.resetItems())}
        label='Click to Reset'
      />
      <Toggles />
      <Stepper />
    </div>
  );
};

export default MultistepContainer;
