// The agent CLIs Logia runs in its side panel. Logos are the same files the app ships, in
// src/assets/providers, and the Codex entry uses the OpenAI mark as the app's ProviderIcon does.
import claude from "../assets/providers/claude-color.svg?raw";
import grok from "../assets/providers/grok.svg?raw";
import openai from "../assets/providers/openai.svg?raw";
import opencode from "../assets/providers/opencode.svg?raw";
import pi from "../assets/providers/pi.svg?raw";

export const agents = [
  { name: "Claude Code", logo: claude },
  { name: "Codex", logo: openai },
  { name: "OpenCode", logo: opencode },
  { name: "Pi", logo: pi },
  { name: "Grok Build", logo: grok },
];
