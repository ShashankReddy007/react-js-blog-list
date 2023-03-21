import BlogItem from '../BlogItem'
import './index.css'

const BlogList = props => {
  const {blogsList} = props
  const {id, title, description, publishedDate} = blogsList

  return (
    <ul className="blog-list">
      {blogsList.map(item => (
        <BlogItem item={item} key={item.id} />
      ))}
    </ul>
  )
}

export default BlogList
