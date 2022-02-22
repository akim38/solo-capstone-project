import { useState } from "react"
import { Modal } from "../../context/Modal";
import QuestionEditForm from "./QuestionEditForm";

import './QuestionEditFormModal.css'

const QuestionEditFormModal = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button className="edit-question-modal" onClick={() => setShowModal(true)}>
            <ion-icon name="pencil-outline"></ion-icon>
            </button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <QuestionEditForm setShowModal={setShowModal} />
                </Modal>
            )}
        </>
    )

}

export default QuestionEditFormModal;