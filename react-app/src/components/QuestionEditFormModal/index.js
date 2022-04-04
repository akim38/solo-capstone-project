import { useState } from "react"
import { Modal } from "../../context/Modal";
import QuestionEditForm from "./QuestionEditForm";

import './QuestionEditFormModal.css'

const QuestionEditFormModal = ({ setShowButtons }) => {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button className="edit-question-modal" onClick={() => setShowModal(true)}>
            Edit
            </button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <QuestionEditForm setShowModal={setShowModal} setShowButtons={setShowButtons} />
                </Modal>
            )}
        </>
    )

}

export default QuestionEditFormModal;
