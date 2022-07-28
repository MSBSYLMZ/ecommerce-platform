import './Shop-navigator.styles.css'

const ShopNavigator = ({src, shopName ,shopId}) => {
  return (
    <div className='shop-navigator flex start'>
        <img src={src} alt="" />
        <div className='name-section'>
            <div className='shop-name'>{shopName}</div>
            <div className='shop-id'>@{shopId}</div>
        </div>
    </div>
  )
}

export default ShopNavigator