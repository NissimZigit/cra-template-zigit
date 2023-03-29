import { createBrowserRouter } from 'react-router-dom';
import { AppLayout } from '../Layout';
import { IntroPage } from '../Pages';

export const AppRouter = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <IntroPage />,
      },
    ],
  },
]);
