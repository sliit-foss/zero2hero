# SOLID architecture

SOLID principles determine how functions and data structures are organized in classes and how these classes relate to each other.
The purpose of these principles in creating a mid-level software structure is;

* Changes to be appropriate
* Easy to understand
* Ability to use basic components used in most software systems

1. THE SINGLE RESPONSIBILITY PRINCIPLE (SRP)<br/>
A class/module should have only one responsibility.

2. THE OPEN-CLOSED PRINCIPLE (OCR)<br/>
A software artifact should be open for extension but closed for modification.

3. THE LISKOV SUBSTITUTION PRINCIPLE (LSP)<br/>
BaseType MUST be replaceable by its subTypes

4. THE INTERFACE SEGREGATION PRINCIPLE (ISP)<br/>
  Clients should not depend on methods they do not use.

5. THE DEPENDENCY INVERSION PRINCIPLE (DIP)<br/>
  High-level modules should not depend on low-level modules. Both should depend on abstraction.

# Clean architecture

Clean architecture is yet another one of these architectural styles, though it might be more accurately described as a set of guidelines. Proposed and evangelized by Robert C. Martin, it acts a blueprint for modular systems that strictly adhere to the separation of concerns design principle. The goal of clean architecture is to create layered architectures that are simple, extendable and easy to maintain.  

5 steps to clean architecture
To get started implementing clean architecture, follow the points given below:
* Split your application's code into layers.
* Place abstractions in the inner layers.
* Put implementation in the outer layers.
* Point dependencies inwards.
* Follow test-driven development outside-in.
