import './index.css'

const BlogItem = props => {
  const {item} = props
  const {title, description, publishedDate} = item

  return (
    <li className="contact-container">
      <div className="title-date">
        <p className="title">{title}</p>
        <p className="date">{publishedDate}</p>
      </div>
      <p className="description">{description}</p>
      <hr className="horizontal-line" />
    </li>
  )
}

export default BlogItem
