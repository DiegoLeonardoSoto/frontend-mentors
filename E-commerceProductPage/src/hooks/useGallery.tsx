import { useState } from 'react'

export const useGallery = () => {
  const gallerySize = 4
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToSlide = (id: number): void => {
    setCurrentIndex(id)
  }

  const nextSlide = (): void => {
    setCurrentIndex((prev) => {
      if (prev < gallerySize - 1) return prev + 1
      return 0
    })
  }

  const prevSlide = (): void => {
    setCurrentIndex((prev) => {
      if (prev > 0) return prev - 1
      return gallerySize - 1
    })
  }

  return { currentIndex, goToSlide, nextSlide, prevSlide }
}
