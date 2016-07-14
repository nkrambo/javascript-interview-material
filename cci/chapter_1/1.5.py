
""" One way: There are three types of edits that can be performed on strings.
    Insert a character, remove a character or replace a character. Given 2 strings,
    write a function to check if they are 1 edit (or 0 edits) away. """

""" Notes: """

# input - string, string
# output - boolean

def one_away(str, str):


# test cases
print(one_away('pale', 'ple')) # true
print(one_away('pales', 'pale')) # true
print(one_away('pale', 'bale')) # true
print(one_away('pale', 'bake')) # false
