import { useState } from "react";
import styles from "../styles/Home.module.css";
import buttonStyles from "../styles/dashButton.module.css";
import Modal from "./modal";

export default function Dashboard() {
    const [toggleModal, setToggleModal] = useState(false);
    return (
        <div className={styles.dash}>
            <button
                className={buttonStyles.button}
                onClick={() => {
                    setToggleModal(true);
                }}
            >
                Zzz
            </button>
            {toggleModal && <Modal closeModal={setToggleModal} />}
            {/* <Hydration /> */}
        </div>
    );
}
