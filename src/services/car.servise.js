import axios from 'axios'

export const CarService = {
    async getAll() {
        const response = await axios.get('https://dummyjson.com/products/category/smartphones')

        return response.data
    }
}