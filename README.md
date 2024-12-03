## Technologies Used

- *Frontend*:
  - React.js
  - React Router
  - Tailwind CSS
  - Axios for API requests

- *Backend*:
  - Node.js
  - Express.js
  - MongoDB
  - Mongoose for database interaction

- *Authentication*:
  - JWT (JSON Web Tokens)

## Prerequisites

Before you begin, ensure you have met the following requirements:

- *Node.js* and *npm* installed. [Download Node.js](https://nodejs.org/)
- Git for version control.

## Installation

### Clone the repository

```bash
git clone https://github.com/OmNilawar/DealsDray.git
cd basicCrud
```

### Backend Setup

```bash
cd backend
npm install
```

### Start Backend Server

```bash
npm run dev
```

### Frontend Setup

```bash
cd frontend
npm install
```

### Start Frontend 

```bash
npm run dev
```

## API Endpoints

### Authentication
- `POST /api/admin/login` - Authenticates the admin and generates a JWT token.

### Admin Login Credentials

Use the following credentials to log in as an admin:

- **Email**: dummyadmin@gmail.com
- **Password**: admin@123

### Employee Operations
- `GET /api/employee/fetch` - Fetch all employee records.
- `POST /api/employee/add` - Add a new employee.
- `PUT /api/employee/edit/:id` - Edit an existing employee by ID.
- `DELETE /api/employee/delete/:id` - Delete an employee by ID.

