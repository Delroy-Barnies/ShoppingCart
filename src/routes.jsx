import Shop from "./components/shop/Shop";

const routes = [
    {
        path: "/",
        element: <Shop />
    },
    {
        path: "/:section",
        element: <Shop />,
    },
    {
        path: "/:section/:category",
        element: <Shop />,
    }
];

export default routes;