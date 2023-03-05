import { create } from 'zustand';
import api from "../http/api"


export const useUser = create((set, get) => ({
    id: null,
    name: null,
    surname: null,
    categories: [],
    role: 'user',
    setUser: (user) => {
        set({
            id: user.id,
            name: user.name,
            surname: user.surname,
            categories: Object.entries(user.categories).reduce((i, j) => { if (j[1]) return [...i, j[0]]; return i }, []),
            role: user.role
        })
    },
    clearUser: () => {
        set({
            id: null,
            name: null,
            surname: null,
            categories: [],
            role: 'user',
        })
    }
}))

export const useMaterials = create((set, get) => ({
    materials: {},
    category: 'all',
    loadMaterials: async () => {
        try {
            const cat = get().category;
            if (get().tasks[cat]?.nextPage !== null) {
                const response = await api.get(`/materials?category=${cat}&page=${get().materials[cat]?.nextPage || 1}`);
                set({ materials: { ...get().materials, [cat]: { data: [...(get().materials[cat]?.data ?? []), ...response.data.materials], nextPage: response.data.nextPage } } })
            }
        } catch (error) {
            console.log("error when fetch materials", error)
        }
    },
    setCategory: (cat) => { set({ category: cat }) }
}))

export const useTasks = create((set, get) => ({
    tasks: {},
    category: 'all',
    loadTasks: async () => {
        try {
            const cat = get().category;
            if (get().tasks[cat]?.nextPage !== null) {
                const response = await api.get(`/tasks?category=${cat}&page=${get().tasks[cat]?.nextPage || 1}`);
                set({ tasks: { ...get().tasks, [cat]: { data: [...(get().tasks[cat]?.data ?? []), ...response.data.tasks], nextPage: response.data.nextPage } } })
            }
        } catch (error) {
            console.log("error when fetch tasks", error)
        }
    },
    setCategory: (cat) => { set({ category: cat }) }
}))
