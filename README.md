## Interface vs Type in TypeScript

If you're new to TypeScript, you might wonder: what's the actual difference between `interface` and `type`? They both help define the shape of data — like what properties an object should have — but they have different strengths.

### Basic Idea

Both `interface` and `type` let you define the structure of data. In most simple cases, they can be used in the same way. However, there are specific situations where one is more useful than the other.

### Key Differences

#### 1. Extending

Interfaces are easier to extend. This means you can build on top of an existing interface by creating another interface that inherits from it.

Types can also be extended, but they use a different syntax and are better suited for combining different kinds of types, like unions.

#### 2. Merging

One of the biggest differences is that interfaces can be merged. That means if you define an interface twice with the same name, TypeScript combines them into one. This is helpful when working with third-party libraries.

Types do not support merging. Once a type is defined with a name, you can’t redefine or expand it.

#### 3. Use Cases

Interfaces are often used for defining the shape of objects and classes. They’re also the recommended choice when working with public APIs or large codebases where extension and consistency matter.

Types are more flexible. You can use them to define unions, primitives, tuples, and even combine multiple types together. If you need to describe something that isn’t just a simple object, `type` might be a better fit.

### Summary Table

- Use `interface` when:
  - You're working with objects or class structures
  - You want to extend or merge definitions
  - You're building reusable or extendable components

- Use `type` when:
  - You’re dealing with union types or more complex data shapes
  - You want to define aliases for primitives or arrays
  - You need more flexibility in combining multiple types







## What is the use of the `keyof` keyword in TypeScript?

The `keyof` keyword in TypeScript is used to get the **keys of a type as a union of string literal types**. In simple words, it lets you create a new type that consists of all the property names (keys) from an existing type.

This is really helpful when you want to work with property names in a type-safe way — for example, when accessing object keys dynamically.

### Why use `keyof`?

When working with large objects or reusable utilities, `keyof` helps you avoid hardcoding property names. It ensures that you're only using valid keys from the type you're working with, which reduces bugs and increases type safety.

### Example (Explained in Words)

Imagine you have a `User` type that has properties like `name`, `email`, and `age`. By using `keyof User`, you can get a new type that is just the **set of these property names** — so something like `"name" | "email" | "age"`.

You can then use that new type to create functions that only accept valid keys from the `User` type.

This is powerful because if you ever change the original `User` type (add or remove a property), everything that uses `keyof User` automatically stays in sync.

### Benefits of `keyof`

- Ensures type safety when accessing object properties dynamically
- Helps build generic utility functions
- Reduces duplication and makes refactoring easier
- Great for advanced use cases like form builders, mappers, or serializers

### Final Thought

If you're learning TypeScript, `keyof` might seem tricky at first — but once you get it, it opens up a lot of powerful and flexible patterns for working with types. Keep practicing and you'll start to see how useful it really is!

