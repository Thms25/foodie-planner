import Recipes from "@/components/Recipes";
import styles from "../styles/home.module.scss";
import Calendar from "@/components/HomeCalendar";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Welcome to Foodie Planner</h1>
      <Recipes />
      <Calendar />
    </main>
  );
}
