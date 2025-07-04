'use client';
import { useState, useEffect } from 'react';
import {  Trash2, Edit } from 'lucide-react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation';

const page = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState({ title: '', description: '' });
  const router = useRouter();
  return (
    <div className="min-h-screen bg-gradient-to-r from-violet-400 to-purple-300 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
       <h1 className="text-3xl font-bold text-center mb-8">
        Visa Verification
       </h1>
       <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-semibold mb-4">
          Add Details
        </h2>
        <div className="space-y-4">
          <input
          type="text"
          placeholder="Name"
          // value={newTodo.title}
          // onChange={(e) => setNewTodo({ ...newTodo, title: e.target.value })}
          className="w-full p-2 border rounded-lg"/>
            <input
          type="text"
          placeholder="Nationality"
          // value={newTodo.title}
          // onChange={(e) => setNewTodo({ ...newTodo, title: e.target.value })}
          className="w-full p-2 border rounded-lg"/>
            <input
          type="number"
          placeholder="Passport Number"
          // value={newTodo.title}
          // onChange={(e) => setNewTodo({ ...newTodo, title: e.target.value })}
          className="w-full p-2 border rounded-lg"/>
            <input
          type="number"
          placeholder="Visa Grant Number"
          // value={newTodo.title}
          // onChange={(e) => setNewTodo({ ...newTodo, title: e.target.value })}
          className="w-full p-2 border rounded-lg"/>
            <button
              onClick = ""
              className="w-full bg-gradient-to-r from-cyan-400 to-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 flex items-center justify-center"
            >
            
              Check Visa
            </button>
        </div>
       </div>
       <div className="space-y-4">
          {todos.map((todo) => (
            <div
              key={todo._id}
              className="bg-white p-4 rounded-lg shadow-md flex items-center justify-between"
            >
              <div>
                <h3 className="text-lg font-semibold">Title</h3>
                <p className="text-gray-600">Description</p>
              </div>
              
              </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default page