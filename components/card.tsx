'use client'

interface CardProps {
  title: string,
  description: string,
}

const Card: React.FC<CardProps> = ({
  title,
  description,
}) => {
  return (
    <div className="text-center">
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  )
}

export default Card
