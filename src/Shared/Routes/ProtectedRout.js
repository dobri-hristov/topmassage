import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "../Contexts/ContextWrapper";
import LoadingProgress from '../Components/LoadingProgress'

const ProtectedRoute = ({ component: Component, ...restOfProps }) => {
  const { auth, isLoaded } = useContext(AuthContext)

  return (
    <Route
      {...restOfProps}
      render={(props) => {
        const pathName = props.history.location.pathname

        if (pathName === '/profile') {
          if (isLoaded) {
            return auth ? <Component {...props} /> : <Redirect to='/sign-in' />
          } else {
            return <LoadingProgress />
          }
        } else if (pathName === '/sign-in' || pathName === '/sign-up') {
          if (isLoaded) {
            return auth ? <Redirect to='/profile' /> : <Component {...props} />
          } else {
            return <LoadingProgress />
          }
        }
      }
      }
    />
  )
}

export default ProtectedRoute;
