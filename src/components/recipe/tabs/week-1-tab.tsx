import CardsContainer from "@/components/recipe/cards-container";
import RecipeCard from "@/components/recipe/recipe-card";
import { useRecipesQuery } from "@/data/recipes/recipes-query";
import { RootState } from "@/store";
import { WEEKS_ENUM } from "@/utils/constants";
import { useSelector } from "react-redux";


type PropType = {

}

const Week1Tab = ({ }: PropType) => {

    const week = WEEKS_ENUM.WEEK_1
    const recipes = useSelector((state: RootState) => state.recipe)
        .filter((recipe) => recipe.week === week)
        .map((recipe) => ({ ...recipe.recipe }));

    if (!recipes.length) return <p className="mt-20 text-xl text-center font-semibold">No recipes found</p>
    return (
        <CardsContainer>
            {recipes?.map((recipe) => {
                return (
                    <RecipeCard
                        key={recipe?.id}
                        recipe={recipe}
                        week={week}
                    />
                )
            })}
        </CardsContainer>
    )
}

export default Week1Tab;


