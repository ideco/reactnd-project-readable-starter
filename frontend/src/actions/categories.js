import {fetchCategories} from '../api/categoriesApi'

export const LOAD_CATEGORIES = 'LOAD_CATEGORIES';

export function loadCategories() {
    return (dispatch) => {
        fetchCategories()
            .then((result) => dispatch({
                type: LOAD_CATEGORIES,
                categories: result.categories
            }))
    }
}