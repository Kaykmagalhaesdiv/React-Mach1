import { useState } from "react";

function useToggle() {
    const [alterna, setAlterna] = useState(true);

    function toggle() {
        setAlterna(!alterna)
    }

    return [alterna, toggle];
}

export default useToggle;