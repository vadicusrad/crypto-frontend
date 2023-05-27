import React from 'react';
import { useNavigate } from 'react-router-dom';
import AppButton from '../../components/AppButton';

const SingleAsset = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1>SingleAsset</h1>
      <AppButton onClick={() => navigate(-1)}>Go back</AppButton>
    </>
  );
};

export default SingleAsset;
