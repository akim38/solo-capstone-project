import { useState } from "react";
import { Modal } from "../../context/Modal";
import SignUpForm from "./SignUpForm";

import './SignUpForm.css';

const SignUpFormModal = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <div>
            <button className="signup-modal" onClick={() => setShowModal(true)}>
                Sign Up with Email
            </button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <SignUpForm setShowModal={setShowModal} />
                </Modal>
            )}
        </div>
    )
};

export default SignUpFormModal;
