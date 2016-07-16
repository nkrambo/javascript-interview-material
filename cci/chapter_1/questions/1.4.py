
""" Palindrome permutation: Given a string, write a function to
    check if it is a permutation of a palindrome. A palindrome is a word
    or phrase that is the same forwards as it is backwards. A permutation is a
    rearrangment of letters. The palindrome does not need to be limited to just
    dictionary words."""

""" Notes: We know that for a palindrome to exist that there must be an even
    number of each character in a string with the exception of a single odd
    character which may represent the very middle of a palindrome. Essentially,
    a string must be balanced on either side to be a palindrome.
    e.g 'aa bb cc dd' or 'aa bb c dd ee', where 'c' is a single odd character.
    With this knowledge, we know that if a string has more than one unbalanced
    character it cannot be a palindrome."""

""" Solution: We create a dictionary holding a key for each lowercase letter in the alphabet
    and set it's value to a boolean (False). Then we iterate over each character of the
    input string and toggle each key in the dictionary for that character. A 'True' value represents
    an odd occurence of that character. A 'False' value represents an even, or balanced, occurence of
    that value. After iteration has completed we then check the dictionary for more than 1 unbalanced
    occurence, or 2 or more 'True' values. If so, then it cannot be a palindrome."""

# input - 'Tact Coa'
# output - True (Permutations: 'taco cat', 'atco cta' etc...)

import string

def palindrome_perm(str):

    str = str.lower()
    alpha = dict.fromkeys(string.ascii_lowercase, False)

    for char in str:
        if ord(char) > 96 and ord(char) < 123:
            alpha[char] = not alpha[char]

    count = 0
    for key in alpha:
        if alpha[key] == True:
            count += 1

        if count > 1:
            return False

    return True


# test cases
print(palindrome_perm('Tact Coa'))
print(palindrome_perm('aabbeccdd'))
print(palindrome_perm('abc'))

