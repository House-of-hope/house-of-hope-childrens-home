# Contentful Setup Examples - Step by Step

This guide shows exactly how to set up each content model in Contentful with real examples.

---

## 1️⃣ PROGRAM Model

### Step 1: Create the Content Model
In Contentful dashboard:
1. Go to **Content Model** tab
2. Click **Create content model**
3. Name it: `Program` (API ID: `program`)
4. Click **Create and configure**

### Step 2: Add Fields
Click **Add field** and add these fields in order:

| Field Name | Type | Settings |
|---|---|---|
| `id` | Symbol (Short text) | ✅ Required, ✅ Unique |
| `title` | Symbol (Short text) | ✅ Required |
| `description` | Text (Long text) | ✅ Required |
| `image` | Media (Asset) | ⭕ Optional |

### Step 3: Example Program Entry
Click **Content** → **Create entry** → **Program**

Fill in:
```
id: education
title: Educational Support
description: Providing scholarships, school supplies, and learning assistance to help orphans and vulnerable children access and excel in education.
image: [Upload an image like education-program.jpg]
```

**Result:** Your first program is live! 🎉

---

## 2️⃣ ACHIEVEMENT Model

### Step 1: Create the Content Model
1. Go to **Content Model** tab
2. Click **Create content model**
3. Name it: `Achievement` (API ID: `achievement`)
4. Click **Create and configure**

### Step 2: Add Fields

| Field Name | Type | Settings |
|---|---|---|
| `id` | Symbol (Short text) | ✅ Required, ✅ Unique |
| `title` | Symbol (Short text) | ✅ Required |
| `description` | Text (Long text) | ✅ Required |
| `icon` | Symbol (Short text) | ✅ Required |

**Note:** The `icon` field stores the icon name (like "heart", "award", "school", "users", "handshake") that matches lucide-react icons.

### Step 3: Example Achievement Entry
Click **Content** → **Create entry** → **Achievement**

Fill in:
```
id: journey
title: A Journey Rooted in Compassion
description: House of Hope began in 2007 after a single encounter between our founder, Miss Susan William, and a vulnerable street child. That moment sparked a mission that continues to transform lives today.
icon: heart
```

**Result:** Achievement entry created! 🏆

---

## 3️⃣ GALLERY IMAGE Model

### Step 1: Create the Content Model
1. Go to **Content Model** tab
2. Click **Create content model**
3. Name it: `Gallery Image` (API ID: `galleryImage`)
4. Click **Create and configure**

### Step 2: Add Fields

| Field Name | Type | Settings |
|---|---|---|
| `title` | Symbol (Short text) | ✅ Required |
| `image` | Media (Asset) | ✅ Required |
| `description` | Text (Long text) | ⭕ Optional |

### Step 3: Example Gallery Image Entry
Click **Content** → **Create entry** → **Gallery Image**

Fill in:
```
title: Children Playing at House of Hope
image: [Upload: gallery-1.jpg or children-playing.jpg]
description: Happy moments at our facility showing children enjoying recreational activities together
```

**Quick Tip:** Upload 5-10 images to populate your gallery. Each image becomes one entry.

**Result:** Gallery images ready for display! 📸

---

## 4️⃣ CHILD Model

### Step 1: Create the Content Model
1. Go to **Content Model** tab
2. Click **Create content model**
3. Name it: `Child` (API ID: `child`)
4. Click **Create and configure**

### Step 2: Add Fields

| Field Name | Type | Settings |
|---|---|---|
| `id` | Symbol (Short text) | ✅ Required, ✅ Unique |
| `name` | Symbol (Short text) | ✅ Required |
| `age` | Integer (Number) | ✅ Required |
| `bio` | Text (Long text) | ✅ Required |
| `image` | Media (Asset) | ✅ Required |
| `story` | Text (Long text) | ⭕ Optional |

### Step 3: Example Child Entry
Click **Content** → **Create entry** → **Child**

Fill in:
```
id: child-001
name: Grace Mwangi
age: 12
bio: Grace is a bright and curious student who loves mathematics and drawing. She dreams of becoming an engineer and helping her community build better schools.
image: [Upload: grace-photo.jpg]
story: Grace came to House of Hope in 2022 after losing her mother. She was withdrawn and struggled in school. Through our mentorship program and counseling, she has blossomed. Today she's our top math student and mentors younger children. Her journey shows the transformative power of love and support.
```

**Pro Tip:** Create entries for multiple children (at least 3-5) so the sponsorship page looks good.

**Result:** Child profile ready for sponsorship! 👧

---

## 5️⃣ BLOG POST Model (Optional)

### Step 1: Create the Content Model
1. Go to **Content Model** tab
2. Click **Create content model**
3. Name it: `Blog Post` (API ID: `blogPost`)
4. Click **Create and configure**

### Step 2: Add Fields

| Field Name | Type | Settings |
|---|---|---|
| `slug` | Symbol (Short text) | ✅ Required, ✅ Unique |
| `title` | Symbol (Short text) | ✅ Required |
| `excerpt` | Text (Long text) | ✅ Required |
| `content` | Text (Long text) | ✅ Required |
| `image` | Media (Asset) | ✅ Required |
| `publishedAt` | Date & Time | ✅ Required |
| `author` | Symbol (Short text) | ✅ Required |

### Step 3: Example Blog Post Entry
Click **Content** → **Create entry** → **Blog Post**

Fill in:
```
slug: transforming-lives-through-education
title: Transforming Lives Through Education
excerpt: Education is the most powerful tool for change. Read how House of Hope is empowering children through quality education and mentorship.
content: Education is the most powerful tool for change. At House of Hope, we believe every child deserves access to quality education, regardless of their circumstances.

Over the past 18 years, we have supported over 200 children through our educational programs. From kindergarten to university, we provide scholarships, school supplies, tutoring, and mentorship.

Our impact goes beyond academics. We've seen children gain confidence, discover their talents, and dream big. Many of our graduates are now in secondary school, vocational training, and university.

This year, we're committed to supporting 50 more children. Join us in transforming lives through education.
image: [Upload: education-impact.jpg]
publishedAt: 2024-01-15T10:00:00Z
author: House of Hope Team
```

**Result:** Blog post published! 📝

---

## Complete Setup Checklist

After setting up all models, check off:

- [ ] ✅ **Program** model created with 2-5 entries
- [ ] ✅ **Achievement** model created with 3-5 entries
- [ ] ✅ **Gallery Image** model created with 5-10 entries
- [ ] ✅ **Child** model created with 3-5 entries
- [ ] ✅ **Blog Post** model created (optional, 0-3 entries)

---

## Publishing Content

⚠️ **Important:** After filling in all fields:
1. Click **Publish** button (top right)
2. Confirm publication
3. Your content is now **LIVE** and accessible to your Next.js app!

---

## Verification

To verify everything is working:

1. **Get your credentials:**
   - Settings > **API keys** > Content Delivery
   - Copy **Space ID**
   - Copy **Access Token**

2. **Update `.env.local`:**
   ```env
   NEXT_PUBLIC_CONTENTFUL_SPACE_ID=YOUR_SPACE_ID
   NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN=YOUR_ACCESS_TOKEN
   ```

3. **Restart dev server:**
   ```bash
   npm run dev
   ```

4. **Check your pages:**
   - `/kids` - Shows children entries
   - `/#programs` - Shows program entries
   - `/#projects` - Shows achievement entries
   - `/gallery` - Shows gallery image entries

---

## Field Types Reference

| Type | Use For | Example |
|---|---|---|
| **Symbol** | Short text, IDs, names | "education", "Grace Mwangi" |
| **Text** | Long content, descriptions | Full paragraphs and stories |
| **Integer** | Numbers only | Age: 12, Year: 2024 |
| **Date & Time** | Timestamps | 2024-01-15T10:00:00Z |
| **Media/Asset** | Images, files | JPG, PNG, PDF files |

---

## Tips & Best Practices

✅ **Do:**
- Create at least 3-5 entries per model for good testing
- Use clear, descriptive IDs (lowercase, hyphens)
- Always publish entries before checking your site
- Use high-quality images (compressed for web)
- Fill all required fields marked with ⭕

❌ **Don't:**
- Leave required fields empty
- Use special characters in IDs (stick to letters, numbers, hyphens)
- Upload very large images (resize first)
- Forget to publish entries
- Change field names after creating entries (breaks the code)

---

## Example File Structure in Contentful

```
Content/
├── Programs/
│   ├── Educational Support (education)
│   ├── Mentorship (mentorship)
│   ├── Counseling (counseling)
│   └── Technology & Skills Training (tech)
├── Achievements/
│   ├── A Journey Rooted in Compassion (journey)
│   ├── Education That Changes Futures (education-futures)
│   └── Growing Through Partnerships (partnerships)
├── Gallery Images/
│   ├── Children Playing (1)
│   ├── Learning Activities (2)
│   ├── Group Photo (3)
│   └── ... (5-10 total)
├── Children/
│   ├── Grace Mwangi (child-001)
│   ├── David Kipchoge (child-002)
│   ├── Sarah Njeri (child-003)
│   └── ... (3-5 total)
└── Blog Posts/ (optional)
    ├── Transforming Lives Through Education
    └── Our Impact in the Community
```

---

## Next: Final Connection

Once you've set up all models and entries:

1. Get your **Space ID** and **Access Token** from Contentful
2. Update `.env.local` with your credentials
3. Restart dev server
4. Visit your site - **dynamic content is now live!** 🚀

Questions? Check `CONTENTFUL_SETUP.md` for more detailed instructions.

