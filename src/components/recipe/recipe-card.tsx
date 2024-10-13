import { Recipe } from "@/ts-types/generated";
import ReactStars from "@stack-pulse/react-star-rating";
import { useDispatch } from "react-redux";
import { removeRecipe } from "@/store/slices/recipes"
import { WEEKS_ENUM } from "@/utils/constants";

type PropType = {
    selectRecipe?: () => void
    selectedRecipe?: Recipe
    recipe: Recipe
    week?: WEEKS_ENUM
}

const RecipeCard = ({ selectRecipe, selectedRecipe, recipe, week }: PropType) => {

    const dispatch = useDispatch();

    const isRecipeSelected = selectedRecipe?.id === recipe?.id;
    const name = recipe?.name
    const description = recipe?.instructions?.join("");


    const handleRemoveRecipe = () => {
        dispatch(removeRecipe({ week: week, id: recipe?.id }))
    };

    return (
        <div
            className={`relative bg-white shadow-md rounded-lg p-6 col-span-1 sm:col-span-1 cursor-pointer hover:shadow-2xl ${isRecipeSelected ? 'outline outline-offset-2 outline-2' : ''} border-tertiary`}
            onClick={() => selectRecipe ? selectRecipe() : null}
        >
            <div className="relative">
                <img
                    src={recipe.image ?? "https://via.placeholder.com/400x300"}
                    alt={name}
                    className="w-full h-48 object-cover rounded-lg"
                />
                {recipe?.mealType?.map((meal) => {
                    return (
                        <span className="absolute top-2 right-2 px-5 text-[10px] font-semibold bg-black text-white rounded">
                            {meal}
                        </span>
                    )
                })}
                {week && <button type="button" onClick={handleRemoveRecipe} className="absolute top-2 left-2 bg-rose-300 text-white p-1">
                    <svg viewBox="0 0 24 24" fill="none" width={20} height={20} xmlns="http://www.w3.org/2000/svg" stroke="#f50505"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M3 6H21M5 6V20C5 21.1046 5.89543 22 7 22H17C18.1046 22 19 21.1046 19 20V6M8 6V4C8 2.89543 8.89543 2 10 2H14C15.1046 2 16 2.89543 16 4V6" stroke="#f50505" stroke-width="0.72" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M14 11V17" stroke="#f50505" stroke-width="0.72" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M10 11V17" stroke="#f50505" stroke-width="0.72" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                </button>}
            </div>

            <div className=" mt-4 flex flex-col justify-center">

                <h3 className="text-md xl:text-xl font-bold">
                    {name}
                </h3>

                <p className="text-gray-600 mt-2 text-xs mb-10 xl:mb-8">
                    {description}
                </p>

                <div className="absolute bottom-5 mt-4 flex flex-col xl:flex-row">
                    <p className="text-xs xl:mr-12">
                        <span className="font-bold">Cuisine:</span> {recipe?.cuisine}
                    </p>
                    <p className="text-xs flex">
                        <span className="font-bold">Rating:</span>
                        <ReactStars
                            classNames="ml-2"
                            count={5}
                            isHalf={true}
                            value={recipe?.rating}
                            edit={false}
                            size={20}
                            color='lightgray'
                            activeColor="#004370"
                        />
                    </p>
                </div>

            </div>
        </div>
    )
}

export default RecipeCard;