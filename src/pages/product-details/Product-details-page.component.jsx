import './Product-details-page.styles.css'

import CustomButton from '../../components/custom-button/Custom-button.component'
import { faArrowRight, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import List from '../../components/list/List.component'
import { useGetProductByIdQuery, useGetProductsByCategoryQuery } from '../../hooks/services/backup-product.api'
import { useParams } from 'react-router-dom'
import ProductItem from '../../components/product-item/Product-item.component'
import ProductOptions from '../../components/product-options/Product-options.component'
import ShopNavigator from '../../components/shop-navigator/Shop-navigator.component'
import RecommendationsOverview from '../../components/recommendations-overview/Recommendations-overview.component'

const ProductDetailsPage = () => {;
    const {productId} = useParams();
    const {data}= useGetProductByIdQuery(productId);
    const {isLoading, isError, data: products } = useGetProductsByCategoryQuery('laptops');
    const {
        images,
        description,
    } = data ? data : {}
    const otherImages = images ?  images.slice(1,images.length): [];
    const otherImagesElements = otherImages.map((item, index) => <img key={index} src={item} alt='product'/>)
    const similarProducts = !isLoading && ! isError ? products.products.map(item => <ProductItem key={item.id} src={item.images[0]} />) : null
    const shopProducts = !isLoading && ! isError ? products.products.slice(0,4).map(item => <ProductItem key={item.id} src={item.images[0]} />) : null

    return (
        <div>
            <div className='product-details'>
                <div className='flex between wrap'>
                    <div className='product-images'>
                        <img className='main-image' src={data?.images?.[0]} alt="" />
                        <div className='other-images flex start wrap'>{otherImagesElements}</div>
                    </div>
                    <ProductOptions data={data}/>
                </div>
                <div className='item-description-section'>
                    <div className='sub-title'>Item Description</div>
                    <p className='item-description'>{description}</p>
                    <span className='read-more'>Read More</span>
                </div>
                <div className='delivery-section'>
                    <div className='sub-title'>Delivery</div>
                    <div className='delivery-info'>Estimated Delivery <span>1 - 2 Days</span></div>
                    <div className='delivery-info'>Delivery Charge <span> KWD 2</span></div>
                </div>
                <div className='sub-title'>About Seller</div>
                <div className='about-seller flex between wrap'>
                    <div className='shop-info'>
                        <ShopNavigator src='https://images.unsplash.com/photo-1602934445884-da0fa1c9d3b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=658&q=80' shopName='BONTON' shopId='bonton' />
                        <p className='shop-bio'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non dolore, labore incidunt commodi voluptatem ex in tempora possimus? Obcaecati, animi accusamus. </p>
                        <div className='flex between'>
                            <CustomButton className='see-all-items'>See Shop All Items</CustomButton>
                            <FontAwesomeIcon className='icon' icon={faArrowUpRightFromSquare}/>
                        </div>
                    </div>
                    <div className='shop-products wrap'>
                        <List button='See All'>{shopProducts}</List>
                    </div>
                </div>
                <RecommendationsOverview justifyContent='start' title='Similar items on Looksie' icon={faArrowRight}>{similarProducts}</RecommendationsOverview>
            </div>
        </div>
  )
}

export default ProductDetailsPage