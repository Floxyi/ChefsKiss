# ChefsKiss

ChefsKiss is a platform for discovering, sharing, and creating cooking recipes. Users can easily search for recipes, view detailed instructions, and contribute their own creations to the community.

## Features

- Search for recipes by categories, preparation time, and difficulty level
- View detailed recipe instructions with ingredients and steps
- Create and submit your own recipes to share with others

## Project Structure

- **Frontend**: A Single Page Application (SPA) built using ReactJS and React-DOM-Router
- **Backend**: A Spring Boot application that powers the API and manages recipe data storage

## Prerequisites

Before getting started, ensure that you have the following tools installed:

- [**Docker**](https://www.docker.com/get-started) (for containerized development)
- [**Node.js**](https://nodejs.org) (for frontend development)
- [**Java**](https://adoptopenjdk.net/) (for backend development)
- [**Maven**](https://maven.apache.org/) (for building and managing backend dependencies)

## Development Setup

### Frontend

To run the frontend locally, follow these steps:

1. Install the required dependencies:

    ```bash
    yarn install
    ```

2. Start the development server:

    ```bash
    make start-frontend
    ```

This will launch the frontend at `http://localhost:3000`.

### Backend

To run the backend locally:

1. Ensure Docker is running on your machine.

2. Build and start the Spring Boot application:

    ```bash
    make start-backend
    ```

This will start the backend on `http://localhost:8080`.
