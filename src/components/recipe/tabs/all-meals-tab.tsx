import LoadingFallback from "@/components/common/loading-fallback";
import CardsContainer from "@/components/recipe/cards-container";
import RecipeCard from "@/components/recipe/recipe-card";
import { useRecipesQuery } from "@/data/recipes/recipes-query";


type PropType = {
    selectedRecipe: any;
    setSelectedRecipe: (val: any) => void
}

const AllMealsTab = ({ selectedRecipe, setSelectedRecipe }: PropType) => {

    const { data: recipes, isLoading, error } = useRecipesQuery();

    if (isLoading) return <LoadingFallback />
    if (error) return <p className="text-center text-3xl text-red-600 mt-20">Some thing went wrong</p>
    return (
        <CardsContainer>
            {recipes?.map((recipe) => {
                return (
                    <RecipeCard
                        key={recipe?.id}
                        selectRecipe={() => setSelectedRecipe(recipe)}
                        selectedRecipe={selectedRecipe}
                        recipe={recipe}
                    />
                )
            })}
        </CardsContainer>
    )
}

export default AllMealsTab;


