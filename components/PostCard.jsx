import Link from 'next/link'
import { formatDate } from '../utils'
import Heading from './Heading'
import Text from './Text'

const PostCard = ({ previewImage, title, description, href, date, as }) => {
  return (
    <>
      <Link href={href} as={as}>
        <a className="block">
          <div className="cursor-pointer">
            {previewImage && (
              <img
                src={previewImage}
                alt={title}
                className="block w-full h-40 object-cover rounded-tr rounded-tl"
              />
            )}
            <div>
              <Text as="span" className="font-light" style={{ fontSize: 13 }}>
                {formatDate(date)}
              </Text>
              <Heading
                as="h3"
                className="font-medium mb-1"
                style={{ fontSize: '1.3rem' }}
              >
                {title}
              </Heading>
              <Text className="mb-2 italic font-light">{description}</Text>
            </div>
          </div>
        </a>
      </Link>
    </>
  )
}

export default PostCard
