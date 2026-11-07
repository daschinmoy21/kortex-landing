// The repo's GitHub star count, read once per build (or once per dev server, not once per page view:
// unauthenticated requests are limited to 60 an hour). Set GITHUB_TOKEN to lift that limit in CI.
// Returns null when GitHub can't be reached, and the header falls back to "Star on GitHub".
import { links } from "./release";

let cached: Promise<number | null> | undefined;

async function fetchStars(): Promise<number | null> {
  try {
    const repo = new URL(links.repo).pathname.replace(/^\//, "");
    const token = import.meta.env.GITHUB_TOKEN ?? process.env.GITHUB_TOKEN;
    const response = await fetch(`https://api.github.com/repos/${repo}`, {
      headers: {
        accept: "application/vnd.github+json",
        "user-agent": "logia-site-build",
        ...(token ? { authorization: `Bearer ${token}` } : {}),
      },
      signal: AbortSignal.timeout(4000),
    });
    if (!response.ok) return null;
    const { stargazers_count } = await response.json();
    return typeof stargazers_count === "number" ? stargazers_count : null;
  } catch {
    return null;
  }
}

export function starCount(): Promise<number | null> {
  // A failure is not kept, so the next render tries again once GitHub answers.
  cached ??= fetchStars().then((count) => {
    if (count === null) cached = undefined;
    return count;
  });
  return cached;
}
