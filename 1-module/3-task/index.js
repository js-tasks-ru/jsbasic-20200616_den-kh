/**
 * ucFirst
 * @param {string} str
 * @returns {string}
 */
function ucFirst(str= 'вася') {
  // ваш код...

  describe('1-module-3-task', () => {
    it('должна делать первый символ заглавным', () => {
      expect(ucFirst('вася')).toBe('Вася');
    });

    it('должна работать для строки из одной буквы', () => {
      expect(ucFirst('в')).toBe('В');
    });

    it('должна работать для пустой строки', () => {
      expect(ucFirst('')).toBe('');
    });
  });

  return str.toUpperCase();
}
