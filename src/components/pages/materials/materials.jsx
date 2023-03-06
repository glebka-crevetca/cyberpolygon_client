import { Categories } from "../../uiComponents/categories"
import { useMaterials, useUser } from "../../../store/store"
import { useEffect } from "react"
import { CardsContainer } from "../../uiComponents/cardsContainer";
import { PATHS } from "../../../utils/urls";
import { shallow } from "zustand/shallow";

export const Materials = () => {
    const materials = useMaterials(state => state.materials, shallow);
    const { loadMaterials, category, setCategory } = useMaterials(state => ({ loadMaterials: state.loadMaterials, category: state.category, setCategory: state.setCategory }));
    const userCategories = useUser(state => state.categories);

    function handleScroll() {
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const scrollTop = document.documentElement.scrollTop;
        if (windowHeight + scrollTop >= documentHeight - 1 && materials[category]?.nextPage !== null) {
            loadMaterials();
        }
    }

    useEffect(() => {
        if (!materials[category]?.data) loadMaterials();
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [category]);

    return (
        <>
            <div className="bodytasklist">
                <div className="container">
                    <div className="btl__content">
                        <Categories categories={userCategories} setCategory={setCategory} />
                        <CardsContainer data={materials[category]?.data || []} fullInfoPath={PATHS.aboutMaterial} />
                    </div>
                </div>
            </div>
        </>
    )
}