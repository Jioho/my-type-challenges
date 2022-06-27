interface TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
}
type InorderTraversal1<T extends TreeNode | null> = T extends TreeNode ? FlattenDepth<[InorderTraversal1<T['left']>, T['val'], InorderTraversal1<T['right']>]> : []
