import React from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { actions } from "../app/steps/slice";
import { Button } from "primereact/button";
import Stepper from "../components/stepper";
import Toggles from "../components/toggles";
import Controls from "../components/controls";

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

      <Routes>
        <Route path='/' element={<h1>All Routes</h1>} />
        <Route path='personal' element={<h1>PERSONAL</h1>} />
        <Route path='seat' element={<h1>SEAT</h1>} />
        <Route path='payment' element={<h1>PAYMENT</h1>} />
        <Route path='confirmation' element={<h1>CONFIRMATION</h1>} />
      </Routes>

      <Controls />
    </div>
  );
};

export default MultistepContainer;
