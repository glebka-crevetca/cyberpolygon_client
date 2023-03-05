import { createBrowserRouter } from "react-router-dom";
import { PATHS } from "./utils/urls";
import { Layout } from "./components/layout";
import { Login } from "./components/pages/LogReg/login";
import { Registration } from "./components/pages/LogReg/registration";
import { Materials } from "./components/pages/materials/materials";
import { TaskInfo } from "./components/pages/tasks/taskInfo";
import { Tasks } from "./components/pages/tasks/tasks";
//TODO import { ErrorPage } from "./components/pages/error-page";
//TODO import { NotFoundPage } from "./components/pages/not-found-page";
export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <>ErrorPage</>,
    children: [
      {
        index: true,
        element: <>HomeComponent</>,
      },
      {
        path: PATHS.tasks,
        element: <Tasks />,
      },
      {
        path: '/tasks/:id',
        element: <TaskInfo />,
      },
      {
        path: PATHS.materials,
        element: <Materials />,
      },
      {
        path: PATHS.profile,
        element: <>Profile</>
      },
      {
        path: PATHS.login,
        element: <Login />
      },
      {
        path: PATHS.register,
        element: <Registration />
      },
      {
        path: "*",
        element: <>NotFoundPage</>,
      }
    ],
  },
]);
