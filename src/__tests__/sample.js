jest.unmock('../sample');

const sample = require('../sample');

describe('sample', () => {
	it('first', () => {
		expect(sample(), 'abc');
	});
});
