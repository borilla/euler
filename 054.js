
function Card(s) {
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
		return cardLetter(this.value) + this.suit;
	}
}

function Hand(cards) {
	if (typeof cards == 'string') {
		cards = Hand.stringToCards(cards);
	}

	var groups = Hand.groupValues(cards);
	groups = Hand.sortGroups(groups);
	cards = Hand.sortCards(groups);
	var rank = Hand.rankHand(groups, cards);

	// fix card sort order for low-ace straight
	if (rank == Hand.STRIGHT || rank == Hand.STRAIGHT_FLUSH) {
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

Hand.stringToCards = function(s) {
	var cards = s.trim().split(' ').map(function(s) {
		return new Card(s);
	});
	return cards;
}

Hand.STRAIGHT_FLUSH = 8;
Hand.QUADS = 7;
Hand.FULL_HOUSE = 6;
Hand.FLUSH = 5;
Hand.STRIGHT = 4;
Hand.TRIPS = 3;
Hand.TWO_PAIRS = 2;
Hand.PAIR = 1;
Hand.HIGH_CARD = 0;

Hand.rankHand = function(groups, sortedCards) {
	return Hand.isStraightFlush(sortedCards)
		|| Hand.isQuads(groups)
		|| Hand.isFullHouse(groups)
		|| Hand.isFlush(sortedCards)
		|| Hand.isStraight(sortedCards)
		|| Hand.isTrips(groups)
		|| Hand.isTwoPairs(groups)
		|| Hand.isPair(groups)
		|| Hand.HIGH_CARD;
}

Hand.isStraightFlush = function(sortedCards) {
	if (this.isFlush(sortedCards) && this.isStraight(sortedCards)) {
		return Hand.STRAIGHT_FLUSH;
	}
}

Hand.isQuads = function(groups) {
	if (Hand.countGroupsOfSize(groups, 4)) {
		return Hand.QUADS;
	}
}

Hand.isFullHouse = function(groups) {
	if (Hand.countGroupsOfSize(groups, 3) && Hand.countGroupsOfSize(groups, 2)) {
		return Hand.FULL_HOUSE;
	}
}

Hand.isFlush = function(cards) {
	var suit = cards[0].suit;
	for (var i = 1, l = cards.length; i < l; ++i) {
		if (cards[i].suit != suit) {
			return; // undefined
		}
	}
	return Hand.FLUSH;
}

Hand.isStraight = function(sortedCards) {
	for (var i = 2; i < length; ++i) {
		if (sortedCards[i - 1].value - sortedCards[i].value != 1) {
			return; // undefined
		}
	}
	var v0 = sortedCards[0].value;
	var v1 = sortedCards[1].value;
	if (v0 == v1 + 1 || (v0 == 14 && v1 == 5)) {
		return Hand.STRIGHT;
	}
}

Hand.isTrips = function(groups) {
	if (Hand.countGroupsOfSize(groups, 3)) {
		return Hand.TRIPS;
	}
}

Hand.isTwoPairs = function(groups) {
	if (Hand.countGroupsOfSize(groups, 2) == 2) {
		return Hand.TWO_PAIRS;
	}
}

Hand.isPair = function(groups) {
	if (Hand.countGroupsOfSize(groups, 2)) {
		return Hand.PAIR;
	}
}

Hand.groupValues = function(cards) {
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

Hand.sortGroups = function(values) {
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

Hand.sortCards = function(sortedGroups) {
	var sortedCards = [];
	sortedGroups.forEach(function(value) {
		value.cards.forEach(function(card) {
			sortedCards.push(card);
		});
	});
	return sortedCards;
}

Hand.countGroupsOfSize = function(groups, size) {
	var count = 0;
	for (var i = 0, l = groups.length; i < l; ++i) {
		if (groups[i].cards.length == size) {
			++count;
		}
	}
	return count;
}

function compareHands(hand1, hand2) {
	var h1 = new Hand(hand1);
	var h2 = new Hand(hand2);
	console.log(h1.toString(), ',', h2.toString());
	var c = Hand.compare(h1, h2);
	return c < 0 ? 'hand 2' : c > 0 ? 'hand 1' : 'draw';
}

console.log(compareHands('5H 5C 6S 7S KD', '2C 3S 8S 8D TD'));
console.log(compareHands('5D 8C 9S JS AC', '2C 5C 7D 8S QH'));
console.log(compareHands('2D 9C AS AH AC', '3D 6D 7D TD QD'));
console.log(compareHands('4D 6S 9H QH QC', '3D 6D 7H QD QS'));
console.log(compareHands('2H 2D 4C 4D 4S', '3C 3D 3S 9S 9D'));
