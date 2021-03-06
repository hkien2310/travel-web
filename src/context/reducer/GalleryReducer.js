import { CLOSE_LIGHTBOX, OPEN_LIGHTBOX } from "../type/GalleryType";
const GalleryReducer = (state, action) => {
  if (action.type === OPEN_LIGHTBOX) {
    return {
      ...state,
      lightBoxStatus: true,
      currentLightBox: action.payload,
    };
  } else if (action.type === CLOSE_LIGHTBOX) {
    return {
      ...state,
      lightBoxStatus: false,
      currentLightBox: {},
    };
  } else {
    return state;
  }
};
export default GalleryReducer;
