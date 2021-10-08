---
sidebar_position: 14
---
# What is Hexagonal Architecture?

Hexagonal engineering is a model or example for planning programming applications. The thought behind this is to put intricate details on the edges of your plan. Deeply of your application from outside concerns. On the off chance that you have information sources and yields on the edge, you can trade your regulators without changing the center code. 

A major benefit of hexagonal engineering is that your code is simpler to test. You can exchange fakes for tests, which makes the tests more steady. The hexagonal design was proposed by Alistair Cockburn in 2005. 

## Interfaces as Ports 

Thirteen years after Cockburn's thought, we regularly utilize the expression "interface" without recollecting what the world resembled without one. However, what precisely is an interface? An interface characterizes how one module speaks with another. 

## Connectors: 

Here is a connector layer that encompasses the center of the application. Deeply but rather interface with it. 

There are two kinds of connectors. Inbound ports are utilized by essential connectors to trigger use case execution. For instance, in a versatile application, when a client clicks a button, the comparing connector should summon the information connector to demand the related use case. Optional connectors are called use cases. For instance, the utilization case may utilize an optional connector to get to specific information in a data set. 

## Benefits of the hexagonal design: 

The simplicity of upkeep: Since the fundamental rationale of the application (classes and articles) is segregated from the rest of the world and inexactly coupled, it is simpler to keep up with. It's simpler to add some new provisions to one of the layers without contacting the other. 

Simple to adjust to new changes: Since all levels are autonomous 

We need to add or supplant another data set, we just need to supplant or add the connectors of the information base without changing the area rationale of any application. 

Simple to Test - Testing turns out to be simple. We can compose the experiments for each layer essentially by mirroring the ports with the fake connectors. 

## Conclusion

There are numerous approaches to carry out hexagonal engineering. I've shown you a direct methodology that gives a simple to-utilize,and order-driven.

Programming interface for the hexagon. It lessens the number of interfaces you need for your sending. Furthermore, it prompts an unadulterated area model.
