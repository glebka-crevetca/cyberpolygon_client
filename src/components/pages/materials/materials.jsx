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
    useEffect(() => { loadMaterials(category); }, [category]);
    return (
        <>
            <div className="bodytasklist">
                <div className="container">
                    <div className="btl__content">
                        <Categories categories={userCategories} setCategory={setCategory} />
                        <CardsContainer data={materials} fullInfoPath={PATHS.aboutMaterial} />
                    </div>
                </div>
            </div>
        </>
    )
}