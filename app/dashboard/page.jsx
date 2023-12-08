import { getRecipes } from "@/utils/fetchUtils/recipeFetchUtils";
import Image from "next/image";
import Link from "next/link";

export default async function Dashboard() {
  const recipes = await getRecipes();

  return (
    <section className="h-screen p-16">
      {recipes?.map((recipe) => (
        <Link
          href={`/recipe/${recipe._id}`}
          className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:shadow-lg m-4 transition duration-250"
        >
          <Image
            className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
            src="https://images.unsplash.com/photo-1580959367188-956b3b6c389d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1200&ixid=MnwxfDB8MXxyYW5kb218MHx8cGVzdG98fHx8fHwxNzAxOTc1NTA1&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1600"
            alt="recipe image"
            width={1600}
            height={1200}
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {recipe.title}
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {recipe.description}
            </p>
          </div>
        </Link>
      ))}
    </section>
  );
}
