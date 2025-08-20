"use client";

import React from "react";
import Lottie from "lottie-react";

import animationData from '../../../public/animation/horse-logo.json'

export default function LottiePlayer() {
  return (
    <div className="md:w-24 md:h-24 h-16 w-16">
      <Lottie animationData={animationData} loop={true} autoplay={true} />
    </div>
  );
}
