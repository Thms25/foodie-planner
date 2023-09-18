import styles from '../styles/recipeCard.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashCan,
  faUserGroup,
  faClock,
  faStar
} from "@fortawesome/free-solid-svg-icons";
import Link from 'next/link';

const RecipeCard = ({ recipe }) => {

  const deleteRecipe = async (id) => {
    console.log("delete button pressed")
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_RECIPES}/${id}`, {
        method: 'DELETE',
      })
      if (res.ok) {
        const resData = await res.json();
        console.log(resData)
      } else {
        console.log('error', res)
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className={styles.recipe}>
      <Link href={`/recipe/${recipe.id}`}>
        <div className={styles.recipeHeader}>
          <h2>{recipe.title}</h2>
          <p>{recipe.description}</p>
        </div>
        <div className={styles.recipeData}>
          <div>
            <p>{recipe.rate}</p>
            <FontAwesomeIcon icon={faStar} />
          </div>
          <div>
            <p>{recipe.prep_time}'</p>
            <FontAwesomeIcon icon={faClock} />
          </div>
          <div>
            <p>{recipe.servings}</p>
            <FontAwesomeIcon icon={faUserGroup} />
          </div>
        </div>
      </Link>
      <FontAwesomeIcon icon={faTrashCan} className={styles.trashcan} onClick={() => deleteRecipe(recipe.id)}/>
    </div>
  );
}

export default RecipeCard;
