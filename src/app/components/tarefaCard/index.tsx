import { Trash,Check  } from "phosphor-react";
import { ITarefa } from "../../App";

import styles from "./style.module.css";
import commonStyles from "../../styles/Common.module.css";
import { useState } from "react";

interface ITarefaCardProps {
  tarefa: ITarefa;
  onDelete: (id: string) => void;
  onComplete: (id: string) => void;
}

export const TarefaCard: React.FC<ITarefaCardProps> = ({ tarefa, onDelete, onComplete }) => {

  const [isCompleted, setIsCompleted] = useState(tarefa.isCompleted);

  const handleDeleteTask = () => onDelete(tarefa.id);
  
  const handleToggleTask = () => {
    onComplete(tarefa.id);
    setIsCompleted(!isCompleted);
  };

  return (
    <div className={`${commonStyles} ${styles.conteudoTarefa}`}>
      <label className={styles.tarefaCheck}>
        <input
          type="checkbox"
          checked={isCompleted}
          onChange={handleToggleTask}
        />
        <span>
          <Check size={15} />
        </span>
      </label>

      <strong className={isCompleted === true ? styles.tarefaRealizada : ""}>
        {tarefa.title}
      </strong>

      <button onClick={handleDeleteTask} title="Apagar Tarefa" className={styles.apagarTarefa}>
        <Trash />
      </button>
    </div>
  );
};