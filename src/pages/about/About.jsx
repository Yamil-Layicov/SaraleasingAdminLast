import "./about.scss";
import { IoCloudUploadOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import api from "../../api/posts";
import { useMutation } from "@tanstack/react-query";

const About = () => {
  const [image, setImage] = useState(null);
  const [previousImage, setPreviousImage] = useState(null);
  const [azContent, setAzContent] = useState("");
  const [enContent, setEnContent] = useState("");
  const [ruContent, setRuContent] = useState("");

  useEffect(() => {
    const fetchAbout = async () => {
      try {
        const response = await api.get("about");
        setAzContent(response.data.az_content);
        setEnContent(response.data.en_content);
        setRuContent(response.data.ru_content);
        setPreviousImage(response.data.image);
      } catch (error) {
        toast.error("Haqqımızda məlumatları gətirilən zaman xəta baş verdi");
      }
    };

    fetchAbout();
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
    formData.append("az_content", azContent);
    formData.append("en_content", enContent);
    formData.append("ru_content", ruContent);
    if (image) {
      formData.append("image", image);
    }

    try {
      await api.post("about", formData);
      toast.success("Məlumatlar redaktə olundu");
    } catch (error) {
      toast.error("Məlumatlar redaktə olunmadı");
    }
  };

  const mutation = useMutation(editAbout);

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate();
  };

  return (
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
                    <IoCloudUploadOutline />
                  </span>
                  <span className="text">Şəkil</span>
                </div>
                <img src={previousImage} alt="" />
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
                value={azContent}
                onChange={(e) => setAzContent(e.target.value)}
              ></textarea>
            </div>
            <div className="formBox">
              <h6>English</h6>
              <label htmlFor="enText">Content</label>
              <textarea
                id="enText"
                cols="45"
                rows="8"
                value={enContent}
                onChange={(e) => setEnContent(e.target.value)}
              ></textarea>
            </div>
            <div className="formBox">
              <h6>Русский</h6>
              <label htmlFor="ruText">Содержание</label>
              <textarea
                id="ruText"
                cols="45"
                rows="8"
                value={ruContent}
                onChange={(e) => setRuContent(e.target.value)}
              ></textarea>
            </div>
          </div>
          <div className="addBtn">
            <button type="submit">Redaktə et</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default About;
