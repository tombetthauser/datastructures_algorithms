class Node:
  def __init__(self, children, isWord):
    self.children = children
    self.isWord = isWord

class Solution:
  def build(self, words):
    # build a trie
    pass

  def autocomplete(self, prefix):
    return []

s = Solution()
s.build(['dog', 'dark', 'cat', 'door', 'dodge'])
print(s.autocomplete('do'))
# ['dog', 'door', 'dodge']