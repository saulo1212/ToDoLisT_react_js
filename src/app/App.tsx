import { useState } from "react";
import uuid from "react-uuid";

import {
   Header,
   Tarefas
} from './components/index';

export interface ITarefa {
   id: string,
   title: string;
   isCompleted: boolean;
}

export const App = () => {

   const [tarefas, setTarefas] = useState<ITarefa[]>([]);

   const addTask = (titleValue: string) => {
      const novaTarefa = {
         id: uuid(),
         title: titleValue,
         isCompleted: false
      }

      setTarefas([
         ...tarefas, novaTarefa
      ]);
   }


   const deletarTarefa = (id: string) => {
      const tarefaDeletada = tarefas.filter(tarefaAtual => tarefaAtual.id !== id);
      setTarefas(tarefaDeletada);
   };


   const realizarTarefa = (id: string) => {

      const tarefaRealizada = tarefas.map(tarefaAtual => {
         if (tarefaAtual.id === id) 
            return {
               ...tarefaAtual,
               isCompleted: !tarefaAtual.isCompleted
            };
      
         return tarefaAtual;
      });

      setTarefas(tarefaRealizada);
   }


   return (
      <>
         <Header addTask={addTask} />
         <Tarefas tarefas={tarefas} onDelete={deletarTarefa} onComplete={realizarTarefa} />
      </>
   )
}