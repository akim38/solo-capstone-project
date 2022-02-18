import { useState } from "react";
import { useDispatch } from "react-redux"


const MoreButton = () => {
    const dispatch = useDispatch();
    const [showMore, setShowMore] = useState(false);

    const openMenu = () => {
        if (showEditMenu) return;
        setShowMore(true);
    };

    const deletePost = (e) => {
        console.log('handle delete')
    }

    return (
        <>
        <button className="more-button" onClick={openMenu}>
            o o o
        </button>
        {showMenu && (
            <button onClick={deletePost}>Delete</button>
        )}
        </>
    )
}
