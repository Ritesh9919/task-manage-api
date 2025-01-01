# Task Management API

This is a simple task management api built using Node.js, Express, and MongoDB (with Mongoose). The application allows users to manage their tasks effectively by creating, updating, deleting, and viewing tasks. Additionally, users can mark tasks as completed.

## Features

- Create a new task with a title, description, status.
- View all tasks.
- View a specific task.
- Update a task.
- Delete a task.
- Data persistence using MongoDB.

## Getting Started

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Ritesh9919/task-manage-api.git
   cd folder name
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your MongoDB connection string:

   ```
   MONGO_URI=
   PORT=
   JWT_SECRET=
   ```

### Running the Application

Start the server:

```bash
npm run dev
```
