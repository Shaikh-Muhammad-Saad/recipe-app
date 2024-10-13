import Base from './base'

class Recipes extends Base<any, any> {

    getAllRecipes = async (url: string) => {
        return this.all(url)
    }

}

export default new Recipes()
