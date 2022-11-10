import Head from "next/head";
import styles from "../styles/soul.module.css";
import Self from "../components/selfButton";
import Dashboard from "../components/dashboard";

export default function Soul() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Self 3.0</title>
            </Head>
            <div className="dash">
                <Dashboard />
            </div>
            <div className={styles.main}>
                <Self />
            </div>
        </div>
    );
}
