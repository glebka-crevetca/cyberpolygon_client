import { Categories } from "../../uiComponents/categories"
import { useTasks, useUser } from "../../../store/store"
import { useEffect, useState } from "react"
import { shallow } from 'zustand/shallow'
import { CardsContainer } from "../../uiComponents/cardsContainer"
import { PATHS } from "../../../utils/urls"
import "./tasks.css"


export const Tasks = () => {
    const tasks = useTasks(state => state.tasks, shallow);
    const { loadTasks, category, setCategory } = useTasks(state => ({ loadTasks: state.loadTasks, category: state.category, setCategory: state.setCategory }));
    const userCategories = useUser(state => state.categories);

    function handleScroll() {
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const scrollTop = document.documentElement.scrollTop;
        if (windowHeight + scrollTop >= documentHeight - 1 && tasks[category]?.nextPage !== null) {
            loadTasks();
        }
    }



    useEffect(() => {
        if (!tasks[category]?.data) loadTasks();
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [category]);



    return (
        <>
            <div className="bodytasklist" >
                <div className="container">
                    <div className="btl__content">
                        <Categories categories={userCategories} setCategory={setCategory} />
                        <CardsContainer data={tasks[category]?.data || []} fullInfoPath={PATHS.aboutTask} />
                    </div>
                </div>
            </div>
        </>
    )
}