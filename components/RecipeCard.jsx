import styles from '../styles/recipeCard.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashCan,
  faUserGroup,
  faClock,
  faStar
} from "@fortawesome/free-solid-svg-icons";
import Link from 'next/link';
import Image from 'next/image';

const RecipeCard = ({ recipe, onDeleteRecipe }) => {

  const deleteRecipe = (id) => {
    onDeleteRecipe(id);
  }

  return (
    <div className={styles.recipe}>
      <Link href={`/recipe/${recipe.id}`}>
        <div className={styles.recipeHeader}>
          <Image
            src={recipe.photo_url}
            alt={recipe.title}
            width={300}
            height={300}
            className={styles.recipeImage}
          />
          <h2>{recipe.title}</h2>
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
