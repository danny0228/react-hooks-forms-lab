import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {

  const [name, setName] = useState("");
  const [category, setCategory] = useState("Produce");

  function handleSubmit(event) {
    event.preventDefault()
    console.log(name, category)
    const formData = {
      name,
      category,
      id: uuid()
    }
    onItemFormSubmit(formData)
  }
  return (
    <form onSubmit={e => handleSubmit(e)} className="NewItem">
      <label>
        Name:
        <input type="text" name="Name" value={name} onChange={(e) => setName(e.target.value)} />
      </label>

      <label>
        Category:
        <select name="Category" value={category} onChange={(e) => setCategory(e.target.value)}>
          <option defaultValue="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;