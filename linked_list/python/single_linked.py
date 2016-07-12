
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

    def get_data(self):
        return self.data

    def set_data(self, data):
        self.data = data

    def get_next(self):
        return self.next

    def set_next(self, data):
        self.next = data


class Single_Linked:
    def __init__(self):
        self.head = None

    def is_empty(self):
        return self.head == None

    def add(self, item):
        new_node = Node(item)
        new_node.set_next(self.head)
        self.head = new_node

    def size(self):
        count = 0
        current = self.head

        while current != None:
            count +=1
            current = current.get_next()

        return count

    def search(self, query):
        current = self.head
        found = False

        while current != None and not found:
            if current.get_data() == query:
                found = True
            else:
                current = current.get_next()

        return found

    def remove(self, query):
        current = self.head
        previous = None
        found = False

        while not found:
            if current.get_data() == query:
                found = True
            else:
                previous = current
                current = current.get_next()

        if previous == None:
            self.head = current.get_next()
        else:
            previous.set_next(current.get_next())

    def pop(self, index):
        if self.is_empty():
            print('Empty list.')

        elif index == None:
            current = self.head

            while current != None:
                current = current.get_next()

