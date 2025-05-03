# Go Route Task React Application

This is a React application built as part of the **Go Route Task**. The app is designed to interact with a backend API hosted on Vercel and provides features such as authentication, product listing, animations, and more.





## Features

### 1. **Authentication**

- **Login and Signup**: Users can log in or sign up using their email and password.
- **Token Management**:
  - Access and refresh tokens are securely stored in `localStorage` after being encrypted using `CryptoJS`.
  - Tokens are automatically decrypted when needed.
- **Persistent User State**: The app uses Zustand with the `persist` middleware to ensure user state is retained across page refreshes.

### 2. **Products Module**

- **Products Grid**: Displays a list of products in a responsive grid layout.
- **Product Details**: Each product includes an image, title, description, and price.
- **Scroll Animations**: Products animate into view as the user scrolls down the page using the `ScrollReveal` component.

### 3. **Global Animations**

- **Reusable Animations**: Animations like `fadeInFromLeft` and `fadeInFromBottom` are implemented using CSS and applied dynamically via the `ScrollReveal` component.

### 4. **Reusable Components**

- **ScrollReveal**: A reusable component that animates child elements when they appear in the viewport.
- **Toast Notifications**: Provides success, error, info, and warning notifications using `react-toastify`.

### 5. **Environment Variables**

- **API Base URL**: The app interacts with the backend API using the `VITE_BASE_URL` environment variable.
- **Secret Key**: A `VITE_SECRET_KEY` is used for encrypting and decrypting sensitive data.









## Project Structure

src/
├── features/
│ ├── auth_module/
│ │ ├── components/
│ │ │ ├── AuthForm.tsx
│ │ │ ├── SignIn.tsx
│ │ │ └── SignUp.tsx
│ │ ├── models/
│ │ │ └── UserModel.tsx
│ │ ├── stores/
│ │ │ └── useAuthStore.tsx
│ │ ├── styles/
│ │ │ └── AuthPage.module.css
│ ├── products_module/
│ │ ├── components/
│ │ │ ├── ProductsGrid.tsx
│ │ │ └── ProductsGridItem.tsx
│ │ ├── styles/
│ │ │ └── ProductsGrid.module.css
├── global/
│ ├── components/
│ │ └── ScrollReveal.tsx
│ ├── hooks/
│ │ └── useOnScreen.ts
│ ├── services/
│ │ ├── toastUtils.tsx
│ │ └── tokenStorage.ts
│ ├── styles/
│ │ └── Animations.module.css
│ ├── utils/
│ │ └── crypto.tsx








## Technologies Used

- React: Frontend framework.
- TypeScript: For type safety and better developer experience.
- Vite: Build tool for fast development and production builds.
- Zustand: State management library for managing user authentication state.
- React Toastify: For toast notifications.
- CryptoJS: For encrypting and decrypting sensitive data.
- CSS Modules: For scoped and reusable styles.
- Intersection Observer: For detecting when elements enter the viewport (used in ScrollReveal).






## ## Environment Variables

- The app uses the following environment variables, which should be defined in a .env file:

- VITE_BASE_URL: The base URL of the backend API.
- VITE_SECRET_KEY: A secret key used for encrypting and decrypting sensitive data.






## Setup and Installation

1. Clone the Repository:
- git clone https://github.com/your-repo/go-route-task-react.git
- cd go-route-task-react

2. Install Dependencies:
- npm install

3. Set Up Environment Variables:
   Create a .env file in the root directory and add the required variables:
- VITE_BASE_URL=https://go-route-task-nestjs.vercel.app/
- VITE_SECRET_KEY=your-secret-key

4. Run the Development Server:
- npm run dev

5. Build for Production:
- npm run build

6. Deploy to Vercel:
- Push your code to a GitHub repository.
- Connect the repository to Vercel.
- Ensure the environment variables are added in the Vercel dashboard.







## Deployment

- The app is deployed on Vercel. Ensure the following steps are completed for a successful deployment:

- Add the .env variables in the Vercel dashboard under Settings > Environment Variables.
  Deploy the app using the Vercel CLI or dashboard.
