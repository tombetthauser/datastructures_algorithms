# Python is Declarative rather than Imperative
# You can't use it to control the Control Flow / State of the program

# Python is an Interpereted, Object Oriented, High-Level Language with Dynamic Statements
# It is well suited for Rapid Application Development
# High-Level means it allows the programmer to focus on Core Functionality rather than Common Programming Tasks

# An Imperative Sentence tells you how to do something
# A Declarative Sentence just tells you what to do



# Illegal Variable Charactors in Python

# 2pac = 1999 # ILLEGAL INTEGER START
# Pac2 = 1999 # LEGAL INTEGER

# two-pac = 1999 # ILLEGAL KEBAB CASE
# two_pac = 1999 # LEGAL SNAKE CASE

def foo():
  y = 1999
  global x
  x = 2001
 
foo () # These are both legal in Python
foo()

# print(y) # ERROR Y UNDEFINED
# print(x) # ALL GOOD!

"""
This isn't actually a comment
Python doesn't technically support multiline comments
this is just a multiline string literal
"""

z = """
Print Me!
"""

# z = """No Print Me!""" # LEGAL but prints without space above and below

print(z) # Prints z with space above and below!