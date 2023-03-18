export const ErrorsAction = (error, dispatch, action) => {
    const message = error.response && error.response.data.message ? error.response.data.message: error.message;
    if 
        (message === "No autorizado, el token fallo") {
            dispatch(logoutAction());
        }
    return dispatch({
        type: action, payload:message
    })
    } 
