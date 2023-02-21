import { ITarefa } from "../../App";
import { TarefaCard } from "../tarefaCard";

import styles from "./style.module.css";
import commonStyles from "../../styles/Common.module.css";

interface ITarefasProps {
    tarefas: ITarefa[];
    onDelete: (id: string) => void;
    onComplete: (id: string) => void;
}

export const Tarefas: React.FC<ITarefasProps> = ({ tarefas, onDelete, onComplete }) => {
    const tarefasCriadas = tarefas.length;
    const tarefasConcluidas = tarefas.filter(tarefaAtual => tarefaAtual.isCompleted).length;

    return (
        <main className={`${commonStyles.container} ${styles.mainToDoList}`}>
            <header className={styles.progressoDeConlusao}>
                <div>
                    <p>Tarefas criadas</p>
                    <span>{tarefasCriadas}</span>
                </div>

                <div>
                    <p className={styles.textoRoxo}>Concluídas</p>
                    <span>{tarefasConcluidas} de {tarefasCriadas}</span>
                </div>
            </header>

            <div className={styles.conteudoTarefas}>
                {tarefasCriadas > 0 && (
                    tarefas.map(tarefaAtual => (
                        <TarefaCard
                            key={tarefaAtual.id}
                            tarefa={tarefaAtual}
                            onDelete={onDelete}
                            onComplete={onComplete}
                        />
                    ))
                )}

                {tarefasCriadas === 0 && (
                    <div className={styles.semTarefas}>
                        <img src="/clipboard.svg" alt="Mochila" title="Adicine uma tarefa" />
                        <p>
                            <span className={styles.destaque}>
                                Você ainda não tem tarefas cadastradas
                            </span> <br />
                            Crie tarefas e organize seus itens a fazer
                        </p>
                    </div>
                )}
            </div>
        </main>
    );
};