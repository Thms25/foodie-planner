import Recipes from "@/components/Recipes";
import styles from "../styles/home.module.scss";
import Calendar from "@/components/HomeCalendar";
import Image from "next/image";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.banner}>
        <h1>Welcome to Foodie Planner</h1>
        <Image
          priority
          src="/images/foodBanner.jpg"
          alt="foodie planner's banner image"
          width={1024}
          height={596}
          id={styles.bannerImage}
        />
      </div>
      <div className={styles.recipes}>
        <h2>Browse through our most liked recipes...</h2>
        <Recipes />
      </div>
      <div className={styles.calendar}>
        <Calendar />
      </div>
    </main>
  );
}
