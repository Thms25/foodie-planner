import styles from "../styles/home.module.scss";
import Recipes from "@/components/Recipes/Recipes";
import Calendar from "@/components/HomeCalendar";
import Banner from "@/components/Banner";
import CategoriesDropdown from "@/components/dropdowns/CategoriesDropdown";

export default function Home() {
  return (
    <main className={styles.main}>
      <Banner />
      <div className="lg:flex">
        <CategoriesDropdown className="p-4 md:p-8 w-1/2" />
        <Recipes className="w-1/2 mx-auto" />
      </div>
      <div className={styles.calendar}>
        <Calendar />
      </div>
    </main>
  );
}
