import { FormEvent, useState } from "react";
import { PlusCircle } from "phosphor-react";
import styles from "./style.module.css";
import commonStyles from "../../styles/Common.module.css";


interface IHeaderProps {
    addTask: (title: string) => void;
}

export const Header: React.FC<IHeaderProps> = ({ addTask }) => {

    const [text, setText] = useState("");

    const handleNewtask = (e: FormEvent) => {
        e.preventDefault();

        if (text.trim().length === 0) return;

        setText("");
        addTask(text);
    }

    const handleValueChange = (value: string) => setText(value)

    return (

        <header className={styles.headerToDoList}>
            <img src="/logo-todo.svg" alt="Logo" title="ToDo List" />
            <form
                onSubmit={handleNewtask}
                className={`${commonStyles.container} ${styles.barraDeFerramenta}`}
            >

                <input
                    type="text"
                    placeholder="Adicione uma nova tarefa"
                    required
                    value={text}
                    onChange={e => handleValueChange(e.target.value)}
                />
                <button type="submit">
                    Criar
                    <PlusCircle size={20} />
                </button>
            </form>
        </header>
    )
}