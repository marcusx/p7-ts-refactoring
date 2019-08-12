#### Install tsc and node-ts globally

```
   npm install -g typescript ts-node
```

#### Setup new project for testing / running existing code

```
   npm init
   tsc --init
```

#### Copy existing code to project.

1. Check if we can compile and run it.
2. Install nodemon
3. Configure npm
4. Configure tsc

#### Compiles (with errors)

1. Add a test file (index.ts) for using `AddCustomer`
2. Call AddCustomer with some sample data.

It runs but gives back false for various reasons I would consider as a bug.

#### Before we change anything add some tests

- Install mocha and chai
- Configure `npm test`
- Add a `CustomerService.spec file for testing our `CustomerService
- Normally I would want to make all tests pass before doing any refactoring. But I have no idea what is the expectation for the birthdate. The `datediff` function looks suspicous to me. It has no code to handle `datepart = 'y'` or how should that work? In generall I think it is a very bad idea to write your own code for date calculations. From my experience this is alaways a reason that sooner or later something nasty will happen any fail. So I will throw out the custom date calculation as part of the refactoring even if it is not part of the `AddUser` method and therefore might be out of scope.
`

#### Fix bugs and Refactor
1. Save the current state with failing tests and continue on a refactor branch.
2. `AddUser` fails if Firstname OR Lastname is 'truthy'. Mmm, guessing this should check if both values are set. Negating that.
3. Fixing some more from my perspective broken validation functionality
4. Separating the validation into own methods
5. Fixing compiler and type errors
6. Using class properties for data storage
7. To be continued