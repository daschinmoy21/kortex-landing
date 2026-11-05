import { release } from "./release";

// Every answer restates something the site or the app's README already says. Don't add claims here.
const questions = [
  ["Is Logia free?", "Yes. Logia is free and open source, under AGPL 3.0."],
  ["Do I need an account?", "No. There's no account and no cloud of ours. Your notes stay on your machine."],
  ["Where are my notes stored?", "In ~/Documents/Logia, as JSON files. Deleted notes wait 14 days in the trash."],
  ["How do I sync between machines?", "With Git, to a private remote you choose, on your own SSH keys."],
  [
    "Which agents can I use?",
    "Claude Code, Codex, OpenCode, Pi and Grok Build. You use a CLI you already have, on the login you already have, and Logia doesn't touch your credentials.",
  ],
  [
    "Can an agent overwrite what I'm typing?",
    "A full rewrite must quote the note's revision. If the note changed since the agent read it, the write is rejected.",
  ],
  [
    "Can I use local models?",
    "Yes, through Ollama and LM Studio. Logia also works with Gemini, OpenAI, Anthropic, OpenRouter and more, and API keys go in your OS keychain.",
  ],
  ["Do I have to use Vim?", "No. Vim mode is optional, and the core shortcuts work without it."],
  ["Which platforms does it run on?", "Linux and Windows on x64, and macOS on Apple Silicon. The macOS build is unsigned, so it takes a few extra steps to install."],
  ["Can I bring my Markdown notes?", "Copy your .md files in. Attachments and folder layouts don't come along yet."],
] as const;

export const faq: ReadonlyArray<readonly [string, string]> = release.current
  ? questions
  : [
      ...questions,
      [
        "Do the installers include the agent panel?",
        `Not yet. The v${release.version} installers are an older build, with the previous interface and no Vim mode or agent panel. To get them now, build from main with Nix.`,
      ],
    ];
