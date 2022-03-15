import React from 'react';
import {useHistory} from "react-router-dom";

function LoginPage({isAuth, toggleAuth}) {
    const history = useHistory();

    function nextPage() {
        history.push('/blogposts')
        toggleAuth(true)
        console.log(isAuth)
    }

    return (
        <>
            <h2>Inloggen</h2>

                <button
                    type="button"
                    onClick={nextPage}
                >
                    Inloggen
                </button>
        </>
    );
}

export default LoginPage;