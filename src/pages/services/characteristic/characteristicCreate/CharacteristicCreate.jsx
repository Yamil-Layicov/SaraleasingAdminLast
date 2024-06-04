import { NavLink, useNavigate } from "react-router-dom";
import "./characteristicCreate.scss";
import { IoMdReturnLeft } from "react-icons/io";
import { useState } from "react";
import api from "../../../../api/posts";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { useProducts } from "../../products/useProducts";
import NavButton from "../../../../ui/navButton/NavButton";

const CharacteristicCreate = () => {
  const [az_title, setAz_title] = useState([]);
  const [en_title, setEn_title] = useState([]);
  const [ru_title, setRu_title] = useState([]);
  const [az_text, setAz_text] = useState([]);
  const [en_text, setEn_text] = useState([]);
  const [ru_text, setRu_text] = useState([]);
  const [catalog_id , setCatalog_id] = useState();

  const navigate = useNavigate();
  const { isLoading, catalogs } = useProducts();

  const createCategory = async () => {
    try {
      await api.post("catalog-features", {
        az_title,
        en_title,
        ru_title,
        az_text,
        ru_text,
        en_text,
        catalog_id,
      });
      navigate("/characteristic");
      toast.success("Xarakteristika  uğurla yaradıldı");
    } catch (error) {
      toast.error("Xarakteristika  yaratmaq alınmadı");
    }
  };

  const mutation = useMutation(createCategory);

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate();
  };

  return (
    <>
      <div className="adminSlider">
        <div className="insideSlider">
          <div className="sliderHeader">
            <h4>Yeni xarakteristika </h4>
            <NavButton toNavigate={-1}>
            <span>
              <IoMdReturnLeft />
            </span>
            <span>Geri</span>
          </NavButton>
          </div>
          <div className="langBoxes">
            <form onSubmit={handleSubmit}>
              <div className="catalogCategory">
                <div className="categoryBox">
                  <label>Məhsullar</label>
                  <select
                    value={catalog_id || ""}
                    onChange={(e) => setCatalog_id(e.target.value)}
                  >
                    <option value="" disabled>
                        Məhsul seçin
                    </option>
                    {catalogs?.data?.data?.map((category) => (
                      <option key={category?.id} value={category?.id}>
                        {category?.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="formBoxes">
                <div className="formBox">
                  <h6>Az dilində</h6>
                  <label htmlFor="azText">Xarakteristika adı</label>
                  <textarea
                    id="azText"
                    value={az_title}
                    onChange={(e) => setAz_title(e.target.value)}
                    cols="40"
                    rows="6"
                  ></textarea>
                </div>
                <div className="formBox">
                  <h6>English</h6>
                  <label htmlFor="enText">Characteristic name</label>
                  <textarea
                    id="enText"
                    value={en_title}
                    onChange={(e) => setEn_title(e.target.value)}
                    cols="40"
                    rows="6"
                  ></textarea>
                </div>
                <div className="formBox">
                  <h6>Русский</h6>
                  <label htmlFor="ruText">Название характеристики</label>
                  <textarea
                    id="ruText"
                    value={ru_title}
                    onChange={(e) => setRu_title(e.target.value)}
                    cols="40"
                    rows="6"
                  ></textarea>
                </div>
              </div>
              <div className="formBoxes">
                <div className="formBox">
                  <h6>Az dilində</h6>
                  <label htmlFor="azText">Model adı</label>
                  <textarea
                    id="azText"
                    value={az_text}
                    onChange={(e) => setAz_text(e.target.value)}
                    cols="40"
                    rows="6"
                  ></textarea>
                </div>
                <div className="formBox">
                  <h6>English</h6>
                  <label htmlFor="enText">Brand name</label>
                  <textarea
                    id="enText"
                    value={en_text}
                    onChange={(e) => setEn_text(e.target.value)}
                    cols="40"
                    rows="6"
                  ></textarea>
                </div>
                <div className="formBox">
                  <h6>Русский</h6>
                  <label htmlFor="ruText">Имя бренда</label>
                  <textarea
                    id="ruText"
                    value={ru_text}
                    onChange={(e) => setRu_text(e.target.value)}
                    cols="40"
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
    </>
  );
};

export default CharacteristicCreate;
