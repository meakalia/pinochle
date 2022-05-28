enum Suit {
    Heart,
    Club,
    Diamond,
    Spade,
}

enum Rank {
    Nine,
    Jack,
    Queen,
    King,
    Ten,
    Ace
}

type Card = {
    "suit": Suit,
    "rank": Rank,
}

/**
 * Calculate the value of the card
 * @param rank the rank of the card to be valued
 * @returns the value of the card
 */
function value(rank: Rank): number {
    // todo: implement me

    return 0;
}

/**
 * Take a pile of cards and calculate the number of points the individual cards are worth
 * 
 * @param cards the cards in the pile
 * @returns the sum of the value of each of the cards
 */
function scorePile(cards: Card[]): number {
    let sum = 0;

    for (const card of cards) {
        // todo: implement me
        
    }

    return sum;
}

/**
 * Look at a hand and figure out how many points the various bonuses give
 * 
 * @param cards the cards in the hand
 * @returns the points the hand is worth
 */
function scoreHand(cards: Card[]): number {
    return 0;
}
