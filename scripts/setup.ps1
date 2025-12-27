# PowerShell script to set up the research consultation project environment

# Navigate to the backend directory and install dependencies
cd backend
npm install

# Navigate to the frontend directory and install dependencies
cd ../frontend
npm install

# Return to the root directory
cd ..

# Display a message indicating that the setup is complete
Write-Host "Project setup is complete. You can now run the backend and frontend applications."