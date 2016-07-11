
class Stack:
    def __init__(self):
        self.items = []

    # push - O(1)
    def push(self, item):
        self.items.append(item)

    # pop - O(1)
    def pop(self):
        return self.items.pop()

    # size
    def size(self):
        return len(self.items)

    # is empty
    def is_empty(self):
        return self.items == []

    # peek
    def peek(self):
        return self.items[len(self.items)-1]
