export const filterByColor = (cards, color) => {
    if (color === "") return cards;
    let filteredCards = cards;
    filteredCards = filteredCards.filter((card) => card.colors.find(value => value === color))
    return filteredCards;
}