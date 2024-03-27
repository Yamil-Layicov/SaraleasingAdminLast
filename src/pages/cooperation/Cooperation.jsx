import "./cooperation.scss";
import { IoCloudUploadOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import api from "../../api/posts";
import { useMutation } from "@tanstack/react-query";

const Cooperation = () => {
  const [image, setImage] = useState(null);
  const [previousImage, setPreviousImage] = useState(null);
  const [az_text, setAz_text] = useState("");
  const [en_text, setEn_text] = useState("");
  const [ru_text, setRu_text] = useState("");

  useEffect(() => {
    const fetchAbout = async () => {
      try {
        const response = await api.get("cooperation");
        setAz_text(response.data.az_text);
        setEn_text(response.data.en_text);
        setRu_text(response.data.ru_text);
        setPreviousImage(response.data.image);
      } catch (error) {
        toast.error("Məlumatları gətirilən zaman xəta baş verdi");
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
    formData.append("az_text", az_text);
    formData.append("en_text", en_text);
    formData.append("ru_text", ru_text);
    if (image) {
      formData.append("image", image);
    }

    try {
      await api.post("cooperation", formData);
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
    <div className="cooperation">
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
                value={az_text}
                onChange={(e) => setAz_text(e.target.value)}
              ></textarea>
            </div>
            <div className="formBox">
              <h6>English</h6>
              <label htmlFor="enText">Content</label>
              <textarea
                id="enText"
                cols="45"
                rows="8"
                value={en_text}
                onChange={(e) => setEn_text(e.target.value)}
              ></textarea>
            </div>
            <div className="formBox">
              <h6>Русский</h6>
              <label htmlFor="ruText">Содержание</label>
              <textarea
                id="ruText"
                cols="45"
                rows="8"
                value={ru_text}
                onChange={(e) => setRu_text(e.target.value)}
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

export default Cooperation;
