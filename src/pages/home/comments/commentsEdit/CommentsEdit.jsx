import { useNavigate, useParams } from "react-router-dom";
import { IoMdReturnLeft } from "react-icons/io";
import { useEffect, useState } from "react";
import api from "../../../../api/posts";
import toast from "react-hot-toast";
import NavButton from "../../../../ui/navButton/NavButton";

const CommentsEdit = () => {
  const [az_name, setAz_name] = useState("");
  const [en_name, setEn_name] = useState("");
  const [ru_name, setRu_name] = useState("");
  const [az_content, setAz_content] = useState("");
  const [en_content, setEn_content] = useState("");
  const [ru_content, setRu_content] = useState("");
  const [date, setDate] = useState("");

  const { id } = useParams();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("az_name", az_name);
      formData.append("en_name", en_name);
      formData.append("ru_name", ru_name);
      formData.append("az_content", az_content);
      formData.append("en_content", en_content);
      formData.append("ru_content", ru_content);
      formData.append("date", date);

      const response = await api.post(`comments/${id}`, formData);

      if (response) {
        toast.success("Redaktə olundu");
        navigate(-1);
      }
    } catch (error) {
      toast.error("Xəta bas verdi");
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const response = await api.get(`comments/${id}`);
        setAz_name(response?.data.az_name);
        setEn_name(response?.data.en_name);
        setRu_name(response?.data.ru_name);
        setAz_content(response?.data.az_content);
        setEn_content(response?.data.en_content);
        setRu_content(response?.data.ru_content);
        setRu_content(response?.data.ru_content);
        setDate(response?.data.date);
      } catch (error) {
        console.error(error);
      }
    };

    fetchSettings();
  }, []);

  return (
    <div className="commentsCreate">
      <div className="insideCategory">
        <div className="categoryHeader">
          <h4>Rəyi redaktə et</h4>
          <NavButton toNavigate={-1}>
            <div className="newSliderBtn"></div>
            <span>
              <IoMdReturnLeft />
            </span>
            <span>Geri</span>
          </NavButton>
        </div>
        <div className="langBoxes">
          <form onSubmit={handleSubmit}>
            <div className="formDate">
              <p>Tarix</p>
              <input
                style={{ display: "inline-block" }}
                value={date}
                type="text"
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <div className="formBoxes">
              <div className="formBox">
                <h6>Az dilində</h6>
                <label htmlFor="azText">Şəxsin adı</label>
                <textarea
                  id="azText"
                  value={az_name}
                  onChange={(e) => setAz_name(e.target.value)}
                  cols="30"
                  rows="6"
                  required
                ></textarea>
              </div>
              <div className="formBox">
                <h6>English</h6>
                <label htmlFor="enText">Person's name</label>
                <textarea
                  id="enText"
                  value={en_name}
                  onChange={(e) => setEn_name(e.target.value)}
                  cols="30"
                  rows="6"
                  required
                ></textarea>
              </div>
              <div className="formBox">
                <h6>Русский</h6>
                <label htmlFor="ruText">Имя человека</label>
                <textarea
                  id="ruText"
                  value={ru_name}
                  onChange={(e) => setRu_name(e.target.value)}
                  cols="30"
                  rows="6"
                  required
                ></textarea>
              </div>
            </div>
            <div className="formBoxes">
              <div className="formBox">
                <h6>Az dilində</h6>
                <label htmlFor="azText">Rəy</label>
                <textarea
                  id="azText"
                  value={az_content}
                  onChange={(e) => setAz_content(e.target.value)}
                  cols="30"
                  rows="6"
                  required
                ></textarea>
              </div>
              <div className="formBox">
                <h6>English</h6>
                <label htmlFor="enText">Comment</label>
                <textarea
                  id="enText"
                  value={en_content}
                  onChange={(e) => setEn_content(e.target.value)}
                  cols="30"
                  rows="6"
                  required
                ></textarea>
              </div>
              <div className="formBox">
                <h6>Русский</h6>
                <label htmlFor="ruText">Комментарий</label>
                <textarea
                  id="ruText"
                  value={ru_content}
                  onChange={(e) => setRu_content(e.target.value)}
                  cols="30"
                  rows="6"
                  required
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

export default CommentsEdit;
