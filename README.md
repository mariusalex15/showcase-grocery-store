# Showcase-Grocery-Store
# Project Setup and Database Configuration

## Getting Started

This guide will walk you through the process of setting up the project and configuring the database.

### Prerequisites

Before you begin, make sure you have the following installed:
- Node.js
- npm or Yarn (package manager)
- MySQl 
- Git (optional, for cloning the repository)
- Docker ( for running the database in a container)

### Clone the Repository

```git clone https://github.com/mariusalex15/showcase-grocery-store.git```

### Database Configuration
1. Pull the MySQL Docker image: ```docker pull mysql```
2. Run the MySQL Docker container: ```docker run --name mysql-container -e MYSQL_ROOT_PASSWORD=my-secret-pw -e MYSQL_DATABASE=mydb -p 3306:3306 -d mysql ```
3. Connect to the MySql container using DBEAVER or any other tool(wth these credentials localhost:3306, root, my-secret-pw)
4. Run the migration script from the root directory: ```GroceryStore/vegeTableStore database.sql```

### Backend Setup

1. Navigate to the backend directory: ```cd GroceryStore/backend```
2. Install the dependencies: ```npm install```
3. Start the server: ```nest start```

### Frontend Setup
1. Navigate to the frontend directory: ```cd GroceryStore/frontend```
2. Install the dependencies: ```npm install```
3. Start the server: ```npm ng serve```
