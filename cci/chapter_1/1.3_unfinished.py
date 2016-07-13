
""" URLify: Write a method to replace all spaces in a string with %20.
    You may assume that the string has sufficient space at the end to hold the additional characters,
    and that you are given the 'true' length of the string."""

# input - 'Mr John Smith  ' 13
# output - 'Mr%20John%20Smith'

# Simple approach using split. This returns a new string.
# Time: ?
def urlify_split(string):
    string = string.strip()
    string_list = string.split()

    return '%20'.join(string_list)


# Python string are immutable. This approach uses char arrays to make changes in place.
# Time: O(n)
def urlify_inplace(string, length):

    # trim
    string = string.strip()

    space_count = 0
    for i in string:
        if i == ' ':
            space_count += 1

    return space_count


# test cases
# print(urlify_split('Mr John Smith  '))
# print(urlify_split('testing'))

print(urlify_inplace('Mr John Smith  ', 13))
print(urlify_inplace('testing', 7))
