
 let current_users:string[]=['abc','efg','hij','klm','nop']
 let new_users:string[]=['qrs','tuv','efg','klm','wxy']



// Case-insensitive check if a username exists in an array
function usernameExists(users: string[], username: string): boolean
{     
    return users.some(u => u.toLowerCase() === username.toLowerCase());      //some method(callback  arrow function)
}

// Check new usernames
for (const newUsername of new_users) 
{// function call
    if (usernameExists(current_users, newUsername)) 
    {
        console.log(`Username ${newUsername} is already taken, please enter a new one.`);
    } else 
    {
        console.log(`Username ${newUsername} is available.`);
    }
}