import { useState } from "react"
import { Modal } from "../../context/Modal";
import QuestionEditForm from "./QuestionEditForm";


const QuestionEditFormModal = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button className="create-question-modal" onClick={() => setShowModal(true)}>
                Edit
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
