# Research Consultation Services

This project provides a platform for users to schedule and manage research consultation services. It consists of a backend built with TypeScript and Express, and a frontend developed using React.

## Project Structure

```
research-consultation
├── backend                # Backend application
│   ├── src               # Source files for the backend
│   ├── package.json      # Backend dependencies and scripts
│   ├── tsconfig.json     # TypeScript configuration for the backend
│   └── .env.example      # Environment variables template for the backend
├── frontend               # Frontend application
│   ├── src               # Source files for the frontend
│   ├── package.json      # Frontend dependencies and scripts
│   ├── tsconfig.json     # TypeScript configuration for the frontend
│   └── .env.example      # Environment variables template for the frontend
├── shared                 # Shared resources
│   └── schemas           # JSON schemas for validation
├── scripts                # Scripts for setup and automation
├── .vscode                # VS Code configuration
├── package.json           # Root configuration for the project
├── README.md              # Project documentation
└── .gitignore             # Files to ignore in version control
```

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm (Node package manager)
- TypeScript (for backend and frontend)

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd research-consultation
   ```

2. Install backend dependencies:
   ```
   cd backend
   npm install
   ```

3. Install frontend dependencies:
   ```
   cd ../frontend
   npm install
   ```

### Running the Application

1. Start the backend server:
   ```
   cd backend
   npm start
   ```

2. Start the frontend application:
   ```
   cd frontend
   npm start
   ```

### Usage

- Access the frontend application at `http://localhost:3000`.
- Use the provided forms to schedule and manage consultations.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.