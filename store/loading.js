import { create } from 'zustand';

const useLoadingStore = create((set) => ({
    loading: false,
    setLoading: (bool) => set(state => ({ loading: bool }))
}))

export default useLoadingStore