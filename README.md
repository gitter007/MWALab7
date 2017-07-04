/***********************************************

CS572 - MODERN WEB APPLICATION PROGRAMMING

Lecture 7 / Exercise

************************************************/
1. Using Mongo Shell, Create a collection homework7 and add one document to it with the following data.
{message: 'ba12e76147f0f251b3a2975f7acaf446a86be1b4e2a67a5d51d62f7bfbed5c03'}

2. Write a Node application using Express that will read the aboce message from MongoDB, decrypt the message (use crypto). It's encrypted with aes256 algorithm and the following key:asaadsaad
3. Display the decrypted message in the browser using route (/secret).
