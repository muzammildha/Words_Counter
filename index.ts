#! /usr/bin/env node
 
 import inquirer from "inquirer"
 import chalk from "chalk"

console.log(chalk.bold.cyanBright("\n ========================================== \n Words counter \n ========================================== \n "))

let answer = await inquirer.prompt(
    [
        {
            name:"Sentence",

            type:"input",

            message:"Enter a Sentence",
        
        }
    ]
)

let words = answer.Sentence.trim().split(" ")

console.log("=".repeat(60))

console.log(chalk.bold.bgYellowBright("Sentence Words"))

console.log(words)

console.log(`Total Words in Sentence: ${words.length}`)

console.log("=".repeat(60))