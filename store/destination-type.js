import { create } from 'zustand';
import axios from '../utils/axios'

const useDestinationTypeStore = create((set) => ({
    listDestinationType: [],
    getListDestinationType: async () => {
        await axios.get('/destination-type').then(res => {
            set({ listDestinationType: res.data })
        })
    }
}))

export default useDestinationTypeStore