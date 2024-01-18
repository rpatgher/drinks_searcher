import { useState, useEffect, createContext } from "react"
import axios from 'axios';

const DrinksContext = createContext()

const DrinksProvider = ({children}) => {
    const [drinks, setDrinks] = useState([]);
    const [modal, setModal] = useState(false);
    const [drinkId, setDrinkId] = useState(null);
    const [instructions, setInstuctions] = useState({});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const getDrink = async () => {
            if (!drinkId) return;
            try {
                const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`;
                const {data} = await axios.get(url);
                setInstuctions(data.drinks[0]);
            } catch (error) {
                console.log(error);
            } finally{
                setLoading(false);
            }
        }
        getDrink();
    }, [drinkId]);

    const consultDrinks = async (search) => {
        try {
            const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${search.name}&c=${search.category}`;
            const {data} = await axios.get(url);
            setDrinks(data.drinks);
        } catch (error) {
            console.log(error);
        }
    }

    const handleModalClick = () => {
        setModal(!modal);
    }

    const handleDrinkIdClick = (id) => {
        setDrinkId(id);
    }

    return (
        <DrinksContext.Provider value={{
            consultDrinks,
            drinks,
            modal,
            handleModalClick,
            handleDrinkIdClick,
            instructions,
            loading
        }}>
            {children}
        </DrinksContext.Provider>
    )
}

export {DrinksProvider}
export default DrinksContext
