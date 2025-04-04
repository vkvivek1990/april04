import { loaderOn, loaderOff } from "./Loader.js";
// export const InterStialHandler = (callBack, noLoader = false) => {
//   return new Promise((resolve, reject) => {
//     !noLoader && loaderOn();
//     callBack()
//       .then((res) => {
//         !noLoader && loaderOff();
//         resolve(res);
//       })
//       .catch((err) => {
//         !noLoader && loaderOff();
//         reject(err);
//       });
//   });
// };
