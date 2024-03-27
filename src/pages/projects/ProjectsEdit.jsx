import { useNavigate, useParams } from "react-router-dom";
import { IoMdReturnLeft } from "react-icons/io";
import { IoCloudUploadOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import NavButton from "../../ui/navButton/NavButton";
import api from "../../api/posts";
import toast from "react-hot-toast";

const ProjectsEdit = () => {
  const [image, setImage] = useState(null);
  const [previousImage, setPreviousImage] = useState("");

  const [az_title, setAz_title] = useState("");
  const [en_title, setEn_title] = useState("");
  const [ru_title, setRu_title] = useState("");
  const [az_content, setAz_content] = useState("");
  const [en_content, setEn_content] = useState("");
  const [ru_content, setRu_content] = useState("");

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const response = await api.get(`projects/${id}`);
        setAz_title(response.data.az_title);
        setEn_title(response.data.en_title);
        setRu_title(response.data.ru_title);
        setAz_content(response.data.az_content);
        setEn_content(response.data.en_content);
        setRu_content(response.data.ru_content);
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
      formData.append("az_title", az_title);
      formData.append("en_title", en_title);
      formData.append("ru_title", ru_title);
      formData.append("az_content", az_content);
      formData.append("en_content", en_content);
      formData.append("ru_content", ru_content);
      if (image) {
        formData.append("image", image);
      }

      const response = await api.post(`projects/${id}`,formData);

      if (response) {
        toast.success("Redaktə olundu");
        navigate(-1);
      }
    } catch (error) {
      toast.error("Xəta baş verdi");
    }
  };

  return (
    <div className="projectsCreate">
      <div className="insideProject">
        <div className="sliderHeader">
          <h4>Layihə redaktə et</h4>
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
                <label htmlFor="azText">Başlıq</label>
                <textarea
                  id="azText"
                  value={az_title}
                  onChange={(e) => setAz_title(e.target.value)}
                  cols="48"
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
                  cols="48"
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
                  cols="48"
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
                  value={az_content}
                  onChange={(e) => setAz_content(e.target.value)}
                  cols="48"
                  rows="6"
                ></textarea>
              </div>
              <div className="formBox">
                <h6>English</h6>
                <label htmlFor="enText">Content</label>
                <textarea
                  id="enText"
                  value={en_content}
                  onChange={(e) => setEn_content(e.target.value)}
                  cols="48"
                  rows="6"
                ></textarea>
              </div>
              <div className="formBox">
                <h6>Русский</h6>
                <label htmlFor="ruText">Содержание</label>
                <textarea
                  id="ruText"
                  value={ru_content}
                  onChange={(e) => setRu_content(e.target.value)}
                  cols="48"
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

export default ProjectsEdit;
