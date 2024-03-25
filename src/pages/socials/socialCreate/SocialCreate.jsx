import {  useNavigate } from "react-router-dom";
import "./socialCreate.scss";
import { IoMdReturnLeft } from "react-icons/io";
import { IoCloudUploadOutline } from "react-icons/io5";
import { useState } from "react";
import api from "../../../api/posts";
import { useMutation,} from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import NavButton from "../../../ui/navButton/NavButton";

const SocialCreate = () => {
  const [image, setImage] = useState(null);
  const [previousImage, setPreviousImage] = useState("");
  const [url, setUrl] = useState("");

  const navigate = useNavigate();

  const handleImage = (e) => {
    const file = e.target.files[0];
    setImage(file);

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        setPreviousImage(e.target.result);
      };

      reader.readAsDataURL(file);
    } else {
      setPreviousImage(null);
    }
  };

  const createSlider = async () => {
    const formData = new FormData();
    formData.append("url", url);
    formData.append("logo", image);

    try {
      await api.post("socials", formData);
      navigate("/socials");
      toast.success("Uğurla yaradıldı");
    } catch (error) {
      toast.error("Xəta baş verdi ");
    }
  };

  const mutation = useMutation(createSlider);

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate();
  };

  return (
    <div className="socialCreate">
      <div className="insideSlider">
        <div className="sliderHeader">
          <h4>Yeni sosial</h4>
          <NavButton toNavigate={-1}>
            <span>
              <IoMdReturnLeft />
            </span>
            <span>Geri</span>
          </NavButton>
        </div>
        <div className="imageFile">
          <div className="logoBox">
            <label htmlFor="logo">
              <div className="logo">
                <span>
                  <IoCloudUploadOutline />{" "}
                </span>
                <span className="text">Logo</span>
              </div>
              <img src={previousImage || image} alt="" />
            </label>
            <input
              id="logo"
              name="logo"
              type="file"
              accept="image/*"
              onChange={handleImage}
            />
          </div>
        </div>
        <hr />
        <div className="langBoxes">
          <form onSubmit={handleSubmit}>
            <div className="formBoxes">
              <div className="formBox">
                <label htmlFor="azText">Keçid linki</label>
                <textarea
                  id="azText"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  cols="60"
                  rows="1"
                ></textarea>
              </div>
            </div>
            <div className="addBtn">
              <button type="submit">Əlavə et</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SocialCreate;
