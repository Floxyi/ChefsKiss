# ChefsKiss

ChefsKiss is a platform for discovering, sharing, and creating cooking recipes. Users can easily search for recipes, view detailed instructions, and contribute their own creations to the community.

## Features

- Search for recipes by categories, preparation time, and difficulty level
- View detailed recipe instructions with ingredients and steps
- Create and submit your own recipes to share with others

## Project Structure

- **Frontend**: A Single Page Application built using ReactJS and React-DOM-Router
- **Backend**: A Spring Boot application that powers the API and manages recipe data storage

## Prerequisites

Before getting started, ensure that you have the following tools installed:

### [**Docker**](https://www.docker.com/get-started)

You need Docker installed on your machine to run the backend database in a container. On macOS, you can install it using Homebrew:

```bash
brew install docker
```

### [**Java**](https://adoptopenjdk.net/)

You need a JDK installed on your machine to start the backend. On macOS, you can install them using Homebrew:

```bash
brew install openjdk
```

### [**Maven**](https://maven.apache.org/)

You need Maven installed on your machine to build the backend. On macOS, you can install it using Homebrew:

```bash
brew install maven
```

### [**Node.js**](https://nodejs.org)

You need Node.js and Yarn installed on your machine to start the frontend. On macOS, you can install it using Homebrew:

```bash
brew install node
brew install yarn
```

## Development Setup

### Backend

To run the backend locally:

1. Ensure Docker (Docker Deamon) is running on your machine.

2. On your first startup make sure the required dependencies are installed:

    ```bash
    cd backend
    mvn clean install
    cd ..
    ```

3. Build and start the Spring Boot application:

    ```bash
    make start-backend
    ```

This will start the backend on `http://localhost:8080`.

### Frontend

To run the frontend locally, follow these steps:

1. On your first startup make sure the required dependencies are installed:

    ```bash
    cd frontend
    yarn install
    cd ..
    ```

2. Start the development server:

    ```bash
    make start-frontend
    ```

This will launch the frontend at `http://localhost:3000`.
