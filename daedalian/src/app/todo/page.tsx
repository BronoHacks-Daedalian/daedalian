'use client'

import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { TodoItem } from './todoItem';
import React, { useState } from 'react';
import { Router } from 'next/router';
import Footer from '../footer';


export default function ToDo() {
  const [toDoListItems, setToDoListItems] = useState([
    new TodoItem("", "", "", null),
    new TodoItem("", "", "", null),
    new TodoItem("", "", "", null),
  ]);

  const addToDoListItem = () => {
    // Create a new TodoItem with default values
    const newItem = new TodoItem("", "", "", null);
    setToDoListItems([...toDoListItems, newItem]);
  };

  const removeItem = (indexToRemove: number) => {
    setToDoListItems(toDoListItems.filter((_, index) => index !== indexToRemove));
  };

  const downloadTodoList = async () => {
    try {
      const response = await fetch('/api/downloadTodoList', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ items: toDoListItems }),
      });

      if (!response.ok) {
        throw new Error('Error');
      }

      const blob = await response.blob();

      const url = window.URL.createObjectURL(blob);

      const a = document.createElement('a');
      a.href = url;
      a.download = 'todo-list.txt';

      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);

      window.URL.revokeObjectURL(url);

    } catch (error) {
      console.error('Error downloading file:', error);
    }
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

  return (
    <div className='items-center justify-items-center p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]'>
      <div className="max-w-screen-xl mx-auto bg-white rounded-xl shadow-md overflow-hidden p-8">
        <header className="font-[family-name:var(--font-geist-mono)] text-5xl bold leading-tight text-center">To-Do List</header>
        <p className="font-[family-name:var(--font-geist-mono)] bold leading-tight text-center mb-6">Add your to-do list here</p>
        <div className="flex items-center justify-between font-semibold text-gray-700 mb-2">
          <div className="w-58">Title</div>
          <div className="w-106">Description</div>
          <div className="w-50">Time to Complete</div>
          <div className="w-48">Due Date</div>
          <div className="w-20 text-center">Actions</div>
        </div>
        <ol className="space-y-4 mb-6">
          {toDoListItems.map((ToDoItem, index) => (
            <li className="flex items-center justify-between" key={index}>
              <input
                type="text"
                value={ToDoItem.title}
                onChange={(e) => handleEdit(index, "title", e.target.value)}
                placeholder='New Task'
                className="w-58 mr-2 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                value={ToDoItem.description}
                onChange={(e) => handleEdit(index, "description", e.target.value)}
                placeholder='Description'
                className="w-108 mr-2 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                value={ToDoItem.time}
                onChange={(e) => handleEdit(index, "time", e.target.value)}
                placeholder='Time to complete'
                className="w-50 mr-2 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <DatePicker
                selected={ToDoItem.dueDate}
                onChange={(date) => handleEdit(index, "dueDate", date)}
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={15}
                dateFormat="MMMM d, yyyy h:mm aa"
                className="w-50 mr-2 p-2 border border-gray-300 rounded"
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
            onClick={downloadTodoList}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
          >
            Generate
          </button>
        </div>
        <Footer />
      </div>
    </div>
  );
}