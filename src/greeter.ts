// A simple middleware function that logs a greeting message - to test global middleware registration

export function greeter(req, res, next) {
  console.log('Greeter middleware executed.');
  next();
}
