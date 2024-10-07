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
- [ ] All users to add a new post - (TODO v1)
- [ ] All users to delete a post
    - [ ] When hits "delete" button from each post (frontend)
    - [ ] remove the post from supabase (backend)
    - [ ] refresh the page (frontend)