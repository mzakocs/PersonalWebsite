---
slug: 'vmprotect3-revisited'
title: 'VMProtect 3 Revisited: Virtualization-Based Software Obfuscation Pt. 3'
date: '2099-12-30T08:35:46.730Z'
author: 'Mitch Zakocs'
---

# Table of Contents <!-- omit in toc --> 

- [Introduction](#introduction)
- [Virtual Jump Instructions](#virtual-jump-instructions)
- [Virtualized Compares \& Tests](#virtualized-compares--tests)
- [Virtual Jump \& VMExit Return Addresses](#virtual-jump--vmexit-return-addresses)
- [Calling Other Virtualized Functions](#calling-other-virtualized-functions)
- [More Virtual Instructions Types](#more-virtual-instructions-types)
- [Assembly Constructs to Virtual Instructions](#assembly-constructs-to-virtual-instructions)
- [Decryption Sequences](#decryption-sequences)
- [Conclusion](#conclusion)

# Introduction

# Virtual Jump Instructions

# Virtualized Compares & Tests

# Virtual Jump & VMExit Return Addresses

# Calling Other Virtualized Functions

# More Virtual Instructions Types

# Assembly Constructs to Virtual Instructions

# Decryption Sequences

# Conclusion

In this write-up, we closely analyzed the architecture of the VMProtect virtual machines and virtual instructions. In the future, I'd love to revisit VMProtect by taking a look at the mutation feature and maybe some of the other protections it offers (memory protection, import protection, packing, etc). I also want to take a look at how the software handles more complex programs, conditional statements, and calls to other virtualized functions. Thanks for reading and I hope you learned something about the exceptionally complex virtualization-based obfuscator known as VMProtect.
