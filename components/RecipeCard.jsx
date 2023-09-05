import React from 'react';
import styles from '../styles/recipeCard.module.scss'

const RecipeCard = (props) => {
  return (
    <div className={styles.recipe}>
      <div className={styles.recipeHeader}>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </div>
      <div className={styles.recipeData}>
        <p>{props.rate}</p>
        <p>{props.prep_time}</p>
        <p>{props.servings}</p>
      </div>

    </div>
  );
}

export default RecipeCard;
