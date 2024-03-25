import { useNavigate } from "react-router-dom";
import "./vacanciesCreate.scss";
import { IoMdReturnLeft } from "react-icons/io";
import { useState } from "react";
import api from "../../../api/posts";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import NavButton from "../../../ui/navButton/NavButton";

const VacanciesCreate = () => {
  const [az_position, setAz_positione] = useState("");
  const [en_position, setEn_positione] = useState("");
  const [ru_position, setRu_positione] = useState("");
  const [az_location, setAz_location] = useState("");
  const [en_location, setEn_location] = useState("");
  const [ru_location, setRu_location] = useState("");
  const [deadline, setDeadline] = useState("");
  const [salary, setSalary] = useState("");
  const [az_type, setAz_type] = useState("");
  const [en_type, setEn_type] = useState("");
  const [ru_type, setRu_type] = useState("");
  const [az_department, setAz_department] = useState("");
  const [en_department, setEn_department] = useState("");
  const [ru_department, setRu_department] = useState("");
  const [az_description, setAz_description] = useState("");
  const [en_description, setEn_description] = useState("");
  const [ru_description, setRu_description] = useState("");
  const [az_requirements, setAz_requirements] = useState("");
  const [en_requirements, setEn_requirements] = useState("");
  const [ru_requirements, setRu_requirements] = useState("");
  const [az_conditions, setAz_conditions] = useState("");
  const [en_conditions, setEn_conditions] = useState("");
  const [ru_conditions, setRu_conditions] = useState("");

  const navigate = useNavigate();

  const createCategory = async () => {
    try {
      await api.post("vacancies", {
        az_position,
        en_position,
        ru_position,
        az_location,
        en_location,
        ru_location,
        deadline,
        salary,
        az_type,
        en_type,
        ru_type,
        az_department,
        en_department,
        ru_department,
        az_description,
        en_description,
        ru_description,
        az_requirements,
        en_requirements,
        ru_requirements,
        az_conditions,
        en_conditions,
        ru_conditions,
      });
      navigate("/karyera");
      toast.success("Vakansiya uğurla yaradıldı");
    } catch (error) {
      toast.error("Vakansiya yaratmaq alınmadı");
    }
  };

  const mutation = useMutation(createCategory);

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate();
  };

  return (
    <div className="vacanciesCreate">
      <div className="insideCategory">
        <div className="categoryHeader">
          <h4>Yeni vakansiya</h4>
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
            <div className="formBoxes">
              <div className="formBox">
                <h6>Az dilində</h6>
                <label htmlFor="azText">Vəzifə</label>
                <textarea
                  id="azText"
                  value={az_position}
                  onChange={(e) => setAz_positione(e.target.value)}
                  cols="30"
                  rows="6"
                  required
                ></textarea>
              </div>
              <div className="formBox">
                <h6>English</h6>
                <label htmlFor="enText">Position</label>
                <textarea
                  id="enText"
                  value={en_position}
                  onChange={(e) => setEn_positione(e.target.value)}
                  cols="30"
                  rows="6"
                  required
                ></textarea>
              </div>
              <div className="formBox">
                <h6>Русский</h6>
                <label htmlFor="ruText">Позиция</label>
                <textarea
                  id="ruText"
                  value={ru_position}
                  onChange={(e) => setRu_positione(e.target.value)}
                  cols="30"
                  rows="6"
                  required
                ></textarea>
              </div>
            </div>
            <div className="formBoxes">
              <div className="formBox">
                <h6>Az dilində</h6>
                <label htmlFor="azText">İş yeri </label>
                <textarea
                  id="azText"
                  value={az_location}
                  onChange={(e) => setAz_location(e.target.value)}
                  cols="30"
                  rows="6"
                  required
                ></textarea>
              </div>
              <div className="formBox">
                <h6>English</h6>
                <label htmlFor="enText">Workplace</label>
                <textarea
                  id="enText"
                  value={en_location}
                  onChange={(e) => setEn_location(e.target.value)}
                  cols="30"
                  rows="6"
                  required
                ></textarea>
              </div>
              <div className="formBox">
                <h6>Русский</h6>
                <label htmlFor="ruText">Рабочее место</label>
                <textarea
                  id="ruText"
                  value={ru_location}
                  onChange={(e) => setRu_location(e.target.value)}
                  cols="30"
                  rows="6"
                  required
                ></textarea>
              </div>
            </div>
            <div className="formDate">
              <p>Son tarix</p>
              <input
                style={{ display: "inline-block" }}
                type="text"
                onChange={(e) => setDeadline(e.target.value)}
              />
            </div>
            <div className="formDate">
              <p>Əmək haqqı</p>
              <input
                style={{ display: "inline-block" }}
                type="text"
                onChange={(e) => setSalary(e.target.value)}
              />
            </div>
            <div className="formBoxes"> 
              <div className="formBox">
                <h6>Az dilində</h6>
                <label htmlFor="azText">İş qrafiki</label>
                <textarea
                  id="azText"
                  value={az_type}
                  onChange={(e) => setAz_type(e.target.value)}
                  cols="30"
                  rows="6"
                  required
                ></textarea>
              </div>
              <div className="formBox">
                <h6>English</h6>
                <label htmlFor="enText">Work graphic</label>
                <textarea
                  id="enText"
                  value={en_type}
                  onChange={(e) => setEn_type(e.target.value)}
                  cols="30"
                  rows="6"
                  required
                ></textarea>
              </div>
              <div className="formBox">
                <h6>Русский</h6>
                <label htmlFor="ruText">График работы</label>
                <textarea
                  id="ruText"
                  value={ru_type}
                  onChange={(e) => setRu_type(e.target.value)}
                  cols="30"
                  rows="6"
                  required
                ></textarea>
              </div>
            </div>
            <div className="formBoxes">
              <div className="formBox">
                <h6>Az dilində</h6>
                <label htmlFor="azText">Şöbə</label>
                <textarea
                  id="azText"
                  value={az_department}
                  onChange={(e) => setAz_department(e.target.value)}
                  cols="30"
                  rows="6"
                  required
                ></textarea>
              </div>
              <div className="formBox">
                <h6>English</h6>
                <label htmlFor="enText">Branch</label>
                <textarea
                  id="enText"
                  value={en_department}
                  onChange={(e) => setEn_department(e.target.value)}
                  cols="30"
                  rows="6"
                  required
                ></textarea>
              </div>
              <div className="formBox">
                <h6>Русский</h6>
                <label htmlFor="ruText">Ветвь</label>
                <textarea
                  id="ruText"
                  value={ru_department}
                  onChange={(e) => setRu_department(e.target.value)}
                  cols="30"
                  rows="6"
                  required
                ></textarea>
              </div>
            </div>
            <div className="formBoxes">
              <div className="formBox">
                <h6>Az dilində</h6>
                <label htmlFor="azText">İş barədə məlumat</label>
                <textarea
                  id="azText"
                  value={az_description}
                  onChange={(e) => setAz_description(e.target.value)}
                  cols="30"
                  rows="6"
                  required
                ></textarea>
              </div>
              <div className="formBox">
                <h6>English</h6>
                <label htmlFor="enText">Job information</label>
                <textarea
                  id="enText"
                  value={en_description}
                  onChange={(e) => setEn_description(e.target.value)}
                  cols="30"
                  rows="6"
                  required
                ></textarea>
              </div>
              <div className="formBox">
                <h6>Русский</h6>
                <label htmlFor="ruText">Информация о вакансии</label>
                <textarea
                  id="ruText"
                  value={ru_description}
                  onChange={(e) => setRu_description(e.target.value)}
                  cols="30"
                  rows="6"
                  required
                ></textarea>
              </div>
            </div>
            <div className="formBoxes">
              <div className="formBox">
                <h6>Az dilində</h6>
                <label htmlFor="azText">Namizədə Tələblər </label>
                <textarea
                  id="azText"
                  value={az_requirements}
                  onChange={(e) => setAz_requirements(e.target.value)}
                  cols="30"
                  rows="6"
                  required
                ></textarea>
              </div>
              <div className="formBox">
                <h6>English</h6>
                <label htmlFor="enText">Candidate Requirements</label>
                <textarea
                  id="enText"
                  value={en_requirements}
                  onChange={(e) => setEn_requirements(e.target.value)}
                  cols="30"
                  rows="6"
                  required
                ></textarea>
              </div>
              <div className="formBox">
                <h6>Русский</h6>
                <label htmlFor="ruText">Требования к кандидату</label>
                <textarea
                  id="ruText"
                  value={ru_requirements}
                  onChange={(e) => setRu_requirements(e.target.value)}
                  cols="30"
                  rows="6"
                  required
                ></textarea>
              </div>
            </div>
            <div className="formBoxes">
              <div className="formBox">
                <h6>Az dilində</h6>
                <label htmlFor="azText">Şərtlər</label>
                <textarea
                  id="azText"
                  value={az_conditions}
                  onChange={(e) => setAz_conditions(e.target.value)}
                  cols="30"
                  rows="6"
                  required
                ></textarea>
              </div>
              <div className="formBox">
                <h6>English</h6>
                <label htmlFor="enText">Conditions</label>
                <textarea
                  id="enText"
                  value={en_conditions}
                  onChange={(e) => setEn_conditions(e.target.value)}
                  cols="30"
                  rows="6"
                  required
                ></textarea>
              </div>
              <div className="formBox">
                <h6>Русский</h6>
                <label htmlFor="ruText">Условия</label>
                <textarea
                  id="ruText"
                  value={ru_conditions}
                  onChange={(e) => setRu_conditions(e.target.value)}
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

export default VacanciesCreate;
