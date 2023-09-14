import React, {Suspense} from 'react';
import {Route, Routes} from "react-router-dom";
import {routeConfig} from "shared/config/route-config/route-config";

const AppRouter = () => {
    return (

        <Routes>
            {Object.values(routeConfig).map(({element, path}) => {
                return (
                    <Route path={path} key={path} element={(
                        <Suspense fallback={<div>...loading</div>}>
                            {element}
                        </Suspense>
                    )}/>
                )
            })}
        </Routes>
    );
};

export default AppRouter;
