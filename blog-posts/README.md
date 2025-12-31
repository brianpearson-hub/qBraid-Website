# qBraid Blog CMS System

This directory contains the blog post management system for the qBraid website.

## Directory Structure

```
blog-posts/
├── nsf-grant-2025.html          # Individual blog post HTML files
└── [future-posts].html

Media/
├── blog/                         # Blog featured images
│   ├── nsf-grant-header.jpg
│   └── README.md
└── authors/                      # Author profile images
    ├── ryan-hill.jpg
    └── README.md

blog-data.json                    # Central metadata for all blog posts
blog.html                         # Main blog listing page
```

## How It Works

### 1. Blog Data (blog-data.json)
Central JSON file containing metadata for all blog posts:
- Post ID, title, slug
- Author information
- Publication date
- Category, read time
- Excerpt and featured image
- Link to full post HTML

### 2. Individual Blog Posts (blog-posts/*.html)
Each blog post is a standalone HTML file with:
- Full navigation and footer
- SEO meta tags (Open Graph, Twitter Card)
- Article content with proper formatting
- Author bio section
- Social sharing buttons
- Back to blog link

### 3. Blog Listing Page (blog.html)
Main blog page that:
- Displays all blog posts as cards
- Filters by category
- Links to individual post pages

## Adding a New Blog Post

### Step 1: Add to blog-data.json
```json
{
  "id": "unique-post-id",
  "title": "Post Title",
  "slug": "post-title-slug",
  "date": "YYYY-MM-DD",
  "author": {
    "name": "Author Name",
    "title": "Author Title",
    "image": "Media/authors/author-name.jpg",
    "bio": "Short author bio"
  },
  "category": "Press Releases|Product|Collaborations|Hackathons|Research",
  "readTime": "5",
  "excerpt": "Short excerpt for cards",
  "featuredImage": "Media/blog/post-image.jpg",
  "content": "blog-posts/post-id.html"
}
```

### Step 2: Create HTML file
Copy `blog-posts/nsf-grant-2025.html` as template and update:
- Meta tags (title, description, Open Graph)
- Article header (category, title, date, read time)
- Featured image
- Article content
- Author information
- Share buttons URLs

### Step 3: Add images
- Featured image → `Media/blog/`
- Author image → `Media/authors/`

### Step 4: Update blog.html
Add a new card linking to the post (or implement dynamic loading)

## Content Guidelines

### Article Structure
- **Title**: Clear, descriptive, under 60 characters
- **Excerpt**: 1-2 sentences, under 160 characters
- **Content**: Well-structured with headings (h2, h3)
- **Images**: 1200x630px for featured, 400x400px for authors

### SEO Best Practices
- Unique meta descriptions
- Open Graph tags for social sharing
- Alt text for all images
- Semantic HTML structure
- Internal linking

### Categories
- **Press Releases**: Company announcements, partnerships, awards
- **Product**: Feature releases, tutorials, updates
- **Collaborations**: Partner spotlights, joint initiatives
- **Hackathons**: Event recaps, winner announcements
- **Research**: Technical papers, academic collaborations

## Future Enhancements

### Phase 2 Features
- [ ] Dynamic blog post loading from blog-data.json
- [ ] Search functionality
- [ ] Pagination
- [ ] Related posts algorithm

### Phase 3 Features
- [ ] RSS feed generation
- [ ] Author profile pages
- [ ] Tags/keywords system
- [ ] Reading progress indicator
- [ ] Email newsletter signup
- [ ] Comments system integration

## Migrating from Old Site

To migrate a blog post from qbraid.com:
1. Extract content, metadata, and images
2. Add entry to blog-data.json
3. Create HTML file using template
4. Download and optimize images
5. Test all links and formatting
6. Update blog.html listing

## Current Status

✅ **Phase 1 Complete:**
- Infrastructure created
- Blog data JSON structure
- Individual post template
- First post migrated (NSF Grant)
- Styling and responsive design
- SEO and social meta tags

📝 **Next Steps:**
- Add featured and author images
- Migrate remaining blog posts
- Implement dynamic loading
- Add search/filter features

