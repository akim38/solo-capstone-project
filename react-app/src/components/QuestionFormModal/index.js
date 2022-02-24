import { useState } from "react"
import { Modal } from "../../context/Modal";
import QuestionForm from "./QuestionForm";

import './QuestionFormModal.css'


const QuestionFormModal = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button className="create-question-modal" onClick={() => setShowModal(true)}>
                Click Here To Ask A Question!
            </button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <QuestionForm setShowModal={setShowModal} />
                </Modal>
            )}
        </>
    )

}

export default QuestionFormModal;
