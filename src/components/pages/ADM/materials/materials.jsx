import { ContentAction } from './ContentAction/ContentAction'
import { ContentMaterials } from './ContentMaterials/ContentMaterials'
import './materials.css'

export const ADMMaterials = () => {

    return (
        <>
            <div className="content">
                <div className="content__container">
                    <div className="content__title-main">
                        Добавить материалы
                    </div>
                    <ContentAction />
                    <ContentMaterials />
                </div>
            </div>
        </>
    )
}