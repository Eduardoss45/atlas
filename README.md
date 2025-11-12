# Word Info App

This project is a full-stack application that provides information about countries, including weather, timezone, economic indicators, images, and a summary from Wikipedia. It consists of a backend (Node.js with Express) and a frontend (Next.js).

## Project Structure

- `backend/`: Contains the Node.js Express server.
- `frontend/`: Contains the Next.js application.

## Getting Started

### Prerequisites

Before running the application, ensure you have the following installed:

- Node.js (LTS version recommended)
- npm or yarn

### Backend Setup

1.  Navigate to the `backend` directory:
    ```bash
    cd backend
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Create a `.env` file in the `backend` directory with the following API keys:
    ```
    TZ_API_KEY=YOUR_TIMEZONEDB_API_KEY
    IP_API_KEY=YOUR_IPINFO_API_KEY
    PEXELS_API_KEY=YOUR_PEXELS_API_KEY
    ```
    -   **TimezoneDB API Key**: Obtain from [https://timezonedb.com/](https://timezonedb.com/)
    -   **IPinfo API Key**: Obtain from [https://ipinfo.io/](https://ipinfo.io/)
    -   **Pexels API Key**: Obtain from [https://www.pexels.com/api/](https://www.pexels.com/api/)

4.  Start the backend server:
    ```bash
    npm run dev
    ```
    The backend server will run on `http://localhost:3001`.

### Frontend Setup

1.  Navigate to the `frontend` directory:
    ```bash
    cd frontend
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Start the frontend development server:
    ```bash
    npm run dev
    ```
    The frontend application will run on `http://localhost:3000`.

## API Endpoints (Backend)

-   `GET /info/:pais`: Get comprehensive information about a specified country. Replace `:pais` with the country name in Portuguese (e.g., `/info/Brasil`).

## Technologies Used

### Backend

-   Node.js
-   Express.js
-   `cors`
-   `dotenv`
-   `node-fetch`
-   `nodemon` (for development)

### Frontend

-   Next.js
-   React
-   Tailwind CSS
-   `@radix-ui/react-dialog`
-   `class-variance-authority`
-   `clsx`
-   `cmdk`
-   `lucide-react`
-   `recharts`
-   `tailwind-merge`
-   `typescript`
-   `eslint`
-   `postcss`
-   `autoprefixer`

## Contributing

Feel free to contribute to this project by opening issues or submitting pull requests.
