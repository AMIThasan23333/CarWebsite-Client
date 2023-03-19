import { createBrowserRouter } from "react-router-dom";
import LayOut from "../cOMPONENTS/LayOut/LayOut";
import Home from './../cOMPONENTS/Home';


export const router = createBrowserRouter([


    {
        path : '/',
        element : <LayOut></LayOut>,

        children: [

            
        ]

    }

])