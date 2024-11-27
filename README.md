# incubyte_string_calculator_tdd_assessment
Incubyte - String Calculator TDD Assessment

# Assessment Detals
Before you start: 
Try not to read ahead.

Do one task at a time. The trick is to learn to work incrementally.

Make sure you only test for correct inputs. there is no need to test for invalid inputs for this kata

String Calculator

1. Create a simple String calculator with a method signature:

---

```
int Add(string numbers)
```

---

The method can take up to two numbers, separated by commas, and will return their sum. 
for example “” or “1” or “1,2” as inputs.
(for an empty string it will return 0) 
Hints:

---

 - Start with the simplest test case of an empty string and move to one and two numbers
 - Remember to solve things as simply as possible so that you force yourself to write tests you did not think about
 - Remember to refactor after each passing test

---

2. Allow the Add method to handle an unknown amount of numbers

---

3. Allow the Add method to handle new lines between numbers (instead of commas).
the following input is ok: “1\n2,3” (will equal 6)
the following input is NOT ok: “1,\n” (not need to prove it - just clarifying)

---

4. Support different delimiters
to change a delimiter, the beginning of the string will contain a separate line that looks like this: “//[delimiter]\n[numbers…]” for example “//;\n1;2” should return three where the default delimiter is ‘;’ .
the first line is optional. all existing scenarios should still be supported

---

5. Calling Add with a negative number will throw an exception “negatives not allowed” - and the negative that was passed. 
if there are multiple negatives, show all of them in the exception message.

---

STOP HERE if you are a beginner. Continue if you can finish the steps so far in less than 30 minutes.

---

6. Numbers bigger than 1000 should be ignored, so adding 2 + 1001 = 2

---

7. Delimiters can be of any length with the following format: “//[delimiter]\n” for example: “//[***]\n1***2***3” should return 6

---

8. Allow multiple delimiters like this: “//[delim1][delim2]\n” for example “//[*][%]\n1*2%3” should return 6.

---

9. make sure you can also handle multiple delimiters with length longer than one char

# Environment Setup
1. Initalize the NPM project and add the required details
```
npm init
```
2. Install the Jest as Dev Dependency
```
npm install --save-dev jest
```
3. Install the babel dependencies
```
npm install --save-dev babel-jest @babel/core @babel/preset-env
```
4. Create the babel config file
```
touch babel.config.js
```
5. Add the following details to the babel config file
```
module.exports = {
  presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
};
```
6. To run the tests use the below command
```
npm run test 
```
7. To Genearate the Test coverage Report run the below command
```
npm run test-coverage
```

# Integration of Github Actions for Running Tests (Continuous Inegration)

1. Create workflow file
```
mkdir -p .github/workflows/ && touch "$_"/run-tests.yml
```
2. Add the following lines to the run-tests.yml file 
```
name: Run Tests

on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main

jobs:
  test:
    runs-on: ubuntu-latest

    steps:
      # Step 1: Check out the code
      - name: Checkout Code
        uses: actions/checkout@v4

      # Step 2: Set up Node.js
      - name: Set up Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18.x'

      # Step 3: Install dependencies
      - name: Install Dependencies
        run: npm ci

      # Step 4: Run Jest tests
      - name: Run Tests
        run: npm test
```
