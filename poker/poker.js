var Poker = Poker || {};

Poker.Card = function(s) {
	function cardValue(char) {
		switch (char.toUpperCase()) {
		case 'A':
			return 14;
		case 'K':
			return 13;
		case 'Q':
			return 12;
		case 'J':
			return 11;
		case 'T':
			return 10;
		}
		// else
		return parseInt(char);
	}

	function cardLetter(value) {
		switch (value) {
		case 14:
			return 'A';
		case 13:
			return 'K';
		case 12:
			return 'Q';
		case 11:
			return 'J';
		case 10:
			return 'T';
		}
		// else
		return '' + value;
	}

	this.value = cardValue(s[0]);
	this.suit = s[1];
	this.toString = function() {
		return s;
	}
}

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

	Hand.STRAIGHT_FLUSH = 8;
	Hand.QUADS = 7;
	Hand.FULL_HOUSE = 6;
	Hand.FLUSH = 5;
	Hand.STRAIGHT = 4;
	Hand.TRIPS = 3;
	Hand.TWO_PAIRS = 2;
	Hand.PAIR = 1;
	Hand.HIGH_CARD = 0;

	Hand.compare = function(hand1, hand2) {
		if (hand1.rank < hand2.rank) {
			return -1;
		}
		if (hand1.rank > hand2.rank) {
			return 1;
		}
		var cards1 = hand1.cards;
		var cards2 = hand2.cards;
		for (var i = 0, l = cards1.length; i < l; ++i) {
			var value1 = cards1[i].value;
			var value2 = cards2[i].value;
			if (value1 < value2) {
				return -1;
			}
			if (value1 > value2) {
				return 1;
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
			return Hand.STRAIGHT_FLUSH;
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
