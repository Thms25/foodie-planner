import React from 'react';
import styles from '../styles/recipeCard.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashCan,
  faUserGroup,
  faClock,
  faStar
} from "@fortawesome/free-solid-svg-icons";

const RecipeCard = (props) => {
  return (
    <div className={styles.recipe}>
      <div className={styles.recipeHeader}>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </div>
      <div className={styles.recipeData}>
        <div>
          <p>{props.rate}</p>
          <FontAwesomeIcon icon={faStar} />
        </div>
        <div>
          <p>{props.prep_time}'</p>
          <FontAwesomeIcon icon={faClock} />
        </div>
        <div>
          <p>{props.servings}</p>
          <FontAwesomeIcon icon={faUserGroup} />
        </div>
      </div>
      <FontAwesomeIcon icon={faTrashCan} className={styles.trashcan} />
    </div>
  );
}

export default RecipeCard;
