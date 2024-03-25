import { useNavigate, useParams } from "react-router-dom";
import { IoMdReturnLeft } from "react-icons/io";
import { useEffect, useState } from "react";
import api from "../../../api/posts";
import { toast } from "react-hot-toast";
import NavButton from "../../../ui/navButton/NavButton";

const VacanciesEdit = () => {
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

  const {id} = useParams();
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("az_position", az_position);
      formData.append("en_position", en_position);
      formData.append("ru_position", ru_position);
      formData.append("az_location", az_location);
      formData.append("en_location", en_location);
      formData.append("ru_location", ru_location);
      formData.append("deadline", deadline);
      formData.append("salary", salary);
      formData.append("az_type", az_type);
      formData.append("en_type", en_type);
      formData.append("ru_type", ru_type);
      formData.append("az_department", az_department);
      formData.append("en_department", en_department);
      formData.append("ru_department", ru_department);
      formData.append("az_description", az_description);
      formData.append("en_description", en_description);
      formData.append("ru_description", ru_description);
      formData.append("az_requirements", az_requirements);
      formData.append("en_requirements", en_requirements);
      formData.append("ru_requirements", ru_requirements);
      formData.append("az_conditions", az_conditions);
      formData.append("en_conditions", en_conditions);
      formData.append("ru_conditions", ru_conditions);

      const response = await api.post(`vacancies/${id}`, formData);

      if(response){
        toast.success("Redaktə olundu")
        navigate(-1)
      }

    } catch (error) {
      toast.error("Xəta bas verdi")
      console.log(error);
    }
  };


  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const response = await api.get(`vacancies/${id}`);
        console.log(response?.data);
        setAz_positione(response?.data.az_position);
        setEn_positione(response?.data.en_position);
        setRu_positione(response?.data.ru_position);
        setAz_location(response?.data.az_location);
        setEn_location(response?.data.en_location);
        setRu_location(response?.data.ru_location);
        setDeadline(response?.data.deadline);
        setSalary(response?.data.salary);
        setAz_type(response?.data.az_type);
        setEn_type(response?.data.en_type);
        setRu_type(response?.data.ru_type);
        setAz_department(response?.data.az_department);
        setEn_department(response?.data.en_department);
        setRu_department(response?.data.ru_department);
        setAz_description(response?.data.az_description);
        setEn_description(response?.data.en_description);
        setRu_description(response?.data.ru_description);
        setAz_requirements(response?.data.az_requirements);
        setEn_requirements(response?.data.en_requirements);
        setRu_requirements(response?.data.ru_requirements);
        setAz_conditions(response?.data.az_conditions);
        setEn_conditions(response?.data.en_conditions);
        setRu_conditions(response?.data.ru_conditions);
      } catch (error) {
        console.error(error);
      }
    };

    fetchSettings();
  }, []);


  

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
                value={deadline}
                onChange={(e) => setDeadline(e.target.value)}
              />
            </div>
            <div className="formDate">
              <p>Əmək haqqı</p>
              <input
                style={{ display: "inline-block" }}
                type="text"
                value={salary}
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

export default VacanciesEdit;
