"use client";

// Hooks
import { useRouter } from "next/navigation";

import NewRecipe from "@/components/Recipes/NewRecipe";
import { createRecipe } from "@/utils/fetchUtils";

export default function CreateRecipe() {
  const router = useRouter();

  const handleSubmit = async (recipe) => {
    const res = await createRecipe(recipe);
    console.log(res);
    if (res.ok) {
      const { id } = await res.json();
      router.push(`/recipe/${id}`);
    } else {
      console.log("error");
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
