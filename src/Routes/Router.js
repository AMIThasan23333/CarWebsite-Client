import { createBrowserRouter } from "react-router-dom";
import LayOut from "../cOMPONENTS/LayOut/LayOut";
import Home from './../cOMPONENTS/Home';
import Login from './../Login/Login';
import SignUp from './../cOMPONENTS/SignUp/SignUp';


export const router = createBrowserRouter([


    {
        path : '/',
        element : <LayOut></LayOut>,

        children: [

         { 
            
            path : '/',
            element : <Home></Home>, 
        
        },
        { 
            
            path : '/login',
            element : <Login></Login>, 
        
        },
        { 
            
            path : '/signup',
            element : <SignUp></SignUp>, 
        
        }
            
        ]

    }

])