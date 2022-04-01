import { useState } from "react";
import { Modal } from "../../context/Modal";
import AnswerEditForm from "./AnswerEditForm";


const AnswerEditFormModal = ({ answerId, setShowButtons }) => {
    const [showModal, setShowModal] = useState(false);

    return (
        <div>
            <button className="answer-edit-modal" onClick={() => setShowModal(true)}>
                Edit
            </button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <AnswerEditForm setShowModal={setShowModal} answerId={answerId} />
                </Modal>
            )}
        </div>
    )
};

export default AnswerEditFormModal;
