interface TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
}

// 方案1， 无限递归了 Type instantiation is excessively deep and possibly infinite.
// type InorderTraversal<T extends TreeNode | null> = T extends TreeNode ? [T['val'], ...InorderTraversal<T['left']>, InorderTraversal<T['right']>] : []

// 借助了 FlattenDepth
// 注意遍历顺序

type InorderTraversal<T extends TreeNode | null> = T extends TreeNode ? FlattenDepth<[InorderTraversal<T['left']>, T['val'], InorderTraversal<T['right']>], 2> : []
