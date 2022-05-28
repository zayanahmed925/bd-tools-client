import { useEffect, useState } from "react";

const useItems = (toolsId) => {
    const [tools, setTools] = useState({});
    // console.log(tools)
    useEffect(() => {
        fetch(`https://mysterious-reef-14055.herokuapp.com/tools/${toolsId}`)
            .then(res => res.json())
            .then(data => setTools(data))
    })
    return [tools, setTools];
}
export default useItems;