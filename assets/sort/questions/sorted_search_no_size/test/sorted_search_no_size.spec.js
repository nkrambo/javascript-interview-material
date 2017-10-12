
import indexAtListy from '../sorted_search_no_size';

class Listy {
  constructor() {
    this.items = [];
  }

  elementAt(index) {
    return this.items[index] ? this.items[index] : -1;
  }
}

describe('indexAtListy()', () => {
  test('should return the index of target', () => {
    const list = new Listy();
    list.items.push(1);
    list.items.push(2);
    list.items.push(3);
    list.items.push(3);
    list.items.push(8);
    list.items.push(10);
    list.items.push(11);

    expect(indexAtListy(list, 8)).toBe(4);
    expect(indexAtListy(list, 10)).toBe(5);
    expect(indexAtListy(list, 1)).toBe(0);
  });

  test('should return -1 if target does not exist', () => {
    const list = new Listy();
    list.items.push(1);
    list.items.push(2);
    list.items.push(3);

    expect(indexAtListy(list, 4)).toBe(-1);
    expect(indexAtListy(list, 0)).toBe(-1);
    expect(indexAtListy(list, 10)).toBe(-1);
  });
});
