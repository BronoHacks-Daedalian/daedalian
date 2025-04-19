'use client'

import { TodoItem } from './todoItem';
import React, { useState } from 'react';

export default function ToDo() {
  const [toDoListItems, setToDoListItems] = useState([
    new TodoItem("test1", "CS 4750 project"),
    new TodoItem("test2", "CS 3800 Homework 2"),
    new TodoItem("test3", "MAT 3100 Proof showcase"),
  ]);

  const addToDoListItem = () => {
    // Create a new TodoItem with default values
    const newItem = new TodoItem("New Task", "Description of new task");
    setToDoListItems([...toDoListItems, newItem]);
  };

  const removeItem = (indexToRemove: number) => {
    setToDoListItems(toDoListItems.filter((_, index) => index !== indexToRemove));
  };

  function handleEdit(index: number, field: keyof TodoItem, value: string) {
    const updatedItems = [...toDoListItems];
    const item = updatedItems[index];

    if (field == "title") {
      item.title = value;
    } else if (field == "description") {
      item.description = value;
    }

    setToDoListItems(updatedItems);
  }

  function printItems() {
    toDoListItems.map((item) => (
      console.log(item.getSummary())
    ))
  }

  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 min-h-screen p-8">
      <div className="max-w-5/6 mx-auto bg-white rounded-xl shadow-md overflow-hidden p-6">
        <header className="text-purple-700 text-3xl font-bold text-center mb-4">To Do List</header>
        <p className="text-gray-600 text-center mb-6">This is the To-Do List Page.</p>

        <ol className="space-y-4 mb-6">
          {toDoListItems.map((ToDoItem, index) => (
            <li className="flex items-center justify-between" key={index}>
              <input
                type="text"
                value={ToDoItem.title}
                onChange={(e) => handleEdit(index, "title", e.target.value)}
                className="w-48 mr-2 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                value={ToDoItem.description}
                onChange={(e) => handleEdit(index, "description", e.target.value)}
                className="flex-grow mr-2 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={() => removeItem(index)}
                className="bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded"
              >
                Remove
              </button>
            </li>
          ))}
        </ol>

        <div className="flex justify-center space-x-4">
          <button
            onClick={addToDoListItem}
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
          >
            Add a new to-do
          </button>
          <button
            onClick={printItems}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
          >
            Print items to console
          </button>
        </div>
      </div>
    </div>
  );
}