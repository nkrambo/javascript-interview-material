function getRandom(floor, ceiling) {
  return Math.floor(Math.random() * (ceiling - floor + 1)) + floor;
}