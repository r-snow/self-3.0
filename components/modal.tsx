import styles from "../styles/modal.module.css";

type ModalProp = {
    closeModal: (value: boolean) => void;
};

export default function Modal({ closeModal }: ModalProp) {
    return (
        <div className={styles.background}>
            <div className={styles.modalContainer}>
                <button onClick={() => closeModal(false)}>x</button>
                <div className="title">
                    <h1>Sleep</h1>
                </div>
                <div className="body">
                    <div className="log">
                        <h2>Log</h2>
                    </div>
                    <div className="Tracker">
                        <h2>Tracker</h2>
                    </div>
                </div>
                <div className="footer">
                    <button onClick={() => closeModal(false)}>Close</button>
                    <button>Log</button>
                </div>
            </div>
        </div>
    );
}
