"use client";

// Hooks
import { useRouter } from "next/navigation";

// Auth
import { useSession } from "next-auth/react";

// Components
import NewRecipe from "@/components/Recipes/NewRecipe";

// Utils
import { createRecipe } from "@/utils/fetchUtils/recipeFetchUtils";

export default function CreateRecipe() {
  const router = useRouter();
  const { data: session } = useSession();

  const handleSubmit = async (recipe) => {
    const recipeWithUser = { ...recipe, userId: session?.user.id };
    const res = await createRecipe(recipeWithUser);

    if (res.ok) {
      const data = await res.json();
      console.log(data);
      const { _id: id } = data;

      router.push(`/recipe/${id}`);
    } else {
      console.error("could not create recipe...");
    }
  };
  return (
    <section className="p-4">
      <h3 className="text-3xl border-b border-primary p-2 tracking-wider">
        Create your recipe
      </h3>
      <NewRecipe onSubnit={handleSubmit} />
    </section>
  );
}
