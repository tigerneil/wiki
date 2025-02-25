---
sidebar_label: Cargo-program Utility
sidebar_position: 1
---

# `cargo-program` utility

`cargo-program` is the Rust's `cargo` expanding utility aimed to simplify Gear programs development.

GitHub repo: https://github.com/gear-tech/cargo-program

## Install

- *(recommended)* Latest version from the repo:

```
cargo install --git https://github.com/gear-tech/cargo-program.git
```

- Stable version from [crates.io](https://crates.io/crates/cargo-program):

```
cargo install cargo-program
```

## Usage

###  Create a new Gear program

```
cargo program new my-program
```

###  Create a new async Gear program

```
cargo program new my-async-program --async
```

### Build the Gear program

In debug mode:

```
cargo program build
```

In release mode:

```
cargo program build --release
```

Then you find three output WASM files in `target/wasm32-unknown-unknown/release` directory:

- Primary compiled program with `.wasm` extension
- Optimized program with `.opt.wasm` extension
- Metadata providing program with `.meta.wasm` extension
