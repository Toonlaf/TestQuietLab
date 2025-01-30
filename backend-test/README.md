# Backend Developer Test (30-45 minutes)

## Task: Create a Simple Task Management API

Implement a RESTful API for a basic task management system. The API should handle tasks with basic CRUD operations and include simple business logic.

### Requirements:

1. Create an API with the following endpoints:
   - GET /tasks - List all tasks
   - GET /tasks/:id - Get a specific task
   - POST /tasks - Create a new task
   - PUT /tasks/:id - Update a task
   - DELETE /tasks/:id - Delete a task

2. Task Model should include:
   - id (unique identifier)
   - title (string)
   - description (string)
   - status (enum: 'pending', 'in_progress', 'completed')
   - priority (enum: 'low', 'medium', 'high')
   - created_at (timestamp)

3. Implementation Requirements:
   - Use any backend framework of your choice (Express.js, FastAPI, Django, etc.)
   - Implement basic input validation
   - Use in-memory storage (no need for a database)
   - Include error handling
   - Add basic logging

### Bonus Points (if time allows):
- Add filtering by status and priority
- Implement task search functionality
- Add unit tests
- Add request rate limiting

### Evaluation Criteria:
- Code organization and structure
- Error handling
- Input validation
- API design
- Code documentation

### Getting Started:
1. Clone this repository
2. Navigate to the backend-test directory
3. Install dependencies
4. Implement your solution
5. Include instructions to run the API

Time limit: 45 minutes 