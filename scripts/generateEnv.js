const fs = require('fs')
const path = require('path')
const packageJson = require('../package.json')

// This script can be used for generating a .env file containing all necessary variables
const envVariables = {}

// Get APP_VERSION
envVariables.APP_VERSION = packageJson.version

// Write .env file
const envContent = Object.keys(envVariables)
  .map(key => `${key}=${envVariables[key]}`)
  .join('\n')

fs.writeFileSync(path.join(__dirname, '..', '.env'), envContent)
console.log('Generated .env file')