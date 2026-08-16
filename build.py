"""Build script that compiles the Tailwind CSS.

Downloads the Tailwind standalone binary (cached in .tools/) if missing,
then compiles static/src/input.css to static/css/app.css.

Used by the Vercel build command (`[tool.vercel.scripts] build`).
"""

import os
import platform
import shutil
import subprocess
import sys
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parent
TOOLS_DIR = ROOT / ".tools"
TAILWIND_VERSION = "v4.3.3"
BASE_URL = f"https://github.com/tailwindlabs/tailwindcss/releases/download/{TAILWIND_VERSION}"
INPUT_CSS = ROOT / "static" / "src" / "input.css"
OUTPUT_CSS = ROOT / "static" / "css" / "app.css"


def binary_name() -> str:
    system = platform.system().lower()
    machine = platform.machine().lower()

    if system == "darwin":
        arch = "arm64" if machine in ("arm64", "aarch64") else "x64"
        return f"tailwindcss-macos-{arch}"
    if system == "linux":
        arch = "arm64" if machine in ("arm64", "aarch64") else "x64"
        return f"tailwindcss-linux-{arch}"
    if system == "windows":
        return "tailwindcss-windows-x64.exe"
    raise RuntimeError(f"Unsupported platform: {system} {machine}")


def tailwind_binary() -> Path:
    name = binary_name()
    binary = TOOLS_DIR / name

    if binary.exists():
        return binary

    if os.environ.get("TAILWIND_SKIP_DOWNLOAD"):
        raise FileNotFoundError(f"Tailwind binary not found at {binary} and download disabled")

    TOOLS_DIR.mkdir(parents=True, exist_ok=True)
    url = f"{BASE_URL}/{name}"
    print(f"Downloading {url} ...", file=sys.stderr)
    urllib.request.urlretrieve(url, binary)
    binary.chmod(binary.stat().st_mode | 0o111)
    return binary


def main() -> None:
    binary = tailwind_binary()
    OUTPUT_CSS.parent.mkdir(parents=True, exist_ok=True)
    subprocess.run(
        [str(binary), "-i", str(INPUT_CSS), "-o", str(OUTPUT_CSS), "--minify"],
        check=True,
    )
    print(f"Tailwind CSS written to {OUTPUT_CSS}")

    subprocess.run(
        [sys.executable, "manage.py", "collectstatic", "--noinput"],
        check=True,
    )
    print("Static files collected")


if __name__ == "__main__":
    main()
