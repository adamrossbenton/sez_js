import {useRouteError} from "react-router-dom"

const Error = () => {
    const err = useRouteError()
    console.error(err)

    return <div id="error-page">
        <h1>YA DONE MESSED UP, A-A-RON!</h1>
        <i>{err.statusText || err.message}</i>
    </div>
}

export default Error