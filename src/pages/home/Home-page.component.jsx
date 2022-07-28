import './Home-page.styles.css'

import CategoryItem from '../../components/category-item/Category-item.component';
import CustomButton from '../../components/custom-button/Custom-button.component';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'; 
import List from '../../components/list/List.component';
import { MOCK_SHOP_DATA, CATEGORY_IMAGES } from '../../mock.data';
import { useState, useEffect } from 'react';
import { useGetCategoriesQuery, useGetProductsByCategoryQuery } from '../../hooks/services/backup-product.api';
import RecommendationsOverview from '../../components/recommendations-overview/Recommendations-overview.component';
import ProductItem from '../../components/product-item/Product-item.component';
import ShopItem from '../../components/shop-item/Shop-item.component';

const HomePage = () => {
  const [ activeCategory, setActiveCategory ] = useState('laptops');
  const [shops] = useState(MOCK_SHOP_DATA);
  const [categoryImages] = useState(CATEGORY_IMAGES)
  const [ recommendedProducts, setRecommendedProducts ] = useState([]);

  const {isLoading, isError, data} = useGetProductsByCategoryQuery(activeCategory);
  const {data: categoryData} = useGetCategoriesQuery();

  const popularCategories = categoryData ? categoryData.slice(1,7).map((item,index) => ({title: item, image:categoryImages[index] })) : null;

  const recommendationItems = 
            recommendedProducts ? recommendedProducts.map((item) => <ProductItem key={item.id} src={item.images[0]} insidePrice={item.price} productId={item.id}/>) : null

  const categoryItems = popularCategories ? popularCategories.map(item => <CategoryItem key={item.title} title={item.title} src={item.image}/>) : null

  const shopItems = shops.map(item => <ShopItem key={item.id} shop={item}/>)

  const activableCategories = 
            popularCategories ? popularCategories.map(item => 
            <div key={item.title} className={`activable-category ${activeCategory === item.title ? 'active' : ''}`} 
            onClick={()=>{handleRecommendedInCategory(item.title)}}>{item.title}</div>) : null;

  const handleRecommendedInCategory = (category) => {
    setActiveCategory(category)
  }

  useEffect(() => {
    if(!isLoading && !isError){
      setRecommendedProducts(data.products);
    }
  }, [isLoading, isError, data]);

  return (
    <div className='homepage-layout'>
      <RecommendationsOverview justifyContent='start' title='Recommendations In' icon={faArrowRight} secondList={activableCategories}>{recommendationItems}</RecommendationsOverview>
      <CustomButton className='see-more recommended-in'>See More</CustomButton>
      <div className='popular-categories  large-margin'>
        <h5 className='intro-title'>Popular Categories</h5>
        <List>{categoryItems}</List>
      </div>
      <RecommendationsOverview title='Recommended Shops' button='See More'>{shopItems}</RecommendationsOverview>
      <RecommendationsOverview justifyContent='start' title='Baked Goods' icon={faArrowRight}>{recommendationItems}</RecommendationsOverview>
      <RecommendationsOverview justifyContent='start' title='Baked Goods' icon={faArrowRight}>{recommendationItems}</RecommendationsOverview>
    </div>
  )
}


// 
export default HomePage