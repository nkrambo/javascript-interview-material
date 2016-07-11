
class Deque:
    def __init__(self):
        self.items = []

    # size
    def size(self):
        return len(self.items)

    # is empty
    def is_empty(self):
        return self.items == []

    # add rear - O(n)
    def add_rear(self, item):
        self.items.insert(0, item)

    # add front - O(1)
    def add_front(self, item):
        self.items.append(item)

    # remove rear - O(n)
    def remove_rear(self):
        return self.items.pop(0)

    # remove front - O(1)
    def remove_front(self):
        return self.items.pop()