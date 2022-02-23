import { useState } from "react";
import { Modal } from "../../context/Modal";
import SignUpForm from "./SignUpForm";

const SignUpFormModal = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button className="signup-modal" onClick={() => setShowModal(true)}>
                Sign Up with Email
            </button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <SignUpForm setShowModal={setShowModal} />
                </Modal>
            )}
        </>
    )
};

export default SignUpFormModal; 
