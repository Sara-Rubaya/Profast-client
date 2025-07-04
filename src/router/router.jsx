import {
  createBrowserRouter,
} from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/Home/Home/Home";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Pages/Authentication/Login/Login";
import Register from "../Pages/Authentication/Register/Register";
import Coverage from "../Pages/Coverage/Coverage";
import PrivateRoute from "../Routes/PrivateRoute";
import SendParcel from "../Pages/SendParcel/SendParcel";
import DashboardLayout from "../Layouts/DashboardLayout";
import MyParcels from "../Pages/Dashboard/MyParcels/MyParcels";
import Payment from "../Pages/Dashboard/Payment/Payment";
import PaymentHistory from "../Pages/Dashboard/PaymentHistory/PaymentHistory";
import TrackParcel from "../Pages/Dashboard/TrackParcel/TrackParcel";
import BeARider from "../Pages/Dashboard/BeARider/BeARider";
import PendingRiders from "../Pages/Dashboard/PendingRider/PendingRider";
import ActiveRider from "../Pages/Dashboard/ActiveRiders/ActiveRider";
import MakeAdmin from "../Pages/Dashboard/MakeAdmin/MakeAdmin";
import Forbidden from "../Pages/Forbidden/Forbidden";
import AdminRoute from "../Routes/AdminRoute";
import AssignRider from "../Pages/Dashboard/AssignRider/AssignRider";
import RiderRoute from "../Routes/RiderRoute";
import PendingDeliveries from "../Pages/Dashboard/PendingDelivaries/PendingDeliveries";
import CompletedDeliveries from "../Pages/Dashboard/CompletedDeliveries/CompletedDeliveries";
import MyEarnings from "../Pages/Dashboard/MyEarnings/MyEarnings";





export const router = createBrowserRouter([
  {
    path: "/",
    Component:RootLayout,
    children:[
        {
            index:true,
            Component:Home
        },
        {
          path: 'coverage',
          Component: Coverage,
          loader: () => fetch('./serviceCenters.json')
        },
         {
        path: 'forbidden',
        Component: Forbidden
      },
        {
          path:'BeARider',
         element:<PrivateRoute><BeARider></BeARider></PrivateRoute>,
         loader: () => fetch('./serviceCenters.json')
          
        },
        {
          path: 'sendParcel',
          element: <PrivateRoute>
            <SendParcel></SendParcel>
          </PrivateRoute>,
          loader: () => fetch('./serviceCenters.json')

        }
    ]
  },
  {
    path: '/',
    Component: AuthLayout,
    children: [
      {
        path:'login',
        Component: Login
      },
      {
        path:'register',
        Component: Register
      }
    ]
  },
  {
    path: '/dashboard',
    element: <PrivateRoute>
      <DashboardLayout></DashboardLayout>
    </PrivateRoute>,
    children:[
      {
        path: 'myParcels',
        Component: MyParcels,
      },
      {
        path: 'payment/:parcelId',
        Component:Payment
      },
       {
        path: 'paymentHistory',
        Component: PaymentHistory
      },
      {
        path: 'track',
        Component: TrackParcel
      },
      //rider only routes
      {
        path:'pending-deliveries',
        element:<RiderRoute><PendingDeliveries></PendingDeliveries></RiderRoute>
      },
      {
        path:'completed-deliveries',
        element:<RiderRoute><CompletedDeliveries></CompletedDeliveries></RiderRoute>
      },
      {
        path:'my-earnings',
        element:<RiderRoute><MyEarnings></MyEarnings></RiderRoute>
      },

      //admin onlu routes
      {
        path:'assign-rider',
        element: <AdminRoute><AssignRider></AssignRider></AdminRoute>
      },
       {
        path: 'pending-riders',
        element:<AdminRoute><PendingRiders></PendingRiders></AdminRoute>
      },
       {
        path: 'active-riders',
       element:<AdminRoute><ActiveRider></ActiveRider></AdminRoute>
      },
      {
        path: 'makeAdmin',
        element: <AdminRoute><MakeAdmin></MakeAdmin></AdminRoute>
      }
    ]
  }
]);