import styles from "../styles/home.module.scss";
import Recipes from "@/components/Recipes";
import Calendar from "@/components/HomeCalendar";
import Banner from "@/components/Banner";

export default function Home() {
  return (
    <main className={styles.main}>
      <Banner />
      <div className={styles.recipes}>
        <h2>Browse through our most liked recipes...</h2>
        {/* <Recipes /> */}
      </div>
      <div className={styles.calendar}>
        <Calendar />
      </div>
    </main>
  );
}
