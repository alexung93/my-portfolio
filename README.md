[![Python 3.12](https://img.shields.io/badge/python-3.12-blue?style=flat-square&logo=python&logoColor=white)](https://github.com/alexung/my-portfolio)
[![Django 6.1](https://img.shields.io/badge/django-6.1-green?style=flat-square&logo=django&logoColor=white)](https://github.com/alexung/my-portfolio)

Personal portfolio site built with Django and Tailwind CSS.

## Tech Stack

- **Backend:** Django 6.1 — Python 3.12
- **Styling:** Tailwind CSS v4.3.3 (standalone CLI, no Node.js required)
- **Static files:** WhiteNoise
- **Deployment:** Vercel

## Features

- **Data-driven** — all content lives in [`core/data.py`](core/data.py), no database required
- **Security hardened** — CSP headers, HSTS, secure cookies, referrer policy
- **Zero Node.js** — Tailwind CSS compiled via standalone binary
- **Scroll-reveal animations** — [`static/js/reveal.js`](static/js/reveal.js)
- **Custom SVG icon library** — [`core/templatetags/icons.py`](core/templatetags/icons.py)

## Quick Start

```bash
git clone https://github.com/alexung/my-portfolio.git
cd my-portfolio
cp .env.example .env   # fill in SECRET_KEY
uv sync
python manage.py runserver
```

Visit `http://127.0.0.1:8000/`

## Production Build

```bash
python build.py
```

This compiles Tailwind CSS from `static/src/input.css` to `static/css/app.css` and runs `collectstatic`.

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `SECRET_KEY` | Django secret key — generate with `python -c "import secrets; print(secrets.token_urlsafe(50))"` | — |
| `DJANGO_DEBUG` | Enable debug mode | `false` |
| `ALLOWED_HOSTS` | Comma-separated allowed hosts | `127.0.0.1,localhost,.vercel.app` |

## Deployment

Configured for Vercel. Key settings:

- **Entry point:** `portfolio.wsgi:application`
- **Build command:** `python build.py` (defined in `pyproject.toml`)
- **Config:** [`vercel.json`](vercel.json)

Set `SECRET_KEY`, `DJANGO_DEBUG=false`, and `ALLOWED_HOSTS` in the Vercel project dashboard.

## Project Structure

```
my-portfolio/
├── build.py                  # Tailwind CSS build + collectstatic
├── manage.py                 # Django management
├── pyproject.toml            # Project metadata + Vercel config
├── vercel.json               # Vercel deployment settings
├── .env.example              # Environment variable template
├── core/                     # Main Django app
│   ├── data.py               # All portfolio content
│   ├── views.py              # Home view
│   ├── urls.py               # URL routing
│   ├── templatetags/
│   │   └── icons.py          # SVG icon library
│   └── templates/
│       └── core/
│           ├── base.html
│           └── home.html
├── portfolio/                # Django project settings
│   ├── settings.py           # Security-hardened config
│   ├── urls.py               # Root URL routing
│   ├── wsgi.py
│   └── asgi.py
└── static/
    ├── css/                  # Compiled output (app.css)
    ├── src/                  # Tailwind input (input.css)
    ├── js/                   # reveal.js (scroll animations)
    └── images/               # profile.jpeg
```

## Customizing Content

All portfolio content is in [`core/data.py`](core/data.py). Edit these variables to update your site:

| Variable | What it controls |
|----------|-----------------|
| `name`, `title`, `tagline`, `location`, `email` | Profile header |
| `about_paragraphs` | About section text |
| `socials` | Social links (LinkedIn, GitHub, etc.) |
| `skills` | Skills grouped by category |
| `experience` | Work history with roles, companies, and bullet points |
| `education` | Degrees and schools |
| `projects` | Portfolio projects — set `"featured": true` to highlight |
