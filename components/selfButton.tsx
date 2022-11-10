import Link from "next/link";
import styles from "../styles/Mind.module.css";

export default function SelfLink() {
    return (
        <div className={styles.space}>
            <Link href={`/`} legacyBehavior>
                <a>Self</a>
            </Link>
        </div>
    );
}
