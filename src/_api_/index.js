import mock from 'src/utils/mock';

const mockData = [
  {
    category: 'Entertainment: Video Games',
    type: 'boolean',
    difficulty: 'hard',
    question:
      'The retail disc of Tony Hawk&#039;s Pro Skater 5 only comes with the tutorial.',
    correct_answer: 'True',
    incorrect_answers: ['False']
  },
  {
    category: 'General Knowledge',
    type: 'boolean',
    difficulty: 'hard',
    question:
      'This is the correct spelling of &quot;Supercalifragilisticexpialidocious&quot;.',
    correct_answer: 'True',
    incorrect_answers: ['False']
  },
  {
    category: 'Entertainment: Video Games',
    type: 'boolean',
    difficulty: 'hard',
    question:
      'In the game &quot;Melty Blood Actress Again Current Code&quot;, you can enter Blood Heat mode in Half Moon style.',
    correct_answer: 'False',
    incorrect_answers: ['True']
  },
  {
    category: 'General Knowledge',
    type: 'boolean',
    difficulty: 'hard',
    question:
      '&quot;Number 16 Bus Shelter&quot; was a child&#039;s name that was approved by the New Zealand government.',
    correct_answer: 'True',
    incorrect_answers: ['False']
  },
  {
    category: 'Science: Computers',
    type: 'boolean',
    difficulty: 'hard',
    question: 'DHCP stands for Dynamic Host Configuration Port.',
    correct_answer: 'False',
    incorrect_answers: ['True']
  },
  {
    category: 'Entertainment: Film',
    type: 'boolean',
    difficulty: 'hard',
    question:
      '&quot;Cube&quot;, &quot;Cube 2: Hypercube&quot; and &quot;Cube Zero&quot; were directed by the same person.',
    correct_answer: 'False',
    incorrect_answers: ['True']
  },
  {
    category: 'Politics',
    type: 'boolean',
    difficulty: 'hard',
    question:
      'Nazi Germany surrendered on Harry Truman&#039;s birthday while he was president.',
    correct_answer: 'True',
    incorrect_answers: ['False']
  },
  {
    category: 'Entertainment: Music',
    type: 'boolean',
    difficulty: 'hard',
    question:
      'The singer Billie Holiday was also known as &quot;Lady Day&quot;.',
    correct_answer: 'True',
    incorrect_answers: ['False']
  },
  {
    category: 'Entertainment: Video Games',
    type: 'boolean',
    difficulty: 'hard',
    question:
      'The video game &quot;Fuel&quot; has an open world that is 5,560 square miles?',
    correct_answer: 'True',
    incorrect_answers: ['False']
  },
  {
    category: 'Entertainment: Japanese Anime & Manga',
    type: 'boolean',
    difficulty: 'hard',
    question:
      'The protagonist in &quot;Humanity Has Declined&quot; has no discernable name and is simply referred to as &#039;I&#039; for most of the series.',
    correct_answer: 'True',
    incorrect_answers: ['False']
  }
];

mock.onGet('/api.php').reply((config) => {
  try {
    return [
      200,
      {
        response_code: 0,
        results: mockData
      }
    ];
  } catch (error) {
    console.error(error);
    return [500, { message: 'Internal server error' }];
  }
});
