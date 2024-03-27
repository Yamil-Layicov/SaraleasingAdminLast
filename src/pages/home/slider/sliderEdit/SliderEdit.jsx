import { useNavigate, useParams } from "react-router-dom";
import { IoMdReturnLeft } from "react-icons/io";
import { IoCloudUploadOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import NavButton from "../../../../ui/navButton/NavButton";
import api from "../../../../api/posts";
import toast from "react-hot-toast";

const SliderEdit = () => {
  const [image, setImage] = useState(null);
  const [previousImage, setPreviousImage] = useState(null);

  const [az_text, setAz_text] = useState("");
  const [en_text, setEn_text] = useState("");
  const [ru_text, setRu_text] = useState("");

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const response = await api.get(`sliders/${id}`);
        setAz_text(response.data.az_text);
        setEn_text(response.data.en_text);
        setRu_text(response.data.ru_text);
        setPreviousImage(response?.data?.image);
      } catch (error) {
        toast.error(error);
      }
    };

    fetchSettings();
  }, [id]);

  

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("az_text", az_text);
      formData.append("en_text", en_text);
      formData.append("ru_text", ru_text);
      if (image) {
        formData.append("image", image);
      }

      const response = await api.post(`sliders/${id}`,formData);

      if (response) {
        toast.success("Redaktə olundu");
        navigate(-1);
      }
    } catch (error) {
      toast.error("Xəta bas verdi");
    }
  };

  return (
    <div className="adminSlider">
      <div className="insideSlider">
        <div className="sliderHeader">
          <h4>Slider redaktə et </h4>
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
                  <IoCloudUploadOutline />
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
                <label htmlFor="">Məzmun</label>
                <textarea
                  onChange={(e) => setAz_text(e.target.value)}
                  value={az_text}
                  name=""
                  id=""
                  cols="30"
                  rows="6"
                ></textarea>
              </div>
              <div className="formBox">
                <h6>Engilsh</h6>
                <label htmlFor="">Content</label>
                <textarea
                  onChange={(e) => setEn_text(e.target.value)}
                  value={en_text}
                  name=""
                  id=""
                  cols="30"
                  rows="6"
                ></textarea>
              </div>
              <div className="formBox">
                <h6>Русский</h6>
                <label htmlFor="">Содержание</label>
                <textarea
                  onChange={(e) => setRu_text(e.target.value)}
                  value={ru_text}
                  name=""
                  id=""
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

export default SliderEdit;
