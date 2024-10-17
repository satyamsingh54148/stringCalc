<h1>String Calculator</h1>

<h2>Overview</h2>
<p>This project is a CLI (Command-Line Interface) application that calculates the sum of numbers present in a string. The application is built using <strong>TypeScript</strong>, and <strong>TDD</strong> (Test-Driven Development) was used throughout the development process. The test cases are written using <strong>Jest</strong>.</p>

<h2>Key Features</h2>
<ul>
  <li>Supports multiple delimiters, including custom and multi-character delimiters.</li>
  <li>Handles negative numbers by throwing an exception.</li>
  <li>Handles edge cases, including empty input and non-numeric values.</li>
  <li>Follows TDD principles with comprehensive test coverage.</li>
</ul>

<h2>Prerequisites</h2>
<p>Make sure you have the following installed on your machine:</p>
<ul>
  <li><strong>Node.js</strong> (version 14 or later)</li>
  <li><strong>npm</strong> (Node Package Manager)</li>
</ul>

<h2>Getting Started</h2>

<h3>1. Clone the Repository</h3>
<pre><code>git clone https://github.com/satyamsingh54148/stringcalc.git
cd stringcalc
</code></pre>

<h3>2. Install Dependencies</h3>
<p>Before running or building the application, ensure that all required dependencies are installed:</p>
<pre><code>npm install
</code></pre>

<h3>3. Running the Application</h3>
<p>You can run the application in two different ways:</p>

<ul>
  <li><strong>Directly Start the Application</strong> (automatically compiles and runs):
  <pre><code>npm run start
  </code></pre>
  </li>
  <li><strong>Build and Run Separately</strong>:
  <p>First, build the TypeScript files:</p>
  <pre><code>npm run build
  </code></pre>
  <p>Then, run the compiled JavaScript:</p>
  <pre><code>node dist/sumString.js
  </code></pre>
  </li>
</ul>

<h3>4. Running Tests</h3>
<p>The project includes comprehensive test coverage written with Jest. To run the tests, use:</p>
<pre><code>npm test
</code></pre>
<p>This will run all the test cases in the project and display the results.</p>


<h2>Example Usage</h2>
<p>Here’s an example of how the application works:</p>

<img width="747" alt="Screenshot 2024-10-18 at 12 03 53 AM" src="https://github.com/user-attachments/assets/2341c017-9da1-4c47-bff9-781a4db08744">


<p>If a negative number is provided in the input, the application throws an exception like:</p>

<img width="524" alt="Screenshot 2024-10-18 at 12 23 36 AM" src="https://github.com/user-attachments/assets/932e87eb-0fef-43e3-879f-1c1fa4dafa3e">


<h2>Troubleshooting</h2>
<ul>
  <li>Ensure you have Node.js and npm installed.</li>
  <li>If the build fails, check your TypeScript version and configuration in <code>tsconfig.json</code>.</li>
  <li>If tests fail, check the error output in the terminal for details on which test cases didn't pass.</li>
</ul>

<h2>Author</h2>
<p><strong>Satyam Singh</strong></p>
