# Daily Coding Challenges — Summary

This repository contains small JavaScript practice problems. The README below summarizes what each file does, what was learned while implementing it, and the time/space complexity for the primary algorithm(s).

## Files

- `decimalToBinary.js` — Convert a (non-negative) decimal integer to its binary representation.
- `maskEmail.js` — Mask an email address to hide part of the local (username) portion.
- `planetClassification.js` — Classify a planet (or similar object) based on provided properties/criteria.

---

## `decimalToBinary.js`

What I learned
- How to convert an integer to binary using repeated division by 2 / bit operations.
- Edge cases such as 0 and handling the sign (assumed non-negative for this implementation).

Time complexity
- O(b) where b is the number of bits in the result (b = floor(log2(n)) + 1). In other words, proportional to the length of the resulting binary string.

Space complexity
- O(b) for the output string (and any small constant-sized temporary values).

---

## `maskEmail.js`

What I learned
- String manipulation techniques and lightweight validation for email-like strings.
- Using slicing and/or regular expressions to preserve a few characters while masking the rest.

Time complexity
- O(m) where m is the length of the email string (single pass operations such as split, slice or regex match).

Space complexity
- O(m) for the returned masked string (plus O(1) for a few temporaries).

Notes
- The implementation assumes a reasonably-formed email (contains `@`) and focuses on masking the local part; further validation can be added if needed.

---

## `planetClassification.js`

What I learned
- Designing clear conditional logic and guard clauses to classify inputs according to a set of rules.
- Organizing rule checks for readability and early returns when a matching category is found.

Time complexity
- O(r) where r is the number of classification rules checked. In most small classification implementations r is constant, so the routine behaves in O(1) time.

Space complexity
- O(1) (constant extra space) aside from the output string/label.

---

## How to run

Run a file with Node.js. Example:

```bash
# Run the decimal to binary converter
node decimalToBinary.js

# Run the email masking example
node maskEmail.js

# Run the planet classification example
node planetClassification.js
```

## Assumptions and next steps
- Assumed inputs are simple and well-formed (non-negative integers for decimal conversion, strings containing `@` for emails).
- Next improvements: add input validation and small unit tests for edge cases (zero, empty/invalid emails, unexpected planet properties).

## Summary

Added a short summary of each challenge implementation, the core lessons, and the time/space complexity analysis. If you want, I can also add example inputs/expected outputs and small unit tests for each file.
