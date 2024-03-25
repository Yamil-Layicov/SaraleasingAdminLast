import { Link, useNavigate, useParams } from "react-router-dom";
import { IoMdReturnLeft } from "react-icons/io";
import { useEffect, useState } from "react";
import api from "../../../../api/posts";
import toast from "react-hot-toast";
import NavButton from "../../../../ui/navButton/NavButton";

const CategoryEdit = () => {
  const [az_name, setAz_name] = useState("");
  const [en_name, setEn_name] = useState("");
  const [ru_name, setRu_name] = useState("");

  const { id } = useParams();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post(`catalog-categories/${id}`, {
        az_name,
        en_name,
        ru_name,
      });

      if (response) {
        toast.success("Redaktə olundu");
        navigate(-1);
      }
    } catch (error) {
      toast.error("Xəta bas verdi");
    }
  };

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const response = await api.get(`catalog-categories/${id}`);
        setAz_name(response.data.az_name);
        setEn_name(response.data.en_name);
        setRu_name(response.data.ru_name);
      } catch (error) {
        console.error(error);
      }
    };

    fetchSettings();
  }, []);

  return (
    <div className="categoryCreate">
      <div className="insideCategory">
        <div className="categoryHeader">
          <h4>Kategori redaktə et</h4>
          <NavButton toNavigate={-1}>
            <span>
              <IoMdReturnLeft />
            </span>
            <span>Geri</span>
          </NavButton>
        </div>
        <div className="langBoxes">
          <form onSubmit={handleSubmit}>
            <div className="formBoxes">
              <div className="formBox">
                <h6>Az dilində</h6>
                <label htmlFor="azText">Kateqoriya adı</label>
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
                <label htmlFor="enText">Category name</label>
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
                <label htmlFor="ruText">Название категории</label>
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
            <div className="addBtn">
              <button type="submit">Əlavə et</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CategoryEdit;
