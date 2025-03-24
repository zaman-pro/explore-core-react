// export default function Todo({ task, isDone }) {
//   return (
//     <div>
//       <li>Task: {task}</li>
//     </div>
//   );
// }

// export default function ToDo({ task, isDone }) {
//   if (isDone) {
//     return <li>Done: {task}</li>;
//   } else {
//     return <li>Pending : {task}</li>;
//   }
// }
export default function ToDo({ task, isDone }) {
  // if (isDone) {
  //   return <li>Done: {task}</li>;
  // }
  // return <li>To be done: {task}</li>;

  return isDone ? <li>{task} ✔</li> : <li>{task} ❌</li>;
}
