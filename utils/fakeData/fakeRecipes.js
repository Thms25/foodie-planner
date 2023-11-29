const fakeRecipes = [
  {
    title: "Chicken Alfredo Pasta",
    description:
      "Creamy pasta dish with grilled chicken, Alfredo sauce, and Parmesan cheese.",
    foodCategory: "Italian",
    servings: 4,
    prepTime: "30 minutes",
    image: "chicken_alfredo_pasta.jpg",
  },
  {
    title: "Beef Tacos",
    description:
      "Flavorful ground beef seasoned with Mexican spices, served in tortillas with toppings.",
    foodCategory: "Mexican",
    servings: 6,
    prepTime: "25 minutes",
    image: "beef_tacos.jpg",
  },
  {
    title: "Vegetable Stir-Fry",
    description:
      "Assorted vegetables stir-fried in a soy-ginger sauce, served over rice.",
    foodCategory: "Asian",
    servings: 3,
    prepTime: "20 minutes",
    image: "vegetable_stirfry.jpg",
  },
  {
    title: "Classic Cheeseburger",
    description:
      "Juicy beef patty topped with cheese, lettuce, tomato, and special sauce on a bun.",
    foodCategory: "American",
    servings: 2,
    prepTime: "25 minutes",
    image: "classic_cheeseburger.jpg",
  },
  {
    title: "Lemon Herb Roast Chicken",
    description:
      "Whole chicken seasoned with lemon, garlic, and herbs, roasted to golden perfection.",
    foodCategory: "Roast",
    servings: 4,
    prepTime: "1 hour 30 minutes",
    image: "roast_chicken.jpg",
  },
  {
    title: "Pasta Primavera",
    description:
      "Colorful pasta dish loaded with fresh vegetables and a light cream sauce.",
    foodCategory: "Italian",
    servings: 4,
    prepTime: "35 minutes",
    image: "pasta_primavera.jpg",
  },
  {
    title: "Fish Tacos",
    description:
      "Crispy fish fillets served in tortillas with cabbage slaw and chipotle mayo.",
    foodCategory: "Seafood",
    servings: 3,
    prepTime: "30 minutes",
    image: "fish_tacos.jpg",
  },
  {
    title: "Baked Ziti",
    description:
      "Ziti pasta baked with marinara sauce, ricotta, mozzarella, and Parmesan cheese.",
    foodCategory: "Italian",
    servings: 5,
    prepTime: "40 minutes",
    image: "baked_ziti.jpg",
  },
  {
    title: "Spinach and Feta Stuffed Chicken",
    description:
      "Chicken breasts stuffed with spinach, feta cheese, and herbs, baked to perfection.",
    foodCategory: "Mediterranean",
    servings: 2,
    prepTime: "45 minutes",
    image: "spinach_feta_chicken.jpg",
  },
  {
    title: "Shrimp Scampi",
    description:
      "Tender shrimp sautéed with garlic, butter, lemon juice, and white wine.",
    foodCategory: "Seafood",
    servings: 3,
    prepTime: "20 minutes",
    image: "shrimp_scampi.jpg",
  },
  {
    title: "Eggplant Parmesan",
    description:
      "Slices of eggplant breaded, fried, and baked with marinara sauce and mozzarella.",
    foodCategory: "Italian",
    servings: 4,
    prepTime: "50 minutes",
    image: "eggplant_parmesan.jpg",
  },
  {
    title: "Honey Garlic Glazed Salmon",
    description:
      "Salmon fillets glazed with a sweet and savory honey garlic sauce, broiled to perfection.",
    foodCategory: "Seafood",
    servings: 2,
    prepTime: "18 minutes",
    image: "honey_garlic_salmon.jpg",
  },
  {
    title: "Caesar Salad",
    description:
      "Crisp romaine lettuce, croutons, Parmesan cheese, and Caesar dressing.",
    foodCategory: "Salad",
    servings: 3,
    prepTime: "15 minutes",
    image: "caesar_salad.jpg",
  },
  {
    title: "Chicken Quesadillas",
    description:
      "Grilled flour tortillas filled with chicken, cheese, and peppers, served with salsa.",
    foodCategory: "Mexican",
    servings: 4,
    prepTime: "20 minutes",
    image: "chicken_quesadillas.jpg",
  },
  {
    title: "Lentil Soup",
    description:
      "Hearty soup made with lentils, vegetables, and spices, perfect for a chilly day.",
    foodCategory: "Soup",
    servings: 6,
    prepTime: "50 minutes",
    image: "lentil_soup.jpg",
  },
  {
    title: "Stuffed Bell Peppers",
    description:
      "Bell peppers filled with a mixture of ground beef, rice, tomatoes, and spices.",
    foodCategory: "Comfort Food",
    servings: 4,
    prepTime: "45 minutes",
    image: "stuffed_bell_peppers.jpg",
  },
  {
    title: "Tofu Stir-Fry",
    description:
      "Tofu cubes and mixed vegetables stir-fried in a savory soy-based sauce.",
    foodCategory: "Vegetarian",
    servings: 3,
    prepTime: "25 minutes",
    image: "tofu_stirfry.jpg",
  },
  {
    title: "Greek Salad",
    description:
      "Fresh salad with tomatoes, cucumbers, red onions, olives, feta cheese, and Greek dressing.",
    foodCategory: "Mediterranean",
    servings: 2,
    prepTime: "15 minutes",
    image: "greek_salad.jpg",
  },
  {
    title: "Pork Chops with Apple Compote",
    description:
      "Pan-seared pork chops served with a sweet and tangy apple compote.",
    foodCategory: "Comfort Food",
    servings: 2,
    prepTime: "35 minutes",
    image: "pork_chops_apple_compote.jpg",
  },
  {
    title: "Mango Salsa Chicken",
    description:
      "Grilled chicken topped with fresh mango salsa for a tropical twist.",
    foodCategory: "Fusion",
    servings: 3,
    prepTime: "30 minutes",
    image: "mango_salsa_chicken.jpg",
  },
  {
    title: "Vegetable Curry",
    description:
      "Assorted vegetables cooked in a flavorful curry sauce, served with rice.",
    foodCategory: "Indian",
    servings: 5,
    prepTime: "40 minutes",
    image: "vegetable_curry.jpg",
  },
  {
    title: "Butternut Squash Risotto",
    description:
      "Creamy risotto made with butternut squash, onions, and Parmesan cheese.",
    foodCategory: "Italian",
    servings: 4,
    prepTime: "45 minutes",
    image: "butternut_squash_risotto.jpg",
  },
];
