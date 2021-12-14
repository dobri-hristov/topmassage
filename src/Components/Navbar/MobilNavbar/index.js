import React, { useContext } from "react";
import { AuthContext } from '../../../Shared/Contexts/ContextWrapper'
import ProfileAvatar from '../ProfileAvatar'
import {
    AppBar,
    Toolbar,
    Typography,
    useMediaQuery,
    useScrollTrigger,
    Slide
} from "@material-ui/core";
import { createTheme } from "@material-ui/core/styles";
import UserButton from './UserButton'
import MenuButton from './MenuButton'

const breakpointValues = {
    xs: 260,
    sm: 600,
    md: 890,
    lg: 992,
    xl: 1200,
};
const theme = createTheme({ breakpoints: { values: breakpointValues } });

function HideOnScroll(props) {
    const { children } = props;
    const trigger = useScrollTrigger();

    return (
        <Slide appear={false} direction={"down"} in={!trigger}>
            {children}
        </Slide>
    );
}

const Header = (props) => {
    const { auth, username, isLoaded } = useContext(AuthContext)
    const isTitleVisible = useMediaQuery(theme.breakpoints.up('xs'));

    return (
        <div >
            <HideOnScroll {...props}>
                <AppBar style={{
                    background: '#757594',
                    boxShadow: '0px 5px 10px 0px rgba(0, 0, 0, 0.75'
                }}
                >
                    {
                        isLoaded
                            ?
                            <Toolbar style={{
                                display: 'flex',
                                justifyContent: 'space-between'
                            }}
                            >
                                <MenuButton />
                                {isTitleVisible
                                    ? <Typography
                                        variant="h5"
                                        component="p"
                                        color="textSecondary"
                                    >
                                        Top Massage
                                    </Typography>
                                    : null
                                }

                                {
                                    !auth
                                        ? <UserButton />
                                        : <ProfileAvatar name={username} />
                                }
                            </Toolbar>
                            : <Toolbar />
                    }
                </AppBar>

            </HideOnScroll>
        </div >
    );
};

export default Header;
