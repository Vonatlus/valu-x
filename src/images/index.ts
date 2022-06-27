interface PICTURES {
  dogs: string,
  chubaka: string,
  cats: string,
  dyno: string,
  planets: string,
}

const PICTURES: PICTURES = {
  dogs: require('./dogs.jpg'),
  chubaka: require('./chubaka.jpg'),
  cats: require('./cats.jpg'),
  dyno: require('./dyno.jpg'),
  planets: require('./planets.jpg'),
}

export default PICTURES;