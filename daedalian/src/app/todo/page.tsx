'use client'

import { TodoItem } from './todoItem';
import React, { useState } from 'react';

export default function ToDo() {
  const [toDoListItems, setToDoListItems] = useState([
    new TodoItem("test1", "Description", "Time to complete", new Date()),
    new TodoItem("test2", "Description", "Time to complete", new Date()),
    new TodoItem("test3", "Description", "Time to complete", new Date()),
  ]);

  const addToDoListItem = () => {
    // Create a new TodoItem with default values
    const newItem = new TodoItem("New Task", "Description of new task", "Time to complete", new Date());
    setToDoListItems([...toDoListItems, newItem]);
  };

  const removeItem = (indexToRemove: number) => {
    setToDoListItems(toDoListItems.filter((_, index) => index !== indexToRemove));
  };

  function handleEdit(index: number, field: keyof TodoItem, value: any) {
    const updatedItems = [...toDoListItems];
    const item = updatedItems[index];

    switch (field) {
      case "title":
        item.title = value;
        break;
      case "description":
        item.description = value;
        break;
      case "time":
        item.time = value;
        break;
      case "dueDate":
        item.dueDate = value;
        break;
      default:
        break;
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
        <div className="flex items-center justify-between font-semibold text-gray-700 mb-2">
          <div className="w-60">Title</div>
          <div className="w-108">Description</div>
          <div className="w-52">Time to Complete</div>
          <div className="w-50">Due Date</div>
          <div className="w-22 text-center">Actions</div>
        </div>
        <ol className="space-y-4 mb-6">
          {toDoListItems.map((ToDoItem, index) => (
            <li className="flex items-center justify-between" key={index}>
              <input
                type="text"
                value={ToDoItem.title}
                onChange={(e) => handleEdit(index, "title", e.target.value)}
                placeholder='Title'
                className="w-60 mr-2 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                value={ToDoItem.description}
                onChange={(e) => handleEdit(index, "description", e.target.value)}
                placeholder='Description'
                className="w-110 mr-2 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                value={ToDoItem.time}
                onChange={(e) => handleEdit(index, "time", e.target.value)}
                className="w-50 mr-2 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                value={ToDoItem.getFormattedDueDate()}
                onChange={(e) => handleEdit(index, "dueDate", e.target.value)}
                className="w-50 mr-2 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
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