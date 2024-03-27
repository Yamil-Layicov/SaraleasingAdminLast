import AdminLayout from "../pages/adminLayout/AdminLayout";
import Dashboard from "../pages/dashboard/Dashboard";
import Messages from "../pages/messages/Messages";

import AdminSliderLayout from "../pages/home/slider/adminSliderLayout/AdminSliderLayout";
import AdminSlider from "../pages/home/slider/AdminSlider";
import SliderCreate from "../pages/home/slider/sliderCreate/SliderCreate";
import SliderEdit from "../pages/home/slider/sliderEdit/SliderEdit";

import CategoriesLayout from "../pages/services/categories/CategoriesLayout";
import Categories from "../pages/services/categories/Categories";
import CategoryCreate from "../pages/services/categories/categoryCreate/CategoryCreate";
import CategoryEdit from "../pages/services/categories/categoryEdit/CategoryEdit";

import ProductLayout from "../pages/services/products/ProductLayout";
import Products from "../pages/services/products/Products";
import ProductCreate from "../pages/services/products/productCreate/ProductCreate";
import ProductEdit from "../pages/services/products/ProductEdit";
import News from "../pages/news/News";
import NewsLayout from "../pages/news/NewsLayout";
import NewsCreate from "../pages/news/newsCreate/NewsCreate";
import NewsEdit from "../pages/news/newsEdit/NewsEdit";
import CharacteristicLayout from "../pages/services/characteristic/CharacteristicLayout";
import Characteristic from "../pages/services/characteristic/Characteristic";
import CharacteristicCreate from "../pages/services/characteristic/characteristicCreate/CharacteristicCreate";
import CharacteristicEdit from "../pages/services/characteristic/characteristicEdit";
import Login from "../pages/login/Login";
import PrivateRoute from "./PrivateRoute";
import CommentsLayout from "../pages/home/comments/CommentsLayout";
import Comments from "../pages/home/comments/Comments";
import CommentsCreate from "../pages/home/comments/commentsCreate/CommentsCreate";
import CommentsEdit from "../pages/home/comments/commentsEdit/CommentsEdit";
import Companies from "../pages/home/companies/Companies";
import About from "../pages/about/About";
import Missions from "../pages/about/Missions";
import Managment from "../pages/about/Managment";
import VacanciesLayout from "../pages/career/VacanciesLayout";
import Vacancies from "../pages/career/Vacancies";
import VacanciesCreate from "../pages/career/vacanciesCreate/VacanciesCreate";
import VacanciesEdit from "../pages/career/vacanciesEdit/VacanciesEdit";
import SocialsLayout from "../pages/socials/SocialsLayout";
import Socials from "../pages/socials/Socials";
import SocialCreate from "../pages/socials/socialCreate/SocialCreate";
import SocialEdit from "../pages/socials/SocialEdit";
import ProjectsLayout from "../pages/projects/ProjectsLayout";
import Projects from "../pages/projects/Projects";
import ProjectsCreate from "../pages/projects/projectsCreate/ProjectsCreate";
import ProjectsEdit from "../pages/projects/ProjectsEdit";
import Cooperation from '../pages/cooperation/Cooperation';


const routes = [
  {
    path: "/",
    element: <PrivateRoute><AdminLayout /></PrivateRoute>,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "about",
        element: <About/>,
      },
      {
        path: "missions",
        element: <Missions/>,
      },
      {
        path: "management",
        element: <Managment/>,
      },
      {
        path: "sliders",
        element: <AdminSliderLayout />,
        children: [
          {
            index: true,
            element: <AdminSlider />,
          },
          {
            path: "yeni",
            element: <SliderCreate />,
          },
          {
            path: ":id",
            element: <SliderEdit />,
          },
        ],
      },
      {
        path: "comments",
        element: <CommentsLayout />,
        children: [
          {
            index: true,
            element: <Comments />,
          },
          {
            path: "yeni",
            element: <CommentsCreate />,
          },
          {
            path: ":id",
            element: <CommentsEdit />,
          },
        ],
      },
      {
        path:"/companies",
        element:<Companies/>
      },
      {
        path: "products",
        element: <ProductLayout />,
        children: [
          {
            index: true,
            element: <Products />,
          },
          {
            path: "yeni",
            element: <ProductCreate />,
          },
          {
            path: ":id",
            element: <ProductEdit />,
          },
        ],
      },

      {
        path: "characteristic",
        element: <CharacteristicLayout />,
        children: [
          {
            index: true,
            element: <Characteristic />,
          },
          {
            path: "yeni",
            element: <CharacteristicCreate />,
          },
          {
            path: ":id",
            element: <CharacteristicEdit />,
          },
        ],
      },

      {
        path: "/categories",
        element: <CategoriesLayout />,
        children: [
          {
            index: true,
            element: <Categories />,
          },
          {
            path: "yeni",
            element: <CategoryCreate />,
          },
          {
            path: ":id",
            element: <CategoryEdit />,
          },
        ],
      },
      {
        path: "/news",
        element: <NewsLayout />,
        children: [
          {
            index: true,
            element: <News />,
          },
          {
            path: "yeni",
            element: <NewsCreate />,
          },
          {
            path: ":id",
            element: <NewsEdit />,
          },
        ],
      },
      {
        path: "/karyera",
        element: <VacanciesLayout />,
        children: [
          {
            index: true,
            element: <Vacancies />,
          },
          {
            path: "yeni",
            element: <VacanciesCreate />,
          },
          {
            path: ":id",
            element: <VacanciesEdit />,
          },
        ],
      },
      {
        path: "/projects",
        element: <ProjectsLayout />,
        children: [
          {
            index: true,
            element: <Projects />,
          },
          {
            path: "yeni",
            element: <ProjectsCreate />,
          },
          {
            path: ":id",
            element: <ProjectsEdit />,
          },
        ],
      },
      {
       path: "cooperation",
       element: <Cooperation/>
      },
      {
        path: "socials",
        element: <SocialsLayout />,
        children: [
          {
            index: true,
            element: <Socials />,
          },
          {
            path: "yeni",
            element: <SocialCreate />,
          },
          {
            path: ":id",
            element: <SocialEdit />,
          },
        ],
      },
      {
        path: "/Messages",
        element: <Messages />,
      },
    ],
  },
  {
    path:"login",
    element:<Login/>
  }
];

export default routes;

// {
//   path: '/login',
//   element: <Login />,
// },
// {
//   path: '*',
//   element: <Error404/>,
// },
