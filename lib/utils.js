export const getImageSource = (item) => {
  switch (item) {
    case "chicken":
      return require("./../assets/chicken.png");
      break;
    case "steak":
      return require("./../assets/steak.png");
      break;
    case "barbacoa":
      return require("./../assets/barbacoa.png");
      break;
    case "carnitas":
      return require("./../assets/carnitas.png");
      break;
    case "sofritas":
      return require("./../assets/sofritas.png");
      break;
    case "veggie":
      return require("./../assets/veggie.png");
      break;
    default:
      break;
  }
};
