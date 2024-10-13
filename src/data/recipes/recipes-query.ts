import recipesRepo from '@/repositories/recipes';
import { Recipe } from '@/ts-types/generated';
import { API_ENDPOINTS } from '@/utils/api/endpoint';
import { useQuery } from '@tanstack/react-query'


export const fetchRecipes = async () => {

    const url = `${API_ENDPOINTS.GET_ALL_RECIPES}`
    const { data: { recipes } } = await recipesRepo.getAllRecipes(url)
    return recipes;
}

export const useRecipesQuery = (fetchOPtions?: Object) => {

    return useQuery<Recipe[], Error>(
        [API_ENDPOINTS.GET_ALL_RECIPES],
        fetchRecipes,
        {
            ...fetchOPtions,
            keepPreviousData: true,
            staleTime: 270000 // 270000ms is 4.5 minutes while cache time is 5 minutes by default
        }
    )
}
