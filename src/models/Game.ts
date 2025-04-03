class Game {
  category: string
  description: string
  image: string
  infos: string[]
  system: string
  title: string
  id: number
  promo?: string[]

  constructor(
    id: number,
    category: string,
    description: string,
    image: string,
    infos: string[],
    system: string,
    title: string,
    promo?: string[]
  ) {
    this.category = category
    this.description = description
    this.image = image
    this.infos = infos
    this.system = system
    this.title = title
    this.promo = promo
    this.id = id
  }
}

export default Game
