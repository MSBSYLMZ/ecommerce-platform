import './Shop-item.styles.css'
import ShopNavigator from '../shop-navigator/Shop-navigator.component'

const ShopItem = ({shop}) => {
    // Here repace the mock data with the real one
    const {
        img,
        profile,
        name,
        id,
        followers,
        productCount,
        categories,
        sampleProducts
    } = shop

    const categoryTags = categories.map((item, index) => <div key={index} className='category-tag'> #{item} </div>) 

    const sampleImages = sampleProducts.map((item, index) => <img key={index} className='sample-img' src={item.img} alt='sample'/>)

    return (
        <div className='shop-item'>
            <img className='shop-img' src={img} alt="" />
            <ShopNavigator src={profile} shopName={name} shopId={id} />
            <div className='flex start profile-info'>
                <div>{followers} Followers - </div>
                <div>{productCount} Products</div>
            </div>
            <div className='category-tags flex start'>
                {categoryTags}
            </div>
            <div className='flex between'>
                {sampleImages}
            </div>
        </div>
  )
}

export default ShopItem