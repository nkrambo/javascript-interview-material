
class Queue:
    def __init__(self):
        self.items = []

    # dequeue - O(1)
    def dequeue(self):
        return self.items.pop()

    # enqueue - O(n)
    def enqueue(self, item):
        self.items.insert(0, item)

    # size
    def size(self):
        return len(self.items)

    # is empty
    def is_empty(self):
        return self.items == []
