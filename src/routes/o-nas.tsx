import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/o-nas")({
  beforeLoad: () => {
    throw redirect({ to: "/" });
  },
});
