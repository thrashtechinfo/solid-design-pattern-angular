# solid-design-pattern-angular
Usage of Solid Design Pattern in Angular v18

![solid-design-pattern-angular](https://github.com/user-attachments/assets/9eb343a1-9eed-4740-8a59-671cebbbd9cc)

##The principle SOLID stands for:

- S: Single Responsibility Principle
- O: Open/Closed Principle
- L: Liskov Substitution Principle
- I: Interface Segregation Principle
- D: Dependency Inversion Principle

## S: Single Responsibility Principle
The Single Responsibility Principle (SRP) means that a class or module should do only one specific thing and have only one reason to change. Each part of your code should focus on a single task or responsibility. If a class or module does too many things, it becomes harder to maintain, understand, and update. By keeping each part of the code focused on one responsibility, you make the code cleaner and easier to manage.

- Before Applying: Consider a component that displays a list of courses and allows the student to filter them by degree-program.
- After Applying:
  1. create a new component that displays the list of courses
  2. Now, we will create a new component that handles the degree-program filtering

## O: Open/Closed Principle
The Open/Closed Principle means that a piece of software, like a class or function, should be designed in a way that allows you to add new features or behavior without changing the existing code. In simple terms, you should be able to extend the software's functionality by adding new code, but you shouldn't need to go back and modify the old code to make improvements. This helps prevent breaking the system and keeps it more stable and flexible for future changes.

- Before Applying: We have a component that displays a list of courses. The courses are retrieved and displayed in a table. The table has three columns: course name, instructor, and duration. We have created a CourseListComponent to display this list
- After Applying:
  1. UserListComponent: This component will be responsible for displaying the list of users. It will show basic information such as the name, email, and phone number in a table format. When a user is selected, their details will be displayed by the new component.
  2. UserDetailComponent: This new component will handle displaying additional details for the selected user. It will take the selected user as an input and show more specific information (such as address, age, or other relevant data).

## L: Liskov Substitution Principle
The Liskov Substitution Principle (LSP) means that you should be able to use a subclass in place of its superclass without breaking the program. In other words, if a class inherits from another, it should still behave correctly when used in place of the parent class. If a subclass changes how things work too much, it can lead to bugs and unexpected behavior. We ensure that components are loosely coupled to their dependencies, allowing for easy extension and minimal modifications when adding new functionality. Following LSP ensures that your system remains flexible, maintainable, and easy to extend.

  1. With LSP: Subclasses like CreditCardPaymentService and PaypalPaymentService properly replace the PaymentService class without breaking the logic of the PaymentComponent. The system is easy to extend and maintain.
  2. Without LSP: Introducing a subclass like CryptoPaymentService that doesn’t properly adhere to the expected behavior of the base class results in runtime errors and requires additional error handling, making the code less maintainable and extensible.

## I: Interface Segregation Principle
The Interface Segregation Principle (ISP) states that a class should not be required to implement interfaces it doesn't need. In simpler terms, don't force a class to depend on methods it won't use. By following ISP, you can reduce unnecessary connections between components, making your code more flexible, modular, and easier to maintain. By breaking larger interfaces into smaller, more specific ones, you can avoid such problems and keep your code cleaner.

  1. Without: Imagine you're building an e-commerce application and have an interface for different types of payments. If you have a PaymentProcessor interface with a bunch of methods, but not all payment methods require all those methods, you violate the ISP.
  2. With: you should split the PaymentProcessor interface into smaller, more specific interfaces. This way, each class only implements the methods it actually needs.


