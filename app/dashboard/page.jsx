import { getRecipes } from "@/utils/fetchUtils";
import Link from "next/link";

export default async function Dashboard() {
  const recipes = await getRecipes();

  return (
    <section className="h-screen p-26">
      <h1 className="text-4xl">This is dashboard page</h1>
      <p className="text-xl">All recipes here</p>
      <div className="p-12">
        {recipes?.map((recipe) => (
          <div key={recipe._id}>
            <Link href={`/recipe/${recipe._id}`}>
              <p className="text-xl p-12 my-8 mx-auto border border-primary w-1/2">
                {recipe.title}
              </p>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
