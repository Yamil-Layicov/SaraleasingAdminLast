import { useNavigate, useParams } from "react-router-dom";
import { IoMdReturnLeft } from "react-icons/io";
import { IoCloudUploadOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import NavButton from "../../ui/navButton/NavButton";
import api from "../../api/posts";
import toast from "react-hot-toast";

const SocialEdit = () => {
  const [image, setImage] = useState(null);
  const [previousImage, setPreviousImage] = useState(null);
  const [url, setUrl] = useState("");

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const response = await api.get(`socials/${id}`);
        setUrl(response.data.url);
        setImage(response?.data?.logo );
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("url", url);
      formData.append("logo", image);

      const response = await api.post(`socials/${id}`,formData);

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
          <h4>Social redaktə et </h4>
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
                <label htmlFor="">Keçid linki</label>
                <textarea
                  onChange={(e) => setUrl(e.target.value)}
                  value={url}
                  name=""
                  id=""
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

export default SocialEdit;
