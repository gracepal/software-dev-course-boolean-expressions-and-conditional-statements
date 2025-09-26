/*

Objective:
You will practice creating and combining boolean expressions
to drive logic and outcomes in you program.

Instructions:
If you are not familiar with the concept of a text-based adventure game,
let's set the scene...
Example: "You wake up in a dark forest. There are two paths ahead of you:
one leading to the mountains and one to a village.
Your choices will determine your fate!"

Define the Requirements: You must:
  - Write conditional statements to handle player choices.
  - Use boolean expressions to combine multiple conditions.
  - Include at least one use of logical operators (&&, ||, !).

Starter Code:
  - Run the following command in your terminal to install the readline-sync module:
    npm install readline-sync

Paste the following code into your editor:

*/

const readline = require('readline-sync');

const hasTorch = readline.questionInt('Do you have a torch? (1/0 for y/n) ');
const hasMap = readline.questionInt('Do you have a map? (1/0 for y/n) ');
const hasSword = readline.questionInt('Do you have a sword? (1/0 for y/n) ');
const hasCompass = readline.questionInt('Do you have a compass? (1/0 for y/n) ');
const hasDog = readline.questionInt('Do you have a dog? (1/0 for y/n) ');

console.log('You see two paths: one leads to the mountains, the other to the village.');
const choice = readline.question("Do you go to the 'mountains' or the 'village'? ");

if (!(choice === 'mountains' || choice === 'village')) {
  console.log('You get lost and wander aimlessly. The End. ❌');
} else if (choice === 'mountains' && hasTorch) {
  console.log(`You safely navigate through the dark mountains...at first!
    But then a frightening zombie appears out of nowhere and charges toward you!`);
  if (!hasSword) {
    console.log('Sorry you are now infected and walk with the othe zombies. ❌');
  } else {
    console.log(`But you have a sword and obliterate the zombie!
      And eventually you find a way back. ✅`);
  }
} else if (choice === 'mountains' && !hasTorch) {
  if (hasDog) {
    console.log(`But lucky for you, dogs have better sense than us,
      and your trusty old buddy lead the way to safety! ✅`);
  } else {
    console.log(`It's too dark to proceed. You decide to turn back.
      And unfortunately you never quite make your way back. ❌`);
  }
} else if (choice === 'village' || hasMap) {
  if (choice === 'village' && hasMap) {
    if (hasCompass) {
      console.log('You find your way to the village. ✅');
    } else {
      console.log(`You struggle a bit, but you don\'t give up,
        and eventually you find your way! ✅`);
    }
  } else if (choice === 'village') {
    if (hasDog) {
      console.log(`You don\'t have a compass or a map,
        but your trusty old buddy leads you the village safely! ✅`);
    } else {
      console.log(`You get lost in circles for what feels like an eternity,
        but you still find you way eventually! ✅`);
    }
  } else {
    // hasMap && choice !== 'village'
    console.log(`You have the map but don\'t know where to start.
      You spend alot of time going back and forth.
      Time is ticking.
      You have to start moving.
      ...
      Then you finally start, and find your way back home! ✅`);
  }
}

console.log(`Reference:
- choice: ${choice}
- hasTorch: ${hasTorch}
- hasMap: ${hasMap}
- hasSword: ${hasSword}
- hasCompass: ${hasCompass}
- hasDog: ${hasDog}
  `);

/*

Add Customization and expand the game:
  - Add more choices and scenarios.
  - Include additional items (e.g., a sword, a compass).
  - Use nested conditionals and logical operators to create complex outcomes.

*/

/***********************************************************************
Workflows

(A) 'mountains' && hasTorch -> hasSword -> ✅
(B) 'mountains' && hasTorch -> !hasSword -> ❌

(C) 'mountains' && !hasTorch -> hasDog -> ✅
(D) 'mountains' && !hasTorch -> !hasDog -> ❌

(E) 'village' && hasMap && hasCompass -> ✅
(F) 'village' && hasMap && !hasCompass -> ✅
(G) 'village' && !hasMap && hasDog -> ✅
(H) 'village' && !hasMap && !hasDog -> ✅
(I) !'village' && hasMap -> ✅
(J) !('village' or 'mountain') -> ❌
*/

/***********************************************************************
Sample Output

---------------------------------------------
(A) 'mountains' && hasTorch -> hasSword -> ✅
---------------------------------------------
➜  software-dev-course-boolean-expressions-and-conditional-statements git:(main) ✗ node boolean-expressions-and-conditional-statements.js
Do you have a torch? (1/0 for y/n) 1
Do you have a map? (1/0 for y/n) 0
Do you have a sword? (1/0 for y/n) 1
Do you have a compass? (1/0 for y/n) 0
Do you have a dog? (1/0 for y/n) 0
You see two paths: one leads to the mountains, the other to the village.
Do you go to the 'mountains' or the 'village'?mountains
You safely navigate through the dark mountains...at first!
    But then a frightening zombie appears out of nowhere and charges toward you!
But you have a sword and obliterate the zombie!
      And eventually you find a way back. ✅
Reference:
- choice: mountains
- hasTorch: 1
- hasMap: 0
- hasSword: 1
- hasCompass: 0
- hasDog: 0

----------------------------------------------
(B) 'mountains' && hasTorch -> !hasSword -> ❌
----------------------------------------------

➜  software-dev-course-boolean-expressions-and-conditional-statements git:(main) ✗ node boolean-expressions-and-conditional-statements.js
Do you have a torch? (1/0 for y/n) 1
Do you have a map? (1/0 for y/n) 0
Do you have a sword? (1/0 for y/n) 0
Do you have a compass? (1/0 for y/n) 0
Do you have a dog? (1/0 for y/n) 0
You see two paths: one leads to the mountains, the other to the village.
Do you go to the 'mountains' or the 'village'? mountains
You safely navigate through the dark mountains...at first!
    But then a frightening zombie appears out of nowhere and charges toward you!
Sorry you are now infected and walk with the othe zombies. ❌
Reference:
- choice: mountains
- hasTorch: 1
- hasMap: 0
- hasSword: 0
- hasCompass: 0
- hasDog: 0

--------------------------------------------
(C) 'mountains' && !hasTorch -> hasDog -> ✅
--------------------------------------------

➜  software-dev-course-boolean-expressions-and-conditional-statements git:(main) ✗ node boolean-expressions-and-conditional-statements.js
Do you have a torch? (1/0 for y/n) 0
Do you have a map? (1/0 for y/n) 0
Do you have a sword? (1/0 for y/n) 0
Do you have a compass? (1/0 for y/n) 0
Do you have a dog? (1/0 for y/n) 1
You see two paths: one leads to the mountains, the other to the village.
Do you go to the 'mountains' or the 'village'? mountains
But lucky for you, dogs have better sense than us,
      and your trusty old buddy lead the way to safety! ✅
Reference:
- choice: mountains
- hasTorch: 0
- hasMap: 0
- hasSword: 0
- hasCompass: 0
- hasDog: 1

---------------------------------------------
(D) 'mountains' && !hasTorch -> !hasDog -> ❌
---------------------------------------------

➜  software-dev-course-boolean-expressions-and-conditional-statements git:(main) ✗ node boolean-expressions-and-conditional-statements.js
Do you have a torch? (1/0 for y/n) 0
Do you have a map? (1/0 for y/n) 0
Do you have a sword? (1/0 for y/n) 0
Do you have a compass? (1/0 for y/n) 0
Do you have a dog? (1/0 for y/n) 0
You see two paths: one leads to the mountains, the other to the village.
Do you go to the 'mountains' or the 'village'? mountains
It's too dark to proceed. You decide to turn back.
      And unfortunately you never quite make your way back. ❌
Reference:
- choice: mountains
- hasTorch: 0
- hasMap: 0
- hasSword: 0
- hasCompass: 0
- hasDog: 0

-------------------------------------------
(E) 'village' && hasMap && hasCompass -> ✅
-------------------------------------------

➜  software-dev-course-boolean-expressions-and-conditional-statements git:(main) ✗ node boolean-expressions-and-conditional-statements.js
Do you have a torch? (1/0 for y/n) 0
Do you have a map? (1/0 for y/n) 1
Do you have a sword? (1/0 for y/n) 0
Do you have a compass? (1/0 for y/n) 1
Do you have a dog? (1/0 for y/n) 0
You see two paths: one leads to the mountains, the other to the village.
Do you go to the 'mountains' or the 'village'? village
You find your way to the village. ✅
Reference:
- choice: village
- hasTorch: 0
- hasMap: 1
- hasSword: 0
- hasCompass: 1
- hasDog: 0

--------------------------------------------
(F) 'village' && hasMap && !hasCompass -> ✅
--------------------------------------------

➜  software-dev-course-boolean-expressions-and-conditional-statements git:(main) ✗ node boolean-expressions-and-conditional-statements.js
Do you have a torch? (1/0 for y/n) 0
Do you have a map? (1/0 for y/n) 1
Do you have a sword? (1/0 for y/n) 0
Do you have a compass? (1/0 for y/n) 0
Do you have a dog? (1/0 for y/n) 0
You see two paths: one leads to the mountains, the other to the village.
Do you go to the 'mountains' or the 'village'? village
You struggle a bit, but you don't give up,
        and eventually you find your way! ✅
Reference:
- choice: village
- hasTorch: 0
- hasMap: 1
- hasSword: 0
- hasCompass: 0
- hasDog: 0

----------------------------------------
(G) 'village' && !hasMap && hasDog -> ✅
----------------------------------------

➜  software-dev-course-boolean-expressions-and-conditional-statements git:(main) ✗ node boolean-expressions-and-conditional-statements.js
Do you have a torch? (1/0 for y/n) 0
Do you have a map? (1/0 for y/n) 0
Do you have a sword? (1/0 for y/n) 0
Do you have a compass? (1/0 for y/n) 0
Do you have a dog? (1/0 for y/n) 1
You see two paths: one leads to the mountains, the other to the village.
Do you go to the 'mountains' or the 'village'? village
You don't have a compass or a map,
        but your trusty old buddy leads you the village safely! ✅
Reference:
- choice: village
- hasTorch: 0
- hasMap: 0
- hasSword: 0
- hasCompass: 0
- hasDog: 1

-----------------------------------------
(H) 'village' && !hasMap && !hasDog -> ✅
-----------------------------------------

➜  software-dev-course-boolean-expressions-and-conditional-statements git:(main) ✗ node boolean-expressions-and-conditional-statements.js
Do you have a torch? (1/0 for y/n) 0
Do you have a map? (1/0 for y/n) 0
Do you have a sword? (1/0 for y/n) 0
Do you have a compass? (1/0 for y/n) 0
Do you have a dog? (1/0 for y/n) 0
You see two paths: one leads to the mountains, the other to the village.
Do you go to the 'mountains' or the 'village'? village
You get lost in circles for what feels like an eternity,
        but you still find you way eventually! ✅
Reference:
- choice: village
- hasTorch: 0
- hasMap: 0
- hasSword: 0
- hasCompass: 0
- hasDog: 0

------------------------------
(I) !'village' && hasMap -> ✅
------------------------------

➜  software-dev-course-boolean-expressions-and-conditional-statements git:(main) ✗ node boolean-expressions-and-conditional-statements.js
Do you have a torch? (1/0 for y/n) 0
Do you have a map? (1/0 for y/n) 1
Do you have a sword? (1/0 for y/n) 0
Do you have a compass? (1/0 for y/n) 0
Do you have a dog? (1/0 for y/n) 0
You see two paths: one leads to the mountains, the other to the village.
Do you go to the 'mountains' or the 'village'? village
You struggle a bit, but you don't give up,
        and eventually you find your way! ✅
Reference:
- choice: village
- hasTorch: 0
- hasMap: 1
- hasSword: 0
- hasCompass: 0
- hasDog: 0

------------------------------------
(J) !('village' or 'mountain') -> ❌
------------------------------------

➜  software-dev-course-boolean-expressions-and-conditional-statements git:(main) ✗ node boolean-expressions-and-conditional-statements.js
Do you have a torch? (1/0 for y/n) 1
Do you have a map? (1/0 for y/n) 1
Do you have a sword? (1/0 for y/n) 1
Do you have a compass? (1/0 for y/n) 1
Do you have a dog? (1/0 for y/n) 1
You see two paths: one leads to the mountains, the other to the village.
Do you go to the 'mountains' or the 'village'? neither
You get lost and wander aimlessly. The End. ❌
Reference:
- choice: neither
- hasTorch: 1
- hasMap: 1
- hasSword: 1
- hasCompass: 1
- hasDog: 1

*/
