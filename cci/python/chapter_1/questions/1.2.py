
""" Check permutation: Given two string, write a method to
    see if one is a permutation of the other."""

# input - str1, str2
# output - boolean

# assumptions - whitespace is significant and so is case sensitivity.
# For example, 'God' is not a permutation of 'dog' or 'God '

# Naive - using built-in sorting method
# Time: O(n^2) - This is because of using the sorted function
def permutation_sort(s1, s2):

    # cheap O(1) check
    if len(s1) != len(s2):
        return False

    # expensive sorting
    if sorted(s1) != sorted(s2):
        return False

    return True

# Array comparison method
# Time: O(n)
def permutation_array(s1, s2):

    # cheap O(1) check
    if len(s1) != len(s2):
        return False

    # count chars
    s1_chars = [0] * 26
    s2_chars = [0] * 26

    for i in range(len(s1)):
        idx = ord(s1[i]) - ord('a')
        s1_chars[idx] += 1

    for i in range(len(s2)):
        idx = ord(s2[i]) - ord('a')
        s2_chars[idx] += 1

    count = 0
    while count < 26:
        if s1_chars[count] == s2_chars[count]:
            count += 1
        else:
            return False

    return True

# test cases
# print(permutation_sort('dog', 'God'))
# print(permutation_sort('test', 'Test  '))
# print(permutation_sort('test', 'Testing'))
# print(permutation_sort('test', 'estt'))
#
# print(permutation_array('dog', 'God'))
# print(permutation_array('test', 'Test  '))
# print(permutation_array('test', 'Testing'))
print(permutation_array('test', 'estt'))

