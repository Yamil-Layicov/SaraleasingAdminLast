import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import api from "../../../api/posts";
import { FaTrash } from "react-icons/fa";
import noImage from "/img/noImage.png";
import "./companies.scss";
import AddGalleryModal from "../../../components/gallery/AddGalleryModal";
import toast from "react-hot-toast";
import ConfirmModal from "../../../ui/corfirmModal/ConfirmModal";
import { useCompanies } from "./useCompanies";

const Companies = () => {
  const [openAddModal, setOpenAddModal] = useState(false);
  const [confirmationVisible, setConfirmationVisible] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState(null);

  const { companies } = useCompanies();
  console.log(companies);

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
      return api.post(`companies/delete/${id}`);
    },
    onSuccess: () => {
      queryClient
        .invalidateQueries(["companies"])
        .then(toast.success("Uğurla silindi"));
    },
  });

  return (
    <>
      <div className="companies">
        <div className="insideCompanies">
          <div className="title">
            <h4 className="">Şirketler</h4>
            <button
              className="btn add-btn"
              onClick={() => setOpenAddModal(true)}
            >
              Yeni logo
            </button>
          </div>
          <div className="images">
            {companies?.data &&
              companies?.data?.map((image) => (
                <div className="box" key={image.id}>
                  <div className="item">
                    <div className="delete-icon">
                      <span onClick={() => handleDelete(image.id)}>
                        <FaTrash />
                      </span>
                    </div>
                    <img src={image.image || noImage} alt="" />
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
      {confirmationVisible && (
        <ConfirmModal
          title={"Logonu"}
          handleConfirmDelete={handleConfirmDelete}
          handleCancelDelete={handleCancelDelete}
        />
      )}
      <AddGalleryModal
        openAddModal={openAddModal}
        setOpenAddModal={setOpenAddModal}
      />
    </>
  );
};

export default Companies;
