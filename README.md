# Computing 4 Good Research Group (Comp4Good)

This repository contains the website for the Computing 4 Good Research Group, merging the activities of RegTech4AI and CoCoDa.

## Tech Stack

- **Framework**: React (Vite)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React

## Local Development

1.  **Install dependencies**:
    ```bash
    npm install
    ```

2.  **Start the development server**:
    ```bash
    npm run dev
    ```
    The site will be available at `http://localhost:5173`.

3.  **Build for production**:
    ```bash
    npm run build
    ```

## Content Management

To update the website content (team members, projects, text):
- Edit `src/data/content.ts`.
- This file contains all the text data for the website.

## Deployment

This project is configured to deploy to **GitHub Pages** using GitHub Actions.

### Setup Instructions

1.  **Push to GitHub**:
    Push this code to a GitHub repository.

2.  **Configure Settings**:
    - Go to your repository on GitHub.
    - Go to **Settings** > **Pages**.
    - Under **Build and deployment**, select **GitHub Actions** as the source.

3.  **Update `vite.config.ts`** (Important for Project Pages):
    - If your repository is named `my-repo`, you must update `vite.config.ts`:
      ```typescript
      base: '/my-repo/',
      ```
    - If you are using a custom domain or `username.github.io`, you can leave `base: '/'`.

4.  **Trigger Deployment**:
    - Commit and push changes to the `main` branch.
    - The "Deploy to GitHub Pages" action will run automatically.

## Project Structure

- `src/components/`: Reusable React components.
- `src/data/`: Content and data files.
- `src/App.tsx`: Main application layout.
- `.github/workflows/`: GitHub Actions configuration.
