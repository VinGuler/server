# My Express App

This is a simple Express.js application written in TypeScript. It serves a single route that returns a JSON object.

## Project Structure

```
my-express-app
├── src
│   ├── app.ts          # Entry point of the application
│   ├── routes
│   │   └── myInfo.ts   # Route definition for "/my-info"
│   └── types
│       └── index.ts    # Custom types and interfaces
├── package.json         # NPM configuration file
├── tsconfig.json        # TypeScript configuration file
└── README.md            # Project documentation
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd my-express-app
   ```

3. Install the dependencies:
   ```
   npm install
   ```

## Running the Application

To start the server, run:
```
npm start
```

The server will be running on `http://localhost:3000`.

## API Endpoint

- **GET /my-info**: Returns a JSON object with a single property "content". 

Example response:
```json
{
  "content": "Your content here"
}
```