'use client'

interface CardProps {
  title: string,
  description: string,
  href?: string,
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  href,
}) => {
  return (
    <div className="text-center">
      Test
    </div>
  )
}

export default Card
