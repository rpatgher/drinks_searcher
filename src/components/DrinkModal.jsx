import { Modal, Image } from "react-bootstrap"
import useDrinks from "../hooks/useDrinks"

const DrinkModal = () => {

    const { modal, handleModalClick, instructions, loading } = useDrinks();

    const showIngredients = () => {
        let ingredients = [];
        for (let i = 1; i < 16; i++) {
            if (instructions[`strIngredient${i}`]) {
                ingredients.push(
                    <li key={i}>
                        {instructions[`strIngredient${i}`]} {instructions[`strMeasure${i}`]}
                    </li>
                )
            }
        }
        return ingredients;
    }

    return (
        !loading && (
            <Modal 
                show={modal}
                onHide={handleModalClick}
            >
                <Image 
                    src={instructions.strDrinkThumb}
                    alt={`${instructions.strDrink} Drink Image`}
                />
                <Modal.Header>
                    <Modal.Title>{instructions.strDrink}</Modal.Title>
                </Modal.Header>
                <Modal.Body

                >
                    <div className="p-3">
                        <h2>Instructions</h2>
                        {instructions.strInstructions}
                        <h2>Ingredients and Amount</h2>
                        {showIngredients()}
                    </div>
                </Modal.Body>
            </Modal>
        )
    )
}

export default DrinkModal
