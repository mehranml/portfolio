import React from "react";

// Icons
import {
  FaLinkedin,
  FaGithubSquare,
  FaTwitterSquare,
  FaExternalLinkAlt,
} from "react-icons/fa";

// Styles
import "./style.css";

// Store
import { useStore } from "../../../store/store";

const TeamCarouselItem = ({ member }) => {
  const updateCursorType = useStore((store) => store.updateCursorType);

  return (
    <div className="carousel">
not in use
    </div>
  );
};

export default TeamCarouselItem;
