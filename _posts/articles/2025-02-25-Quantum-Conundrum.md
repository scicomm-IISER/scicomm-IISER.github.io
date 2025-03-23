---
title: "The Quantum Conundrum: Redefining Security in the Quantum Revolution"
excerpt: "As quantum computing advances, traditional cryptographic methods face unprecedented threats, particularly from Shor’s algorithm, which can efficiently break widely used encryption schemes. This article examines the implications of quantum attacks on classical security protocols and explores emerging quantum-resistant cryptographic techniques. Additionally, it highlights the promise of Quantum Key Distribution (QKD) in enabling theoretically unbreakable encryption. By analyzing both the risks and opportunities, this article provides insight into how the digital security landscape must adapt to the quantum era."
hero-image: "quantumConundrum.png"
refs-file: "quantumConundrum"
authors: ["Shibaraj Sahu"]
author-affiliation: ["IISER Kolkata"]
author-bio: "**Suman Halder** a second year PhD student of IISER Kolkata working with Dr. Rumi De. He has some interest in writing essays poems, reading thrillers, photography and in rock music. He is currently working on Cell modelling in mean field limit."
issue: 2
category: article
field: physics
---

## Introduction
In the age of digital communication, encryption is crucial for ensuring the privacy and security of data exchanged over the internet. The advent of quantum computing represents a paradigm shift in computational capabilities, bringing both remarkable opportunities and profound challenges. Among the most affected fields is cryptography, the cornerstone of secure digital communication. This article explores both sides of quantum computing’s impact on cryptography, focusing on the vulnerabilities it introduces to classical encryption schemes and the secure possibilities offered by protocols like Quantum Key Distribution (QKD).

## Shor’s Algorithm and the Threat to Classical Cryptography
At the heart of modern cryptography lie hard mathematical problems, such as integer factorization (used in RSA encryption) and discrete logarithms (used in Elliptic Curve Cryptography, or ECC). These problems are computationally infeasible for classical computers to solve within a reasonable timeframe, providing the security guarantees we rely on for digital communication. 

Enter quantum computing, which disrupts this status quo. In 1994, Peter Shor introduced a quantum algorithm capable of efficiently solving these problems. The subsequent section will outline how this algorithm works in the case of RSA encryption.

RSA encryption, named after its creators, Rivest, Shamir, and Adleman, is one of the most widely used public-key cryptosystems. It relies on the difficulty of factoring large composite numbers that are the product of two large prime numbers. Given below is an overview of how the keys are generated in RSA encryption.

Key Generation in RSA:
1. First, choosing two sufficiently large prime numbers,    and    .
2. Computing                            .
3. Calculating                                                         , the *totient of       .
4. Selecting a public exponent      such that                                        and                                             .
5. Computing the private key      as the modular multiplicative inverse of                                , satisfying .
 
*(The totient of      counts all integers upto      that do not share any prime factors with       )

RSA encryption allows anyone to encrypt a message using the recipient’s public key            . The ciphertext     is computed as                      , where      is the message. Decrypting the ciphertext requires the private key      , which is computationally infeasible to derive without factoring     , ensuring security. For sufficiently large      (e.g., 2048 bits), classical algorithms cannot factorize    within a practical timeframe. To give a rough estimate, one of the best-known classical algorithms for integer factorization, the General Number Field Sieve (GNFS), with a sub-exponential time complexity (faster than polynomial time but slower than exponential) could factor a 795-bit number in about two years using huge computational resources. This gives a rough idea of the arduous task classical decryption has to face.

## How Shor’s Algorithm Breaks RSA?
Shor’s algorithm revolutionizes the factoring problem by providing an efficient quantum solution. It consists of two main steps:

Reduction to Period Finding:
◼ Given                            and a random integer        such that                              , define the function:
                                               

◼The function         is periodic with a period    . Shor’s algorithm exploits this periodicity to factor       .

Quantum Period Finding:
◼ The quantum computer constructs a superposition of states (this will be discussed later) and applies the QuantumFourier Transform (quantum analog of the classical discrete Fourier transform) to determine the period     .

◼ Once    is found, classical post-processing is used to compute the factors of      . Specifically, if     is even, then: 



yield the factors of      .

## Why Shor’s Algorithm is a Game-Changer?
As already mentioned, the best classical algorithms for factoring, such as the General Number Field Sieve, have a sub-exponential time complexity. In contrast, Shor’s algorithm has a polynomial time complexity of                              , making it exponentially faster. This efficiency renders RSA insecure against quantum computers capable of running Shor’s algorithm.

For example, a 2048-bit RSA key, which is currently considered secure, can be broken in polynomial time with Shor’s algorithm once a sufficiently powerful quantum computer is built (one using more than 10 million logical qubits). Though the present day scenario of quantum computing with at most hundreds of noisy qubits do not pose an immediate threat, this imminent vulnerability underscores the urgency of transitioning to quantum-resistant cryptographic systems.

## From Breaking Encryption to Securing It
While quantum computing threatens traditional cryptography, it also provides tools for securing communication. Quantum Key Distribution (QKD) is a prime example, offering provably secure key exchange based on quantum mechanics. Before diving into QKD, let us define key quantum terms that will help us understand QKD.

Quantum State and Superposition
In quantum mechanics, the state of a quantum system is described by a state vector, or ket, denoted by      . For a qubit, the state vector is a linear combination of the basis states         and        , known as the computational basis:
 

where           (Field of Complex numbers), and the normalization condition
 

ensures that the total probability of measuring the qubit in one of its basis states is 1.

The coefficients     and     represent the probability amplitudes of measuring the qubit in the states       and       , respectively. The probabilities of measuring     and     are given by           and         , respectively. This phenomenon of a qubit being in a superposition of both     and      until measured is known as quantum superposition.

Quantum Entanglement
Quantum entanglement refers to the phenomenon where two or more quantum particles become "linked", such that the state of one particle is immediately correlated with the state of the other(s). If two qubits are entangled, measuring one qubit instantly provides information about the state of the other.

Consider an entangled state, commonly known as a Bell state:


If one qubit in the pair is measured to be       , the other will necessarily be in the state      , and similarly for     . This apparent ”non-locality” by no means hints at faster-than-light information transfer, which is still a local phenomenon.

### Quantum Measurement
The act of measurement in quantum mechanics collapses the quantum state into one of its eigenstates, with the probability of each outcome determined by the square of the coefficient of the corresponding eigenstate. If a qubit is in a superposition                                          , a measurement of the qubit will yield       with probability        and        with probability           .

## Quantum Key Distribution (QKD)
Quantum Key Distribution (QKD) involves transmitting information using quantum states, to ensure that any eavesdropping is immediately detectable. QKD utilizes the principles of quantum mechanics to allow two parties to securely exchange cryptographic keys. The most well-known QKD protocol is the BB84 protocol, developed by Charles Bennett and Gilles Brassard in 1984.

Let Alice and Bob be the two individuals who wish to securely share a secret key over an insecure channel with BB84 protocol. The protocol is based on the idea that quantum measurement disturbs quantum states, and this disturbance can be detected. Let us now examine how Alice can securely transmit information to Bob with this protocol.

Step 1
Alice prepares a sequence of n qubits, each randomly chosen from one of the two bases:
◼ Computational Basis: 
◼ Diagonal Basis: 

Each qubit encodes a classical bit                   , with the following mappings:
 

Alice records both the bit value     and the chosen basis for each qubit.

Step 2
Alice sends the sequence of n qubits to Bob over a quantum channel. The qubits are transmitted in the chosen basis, but the basis itself is not revealed to Bob.

Step 3
Bob measures each received qubit in a randomly chosen basis (computational or diagonal). If Bob’s measurement basis matches Alice’s preparation basis, the measurement outcome will correctly match Alice’s encoded bit. Otherwise, the outcome is random due to the incompatibility of the bases.

Step 4
After the transmission and measurement steps, Alice and Bob publicly announce the bases they used for each qubit (but not the actual measurement outcomes or encoded bits). They discard all qubits where their bases do not match. The remaining qubits form the shared raw key.

### Eavesdropping Detection
If an eavesdropper, Eve, intercepts the qubits, she will be forced to measure the qubits in a random basis. Due to the principles of quantum measurement, Eve’s measurements will disturb the quantum states, introducing errors into the transmitted key.

To detect eavesdropping, Alice and Bob compare a randomly selected portion of the raw key. If the error rate exceeds a predefined threshold ϵ, they abort the protocol, assuming that an eavesdropper (Eve) was present.

## Security of QKD
The security of QKD relies on two of these important quantum principles:

No-Cloning Theorem
The no-cloning theorem states that it is impossible to create an identical copy of an unknown quantum state. This ensures that any attempt to intercept the qubits and measure them will necessarily disturb the quantum state, revealing the presence of the eavesdropper.

Heisenberg Uncertainty Principle
The Heisenberg uncertainty principle asserts that certain pairs of physical quantities, such as position and momentum, cannot be precisely measured simultaneously. For QKD, this principle ensures that any attempt by Eve to measure the quantum states of the qubits will cause uncertainty and thus, an error in the measurement, thereby disturbing the qubits and alerting Alice and Bob to the eavesdropping.

## Balancing Risks and Rewards
The rise of quantum computing necessitates a paradigm shift in cryptography. While algorithms like Shor’s threaten traditional cryptographic systems, QKD protocols like BB84 exemplify the potential of quantum mechanics to safeguard communication. The developments in quantum computing challenges us to innovate, ensuring that the promise of this technology is harnessed securely and responsibly.

As we stand on the brink of the second quantum revolution, the interplay between threat and solution in cryptography is a testament to the dual nature of technological progress- both a challenge and an opportunity.



