# Blog Builder Project

This project is a comprehensive walkthrough for building a blog using modern web technologies. The frontend is constructed with HTML, styled using TailwindCSS and DaisyUI, and enhanced with JavaScript for interactivity. The backend is powered by Supabase, providing a robust and scalable infrastructure for data management.

## Project Overview

- Frontend: HTML, TailwindCSS, DaisyUI, JavaScript
- Backend: Supabase
- Purpose: Create a fully functional blog with a sleek, responsive design

```mermaid
graph TD
    User((User))
    
    subgraph Frontend
        HTML[HTML]
        TailwindCSS[TailwindCSS]
        DaisyUI[DaisyUI]
        JavaScript[JavaScript]
    end
    
    subgraph Backend
        Supabase[(Supabase)]
    end
    
    User -->|Interacts with| HTML
    HTML -->|Styled by| TailwindCSS
    TailwindCSS -->|Enhanced by| DaisyUI
    HTML -->|Dynamic functionality| JavaScript
    JavaScript <-->|API Requests| Supabase
    
    classDef frontend fill:#f9f,stroke:#333,stroke-width:2px;
    classDef backend fill:#bbf,stroke:#333,stroke-width:2px;
    class HTML,TailwindCSS,DaisyUI,JavaScript frontend;
    class Supabase backend;
```

### Features
- [x] All readers to see all posts
- [x] All users to add a new post - (TODO v1)
- [ ] All users to delete a post
    - [x] When hits "delete" button from each post (frontend)
    - [x] remove the post from supabase (backend)
    - [x] **Minimum Viable Solution**, MVS (i.e.: the simplest "correct" thing that solves the problem)
    - [ ] Iterate on our MVS, and make it work for real - TODO (v2)
           - [x] Iterate on our MVS, and make it work for real - TODO (v2)
    - [x] refresh the page (frontend)
    - [ ] Create the Data Model for my Blog app - TODO (v3), _before working on this, you should have completed: https://docs.ulem.org/doc/building-a-full-stack-blog-with-javascript-and-supabase-implementing-post-deletion-R0e7GiW7TS_
        - [ ] Create a draft of the data model (with Ai-assistance) 
        - [ ] Create the respective in Supabase (be sure the tables in lowercase and the columns are snake_cased)
        - [ ]  Generate and populate your tables with your generated mock data
        - [ ] Test and share your API (with the public link on slack)
I'm building a blog the backend is powered by Supabase using PostgreSQL
your task is to design my data model, draw it in mermaid
---
I'm building a travel app powered by Supabase using PostgreSQL
The features:
- guest can add their favorite locations
- guest see the future weather at their spots
- guest can follow friends on the app
Your task is to design my data model, draw it in mermaid