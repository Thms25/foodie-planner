import styles from "../styles/home.module.scss";
import Recipes from "@/components/Recipes";
import Calendar from "@/components/HomeCalendar";
import Banner from "@/components/Banner";
import CategoriesDropdown from "@/components/CategoriesDropdown";

export default function Home() {
  return (
    <main className={styles.main}>
      <Banner />
      <div className={styles.recipes}>
        {/* <Recipes /> */}
        <CategoriesDropdown />
      </div>
      <div className={styles.calendar}>
        <Calendar />
      </div>
    </main>
  );
}
