export default {
  name: "my-correct-rules",
  rules: {
    "no-string-literals": {
      create(ctx) {
        return {
          Literal(node) {
            if (typeof node.value === "string") {
              ctx.report({
                message: "String literals are not allowed",
                node,
              });
            }
          },
        };
      },
    },
  },
} satisfies Deno.lint.Plugin;
