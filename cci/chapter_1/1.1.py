
""" Is unique: Implement an algorithm to determine if a string has
    all unique characters. What if you cannot use additional data structures."""

# input - string of (n) length
# output - boolean

# assumptions - using ASCII, which is a 128 character set

# Naive approach using a set
# Time: O(n^2)
def all_unique_set(s):
    if len(s) > 128:
        return False

    seen = set()
    for char in s:
        if char in seen:
            return False
        chars.add(char)

    return True


# Using an array of boolean values mapped to chars
# Time: O(n)
def all_unique_array(s):
    if len(s) > 128:
        return False

    char_list = [False] * 128
    for char in s:
        idx = ord(char)
        if char_list[idx]:
            return False

        chars_list[idx] = True

    return True


# test cases
print(all_unique_set('abcdefg'))
print(all_unique_set('abcdefgg'))

print(all_unique_array('abcdefg'))
print(all_unique_array('abcdefgg'))
