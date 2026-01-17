+++
title = "Home"
# This prevents the homepage itself from appearing in a list of pages
sort_by = "none" 
+++

# Hello.

I am a Computer Science PhD student and Researcher focusing on **Formal Methods**, **Programming Languages**, and **Cybersecurity**.

My work primarily bridges the gap between rigorous theory and practical systems security. I am currently investigating [**Copland**](https://ku-sldg.github.io/copland/), a DSL for remote attestation, formal methods, and language design.

### Current Status
* **Research:** 
  + Copland Infrastructure and Applications (my PhD research)
    + Copland Type System: Statically verify that Copland protocols maintain protocol evidence usage (sub-structural type system) and that they are appraisable (provenance preserving types)
    + System Informed Analysis: Defined a custom *measurable system model* to reason about real-world systems with attestation incorporated. Statically analyze Copland protocols with respect to this model to ensure desired security properties (e.g., executability of the protocol, sufficiency of the protocol to measure target properties).
    + Protocol Synthesis: Automatically generate Copland protocols from *measurable systems* that ensure the type checking and system analysis properties above.
  + Attestation Protocols
    + Attestation for Robust *Verified* Workflows
    + The **CARE Pipeline** (Copland-Assisted Repair Engine) and the **HEAL Framework** (Heuristic Evaluation and Attestation Loop).
      * Integrate attestation into automated software repair pipelines to ensure the integrity of the repair process and the resulting artifacts.
* **Building:** 
  + Personal Projects: 
    - [Markdown Monolith](./markdown_monolith/):
      A tool that converts a index/table of contents Markdown files into a single monolithic Markdown file while preserving the original structure. Built in **OCaml**.
    - [Logical Foundations Grader](https://github.com/Durbatuluk1701/logical-foundations-grader):
      A tool that helps with automatic grading of assignments for the [**Logical Foundations**](https://softwarefoundations.cis.upenn.edu/lf-current/index.html) course from the Software Foundations series. Built in **Python**.
    - [Python CPS Tools](https://github.com/Durbatuluk1701/python-cps-tools):
      A collection of tools for writing and analyzing Cyber-Physical Systems (CPS) written in **Python**. In particular it includes Graphs, Trees, Finite Automata, Regex, Petri Nets, and Markov Chains implementations and utilities.
  + Open Source (various projects in open source I've contributed to):
    - [VsRocq](https://github.com/rocq-prover/vsrocq):
      A Visual Studio Code extension for the **Rocq** proof assistant.
    - [Rocq-LSP](https://github.com/ejgallego/rocq-lsp):
      A Language Server Protocol (LSP) implementation for **Rocq**. 
  + Academic Pursuits:
    - [Bake](https://github.com/Durbatuluk1701/bake):
      A build system for [**CakeML**](https://github.com/CakeML/cakeml). Can be utilized with **EasyBakeCakeML** to build verified CakeML projects with ease. Built in **OCaml**.
    - [EasyBakeCakeML](https://github.com/Durbatuluk1701/EasyBakeCakeML):
      A Rocq library/plugin for generating verified programs that can be extracted to **CakeML**. It provides a thin wrapper around the CakeML standard library and then an extraction (notably unverified in EasyBakeCakeML, although a verified semantic extraction by my collaborator TJ Barclay was developed as part of his PhD work) to CakeML code (annotated with *Bake* annotations), to compile the extracted CakeML code. Built in **Rocq** and **OCaml**.
    - [Base64 Encoding Decoding Library](https://github.com/Durbatuluk1701/coq-base64):
      A formally verified Base64 encoding and decoding library in **Rocq**. It provides correctness guaranteees allowing arbitrary strings to be encoded into a custom defined dependent type for the Base64 encoded string and decoded back to the original string without loss of information.
    - [Copland Formal Specification](https://github.com/ku-sldg/copland-spec):
      A formal specification of the Copland DSL in **Rocq**, including its syntax, operational semantics, and type system. This repository serves as the foundation for verifying properties of Copland protocols and ensuring their correctness.
    - [Copland Virtual Machine](https://github.com/ku-sldg/cvm):
      An implementation of a verified Copland Virtual Machine in **Rocq**. The CVM executes Copland protocols while maintaining formal guarantees about their behavior and security properties.
  **Rocq**, **OCaml**, and **Verus**
* **Teaching:** 
  + Fall 2025 - Teaching Assistant for [**EECS 755: Software Modeling and Analysis**](https://perry.alexander.name/eecs755/)
    * Lectured on **Verified Sorting Algorithms**, **Ltac & Hint Database Automation**, and **Dependent Types** in **Rocq**

### Contact
* [GitHub](https://github.com/Durbatuluk1701)
* Email: `30wthomas@ku.edu`
<!-- * [CV (PDF)](/cv.pdf) -->