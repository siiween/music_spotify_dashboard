# Music Spotify Dashboard 🎵

[![GitHub Repo](https://img.shields.io/badge/github-repo-181717?style=flat-square&logo=github)](https://github.com/siiween/music_spotify_dashboard)

**Music Spotify Dashboard** is a web application based on the **Spotify API** that allows you to explore artists, albums, and recommendations with detailed analysis and graphical visualizations. Featuring a modern and modular design, the application ensures a smooth and intuitive user experience.

---



## Deprecated Spotify API Endpoint

The Spotify API has deprecated the `/browse/featured-playlists` endpoint, which was previously used on the home page to demonstrate infinite scroll functionality. Due to this change, I was forced to comment out that section in the application. 

However, the code for the infinite scroll implementation remains intact and can be revisited or adapted to other endpoints if needed.



## 🌟 Features

### 📋 Home Page (/home)

- **Artist List**: Over a thousand featured artists, with the option to load more via the _"Load More"_ button.
- **Top Playlists**: Dynamic list that automatically loads new playlists thanks to a **custom Infinite Scroll hook**.

### 🔍 Artist Page (/artist)

- **Artist Information**: Collapsible sidebar with detailed artist data, with preferences saved in `localStorage` thanks to the sidebar custom hook.
- **Visualizations**: Charts of the artist's songs and albums generated with **Chart.js**.
- **Album List**: Explore all available albums from the artist.

### 💡 Recommendations (/recommendations)

- Get recommended albums from Spotify with integrated **pagination** for easy navigation.

### 🌓 Theme Support (Light and Dark)

- Implemented with **next-themes** and managed by a global context.
- Switch between themes using a switcher located in the sidebar.

### 🗂 Customizable Sidebar

- Expandable or collapsible sidebar, with preferences saved in `localStorage` thanks to the sidebar custom hook.

### 🧩 Playground (/playground)

- Development page to test **UI Kit** components.
- Includes functional tests for theme switching.

---

## 🛠️ Technologies and Tools

### Frameworks and Libraries

- **Next.js**: Advanced route handling, server actions, and frontend optimization.
- **Tailwind CSS**: Development of the UI Kit, providing a modern and responsive design.
- **Atomic Design**: Modular architecture for reusable components.
- **Chart.js**: Interactive data visualization.

### Logic and Data

- **Spotify API**: Detailed data on artists, albums, playlists, and recommendations.
- **Axios**: Centralized configuration to simplify API calls.
- **Server Actions**: All API calls are centralized in the `actions/spotifyActions` file, optimized to avoid logic duplication.

### Typing

- **Types**: All object types from the Spotify API are defined in the `/types` folder.

### Testing

- **React Testing Library**: Unit tests for most components; more could not be done due to time constraints.
- **Cypress**: E2E tests. Although login to Spotify could not be implemented due to lack of documentation and cypress-social-logins not supporting Spotify, key functionalities like theme switching in `/playground` were tested.

---

## 📂 Project Architecture

The application follows the **Atomic Design** approach, where components are organized into hierarchical levels:

1. **Atoms**: Basic and independent components, such as buttons or inputs. (Folder: `components/atoms`)
2. **Molecules**: Combinations of atoms forming functional elements, like forms or lists. (Folder: `components/molecules`)
3. **Organisms**: More complex sets of molecules forming complete interface sections. (Folder: `components/organisms`)


## ⚙️ Installation and Configuration

Follow the steps below to install and run the project on your local machine.

### 1️⃣ Install Dependencies

Ensure you have [Node.js](https://nodejs.org/) installed (version 16 or higher). Then, install the project dependencies by running:

```bash
npm install
```

### 2️⃣ Configure Environment Variables

Create a .env.local file at the root of the project with the following environment variables:

```bash
JWT_SECRET=your_secret
SPOTIFY_CLIENT_ID=your_client_id
SPOTIFY_CLIENT_SECRET=your_client_secret
NEXTAUTH_SECRET=your_secret
NEXTAUTH_URL=http://localhost:3000
```

You can create this keys and configure a project in [Spotify Developer](https://developer.spotify.com/)

### 3️⃣ Run the Application

Start the development server with the following command:

```bash
npm run dev
```
The application will be available at http://localhost:3000.

### 4️⃣ Build for Production

To create an optimized version for production, run:

```bash
npm run build
```

Then, start the production server:

```bash
npm start
```

## 🧪 Tests and Testing

This project includes both unit and End-to-End (E2E) tests to ensure code quality.

### 1️⃣ Unit Tests

Unit tests are developed with React Testing Library and verify the behavior of individual components.

Run unit tests:

```bash
npm run test
```

Run tests in "watch" mode to monitor changes in real-time during development:

```bash
npm run test:watch
```

### 2️⃣ End-to-End (E2E) Tests

E2E tests are developed with Cypress and cover the complete application flow.

Pre-Configuration for E2E Tests:

Before running E2E tests, ensure the development server is running:

```bash
npm run dev
```

Open the Cypress Test Runner:

Run the following command to open Cypress's interactive panel:

```bash
npx cypress open
```

Select the test you wish to run from the panel.
Run E2E Tests in Headless Mode:

To execute tests without a graphical interface:

```bash
npx cypress run
```

Note: Currently, the E2E tests do not include the Spotify login flow due to technical limitations. However, key functionality has been tested in /playground.



## 🚀 Recommended Workflow

Follow these steps to work on the project:

- Configure the environment variables in .env.local.
- Use npm run dev to start the development server.
- During development:
    - Run npm run test to validate components with unit tests.
    - Use npx cypress open to validate complete application flows.
- Before deploying:
    - Run npm run build to prepare the project for production.
    - Use npm start to serve the application in the production environment.