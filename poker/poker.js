var Poker = Poker || {};

Poker.Card = (function() {
	function Card(s) {
		this.value = valueFromChar(s[0]);
		this.suit = s[1];
		this.toString = function() {
			return s;
		}
	}

	function valueFromChar(char) {
		switch (char.toUpperCase()) {
			case 'T': return 10;
			case 'J': return 11;
			case 'Q': return 12;
			case 'K': return 13;
			case 'A': return 14;
		}
		return parseInt(char);
	}

	Card.valueToString = function(value) {
		switch (value) {
			case 1: return 'one';
			case 2: return 'two';
			case 3: return 'three';
			case 4: return 'four';
			case 5: return 'five';
			case 6: return 'six';
			case 7: return 'seven';
			case 8: return 'eight';
			case 9: return 'nine';
			case 10: return 'ten';
			case 11: return 'jack';
			case 12: return 'queen';
			case 13: return 'king';
			case 14: return 'ace';
		}
	}

	Card.valueToPlural = function(value) {
		return value == 6 ? 'sixes' : Card.valueToString(value) + 's';
	}

	Card.compare = function(card1, card2) {
		var value1 = card1.value;
		var value2 = card2.value;
		return value1 < value2 ? -1 : value1 > value2 ? 1 : 0;
	}

	return Card;
}());

Poker.Hand = (function() {
	function Hand(cards) {
		if (typeof cards == 'string') {
			cards = stringToCards(cards);
		}

		var groups = groupValues(cards);
		groups = sortGroups(groups);
		cards = sortCards(groups);
		var rank = rankHand(groups, cards);

		// fix card sort order for low-ace straight
		if (rank == Hand.STRAIGHT || rank == Hand.STRAIGHT_FLUSH) {
			var card0 = cards[0];
			var card4 = cards[4];
			if (card0.value == 14 && card4.value == 2) {
				cards = cards.slice(1);
				cards.push(card0);
			}
		}

		this.rank = rank;
		this.cards = cards;
	}

	Hand.prototype.toString = function() {
		return this.cards.map(function(card) {
			return card.toString();
		}).join(' ');
	}

	Hand.prototype.reportRank = function() {
		var PokerCard = Poker.Card;
		var cards = this.cards;
		switch (this.rank) {
		case Hand.HIGH_CARD:
			return 'high card, ' + value(0) + ' high';
		case Hand.PAIR:
			return 'pair of ' + plural(0);
		case Hand.TWO_PAIRS:
			return 'two pairs, ' + plural(0) + ' and ' + plural(2);
		case Hand.TRIPS:
			return 'three ' + plural(0);
		case Hand.STRAIGHT:
			return 'straight, ' + value(0) + ' high';
		case Hand.FLUSH:
			return 'flush, ' + value(0) + ' high';
		case Hand.FULL_HOUSE:
			return 'full house, ' + plural(0) + ' full of ' + plural(3);
		case Hand.QUADS:
			return 'four ' + plural(0);
		case Hand.STRAIGHT_FLUSH:
			return 'straight flush, ' + value(0) + ' high';
		case Hand.ROYAL_FLUSH:
			return 'royal flush';
		}

		function value(n) {
			return PokerCard.valueToString(cards[n].value);
		}

		function plural(n) {
			return PokerCard.valueToPlural(cards[n].value);
		}
	}

	Hand.HIGH_CARD = 0;
	Hand.PAIR = 1;
	Hand.TWO_PAIRS = 2;
	Hand.TRIPS = 3;
	Hand.STRAIGHT = 4;
	Hand.FLUSH = 5;
	Hand.FULL_HOUSE = 6;
	Hand.QUADS = 7;
	Hand.STRAIGHT_FLUSH = 8;
	Hand.ROYAL_FLUSH = 9;

	Hand.compare = function(hand1, hand2) {
		var compareCards = Poker.Card.compare;
		if (hand1.rank < hand2.rank) {
			return -1;
		}
		if (hand1.rank > hand2.rank) {
			return 1;
		}
		var cards1 = hand1.cards;
		var cards2 = hand2.cards;
		var cmp;
		for (var i = 0, l = cards1.length; i < l; ++i) {
			if (cmp = compareCards(cards1[i], cards2[i])) {
				return cmp;
			}
		}
		return 0;
	}

	function stringToCards(s) {
		var cards = s.trim().split(' ').map(function(s) {
			return new Poker.Card(s);
		});
		return cards;
	}

	function rankHand(groups, sortedCards) {
		return isStraightFlush(sortedCards)
			|| isQuads(groups)
			|| isFullHouse(groups)
			|| isFlush(sortedCards)
			|| isStraight(sortedCards)
			|| isTrips(groups)
			|| isTwoPairs(groups)
			|| isPair(groups)
			|| Hand.HIGH_CARD;
	}

	function isStraightFlush(sortedCards) {
		if (isFlush(sortedCards) && isStraight(sortedCards)) {
			var high = sortedCards[0].value;
			return high == 14 ? Hand.ROYAL_FLUSH : Hand.STRAIGHT_FLUSH;
		}
	}

	function isQuads(groups) {
		if (countGroupsOfSize(groups, 4)) {
			return Hand.QUADS;
		}
	}

	function isFullHouse(groups) {
		if (countGroupsOfSize(groups, 3) && countGroupsOfSize(groups, 2)) {
			return Hand.FULL_HOUSE;
		}
	}

	function isFlush(cards) {
		var suit = cards[0].suit;
		for (var i = 1, l = cards.length; i < l; ++i) {
			if (cards[i].suit != suit) {
				return; // undefined
			}
		}
		return Hand.FLUSH;
	}

	function isStraight(sortedCards) {
		for (var i = 2, l = sortedCards.length; i < l; ++i) {
			if (sortedCards[i - 1].value - sortedCards[i].value != 1) {
				return; // undefined
			}
		}
		var v0 = sortedCards[0].value;
		var v1 = sortedCards[1].value;
		if (v0 == v1 + 1 || (v0 == 14 && v1 == 5)) {
			return Hand.STRAIGHT;
		}
	}

	function isTrips(groups) {
		if (countGroupsOfSize(groups, 3)) {
			return Hand.TRIPS;
		}
	}

	function isTwoPairs(groups) {
		if (countGroupsOfSize(groups, 2) == 2) {
			return Hand.TWO_PAIRS;
		}
	}

	function isPair(groups) {
		if (countGroupsOfSize(groups, 2)) {
			return Hand.PAIR;
		}
	}

	function groupValues(cards) {
		function findArrayItem(value) {
			for (var i = 0; i < values.length; ++i) {
				var item = values[i];
				if (item.value == value) {
					return item;
				}
			}
		}

		var values = [];
		cards.forEach(function(card) {
			var value = card.value;
			var item = findArrayItem(value);
			if (item) {
				item.cards.push(card);
			}
			else {
				values.push({
					value: value,
					cards: [card]
				});
			}
		});
		return values;
	}

	function sortGroups(values) {
		return values.sort(function(a, b) {
			var av = a.value, al = a.cards.length;
			var bv = b.value, bl = b.cards.length;
			if (al > bl)
				return -1;
			if (al < bl)
				return 1;
			if (av > bv)
				return -1;
			if (av < bv)
				return 1;
			return 0;
		});
	}

	function sortCards(sortedGroups) {
		var sortedCards = [];
		sortedGroups.forEach(function(value) {
			value.cards.forEach(function(card) {
				sortedCards.push(card);
			});
		});
		return sortedCards;
	}

	function countGroupsOfSize(groups, size) {
		var count = 0;
		for (var i = 0, l = groups.length; i < l; ++i) {
			if (groups[i].cards.length == size) {
				++count;
			}
		}
		return count;
	}

	return Hand;
}());
