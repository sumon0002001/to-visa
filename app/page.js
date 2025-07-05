'use client';
import { useState, useEffect } from 'react';
import {  Trash2, Edit } from 'lucide-react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

const page = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState({ title: '', description: '' });
  const router = useRouter();


  const fetchTodos = async () => {
    try {
      const response = await fetch('/api/Todo');
      const data = await response.json();
      setTodos(data.todos);
    } catch (error) {
      toast.error('Failed to fetch todos');
    }
  };
  const addTodo = async () => {
    if (!newTodo.title || !newTodo.description) {
      toast.error('Name  and Passport Number are required');
      return;
    }

    try {
      const response = await fetch('/api/Todo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newTodo),
      });
      const data = await response.json();
      setTodos([...todos, data.todo]);
      setNewTodo({ title: '', description: '' });
      toast.success('Your Visa has been approved');
    } catch (error) {
      toast.error('Failed ');
    }
  };


  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-violet-400 to-purple-300 py-8 px-4 sm:px-6 lg:px-8">
      <ToastContainer />
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
              value={newTodo.title}
              onChange={(e) => setNewTodo({ ...newTodo, title: e.target.value })}
              className="w-full p-2 border rounded-lg"
            />
            <input
              type="text"
              placeholder="Passport Number"
              value={newTodo.description}
              onChange={(e) => setNewTodo({ ...newTodo, description: e.target.value })}
              className="w-full p-2 border rounded-lg"
            />
            <Dialog>
  <DialogTrigger>    <button
              onClick = {addTodo}
              className="w-full bg-gradient-to-r from-cyan-400 to-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 flex items-center justify-center"
            >
            
              Check Visa
            </button></DialogTrigger>
  <DialogContent className="bg-blue-500">
    <DialogHeader>
      <DialogTitle className="text-center"> Dear Applicant</DialogTitle>
      <DialogDescription className="text-center">
        Your visa has been approved
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>
         
         
        
        </div>
       </div>
       <div className="space-y-4">
          {todos.map((todo) => (
            <div
              key={todo._id}
              className="bg-white p-4 rounded-lg shadow-md flex items-center justify-between"
            >
              <div>
                <h3 className="text-lg font-semibold">Name : {todo.title}</h3>
                <p className="text-gray-600">Passport Number: {todo.description}</p>
              </div>
              
              </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default page