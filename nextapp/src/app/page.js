import Image from "next/image";
import styles from "./page.module.css";
import AddUser from "./components/adduser";
import DisplayUser from "./components/displayuser";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <AddUser />
        <DisplayUser />
      </main>
    </div>
  );
}
