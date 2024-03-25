import { useNavigate } from "react-router-dom";
import "./commentsCreate.scss";
import { IoMdReturnLeft } from "react-icons/io";
import { useState } from "react";
import api from "../../../../api/posts";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import NavButton from "../../../../ui/navButton/NavButton";

const CommentsCreate = () => {
  const [az_name, setAz_name] = useState("");
  const [en_name, setEn_name] = useState("");
  const [ru_name, setRu_name] = useState("");
  const [az_content, setAz_content] = useState("");
  const [en_content, setEn_content] = useState("");
  const [ru_content, setRu_content] = useState("");
  const [date, setDate] = useState("");

  const navigate = useNavigate();

  const createCategory = async () => {
    try {
      await api.post("comments", {
        az_name,
        en_name,
        ru_name,
        az_content,
        en_content,
        ru_content,
        date,
      });
      navigate("/comments ");
      toast.success("Comment uğurla yaradıldı");
    } catch (error) {
      toast.error("Comment yaratmaq alınmadı");
    }
  };

  const mutation = useMutation(createCategory);

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate();
  };

  return (
    <div className="commentsCreate">
      <div className="insideCategory">
        <div className="categoryHeader">
          <h4>Yeni rəy</h4>
          <NavButton toNavigate={-1}>
            <div className="newSliderBtn">
            </div>
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

export default CommentsCreate;
