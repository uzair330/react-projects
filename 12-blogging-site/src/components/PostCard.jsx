import React from 'react'
import services from '../appWrite/config'
import {Link} from 'react-router-dom'
import bucketStorage from '../appWrite/bucketFiles'
const PostCard = ({$id,title,featureImage}) => {
  return (
    <Link to={`/post/${$id}`}>
     <div className="w-full bg-gray-100 rounded-xl p-4">
<div className="w-full justify-center mb-4">
    <img src={bucketStorage.previewFile(featureImage)} alt={title} className='rounded-xl' />
</div>
<h2 className='text-xl font-bold'>
    {title}
</h2>
     </div>
    </Link>
  )
}

export default PostCard
