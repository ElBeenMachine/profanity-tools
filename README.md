# Profanity Tools
<div align = "center">
    <p>
        <a href="https://discord.gg/uB4dcpsMSR">
            <img src="https://discordapp.com/api/guilds/506436049816518657/embed.png" alt="Discord server" />
        </a>
        <a href="https://www.npmjs.com/package/profanity-tools">
            <img src="https://img.shields.io/npm/v/profanity-tools.svg?maxAge=3600" alt="NPM version" />
        </a>
        <a href="https://www.npmjs.com/package/profanity-tools">
            <img src="https://img.shields.io/npm/dt/profanity-tools.svg?maxAge=3600" alt="NPM downloads" />
        </a>
    </p>
    <img src = "https://nodei.co/npm/profanity-tools.png?downloads=true&stars=true">
</div>

# About
Profanity tools is my first public package posted to the [Node Package Manager](https://npmjs.com). It is a simple tool that allows for the manipulation of strings containing profanity. Features include:
- Identifying profanic words in a string
- Censoring profanic words in a string
- Checking if a string is profanic

## Installation
```
npm install profanity-tools
```
# Example Usage
## Identifying Profanity
```js
const profanity = require("profanity-tools");

// Define test strings
const string = "F**k you"

// Identify any profanic words in a string
const result = profanity.identify(string);

/* This will return all the information about the string provided

{
    "identified_profanity": [
        { "word": "F**k", "profanity_matches": ["F**k"] }
    ],
    "isProfanic": true
}

*/
```

## Checking for profanity
```js
const profanity = require("profanity-tools");

// Define test strings
const string = "How are you?"

// Check if a string contains any profanity
const result = profanity.hasProfanity(string);

/* This will return a boolean value stating whether or not a string is profanic

false

*/
```

## Censoring Profanity
```js
const profanity = require("profanity-tools");

// Define test strings
const string = "Yippee ki-yay Mother Fu**er"

// Censor a string
const result = profanity.censor(string);

/* This will return a censored version of the string provided

"Yippee ki-yay Mother F****r"

*/
```
