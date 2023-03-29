import { createBrowserRouter } from 'react-router-dom';
import { AppLayout } from '../Layout';
import { ExamplePage } from '../Pages';

export const AppRouter = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <ExamplePage />,
      },
    ],
  },
]);
