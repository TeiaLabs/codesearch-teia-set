// Double Linked List Node built specifically for LRU Cache
class DoubleLinkedListNode {
  constructor (key, val) {
    this.key = key
    this.val = val
    this.next = null
    this.prev = null
  }
}

// Double Linked List built specifically for LRU Cache
class DoubleLinkedList {
  constructor () {
    this.head = new DoubleLinkedListNode(null, null)
    this.rear = new DoubleLinkedListNode(null, null)
    this.head.next = this.rear
    this.rear.prev = this.head
  }

  // Adds the given node to the end of the list (before rear)
  add (node) {
    const temp = this.rear.prev
    temp.next = node
    node.prev = temp
    this.rear.prev = node
    node.next = this.rear
  }

  // Removes and returns the given node from the list
  remove (node) {
    const tempLast = node.prev
    const tempNext = node.next
    node.prev = null
    node.next = null
    tempLast.next = tempNext
    tempNext.prev = tempLast

    return node
  }
}

// LRU Cache to store a given capacity of data
class LRUCache {
  constructor (capacity) {
    this.list = new DoubleLinkedList()
    this.capacity = capacity
    this.numKeys = 0
    this.hits = 0
    this.miss = 0
    this.cache = {}
  }

  // Return the details for the cache instance [hits, misses, capacity, current_size]
  cacheInfo () {
    return `CacheInfo(hits=${this.hits}, misses=${this.miss}, capacity=${this.capacity}, current size=${this.numKeys})`
  }

  // Sets the value for the input key and updates the Double Linked List
  set (key, value) {
    if (!(key in this.cache)) {
      if (this.numKeys >= this.capacity) {
        const keyToDelete = this.list.head.next.key
        this.list.remove(this.cache[keyToDelete])
        delete this.cache[keyToDelete]
        this.numKeys -= 1
      }
      this.cache[key] = new DoubleLinkedListNode(key, value)
      this.list.add(this.cache[key])
      this.numKeys += 1
    } else {
      const node = this.list.remove(this.cache[key])
      node.val = value
      this.list.add(node)
    }
  }

  // Returns the value for the input key and updates the Double Linked List. Returns null if key is not present in cache
  get (key) {
    if (key in this.cache) {
      this.hits += 1
      this.list.add(this.list.remove(this.cache[key]))
      return this.cache[key].val
    }
    this.miss += 1
    return null
  }
}

// Example 1 (Small Cache)
function main () {
  const cache = new LRUCache(2)
  cache.set(1, 1)
  cache.set(2, 2)

  console.log(cache.get(1))

  cache.set(3, 3)

  console.log(cache.get(2)) // cache miss

  cache.set(4, 4)

  console.log(cache.get(1)) // cache miss
  console.log(cache.get(3))
  console.log(cache.get(4))

  console.log('Example Cache: ', cache.cacheInfo(), '\n')

  // Example 2 (Computing Fibonacci Series - 100 terms)
  function fib (num, cache = null) {
    if (cache) {
      const value = cache.get(num)
      if (value) { return value }
    }
    if (num === 1 || num === 2) { return 1 }
    const result = fib(num - 1, cache) + fib(num - 2, cache)
    if (cache) { cache.set(num, result) }
    return result
  }

  const fibCache = new LRUCache(100)
  for (let i = 1; i <= 100; i++) { fib(i, fibCache) }
  console.log('Fibonacci Series Cache: ', fibCache.cacheInfo(), '\n')
}

main()
