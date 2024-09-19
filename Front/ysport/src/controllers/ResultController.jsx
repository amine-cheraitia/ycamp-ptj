// // Toujours mettre export devant variables ou fonctions
// export function test(){
//     return "You are in the Function in Result Controller";
// };

// export const text = "Test ResultController";

// #################################
//    Start Controller Project    //
// #################################

export const activeFilter = (icon) => {

    if (document.querySelector(`.${icon}`).classList.contains("active")) {
      document.querySelector(`.${icon}`).classList.remove("active");
      return;
    } else {
      document.querySelector(`.${icon}`).classList.add("active");
    }
  };