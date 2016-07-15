
""" String compression: Implement a method to perform basic string
    compression using the counts of repeated characters. For example,
    the string 'aabcccccaaa' would become a2b1c5a3. If the 'compressed'
    string would not become smaller than the original string, your method
    should return the original string. You can assume the string only has
    uppercase and lowercase letter (a-z)."""

""" Notes: We assign result to a new list type as python strings are immutable.
    Using string concatenation is inefficient because the concat method is O(n^2).
    We then implment a runner technique to track the previous and current character
    in the input string and compare them.
    """

# input - string
# output - string

def compress(string):
    result = []
    count = 0
    prev = string[0]

    for char in string:
        if char == prev:
            count += 1
        else:
            result += prev + str(count)
            prev = char
            count = 1

    result += prev + str(count)
    result = ''.join(result)

    if len(result) < len(string):
        return result
    else:
        return string

# test cases
print(compress('cat'))
print(compress('aabbccdddd'))
print(compress('a'))




