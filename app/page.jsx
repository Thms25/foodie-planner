import styles from "../styles/home.module.scss";
import Recipes from "@/components/Recipes/Recipes";
import Calendar from "@/components/HomeCalendar";
import Banner from "@/components/Banner";
import CategoriesDropdown from "@/components/dropdowns/CategoriesDropdown";
import HomeCta from "@/components/cta/HomeCta";

export default function Home() {
  return (
    <main className={styles.main}>
      <Banner />
      <div className="lg:flex">
        <CategoriesDropdown />
        <div>
          <HomeCta />
          <Recipes />
        </div>
      </div>
      <div className={styles.calendar}>
        <Calendar />
      </div>
    </main>
  );
}
