1. Install tsc and node-ts globally

```
   npm install -g typescript ts-node
```

1. Setup new project for testing / running existing code

```
   npm init
   tsc --init
```

1. Copy existing code to project.

1. Check if we can compile and run it.
   3.1. Install nodemon
   3.2 Configure npm
   3.3 Configure tsc

1. Compiles (with errors) but test log works.

1. Call AddCustomer with some sample data.
   It runs but gives back false. Mmm, guess because of the birthdate format. But lets see...

1. Bevore we change anything add some tests.

- Install mocha and chai
- Configure `npm test`
- Add a CustomerService.spec file for testing our CustomerService
- Normally I would want to make all tests pass before doing any refactoring. But I have no idea what is the expectation for the birthdate. The `datediff` function looks suspicous to me. It has no code to handle `datepart = 'y'` or how should that work? In generall I think it is a very bad idea to write your own code for date calculations. From my experience this is alaways a reason that sooner or later something nasty will happen any fail. So I will throw out the custom date calculation as part of the refactoring even if it is not part of the `AddUser` method and therefore might be out of scope.

1. Save the current state with failing tests and continue on a refactor branch.
