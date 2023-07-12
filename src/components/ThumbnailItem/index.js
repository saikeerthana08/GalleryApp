// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, isActive, setThumbnailId} = props
  const {thumbnailUrl, thumbnailAltText, id} = imageDetails
  const thumbnailClassName = isActive ? 'thumbnail active' : 'thumbnail'

  const onClickThumbnail = () => {
    setThumbnailId(id)
  }
  return (
    <li className="list-item">
      <button type="button" className="button" onClick={onClickThumbnail}>
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={thumbnailClassName}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
