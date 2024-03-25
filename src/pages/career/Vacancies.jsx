import "./vacancies.scss";
import { useNavigate } from "react-router-dom";
import { BiEditAlt } from "react-icons/bi";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import api from "../../api/posts";
import { useState } from "react";
import toast from "react-hot-toast";
import NavButton from "../../ui/navButton/NavButton.jsx";
import ConfirmModal from "../../ui/corfirmModal/ConfirmModal.jsx";
import { useVacancies } from "./useVacancies.js";
import TruncatedTextv2 from "../../helpers/TrunctedTextv2.jsx";

const Vacancies = () => {
  const navigate = useNavigate();
  const [confirmationVisible, setConfirmationVisible] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState(null);

  const { isLoading, vacancies } = useVacancies();

  const handleEdit = (id) => {
    navigate(`${id}`);
  };

  const handleDelete = (id) => {
    setSelectedItemId(id);
    setConfirmationVisible(true);
  };

  const handleConfirmDelete = () => {
    mutation.mutate(selectedItemId);
    setConfirmationVisible(false);
  };

  const handleCancelDelete = () => {
    setSelectedItemId(null);
    setConfirmationVisible(false);
  };

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (id) => {
      return api.post(`vacancies/delete/${id}`);
    },
    onSuccess: () => {
      queryClient
        .invalidateQueries(["vacancies"])
        .then(toast.success("Uğurla silindi"));
    },
  });

  // if (isLoading) return <h1>Loading</h1>;

  return (
    <div className="vacancies">
      <div className="insideVacancies">
        <div className="sliderHeader">
          <h4>Karyera</h4>
          <NavButton toNavigate="yeni">
            <span>+</span>
            <span>Yeni</span>
          </NavButton>
        </div>
        <table>
          <thead>
            <tr>
              <th className="idTh">#</th>
              <th className="imgTh">Vəzifə</th>
              <th className="dateTh">İş yeri</th>
              <th className="dateTh">Son tarix</th>
              <th className="dateTh">İş qrafiki</th>
              <th className="dateTh">Əmək haqqı</th>
              <th className="dateTh">Şöbə</th>
              <th className="dateTh">İş barədə məlumat</th>
              <th className="dateTh">Namizədə tələblər</th>
              <th className="dateTh">Şərtlər</th>
              <th>Əməliyyat</th>
            </tr>
          </thead>
          <tbody>
            {vacancies?.data?.data.map((singleData, index) => (
              <tr key={singleData.id}>
                <td className="idTd">{index + 1}</td>
                <td className="imgsTd">{singleData.az_position}</td>
                <td className="datetTd">{singleData.az_location}</td>
                <td className="datetTd">{singleData.deadline}</td>
                <td className="datetTd">{singleData.az_type}</td>
                <td className="datetTd">{singleData.salary}</td>
                <td className="datetTd">{singleData.az_department}</td>
                <td className="datetTd">{TruncatedTextv2(singleData.az_description, 60)}</td>
                <td className="datetTd">{TruncatedTextv2(singleData.az_requirements, 60)}</td>
                <td className="datetTd">{TruncatedTextv2(singleData.az_conditions, 60)}</td>
                <td className="actionBtnsTd">
                  <div className="actionBtns">
                    <button onClick={() => handleEdit(singleData.id)}>
                      <BiEditAlt />
                    </button>
                    <button onClick={() => handleDelete(singleData.id)}>
                      <RiDeleteBin5Line />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {confirmationVisible && (
          <ConfirmModal
            title={"Kateqoriyanı"}
            handleConfirmDelete={handleConfirmDelete}
            handleCancelDelete={handleCancelDelete}
          />
        )}
      </div>
    </div>
  );
};

export default Vacancies;
