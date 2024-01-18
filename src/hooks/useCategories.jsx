import { useContext } from "react"
import CategoryContext from "../context/CategoryProvider"

const useCategories = () => {
    return useContext(CategoryContext);
}

export default useCategories
