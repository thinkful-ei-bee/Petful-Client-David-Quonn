# Petful

## Authors

### David Bolin
### Quonn Bernard

## Summary
A web app for a first-in-first-out pet adoption agency. The user is told how many others are waiting to adopt and can only adopt when the others have taken their turns. At that point the user can only adopt a cat or a dog or both, but only the ones first in their respective lines.


## Live app

The live app is [here](https://petful.davidbolin1016.now.sh/).

## Screenshots
![Landing Page](/screenshots/ScreenClip.png)

![Adoption Page](/screenshots/ScreenClip2.png)

## Tech stack

The client uses CSS3 and JavaScript ES6 together with React.

The server is also in JavaScript (at [https://github.com/thinkful-ei-bee/DSA-Petful-David-Quonn]) and uses Express.

The server tracks the pets by using two queues, one for dogs and one for cats, in order to ensure that they are adopted in order.

## API documentation

API documentation can be found at the [repo for the server.](https://github.com/thinkful-ei-bee/DSA-Petful-David-Quonn) 