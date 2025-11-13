# React + Vite
# local-food-lovers-network-client


## Client-Side (Frontend) Features:
1. Modern, Responsive UI:
Built with React + TailwindCSS (DaisyUI) ensuring a fast, mobile-friendly, and elegant interface.

2. Authentication System:
Secure login and registration via Firebase/AuthContext, protecting user-only routes like My Reviews and My Favorites.

3. Dynamic Review Management:
Logged-in users can add, edit, delete, and update reviews seamlessly with instant feedback via React Query and Toast notifications.

4. Interactive Homepage:
Engaging Banner/Hero section, Featured Reviews, and other thematic sections (e.g., “Top Dishes”, “Foodie Community Highlights”) that auto-fetch data dynamically.

5. Protected Routing & Personalized Experience:
Certain pages (e.g., Add Review, My Reviews, Favorites) are protected using a ProtectedRoute component, ensuring only authenticated users can access them.

6. Real-time UI Updates:
Integrated with TanStack React Query for automatic cache invalidation and live UI refresh after data changes (add/edit/delete).

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


