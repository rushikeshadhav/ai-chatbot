import natural from "natural";
const classifier = new natural.BayesClassifier();

// Programming-related questions
classifier.addDocument("What is a variable in JavaScript?", "programming");
classifier.addDocument("How do I debug my code in Python?", "programming");
classifier.addDocument("What is a loop in programming?", "programming");
classifier.addDocument("How do I create a database?", "programming");
classifier.addDocument(
  "What is a class in object-oriented programming?",
  "programming"
);
classifier.addDocument("What is RESTful web services?", "programming");
classifier.addDocument(
  "What is MVC architecture in web development?",
  "programming"
);
classifier.addDocument("How do I deploy a Node.js application?", "programming");
classifier.addDocument(
  "What is the difference between asynchronous and synchronous programming?",
  "programming"
);
classifier.addDocument("How do I handle errors in JavaScript?", "programming");
classifier.addDocument("What is a closure in JavaScript?", "programming");
classifier.addDocument(
  "How do I write a regular expression in Python?",
  "programming"
);
classifier.addDocument(
  "What is the difference between a function and a method in Java?",
  "programming"
);
classifier.addDocument("How do I use Git for version control?", "programming");
classifier.addDocument(
  "What is the difference between Java and JavaScript?",
  "programming"
);
classifier.addDocument(
  "How do I use the .map() function in JavaScript?",
  "programming"
);
classifier.addDocument("Who is a frontend developer", "programming");

// Non-programming questions
classifier.addDocument("What is the capital of France?", "non-programming");
classifier.addDocument("How do I cook a steak?", "non-programming");
classifier.addDocument(
  "What is the best way to learn a new language?",
  "non-programming"
);
classifier.addDocument("How do I train my dog?", "non-programming");
classifier.addDocument(
  "What is the history of the Eiffel Tower?",
  "non-programming"
);
classifier.addDocument("How do I change the oil in my car?", "non-programming");
classifier.addDocument(
  "What is the difference between a cell and a battery?",
  "non-programming"
);
classifier.addDocument("What is the meaning of life?", "non-programming");
classifier.addDocument(
  "What is the tallest mountain in the world?",
  "non-programming"
);
classifier.addDocument("How do I grow a tomato plant?", "non-programming");
classifier.addDocument(
  "What is the best way to study for an exam?",
  "non-programming"
);
classifier.addDocument("How do I build a birdhouse?", "non-programming");
classifier.addDocument(
  'What is the plot of the book "To Kill a Mockingbird"?',
  "non-programming"
);
classifier.addDocument("How do I clean my windows?", "non-programming");
classifier.addDocument(
  "What is the difference between a crocodile and an alligator?",
  "non-programming"
);
classifier.addDocument(
  "What is the average lifespan of a cat?",
  "non-programming"
);
classifier.addDocument("How to do fishing", "non-programming");

// train the classifier
classifier.train();

export default classifier;
