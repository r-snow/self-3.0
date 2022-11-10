import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Dashboard from "../components/dashboard";

export default function Home() {
    return (
        <div>
            <Head>
                <title>Self 3.0</title>
                <meta
                    name="description"
                    content="Gamified personal development"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <Dashboard />
                <div className={styles.nav}>
                    <Link href={`/mind`} legacyBehavior>
                        <a>Mind</a>
                    </Link>
                    <Link href={`/body`} legacyBehavior>
                        <a>Body</a>
                    </Link>
                    <Link href={`/soul`} legacyBehavior>
                        <a>Soul</a>
                    </Link>
                </div>
            </main>
        </div>
    );
}
