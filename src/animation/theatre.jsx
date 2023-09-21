import studio from "@theatre/studio";
import extension from "@theatre/r3f/dist/extension";
import { getProject } from "@theatre/core";

import animationState from "./palete.json";

export function initTheatreStudio() {
    if (import.meta.env.DEV) {
    studio.initialize();
    studio.extend(extension);
    studio.ui.hide()
}
}

export const campFireSheet = getProject("Chingu29", {
  state: animationState,
}).sheet("Campfire");

export const cameraMovementSheet = getProject("Chingu29", {
  state: animationState,
}).sheet("CameraMovement");
