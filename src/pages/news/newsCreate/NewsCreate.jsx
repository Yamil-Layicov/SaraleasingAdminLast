import { NavLink, useNavigate } from "react-router-dom";
import "./newsCreate.scss";
import { IoMdReturnLeft } from "react-icons/io";
import { IoCloudUploadOutline } from "react-icons/io5";
import { useState } from "react";
import api from "../../../api/posts";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import NavButton from "../../../ui/navButton/NavButton";

const NewsCreate = () => {
  const [image, setImage] = useState(null);
  const [previousImage, setPreviousImage] = useState("");

  const [azText, setAzText] = useState("");
  const [enText, setEnText] = useState("");
  const [ruText, setRuText] = useState("");
  const [az_title, setAz_title] = useState("");
  const [en_title, setEn_title] = useState("");
  const [ru_title, setRu_title] = useState("");

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
    formData.append("az_text", azText);
    formData.append("en_text", enText);
    formData.append("ru_text", ruText);
    formData.append("az_title", az_title);
    formData.append("en_title", en_title);
    formData.append("ru_title", ru_title);
    formData.append("image", image);

    try {
      await api.post("news", formData);
      navigate("/news");
      toast.success("Xeber uğurla yaradıldı");
    } catch (error) {
      toast.error("Xeber yaratmaq alınmadı");
    }
  };

  const mutation = useMutation(createSlider);

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate();
  };

  return (
    <div className="newsCreate">
      <div className="insideSlider">
        <div className="sliderHeader">
          <h4>Yeni xəbər</h4>
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
                <span className="text">Şəkil</span>
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
                <h6>Az dilində</h6>
                <label htmlFor="azText">Başlıq</label>
                <textarea
                  id="azText"
                  value={az_title}
                  onChange={(e) => setAz_title(e.target.value)}
                  cols="30"
                  rows="6"
                ></textarea>
              </div>
              <div className="formBox">
                <h6>English</h6>
                <label htmlFor="enText">Title</label>
                <textarea
                  id="enText"
                  value={en_title}
                  onChange={(e) => setEn_title(e.target.value)}
                  cols="30"
                  rows="6"
                ></textarea>
              </div>
              <div className="formBox">
                <h6>Русский</h6>
                <label htmlFor="ruText">Заголовок</label>
                <textarea
                  id="ruText"
                  value={ru_title}
                  onChange={(e) => setRu_title(e.target.value)}
                  cols="30"
                  rows="6"
                ></textarea>
              </div>
            </div>
            <div className="formBoxes">
              <div className="formBox">
                <h6>Az dilində</h6>
                <label htmlFor="azText">Məzmun</label>
                <textarea
                  id="azText"
                  value={azText}
                  onChange={(e) => setAzText(e.target.value)}
                  cols="30"
                  rows="6"
                ></textarea>
              </div>
              <div className="formBox">
                <h6>English</h6>
                <label htmlFor="enText">Content</label>
                <textarea
                  id="enText"
                  value={enText}
                  onChange={(e) => setEnText(e.target.value)}
                  cols="30"
                  rows="6"
                ></textarea>
              </div>
              <div className="formBox">
                <h6>Русский</h6>
                <label htmlFor="ruText">Содержание</label>
                <textarea
                  id="ruText"
                  value={ruText}
                  onChange={(e) => setRuText(e.target.value)}
                  cols="30"
                  rows="6"
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

export default NewsCreate;
