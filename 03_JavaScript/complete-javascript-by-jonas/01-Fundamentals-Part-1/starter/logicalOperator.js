
const isLookigingForCountry = true
const isCountrySpeakEnglish = true
const isPopulationAbove50Million = true
const isIsland = false

if (isLookigingForCountry && isCountrySpeakEnglish && isPopulationAbove50Million && !isIsland) {
    console.log('You should live in Portugal :)')
} else {
    console.log('Portugal does not meet your criteria :(')
}