/**
 * A Linked List based solution for Detect a Cycle in a list
 * Given head, the head of a linked list, determine if the linked list has a cycle in it.
 */
function main () {
  const head = '' // Reference to head is given in the problem. So please ignore this line
  let fast = head
  let slow = head

  while (fast != null && fast.next != null && slow != null) {
    fast = fast.next.next
    slow = slow.next
    if (fast === slow) {
      return true
    }
  }
  return false
}

main()
