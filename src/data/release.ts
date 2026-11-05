// The one place to change when a new release ships.
//
// `current` is false while the published installers are older than the app this site describes.
// Flip it to true on release and the "older build" notices on /downloads disappear.
export const release = {
  version: "0.11.0",
  date: "November 2026",
  current: true,
};

const base = `https://github.com/daschinmoy21/Logia/releases/download/v${release.version}`;

export const installers = {
  dmg: `${base}/logia_${release.version}_aarch64.dmg`,
  dmgName: `logia_${release.version}_aarch64.dmg`,
  windows: [
    { label: "Setup (.exe)", size: "27 MB", href: `${base}/logia_${release.version}_x64-setup.exe` },
    { label: "Installer (.msi)", size: "36 MB", href: `${base}/logia_${release.version}_x64_en-US.msi` },
  ],
  linux: [
    { label: "AppImage", size: "91 MB", href: `${base}/logia_${release.version}_amd64.AppImage` },
    { label: "Debian (.deb)", size: "9 MB", href: `${base}/logia_${release.version}_amd64.deb` },
    { label: "Fedora (.rpm)", size: "9 MB", href: `${base}/logia-${release.version}-1.x86_64.rpm` },
  ],
};

export const links = {
  repo: "https://github.com/daschinmoy21/Logia",
  releases: "https://github.com/daschinmoy21/Logia/releases",
  license: "https://github.com/daschinmoy21/Logia/blob/main/LICENSE",
};

// Home page: pinned to the published release. Downloads page: builds whatever is on main.
export const nixReleaseCommand = `nix run github:daschinmoy21/Logia/v${release.version}`;
export const nixMainCommand = "nix run github:daschinmoy21/Logia";
