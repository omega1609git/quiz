export const Questions = {
    topic: 'Data Structure',
    level: 'Beginner',
    totalQuestions: 5,
    perQuestionScore: 5,
    questions: [
      {
        question: 'A list of elements in which enqueue operation takes place from one end, and dequeue operation takes place from one end is __',
        choices: ['Binary tree', 'Stack', 'Queue', 'Linked '],
        type: 'MCQs',
        correctAnswer: 'Queue',
      },
      {
        question: ' How many Queues are required to implement a Stack?',
        choices: ['3', '2', '1', '4'],
        type: 'MCQs',
        correctAnswer: '2',
      },
      {
        question:
          'How can we define a AVL tree?',
        choices: ['A tree which is binary search tree and height balanced tree.', 'A tree which is a binary search tree but unbalanced tree.', 'A tree with utmost two children', 'A tree with utmost three children'],
        type: 'MCQs',
        correctAnswer: 'A tree which is binary search tree and height balanced tree.',
      },
      {
        question: 'Which data structure is needed to convert infix notation to postfix notation?',
        choices: ['Tree', 'Linked List', 'Stack', 'Queue'],
        type: 'MCQs',
        correctAnswer: 'Stack',
      },
      {
        question: 'Which type of data structure is a ternary heap?',
        choices: ['Hash', 'Array', 'Priority Stack', 'Priority Queue'],
        type: 'MCQs',
        correctAnswer: 'Priority Queue',
      },
    ],
  }