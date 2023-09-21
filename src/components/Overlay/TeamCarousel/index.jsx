import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cameraMovementSheet } from "../../../animation/theatre";

// Styles
import "./style.css";
import TeamCarouselItem from "../TeamCarouselItem";

// Team data
import teamData from "./teamData";

const TeamCarousel = () => {

  return (
    <motion.div className="carousel-wrapper">
      <TeamCarouselItem key={`member-0`} member={teamData[0]} />
    </motion.div>
  );
};

export default TeamCarousel;
