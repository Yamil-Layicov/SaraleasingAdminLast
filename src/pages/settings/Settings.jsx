// import "./settings.scss";
// import { IoMdReturnLeft } from "react-icons/io";
// import { IoCloudUploadOutline } from "react-icons/io5";
// import { useState } from "react";
// import { toast } from "react-hot-toast";
// import { NavLink } from "react-router-dom";

// const ProductCreate = () => {

//   const [image, setImage] = useState(null);
//   const [previousImage, setPreviousImage] = useState(null);

//   const handleImage = (e) => {
//     const file = e.target.files[0];
//     setImage(file);

//     if (file) {
//       const reader = new FileReader();

//       reader.onload = (e) => {
//         setPreviousImage(e.target.result);
//       };

//       reader.readAsDataURL(file);
//     } else {
//       setPreviousImage(null);
//     }
//   };

//   const handleSubmit = () => {}

//   return (
//     <>
//       <div className="adminSlider">
//         <div className="insideSlider">
//           <div className="langBoxes">
//             <form onSubmit={handleSubmit}>
//               <div className="imageFile">
//                 <div className="logoBox">
//                   <label htmlFor="logo">
//                     <div className="logo">
//                       <span>
//                         <IoCloudUploadOutline />{" "}
//                       </span>
//                       <span className="text">Şəkil</span>
//                     </div>
//                     <img src={previousImage || image} alt="" />
//                   </label>
//                   <input
//                     id="logo"
//                     name="logo"
//                     type="file"
//                     accept="image/*"
//                     onChange={handleImage}
//                   />
//                 </div>
//               </div>
//               <div className="formBoxes">
//                 <div className="formBox">
//                   <h6>Az dilində</h6>
//                   <label htmlFor="azText">Təsvir</label>
//                   <textarea
//                     id="azText"
//                     cols="30"
//                     rows="6"
//                   ></textarea>
//                 </div>
//                 <div className="formBox">
//                   <h6>English</h6>
//                   <label htmlFor="enText">Description</label>
//                   <textarea
//                     id="enText"
//                     cols="30"
//                     rows="6"
//                   ></textarea>
//                 </div>
//                 <div className="formBox">
//                   <h6>Русский</h6>
//                   <label htmlFor="ruText">Описание</label>
//                   <textarea
//                     id="ruText"
//                     cols="30"
//                     rows="6"
//                   ></textarea>
//                 </div>
//               </div>
//               <div className="addBtn">
//                 <button type="submit">Əlavə et</button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ProductCreate;

import './settings.scss';
const Settings = () => {
  return (
    <div className="settings">
      <h5> Müvəqqəti olaraq işləmir </h5>
    </div>
  );
};

export default Settings;
