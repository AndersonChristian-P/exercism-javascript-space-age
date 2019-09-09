const orbitalPeriods = function () {
  let earth = 31557600
  return {
    earth,
    mercury: 0.2408467 * earth,
    venus: 0.61519726 * earth,
    mars: 1.8808158 * earth,
    jupiter: 11.862615 * earth,
    saturn: 29.447498 * earth,
    uranus: 84.016846 * earth,
    neptune: 164.79132 * earth
  }
}

export const age = (planet, ageInSeconds) => +((ageInSeconds / orbitalPeriods()[planet]).toFixed(2))

