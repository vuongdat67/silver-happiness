# MkDocs Markdown Snippets - Danh Sách Keyword

<!-- more -->


## 📋 Metadata & Frontmatter

| Keyword | Chức năng |
| --- | --- |
| `meta` | Tạo metadata block cho MkDocs Material (title, description, icon, status, etc.) |
| `blog` | Tạo frontmatter cho blog post (date, categories, tags, authors, draft) |
| `tags:` | Thêm tags trong frontmatter |

## 🎨 Admonitions (Callouts)

| Keyword | Chức năng |
| --- | --- |
| `note` | Admonition dạng Note |
| `abstract` | Admonition dạng Abstract/Summary |
| `info` | Admonition dạng Info |
| `tip` | Admonition dạng Tip/Hint |
| `success` | Admonition dạng Success/Check |
| `question` | Admonition dạng Question/Help |
| `warning` | Admonition dạng Warning/Caution |
| `failure` | Admonition dạng Failure/Fail |
| `danger` | Admonition dạng Danger/Error |
| `bug` | Admonition dạng Bug |
| `example` | Admonition dạng Example |
| `quote` | Admonition dạng Quote/Cite |
| `???` | Admonition có thể thu gọn (collapsed) |
| `???+` | Admonition đã mở sẵn (expanded) |
| `inline` | Admonition inline bên trái |
| `inline-end` | Admonition inline bên phải |
| `callout` | Callout theo style Obsidian |

## 💻 Code Blocks

| Keyword | Chức năng |
| --- | --- |
| ` ``` ` | Code block cơ bản với syntax highlighting |
| `codet` | Code block có title |
| `codel` | Code block có line numbers |
| `codeh` | Code block có highlight lines |
| `codef` | Code block đầy đủ (title + linenums + highlight) |
| `codea` | Code block có annotations (chú thích) |

## 📑 Content Organization

| Keyword | Chức năng |
| --- | --- |
| `===` | Content tabs (tabbed content) |
| `tabscode` | Content tabs với code blocks |
| `grid` | Grid cards layout với icons |
| `gridg` | Generic grid layout (2 cột) |
| `2col` | Two column layout với headings |

## 📊 Diagrams (Mermaid)

| Keyword | Chức năng |
| --- | --- |
| `mermaid` | Flowchart diagram |
| `sequence` | Sequence diagram |
| `class` | Class diagram |
| `state` | State diagram |
| `erdiagram` | Entity-Relationship diagram |
| `gantt` | Gantt chart |
| `pie` | Pie chart |

## 📋 Tables

| Keyword | Chức năng |
| --- | --- |
| `table` | Table cơ bản |
| `tablea` | Table với column alignment (left/center/right) |
| `tables` | Sortable table (có thể sắp xếp) |


**center table**

<div class="center-table" markdown>

|  Method  |   Description   |
|:--------:|:---------------:|
|  `GET`   | Fetch resource  |
|  `PUT`   | Update resource |
| `DELETE` | Delete resource |

</div>

## 🔘 Buttons & Links

| Keyword | Chức năng |
| --- | --- |
| `btn` | Button link cơ bản |
| `btnp` | Primary button (nổi bật hơn) |
| `btni` | Button có icon |
| `linkt` | Link có tooltip |
| `linke` | External link (mở tab mới) |
| `[[` | Wikilink (style Obsidian) |
| `[[|` | Wikilink với custom text/alias |

## 🖼️ Images

| Keyword | Chức năng |
| --- | --- |
| `img` | Image cơ bản |
| `imgc` | Image với caption (chú thích) |
| `imga` | Image có alignment (left/right) |
| `imgl` | Image với lazy loading |
| `imgw` | Image với custom width |

## 📝 Text Formatting

| Keyword | Chức năng |
| --- | --- |
| `==` | Highlight text (đánh dấu) |
| `++` | Keyboard keys |
| `~` | Subscript (chỉ số dưới) |
| `^` | Superscript (chỉ số trên) |
| `||` | Spoiler/content warning (ẩn nội dung) |
| `{++` | Critic addition (đánh dấu thêm) |
| `{--` | Critic deletion (đánh dấu xóa) |
| `{~~` | Critic substitution (đánh dấu thay thế) |
| `{>>` | Critic comment (comment) |
| `{==` | Critic highlight + comment |

## 🔢 Lists & Definitions

| Keyword | Chức năng |
| --- | --- |
| `task` | Task list (checkbox list) |
| `def` | Definition list |
| `fn` | Footnote (chú thích cuối trang) |

## 🔣 Icons & Emojis

| Keyword | Chức năng |
| --- | --- |
| `:` | Emoji shortcode |
| `:material` | Material Design icons |
| `:simple` | Simple Icons |
| `:fa` | FontAwesome icons |
| `:octicons` | GitHub Octicons |

## 🧮 Math

| Keyword | Chức năng |
| --- | --- |
| `$$` | Math block (công thức toán học khối) |
| `$` | Inline math (công thức inline) |

## 🎯 Special Elements

| Keyword | Chức năng |
| --- | --- |
| `progress` | Progress bar |
| `abbr` | Abbreviation (viết tắt) |
| `anno` | Text annotation |
| `details` | HTML details/summary element |
| `center` | Center aligned text |
| `youtube` | Embed YouTube video |

---

## 💡 Mẹo Sử Dụng

### Tự động hoàn thiện
- Gõ keyword và nhấn `Tab` hoặc `Enter` để trigger snippet
- Dùng `Tab` để di chuyển giữa các placeholder ($1, $2, ...)
- Dùng `Shift+Tab` để quay lại placeholder trước

### Biến tự động
- `${CURRENT_YEAR}` - Năm hiện tại
- `${CURRENT_MONTH}` - Tháng hiện tại (2 chữ số)
- `${CURRENT_DATE}` - Ngày hiện tại (2 chữ số)

### Dropdown choices
- Một số snippet có dropdown để chọn (dùng mũi tên ↑↓)
- Ví dụ: `???` cho phép chọn loại admonition
- `{1|option1,option2|}` - syntax để tạo dropdown

---

**Tổng số snippets: 80+**

### Demo

[Demo](../../demo_mkdocs.md)
