const todoModel = require('../Models/todoModel');

const getTodo = async (req, res) => {   
    try {
        const todoData = await todoModel.find();
        res.status(201).json(todoData);
    } catch (error) {
        res.status(500).json({ message: "Error fetching todos" });
    }
}

const postTodo = async (req, res) => {
    try {
        const { task, status } = req.body;
        const newTodo = new todoModel({ task, status });
        await newTodo.save();
        res.status(201).json({ todo: newTodo });
    } catch (error) {
        res.status(500).json({ message: "Error creating todo" });
    }
}

const putTodo = async (req, res) => {
    try {
        const update = await todoModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!update) return res.status(404).json({ message: "Todo not found" });
        res.status(200).json({ update });
    } catch (error) {
        res.status(500).json({ message: "Error updating todo" });
    }
}

const deleteTodo = async (req, res) => {
    try {
        const deleteData = await todoModel.findByIdAndDelete(req.params.id);
        if (!deleteData) return res.status(404).json({ message: "Todo not found" });
        res.status(200).json({ message: "Todo deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting todo" });
    }
}

module.exports = {
    getTodo,    
    postTodo,
    putTodo,
    deleteTodo
}
