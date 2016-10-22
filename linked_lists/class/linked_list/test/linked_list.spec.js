
import { expect } from 'chai';
import LinkedList from '../linked_list';

describe('LinkedList', () => {
  it('should construct an empty list', () => {
    const list1 = new LinkedList();

    expect(list1.length).to.equal(0);
    expect(list1.head).to.be.null;
  });

  it('should add an item to list', () => {
    const list2 = new LinkedList();
    list2.add(50, 0);
    list2.add(150, 0);

    expect(list2.length).to.equal(2);
    expect(list2.head.value).to.equal(150);
    expect(list2.head.next.value).to.equal(50);
  });

  it('should remove an item from list', () => {
    const list3 = new LinkedList();
    list3.add(10, 0);
    list3.add(20, 0);
    list3.add(30, 0);
    list3.remove(0);

    expect(list3.head.value).to.equal(20);
  });

  it('should value item from list', () => {
    const list4 = new LinkedList();
    list4.add(10, 0);

    expect(list4.get(0)).to.deep.equal({value: 10, next: null});
    expect(list4.length).to.equal(1);
  });
});
