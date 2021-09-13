import { useState } from "react";

export default function Food({ data }) {
  const [entry, setEntry] = useState(data);
  const [deleted, setDeleted] = useState(false);

  const deleteHandler = (event) => {
    setDeleted(true)
  };

  return (
    <>
      {!deleted && (
        <li>
          <h2>{entry.item}</h2>
          <div onClick={deleteHandler}>Trash Can</div>
        </li>
      )}
    </>
  );
}
