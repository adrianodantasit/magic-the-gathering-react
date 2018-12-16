export const filterByColor = (cards,color) => {
    let filteredCards = cards;
    filteredCards = filteredCards.filter((card) => card.colors.find(value => value === color))
    return filteredCards;
}