import "server-only";

export function editorEnabled() {
  return (
    process.env.NODE_ENV === "development" ||
    Boolean(
      process.env.NEXT_PUBLIC_KEYSTATIC_GITHUB_APP_SLUG &&
      process.env.KEYSTATIC_GITHUB_CLIENT_ID &&
      process.env.KEYSTATIC_GITHUB_CLIENT_SECRET &&
      process.env.KEYSTATIC_SECRET,
    )
  );
}
