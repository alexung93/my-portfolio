from django.shortcuts import render

from . import data


def home(request):
    context = {
        "profile": data,
        "projects": data.projects,
        "featured_projects": [p for p in data.projects if p["featured"]],
        "skills": data.skills,
        "experience": data.experience,
        "education": data.education,
    }
    return render(request, "core/home.html", context)
