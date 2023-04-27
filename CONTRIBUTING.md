This is a Deno project.

## Install Pre-commit Hooks

```sh
deno task hook install
```

Thus, it will lint and format the code automatically before each commit.

If you do not want to install pre-commit hooks, make sure you manually run the
following commands before each commit:

```sh
deno lint
deno fmt
```
