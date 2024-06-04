import "./characteristic.scss";
import { NavLink, useNavigate } from "react-router-dom";
import { BiEditAlt } from "react-icons/bi";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import api from "../../../api/posts";
import { useState } from "react";
import ConfirmModal from "../../../ui/corfirmModal/ConfirmModal.jsx";
import { useProducts } from "../products/useProducts.js";

const Characteristic = () => {
  const navigate = useNavigate();
  const [confirmationVisible, setConfirmationVisible] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [catalog_id, setCatalog_id] = useState();

  const { isLoading, catalogs } = useProducts();


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
      return api.post(`catalog-features/delete/${id}`);
    },
    onSuccess: () => {
      queryClient
        .invalidateQueries(["catalogs"])
        .then(toast.success("Uğurla silindi"));
    },
  });

  // if (isLoading) return <h1>Loading</h1>;

  return (
    <div className="characteristic">
      <div className="insideCategories">
        <div className="sliderHeader">
          <h4>Xarakteristikalar</h4>
          <NavLink to="yeni" className="newSliderBtn">
            <span>+</span>
            <span>Yeni</span>
          </NavLink>
        </div>
        <select
          value={catalog_id || ""}
          onChange={(e) => setCatalog_id(e.target.value)}
          className="selectProductBtn"
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
        <table>
          <thead>
            <tr>
              <th className="idTh">#</th>
              <th className="imgTh">Ad</th>
              <th className="dateTh">Model</th>
              <th>Əməliyyat</th>
            </tr>
          </thead>
          <tbody>
            {catalogs?.data?.data?.map((singleData) =>
              singleData?.features
                .filter((single) =>
                  catalog_id ? single.catalog_id === catalog_id : true
                )
                .map((single, index) => (
                  <tr key={single.id}>
                    <td className="idTd">{index + 1}</td>
                    <td className="imgsTd">{single?.az_title}</td>
                    <td className="datetTd">{single?.az_text}</td>
                    <td className="actionBtnsTd">
                      <div className="actionBtns">
                        <button onClick={() => handleEdit(single.id)}>
                          <BiEditAlt />
                        </button>
                        <button onClick={() => handleDelete(single.id)}>
                          <RiDeleteBin5Line />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
            )}
          </tbody>
        </table>
        {confirmationVisible && (
          <ConfirmModal
            title={"Xarakteristikanı"}
            handleConfirmDelete={handleConfirmDelete}
            handleCancelDelete={handleCancelDelete}
          />
        )}
      </div>
    </div>
  );
};

export default Characteristic;
