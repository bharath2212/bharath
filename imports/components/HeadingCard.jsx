import React, { useState } from 'react';

export const HeadingCard = () => {
  return (
    <div>
    <div className='headingCard'>
        <div className="textbackground">
        <h1 className="headingTitle">Heading Card</h1>
        </div>
        <img className="headingImage" src='/img3.jpg' alt="image not loaded" />
    </div>
    </div>
  );
};