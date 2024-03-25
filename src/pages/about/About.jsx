import "./about.scss";
import { IoCloudUploadOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import api from "../../api/posts";
import { useMutation } from "@tanstack/react-query";

const About = () => {
  const [image, setImage] = useState(null);
  const [previousImage, setPreviousImage] = useState(null);
  const [az_content, setaz_content] = useState("");
  const [en_content, seten_content] = useState("");
  const [ru_content, setru_content] = useState("");

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const response = await api.get(`about`);
        setaz_content(response.data.az_content);
        seten_content(response.data.en_content);
        setru_content(response.data.ru_content);
        setImage(response?.data?.image);
      } catch (error) {
        toast.error(error);
      }
    };

    fetchSettings();
  }, []);

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

  const editAbout = async () => {
    const formData = new FormData();
    formData.append("az_content", az_content);
    formData.append("en_content", en_content);
    formData.append("ru_content", ru_content);
    formData.append("image", image);

    try {
      await api.post("about", formData);
      toast.success("Redaktə olundu");
    } catch (error) {
      toast.error("Redaktə olumadı");
    }
  };

  const mutation = useMutation(editAbout);

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate();
  };

  return (
    <>
      <div className="about">
        <div className="insideSlider">
          <h5>Haqqımızda</h5>
          <hr />
          <form onSubmit={handleSubmit}>
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
            <div className="formBoxes">
              <div className="formBox">
                <h6>Az dilində</h6>
                <label htmlFor="azText">Məzmun</label>
                <textarea
                  id="azText"
                  cols="45"
                  rows="8"
                  value={az_content}
                  onChange={(e) => setaz_content(e.target.value)}
                ></textarea>
              </div>
              <div className="formBox">
                <h6>English</h6>
                <label htmlFor="enText">Content</label>
                <textarea
                  id="enText"
                  cols="45"
                  rows="8"
                  value={en_content}
                  onChange={(e) => seten_content(e.target.value)}
                ></textarea>
              </div>
              <div className="formBox">
                <h6>Русский</h6>
                <label htmlFor="ruText">Содержание</label>
                <textarea
                  id="ruText"
                  cols="45"
                  rows="8"
                  value={ru_content}
                  onChange={(e) => setru_content(e.target.value)}
                ></textarea>
              </div>
            </div>
            <div className="addBtn">
              <button type="submit">Əlavə et</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default About;
