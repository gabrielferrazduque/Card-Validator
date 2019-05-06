const chai = require('chai');
const expect = chai.expect;
const Index = require('../lib/index');
describe('index lib', () => {
  describe('cardValidator', () => {
    it('credit card valid', () => {
      expect(Index.cardValidator('4485298509193153')).to.equal(true);
    });
    it('credit card invalid', () => {
      expect(Index.cardValidator('448529850919315')).to.equal(false);
    });
    it('credit card no string', () => {
      expect(Index.cardValidator('asdfghjklpqw')).to.equal(false);
    });
    it('credit card can not be empty', () => {
      expect(Index.cardValidator('')).to.equal(false);
    });
    it('credit card characters less than < 12', () => {
      expect(Index.cardValidator('12345')).to.equal(false);
    });
    it('credit card characters greater than > 19', () => {
      expect(Index.cardValidator('123456789101112131415')).to.equal(false);
    });
    it('credit card characters equal', () => {
      expect(Index.cardValidator('1111111111111111')).to.equal(false);
    });
  });
});