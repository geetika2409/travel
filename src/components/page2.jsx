import React from "react";
import { Helmet } from 'react-helmet';
import {useLocation} from 'react-router-dom';
import Table from './tablebase';


   function Page2() {
    const location = useLocation();

        return (
          <div>
            <Helmet>
                <title>Mode Choice</title>
            </Helmet>
            <Table firstOpt={location.state.mdOption} secondOpt={location.state.distOption}></Table>
          </div>
        );

    }

    export default Page2;