# A small script to fix markdown files created by converting docx files
# Utilities for this:
# https://pandoc.org/
# https://www.tablesgenerator.com/markdown_tables# (enable “Line breaks as <br>”)


filePath = "C:\\Users\\mzako\\Documents\\GitHub\\PersonalWebsite\\_posts\\2021-07-26-vmprotect3.md"
file = open(filePath, "r")

content = file.read().split("\n")

newContent = []

blogName = content[1].split(": ")[1].replace("'", "")

# Prefilter height lines
j = 0
while (j < len(content)):
    line = content[j]
    if line[0:8] == 'height="':
        content.pop(j)
    j += 1

# Fix images
for i in range(0, len(content)):
    line = content[i]
    if i < 6 or i > len(content) - 6:
        newContent.append(line)
        continue
    # Fix image path
    if "![]" in line:
        imagePath = line[line.index("("):line.index(")")]
        imageFileName = imagePath.split("/")[1]
        newImagePath = "/blog/" + blogName + "/" + imageFileName
        newContent.append("![](" + newImagePath + ")")
    # Fix captions
    elif "![]" in content[i - 2]:
        newContent.append('<p class="caption">' + line + '</p>')
    # Fix no horizontal lines
    elif "![]" in content[i - 4]:
        newContent.append("\n")
        newContent.append("***")
        newContent.append(line)
    elif "![]" in content[i + 1]:
        newContent.append("***")
        newContent.append("\n")
    # Remove .ul for links
    elif "{.ul}" in line:
        newContent.append(line.replace("{.ul}]", "").replace("[[", "["))
    else:
        newContent.append(line)

# Write changes to file
writeFile = open(filePath + " fixed", "w")
writeFile.write("\n".join(newContent))

# Close both files
file.close()
writeFile.close()



