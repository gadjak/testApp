import { FC } from "react";
import { Exercise } from "@/types";
import styles from "./ExerciseList.module.scss";

interface ExerciseListProps {
  exercises: Exercise[];
}

export const ExerciseList: FC<ExerciseListProps> = ({ exercises }) => {
  return (
    <div className={styles.root}>
      <h2 className={styles.title}>Список вправ</h2>
      <ul>
        {exercises.map((exercise, index) => (
          <li key={index}>
            <div className={styles.item}>
              <div>
                <h3> {exercise.name}</h3>
                <p>
                  <strong>Type:</strong> {exercise.type}
                </p>
                <p>
                  <strong>Muscle:</strong> {exercise.muscle}
                </p>
                <p>
                  <strong>Equipment:</strong> {exercise.equipment}
                </p>
                <p>
                  <strong>Difficulty:</strong> {exercise.difficulty}
                </p>
              </div>
            </div>
            <div className={styles.item}>
              <p>
                <strong>Instructions:</strong> {exercise.instructions}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
