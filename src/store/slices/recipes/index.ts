import { Recipe } from '@/ts-types/generated';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';


type RecipeStateType = {
    week: string;
    recipe: Recipe
}

const initialState: RecipeStateType[] = []


const recipeSlice = createSlice({
    name: 'recipe',
    initialState,
    reducers: {
        addRecipe: (state: RecipeStateType[], action: PayloadAction<RecipeStateType>): any => {

            const isExist = state.find((recipe) => {
                if (recipe.week === action.payload.week && recipe.recipe.id === action.payload.recipe.id) return recipe
            })

            if (isExist) {
                toast.error(`Recipe already exist in ${action.payload.week}`, { duration: 3000 })
                return;
            } else {
                state.push(action.payload);
                toast.success(`Recipe added in ${action.payload.week}`, { duration: 5000 })
            }

        },
        removeRecipe: (state: RecipeStateType[], action: PayloadAction<{ week: string | undefined; id: number }>) => {

            const isExist = state.find((recipe) => {
                if (recipe.week === action.payload.week && recipe.recipe.id === action.payload.id) return recipe
            })

            if (!isExist) {
                toast.error("No such recipe in " + action.payload.week, { duration: 3000 })
                return;
            }

            const newState = state.filter((recipe) => {
                if (!(recipe.recipe.id === isExist?.recipe.id && recipe.week === isExist?.week)) return recipe
            })

            toast.success(`Recipe removed from ${action.payload.week}`, { duration: 4000 })

            return newState;
        },
    },
});

export const { removeRecipe, addRecipe } = recipeSlice.actions;
export default recipeSlice.reducer;