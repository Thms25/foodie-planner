import React from 'react';
import styles from '../styles/recipeCard.module.scss'

const RecipeCard = (props) => {
  return (
    <div className={styles.recipe}>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <div>
        <ul>
          <li>{props.rate}</li>
          <li>{props.prep_time}</li>
          <li>{props.servings}</li>
        </ul>
      </div>

    </div>
  );
}

export default RecipeCard;
