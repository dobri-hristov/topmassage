import React from "react";
import MobileNavbar from './MobilNavbar'
import WebNavbar from './WebNavbar'
import { useMediaQuery } from "@material-ui/core";
import { createTheme } from "@material-ui/core/styles";

const Navbar = () => {
    const breakpointValues = {
        xs: 260,
        sm: 600,
        md: 890,
        lg: 992,
        xl: 1200,
    };
    const theme = createTheme({ breakpoints: { values: breakpointValues } });
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

    return (
        <div>
            {
                isMobile
                    ? <MobileNavbar />
                    : <WebNavbar />
            }
        </div >
    )
}

export default Navbar;
